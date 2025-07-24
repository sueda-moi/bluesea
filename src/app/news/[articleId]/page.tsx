import { getArticleById } from '@/lib/data/articles'; 
import Link from 'next/link';
import styles from './page.module.css';

type Props = {
  params: { articleId: string };
};

export default async function ArticleDetailPage({ params }: Props) {
  const article = getArticleById(params.articleId);

  if (!article) {
    return <div>Article not found</div>;
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
            記事一覧へ戻る
          </Link>
        </div>
      </article>
    </main>
  );
}