'use client';

import { getArticleById } from '@/lib/data/articles'; 
import { useLocaleStore } from '@/store/useLocaleStore';
import Link from 'next/link';
import styles from './page.module.css';

import { useEffect, useState } from 'react';
import type { Article } from '@/lib/data/articles'; 
import { useMessage } from '@/lib/useMessage';

type Props = {
  params: { articleId: string };
};

export default function ArticleDetailPage({ params }: Props) {
  const getMessage = useMessage();
  const { locale } = useLocaleStore();
  const [article, setArticle] = useState<Article | undefined>(undefined);

  useEffect(() => {
    const foundArticle = getArticleById(params.articleId, locale);
    setArticle(foundArticle);
  }, [params.articleId, locale]);

  if (!article) {
    return <div style={{ textAlign: 'center', padding: '5rem' }}>Loading...</div>;
  }

  return (
    <main className={styles.pageContainer}>
      <article className={styles.article}>
        <header className={styles.header}>
          <div className={styles.meta}>
            <span className={styles.date}>{article.date}</span>
            <span className={styles.category}>{article.category}</span>
          </div>
          <h1 className={styles.title}>{article.title}</h1>
        </header>

        {/* This div will render the HTML content from your data file */}
        <div 
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: article.content }} 
        />

        <div className={styles.backButtonContainer}>
          <Link href="/Pg300" className={styles.backButton}>
            {getMessage('Pg300', 'newsArticlePagelink')}
          </Link>
        </div>
      </article>
    </main>
  );
}