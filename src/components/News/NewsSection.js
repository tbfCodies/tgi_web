// src/components/News/NewsSection.js

import styles from '../../assets/styles/News/NewsSection.module.css';

const NewsSection = ({ latestNews, pinnedNews, newsGrid }) => {
  return (
    <div className={styles.newsSection}>
      <div className={styles.latestNews}>
        <h2>Latest News</h2>
        <div className={styles.latestNewsItem}>
          <h3>{latestNews.title}</h3>
          <p>{latestNews.description}</p>
        </div>
      </div>

      <div className={styles.pinnedNews}>
        <h2>Pinned News</h2>
        {pinnedNews.map((news) => (
          <div key={news.id} className={styles.pinnedNewsItem}>
            <h3>{news.title}</h3>
            <p>{news.description}</p>
          </div>
        ))}
      </div>

      <div className={styles.newsGrid}>
        {newsGrid.map((news) => (
          <div key={news.id} className={styles.newsItem}>
            <img src={news.image} alt={news.title} className={styles.newsImage} />
            <h3>{news.title}</h3>
            <p>{news.description}</p>
            <a href={`/news/${news.id}`} className={styles.readMore}>Read More</a>
            <div className={styles.articleAuthor}>
              <img src={news.author.profilePic} alt={news.author.name} className={styles.authorPic} />
              <p>{news.author.name}</p>
              <p>{news.publishedAt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsSection;
