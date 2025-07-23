import React, { useState } from 'react'; // 引入 useState
import Link from 'next/link';
import Image from 'next/image';
import { FiSearch, FiX } from 'react-icons/fi';
import styles from './ArticleList.module.css';
// Type for a single article
type Article = {
    category: 'ブログ' | 'お知らせ';
    date?: string; // Blog might not have a date shown in the list
    title: string;
    excerpt?: string; // Only for blogs
    image?: string;   // Only for blogs
    href: string;
};
// Dummy data mixing blogs and announcements
const articlesData: Article[] = [
    {
        category: 'ブログ',
        title: '民泊投資で成功するための完全ガイド | メリット・デメリットから始め方、収益化戦略まで徹底解説',
        excerpt: '民泊投資を始めたいけれど、何から手をつければ良いか分からない...。本記事では、そんなお悩みを解決します...',
        image: '/images/pg300/blog-1.jpg', // TODO: Replace
        href: '#'
    },
    {
        category: 'お知らせ',
        date: '2025/06/26',
        title: '株式会社BLUESEA・双日レジデンシャルパートナーズ株式会社が提供する新たな宿泊体験',
        href: '#'
    },
    {
        category: 'ブログ',
        title: '民泊許可完全ガイド | 必要書類・申請方法・条件・費用をわかりやすく解説',
        excerpt: '民泊運営を始めるには、旅館業法に基づく許可が必要です。本記事では許可取得の全体像を分かりやすく解説...',
        image: '/images/pg300/blog-2.jpg', // TODO: Replace
        href: '#'
    },
    {
        category: 'お知らせ',
        date: '2025/05/26',
        title: '株式会社BLUESEA自社ブランド「STARRY STAY」シリーズの展開を開始',
        href: '#'
    },
];

const ArticleList = () => {

    const [activeTab, setActiveTab] = useState('全て');

    // 添加状态来管理搜索查询和搜索框的显示
    const [searchQuery, setSearchQuery] = useState('');
    const [isSearchVisible, setIsSearchVisible] = useState(false);

    const filteredArticles = articlesData
        .filter(article => {
            // 第一步：按标签筛选
            if (activeTab === '全て') return true;
            return article.category === activeTab;
        })
        .filter(article => {
            // 第二步：在标签筛选结果的基础上，按关键词搜索
            if (searchQuery.trim() === '') return true; // 如果搜索词为空，则不筛选

            const lowerCaseQuery = searchQuery.toLowerCase();
            const titleMatch = article.title.toLowerCase().includes(lowerCaseQuery);
            // 如果是博客，也搜索摘要内容
            const excerptMatch = article.excerpt ? article.excerpt.toLowerCase().includes(lowerCaseQuery) : false;

            return titleMatch || excerptMatch;
        });

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* 3. 为筛选标签添加 onClick 事件 */}
                <div className={styles.filterBar}>
                    <div className={styles.tabs}>
                        <button
                            className={`${styles.tab} ${activeTab === '全て' ? styles.active : ''}`}
                            onClick={() => setActiveTab('全て')}
                        >
                            全ての記事
                        </button>
                        <button
                            className={`${styles.tab} ${activeTab === 'お知らせ' ? styles.active : ''}`}
                            onClick={() => setActiveTab('お知らせ')}
                        >
                            お知らせ
                        </button>
                        <button
                            className={`${styles.tab} ${activeTab === 'ブログ' ? styles.active : ''}`}
                            onClick={() => setActiveTab('ブログ')}
                        >
                            ブログ
                        </button>
                    </div>
                    <div className={styles.searchArea}>
                        {/* 根据 isSearchVisible 状态来显示/隐藏输入框 */}
                        <input
                            type="text"
                            placeholder="キーワードで検索..."
                            className={`${styles.searchInput} ${isSearchVisible ? styles.visible : ''}`}
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <button className={styles.searchButton} onClick={() => setIsSearchVisible(!isSearchVisible)}>
                            {/* 如果搜索框可见，显示关闭图标 */}
                            {isSearchVisible ? <FiX /> : <FiSearch />}
                        </button>
                    </div>
                </div>
                {/* Articles List */}
                <div className={styles.listContainer}>
                    {filteredArticles.map((article, index) => (
                        <Link href={article.href} key={index} className={styles.articleLink}>
                            {article.category === 'ブログ' ? (
                                <div className={styles.blogCard}>
                                    <div className={styles.blogContent}>
                                        <span className={`${styles.categoryTag} ${styles.blog}`}>{article.category}</span>
                                        <h3 className={styles.blogTitle}>{article.title}</h3>
                                        <p className={styles.blogExcerpt}>{article.excerpt}</p>
                                    </div>
                                    <div className={styles.blogImageWrapper}>
                                        <Image src={article.image!} alt={article.title} width={200} height={150} />
                                    </div>
                                </div>
                            ) : (
                                <div className={styles.newsItem}>
                                    <span className={`${styles.categoryTag} ${styles.news}`}>{article.category}</span>
                                    <p className={styles.date}>{article.date}</p>
                                    <h3 className={styles.newsTitle}>{article.title}</h3>
                                </div>
                            )}
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default ArticleList;