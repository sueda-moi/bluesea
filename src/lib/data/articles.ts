import type { Locale } from '@/store/useLocaleStore';

export type ArticleCategory = 'news' | 'press_release' | 'business' | 'blog';

export type Article = {
  id: string;
  category: ArticleCategory;
  date: string;
  title: string;
  content: string;
  excerpt?: string;
  image?: string;
};

// The object containing article data for all languages
const articles: Record<Locale, Article[]> = {
  // --- JAPANESE DATA ---
  ja: [
    {
      id: 'Pg301',
      category: 'news',
      date: '2024.01.19',
      title: '次世代型グローバル企業を目指す「藍海株式会社」設立のお知らせ',
      content: `
        <p>藍海株式会社は、その社名が示す「海」のように、広大で包容力を持ち、あらゆる国や地域、文化と交わりながら成長する企業であることを目指しています。</p>
        <p>私たちの経営理念は、<strong>「海のように広く、信頼と革新の波を次世代へ」</strong> という言葉に集約されます。</p>
        <ul>
          <li><strong>「海のように広く」</strong><br>広大な海のごとく、視野を世界に広げ、多様な価値観を受け入れ、国際社会の中で調和と共存を図ります。国境を超えた不動産・貿易・投資を通じ、異なる文化圏や経済圏をつなぐ架け橋となることを志向します。</li>
          <li><strong>「信頼の波」</strong><br>信頼こそ事業の基盤であり、顧客・投資家・取引先・従業員・地域社会のすべてのステークホルダーに対し、誠実で透明性の高い経営を行います。長期的なパートナーシップの構築を通じて、安定した事業基盤を築いていきます。</li>
          <li><strong>「革新の波」</strong><br>変化の激しい国際社会において、常に新しい発想と技術を取り入れ、既存の枠組みにとらわれない挑戦を続けます。不動産開発におけるデザインの革新、デジタル化による効率化、国際的資本を取り込む新しい金融スキーム（GK-TKスキームなど）の導入など、実践的なイノベーションを推進します。</li>
        </ul>
        <p>そして、私たちは単なる営利追求にとどまらず、 <strong>「次世代へ持続可能な価値を引き継ぐ企業」</strong> であることを目指します。</p>
        <p>具体的には、環境配慮型の不動産開発、地域経済の発展への貢献、グローバル人材の育成と雇用創出を通じて、未来社会に必要とされる存在であり続けます。</p>
        <p>この理念のもと、藍海株式会社は、 <strong>「世界市場における日本発の次世代型グローバル企業」</strong> として、不動産、観光、IT、国際取引といった多角的な事業を展開し、アジアを中心とした国際経済圏において持続的成長を実現してまいります。</p>
      `,
      excerpt: '本日、令和6年1月19日、私たちは「藍海株式会社」（Blue Ocean Co., Ltd.）を設立いたしました…'
    },
    {
      id: 'Pg302',
      category: 'press_release',
      date: '2024.04.15',
      title: 'グローバル事業拡大の拠点として、シンガポールオフィスを開設しました。',
      content: `<p>アジアのビジネスハブであるシンガポールに初の海外拠点を開設しました。これにより、グローバルなサプライチェーン支援と海外投資家ネットワークの強化を図ります。</p>`,
      excerpt: 'アジアのビジネスハブであるシンガポールに初の海外拠点を開設しました…'
    },
    {
      id: 'Pg303',
      category: 'business',
      date: '2025.06.20',
      title: 'ITとデータを活用した新サービス「不動産収益化支援」を正式にローンチしました。',
      content: `<p>本日より、不動産オーナー様および投資家様向けに、データ分析とITを駆使した新しいコンサルティングサービスの提供を開始します。詳細はサービスページをご覧ください。</p>`,
      excerpt: '本日より、不動産オーナー様および投資家様向けに、データ分析とITを駆使した…'
    },
    {
      id: 'Pg304',
      category: 'blog',
      date: '2025.07.10',
      title: '不動産投資における「ブルーオーシャン戦略」とは？',
      content: `<h3>競争しない市場を見つけ出す</h3><p>「ブルーオーシャン戦略」とは、血みどろの競争が繰り広げられる既存市場（レッドオーシャン）を避け、競争のない未開拓の市場空間（ブルーオーシャン）を切り開く経営戦略です。</p><p>不動産投資においてもこの考え方は極めて重要です。多くの投資家が同じような指標（駅からの距離、築年数、表面利回り）で物件を奪い合う中、私たちはデータ分析とITの力で、まだ誰も気づいていない物件の隠れた価値や、新しい活用法（例えば、民泊への転用、インバウンド向けシェアハウス化など）を発見します。これが藍海株式会社が実践する不動産コンサルティングの核心です。</p>`,
      excerpt: '競争の激しい市場でも、新たな価値を創造し高収益を生み出す「ブルーオーシャン戦略」…',
      image: '/images/Pg300/blog-real-estate.jpg'
    },
    {
      id: 'Pg305',
      category: 'blog',
      date: '2025.07.24',
      title: '初めての海外輸出入：失敗しないための5つのチェックポイント',
      content: `<p>グローバルビジネスの第一歩である輸出入業務には、多くの落とし穴が存在します。藍海の専門家が、成功への鍵となる5つの必須チェックポイントを解説します。</p><ol><li><strong>インコタームズの正しい理解:</strong> 費用とリスクの責任分解点（FOB, CIF等）を契約前に明確にしましょう。</li><li><strong>正確なHSコードの特定:</strong> 関税率を決定する最も重要なコードです。誤ると追徴課税のリスクがあります。</li><li><strong>該非判定と輸出許可:</strong> 輸出する製品が輸出規制品（該非判定）に該当しないか必ず確認が必要です。</li><li><strong>輸送手段と保険の選定:</strong> 製品の特性、コスト、リードタイムを考慮し、最適な輸送手段（船便、航空便）と保険を選びます。</li><li><strong>信頼できるパートナー選定:</strong> 現地の通関業者や配送業者など、信頼できるパートナーとの連携が成功の鍵です。</li></ol><p>藍海株式会社では、これら全てのステップを専門家がサポートします。</p>`,
      excerpt: 'グローバルビジネスの第一歩、輸出入業務。複雑な手続きや文化の違いなど、多くの落とし穴が…',
      image: '/images/Pg300/blog-trade.jpg'
    }
  ],
  // --- ENGLISH DATA ---
  en: [
    {
      id: 'Pg301',
      category: 'news',
      date: 'Jan 19, 2024',
      title: "Announcing the Establishment of 'Blue Ocean Co., Ltd.', a Next-Generation Global Company",
      content: `
        <p>Blue Ocean Co., Ltd., as its name "Ocean" suggests, aims to be a company that grows by embracing vastness and inclusivity, interacting with all countries, regions, and cultures.</p>
        <p>Our corporate philosophy is encapsulated in the words, <strong>"As Vast as the Ocean, Carrying Waves of Trust and Innovation to the Next Generation."</strong></p>
        <ul>
          <li><strong>"As Vast as the Ocean"</strong><br>Like the vast ocean, we broaden our perspective to the world, accept diverse values, and strive for harmony and coexistence within the international community. Through cross-border real estate, trade, and investment, we aim to be a bridge connecting different cultural and economic spheres.</li>
          <li><strong>"Waves of Trust"</strong><br>Trust is the foundation of our business. We conduct our management with sincerity and transparency for all stakeholders, including clients, investors, partners, employees, and the community. We build a stable business foundation through the creation of long-term partnerships.</li>
          <li><strong>"Waves of Innovation"</strong><br>In a rapidly changing global society, we constantly embrace new ideas and technologies, continuing to challenge existing frameworks. We promote practical innovation, such as design innovation in real estate development, efficiency through digitalization, and the introduction of new financial schemes (like GK-TK schemes) to attract international capital.</li>
        </ul>
        <p>Furthermore, we aim to be more than just a profit-seeking entity; we strive to be <strong>"a company that passes on sustainable value to the next generation."</strong></p>
        <p>Specifically, through environmentally conscious real estate development, contributing to regional economies, and fostering global talent and employment, we will continue to be an entity needed by future society.</p>
        <p>Under this philosophy, Blue Ocean Co., Ltd., as <strong>"a next-generation global company from Japan competing in the world market,"</strong> will develop multifaceted businesses in real estate, tourism, IT, and international trade, achieving sustainable growth centered on the Asian economic sphere.</p>
      `,
      excerpt: 'We are pleased to announce the establishment of Blue Ocean Co., Ltd. as of today, January 19, 2024…'
    },
    {
      id: 'Pg302',
      category: 'press_release',
      date: 'Apr 15, 2024',
      title: 'Singapore Office Opened as a Hub for Global Business Expansion',
      content: `<p>We have opened our first overseas office in Singapore, the business hub of Asia. This will strengthen our global supply chain support and our network with overseas investors.</p>`,
      excerpt: 'We have opened our first overseas office in Singapore, the business hub of Asia…'
    },
    {
      id: 'Pg303',
      category: 'business',
      date: 'Jun 20, 2025',
      title: 'New "Real Estate Profitability Support" Service Launched, Utilizing IT and Data',
      content: `<p>Starting today, we are launching a new consulting service for real estate owners and investors that utilizes data analysis and IT. Please see our service page for details.</p>`,
      excerpt: 'Starting today, we are launching a new consulting service for real estate owners and investors…'
    },
    {
      id: 'Pg304',
      category: 'blog',
      date: 'Jul 10, 2025',
      title: "What is the 'Blue Ocean Strategy' in Real Estate Investment?",
      content: `<h3>Discovering Uncontested Markets</h3><p>The 'Blue Ocean Strategy' is a business strategy that avoids fierce competition in existing markets (red oceans) and instead opens up uncontested, untapped market spaces (blue oceans).</p><p>This concept is extremely important in real estate investment. While many investors compete for properties based on the same metrics (distance from station, age, gross yield), we use data analysis and IT to discover hidden value and new uses for properties that no one else has noticed (e.g., converting for private lodging, creating share houses for inbound tourists). This is the core of the real estate consulting practiced by Blue Ocean Co., Ltd.</p>`,
      excerpt: "The 'Blue Ocean Strategy' creates new value and generates high returns even in highly competitive markets…",
      image: '/images/Pg300/blog-real-estate.jpg'
    },
    {
      id: 'Pg305',
      category: 'blog',
      date: 'Jul 24, 2025',
      title: 'First Time Importing/Exporting: 5 Checkpoints to Avoid Failure',
      content: `<p>Import/export, the first step in global business, is full of pitfalls. The experts at Blue Ocean explain the five essential checkpoints for success.</p><ol><li><strong>Correct Understanding of Incoterms:</strong> Clearly define the division of costs and risks (FOB, CIF, etc.) before signing a contract.</li><li><strong>Accurate HS Code Identification:</strong> This is the most crucial code for determining tariff rates. Errors can lead to penalties.</li><li><strong>Export Control Compliance:</strong> You must always check if the products are subject to export regulations.</li><li><strong>Selection of Transport and Insurance:</strong> Choose the optimal transportation method (sea or air freight) and insurance based on product characteristics, cost, and lead time.</li><li><strong>Choosing Reliable Partners:</strong> Collaboration with trustworthy local customs brokers and delivery services is key to success.</li></ol><p>Blue Ocean Co., Ltd. provides expert support for all of these steps.</p>`,
      excerpt: "Import/export, the first step in global business, is full of pitfalls. The experts at Blue Ocean explain…",
      image: '/images/Pg300/blog-trade.jpg'
    }
  ],
  // --- CHINESE DATA ---
  zh: [
    {
      id: 'Pg301',
      category: 'news',
      date: '2024年1月19日',
      title: '关于旨在成为次世代全球化企业「蓝海株式会社」成立的通知',
      content: `
        <p>蓝海株式会社，如其公司名称“海”所示，旨在成为一家拥有广阔胸怀与包容力，在与所有国家、地区及文化的交流中共同成长的企业。</p>
        <p>我们的经营理念，可以概括为一句话：<strong>“如海之辽阔，将信赖与革新之波传至次代。”</strong></p>
        <ul>
          <li><strong>“如海之辽阔”</strong><br>我们将以大海般的胸怀，将视野扩展至全球，接纳多元价值观，在国际社会中实现和谐与共存。通过跨国界的不动产、贸易及投资，我们致力于成为连接不同文化圈与经济圈的桥梁。</li>
          <li><strong>“信赖之波”</strong><br>信赖乃事业之基石。我们对客户、投资者、合作伙伴、员工及地区社会等所有利益相关者，推行诚信且高度透明的经营。通过构筑长期的伙伴关系，我们将建立稳固的事业基础。</li>
          <li><strong>“革新之波”</strong><br>在瞬息万变的国际社会中，我们持续采纳新思路与技术，勇于挑战既有框架。我们积极推动实践性的创新，例如房地产开发中的设计革新、通过数字化提升效率、以及引入吸引国际资本的新型金融结构（如GK-TK结构）等。</li>
        </ul>
        <p>并且，我们不止步于单纯的营利追求，而是致力于成为<strong>“为下一代传承可持续价值的企业”</strong>。</p>
        <p>具体而言，我们将通过注重环保的房地产开发、对地区经济发展的贡献、以及全球化人才的培养与就业创造，持续成为未来社会所需要的存在。</p>
        <p>基于此理念，蓝海株式会社将作为<strong>“立足世界市场的、源于日本的新一代全球化企业”</strong>，在不动产、旅游、IT、国际贸易等多元化领域展开业务，在以亚洲为中心的国际经济圈中，实现可持续的成长。</p>
      `,
      excerpt: '我们在此荣幸地宣布，于本日，令和6年（2024年）1月19日，我们正式成立了“蓝海株式会社”…'
    },
    {
      id: 'Pg302',
      category: 'press_release',
      date: '2024年4月15日',
      title: '作为全球业务扩张的枢纽，新加坡办事处已成立',
      content: `<p>我们在亚洲的商业中心新加坡设立了首个海外据点。此举旨在加强我们的全球供应链支持能力以及与海外投资者的网络联系。</p>`,
      excerpt: '我们在亚洲的商业中心新加坡设立了首个海外据点…'
    },
    {
      id: 'Pg303',
      category: 'business',
      date: '2025年6月20日',
      title: '活用IT与数据的新服务“不动产收益化支持”正式上线',
      content: `<p>自今日起，我们正式为不动产所有者及投资者，提供运用数据分析与IT技术的全新咨询服务。详情请参阅我们的服务页面。</p>`,
      excerpt: '自今日起，我们正式为不动产所有者及投资者，提供运用数据分析与IT技术的全新咨询服务…'
    },
    {
      id: 'Pg304',
      category: 'blog',
      date: '2025年7月10日',
      title: '不动产投资中的「蓝海战略」是什么？',
      content: `<h3>发掘无竞争的市场</h3><p>所谓“蓝海战略”，是一种旨在避开竞争惨烈的现有市场（红海），转而开拓无竞争的、未开发市场空间（蓝海）的经营策略。</p><p>这一理念在不动产投资中也至关重要。当众多投资者都依据相似的指标（距车站距离、房龄、表面回报率）争抢房产时，我们则利用数据分析和IT的力量，去发现那些无人注意的房产隐藏价值或新的活用方法（例如，改造成民宿、面向入境游客的合租房等）。这便是蓝海株式会社所实践的不动产咨询的核心所在。</p>`,
      excerpt: '即便在竞争激烈的市场中也能创造新价值、产生高收益的“蓝海战略”…',
      image: '/images/Pg300/blog-real-estate.jpg'
    },
    {
      id: 'Pg305',
      category: 'blog',
      date: '2025年7月24日',
      title: '初次海外进出口：避免失败的5个要点',
      content: `<p>作为全球化业务的第一步，进出口业务存在着复杂手续、文化差异等诸多陷阱。蓝海的专家将为您解说通往成功的5个关键要点。</p><ol><li><strong>正确理解国际贸易术语(Incoterms):</strong> 在签订合同前，必须明确费用与风险的责任分界点（如FOB, CIF等）。</li><li><strong>确定准确的HS编码:</strong> 这是决定关税率的最重要代码，一旦出错将有被追加征税的风险。</li><li><strong>该非判定与出口许可:</strong> 必须确认出口产品是否属于出口管制物品（该非判定）。</li><li><strong>选择运输方式与保险:</strong> 需考虑产品特性、成本和运输周期，选择最合适的运输方式（海运、空运）和保险。</li><li><strong>选择可靠的合作伙伴:</strong> 与当地值得信赖的报关行、物流公司等伙伴的合作是成功的关键。</li></ol><p>蓝海株式会社为所有这些步骤提供专家支持。</p>`,
      excerpt: '作为全球化业务的第一步，进出口业务存在着复杂手续、文化差异等诸多陷阱…',
      image: '/images/Pg300/blog-trade.jpg'
    }
  ],
};

// --- Data Fetching Functions ---

export const getAllArticles = (locale: Locale): Article[] => {
  return articles[locale] || [];
};

export const getArticleById = (id: string, locale: Locale): Article | undefined => {
  return (articles[locale] || []).find(article => article.id === id);
};