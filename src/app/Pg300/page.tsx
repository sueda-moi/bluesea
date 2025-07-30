"use client";

import PageHeader from '@/components/common/PageHeader';
import ContactBanner from '@/components/ContactBanner/ContactBanner';
import ArticleList from '@/components/pg300/ArticleList';
import { useLocaleStore } from '@/store/useLocaleStore'; 
import { getAllArticles } from '@/lib/data/articles';

import { useMessage } from '@/lib/useMessage';

export default function Page300() {
    const getMessage = useMessage();
    const { locale } = useLocaleStore();

  const articles = getAllArticles(locale);

  const articlesForList = articles.map(article => ({
    ...article,
    href: `/news/${article.id}`,
  }));

  const articleListData = {
    filterTabs: [
      { key: 'all', label: getMessage('Pg300', 'tab_all') },
      { key: 'news', label: getMessage('Pg300', 'tab_news') },
      { key: 'press_release', label: getMessage('Pg300', 'tab_press_release') },
      { key: 'business', label: getMessage('Pg300', 'tab_business') },
      { key: 'blog', label: getMessage('Pg300', 'tab_blog') },
    ],
    articles: articlesForList,
    searchPlaceholder: getMessage('Pg300', 'search_placeholder'),
  };

  return (
    <>
      <PageHeader
        category={getMessage('Pg300', 'header_category')}
        title={getMessage('Pg300', 'header_title')}
        subtitle={getMessage('Pg300', 'header_subtitle')}
        imageUrl="/images/Pg300/header-image.jpg"
      />
      <main>
        <ArticleList {...articleListData} />
        <ContactBanner />
      </main>
    </>
  );
}