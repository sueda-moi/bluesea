import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiSearch, FiX } from 'react-icons/fi';
import styles from './ArticleList.module.css';


// 1. Define the Props types that the component should receive
type Tab = {
    key: string;
    label: string;
};

// Type for a single article
type Article = {
    category: 'news' | 'press_release' | 'business' | 'blog';
    date?: string; // Blogs might not have a date shown in the list
    title: string;
    excerpt?: string; // Only for blogs
    image?: string;   // Only for blogs
    href: string;
};

type ArticleListProps = {
    filterTabs: Tab[];
    articles: Article[];
    searchPlaceholder: string;
};


// 2. The component now receives all data and text from props
const ArticleList = ({ filterTabs, articles, searchPlaceholder }: ArticleListProps) => {
    // State related to UI interaction is maintained inside the component
    const [activeTab, setActiveTab] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [isSearchVisible, setIsSearchVisible] = useState(false);

    const filteredArticles = articles
        .filter(article => {
            if (activeTab === 'all') return true;
            return article.category === activeTab;
        })
        .filter(article => {
            if (searchQuery.trim() === '') return true;
            const lowerCaseQuery = searchQuery.toLowerCase();
            const titleMatch = article.title.toLowerCase().includes(lowerCaseQuery);
            const excerptMatch = article.excerpt ? article.excerpt.toLowerCase().includes(lowerCaseQuery) : false;
            return titleMatch || excerptMatch;
        });

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.filterBar}>
                    <div className={styles.tabs}>
                        {/* 3. Use filterTabs passed from props */}
                        {filterTabs.map(tab => (
                            <button
                                key={tab.key}
                                className={`${styles.tab} ${activeTab === tab.key ? styles.active : ''}`}
                                onClick={() => setActiveTab(tab.key)}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                    <div className={styles.searchArea}>
                        {/* Show or hide the input field based on isSearchVisible state */}
                        <input
                            type="text"
                            placeholder={searchPlaceholder} // 4. Use placeholder from props
                            className={`${styles.searchInput} ${isSearchVisible ? styles.visible : ''}`}
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button className={styles.searchButton} onClick={() => setIsSearchVisible(!isSearchVisible)}>
                            {/* Show close icon if the search box is visible */}
                            {isSearchVisible ? <FiX /> : <FiSearch />}
                        </button>
                    </div>
                </div>
                {/* Articles List */}
                <div className={styles.listContainer}>
                    {filteredArticles.map((article, index) => {
                        // To display the category label, find the corresponding label from the key
                        const categoryLabel = filterTabs.find(tab => tab.key === article.category)?.label || article.category;

                        return (
                            <Link href={article.href} key={index} className={styles.articleLink}>
                                {article.category === 'blog' ? (
                                    <div className={styles.blogCard}>
                                        <div className={styles.blogContent}>
                                            {/* Use dynamic class names to apply different colors */}
                                            <span className={`${styles.categoryTag} ${styles[article.category]}`}>{categoryLabel}</span>
                                            <h3 className={styles.blogTitle}>{article.title}</h3>
                                            <p className={styles.blogExcerpt}>{article.excerpt}</p>
                                        </div>
                                        <div className={styles.blogImageWrapper}>
                                            <Image src={article.image!} alt={article.title} width={200} height={150} />
                                        </div>
                                    </div>
                                ) : (
                                    <div className={styles.newsItem}>
                                        <span className={`${styles.categoryTag} ${styles[article.category]}`}>{categoryLabel}</span>
                                        <p className={styles.date}>{article.date}</p>
                                        <h3 className={styles.newsTitle}>{article.title}</h3>
                                    </div>
                                )}
                            </Link>
                        )
                    })}
                </div>
            </div>
        </section>
    );
};
export default ArticleList;