import React, { useState, useEffect } from 'react';
import Section from './Section';
import { BookOpen, ExternalLink, Heart, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const LatestArticles = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                // Fetch top 3 articles from Dev.to API
                const response = await fetch('https://dev.to/api/articles?username=rohithv07&per_page=3');
                if (!response.ok) throw new Error('Failed to fetch articles');
                const data = await response.json();
                setArticles(data);
            } catch (err) {
                console.error("Dev.to fetch error:", err);
                setError(true); // Fallback state
            } finally {
                setLoading(false);
            }
        };

        fetchArticles();
    }, []);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 }
        }
    };

    return (
        <Section id="articles">
            <h2 className="text-sm font-bold tracking-widest uppercase text-secondary mb-12">Latest Writing</h2>

            {loading ? (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[1, 2, 3].map(i => (
                        <div key={i} className="h-64 bg-gray-100 dark:bg-white/5 rounded-lg animate-pulse" />
                    ))}
                </div>
            ) : error || articles.length === 0 ? (
                <div className="text-center py-10">
                    <p className="text-secondary mb-4">Check out my articles on Dev.to!</p>
                    <a
                        href="https://dev.to/rohithv07"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-accent font-semibold hover:underline"
                    >
                        Visit Profile <ExternalLink size={16} />
                    </a>
                </div>
            ) : (
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {articles.map(article => (
                        <motion.article
                            key={article.id}
                            variants={itemVariants}
                            className="group flex flex-col h-full bg-white dark:bg-white/5 border border-gray-100 dark:border-white/10 rounded-lg overflow-hidden hover:border-gray-200 dark:hover:border-white/20 hover:shadow-lg transition-all duration-300"
                        >
                            {/* Cover Image */}
                            {article.cover_image && (
                                <div className="h-48 overflow-hidden">
                                    <img
                                        src={article.cover_image}
                                        alt={article.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            )}

                            <div className="flex-1 p-6 flex flex-col">
                                <h3 className="text-xl font-bold mb-3 text-primary group-hover:text-accent transition-colors line-clamp-2">
                                    <a href={article.url} target="_blank" rel="noreferrer">
                                        {article.title}
                                    </a>
                                </h3>

                                <p className="text-secondary text-sm mb-4 line-clamp-3">
                                    {article.description}
                                </p>

                                <div className="mt-auto flex items-center justify-between text-xs text-secondary font-mono">
                                    <div className="flex items-center gap-4">
                                        <span className="flex items-center gap-1">
                                            <Heart size={14} className="text-red-500" /> {article.public_reactions_count}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <MessageCircle size={14} /> {article.comments_count}
                                        </span>
                                    </div>
                                    <span>{new Date(article.published_at).toLocaleDateString()}</span>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </motion.div>
            )}
        </Section>
    );
};

export default LatestArticles;
