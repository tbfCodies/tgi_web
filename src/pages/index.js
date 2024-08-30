// src/pages/index.js
import Head from 'next/head';
import styles from '../assets/styles/Landing/LandingPage.module.css';
import NewsSection from '../components/News/NewsSection';
import Statistics from '../components/Shared/Statistics';
import DiscordWidget from '../components/Discord/DiscordWidget';
import { mockNewsData } from '../data/mockNewsData';

export default function HomePage() {
  const scrollToNewsSection = () => {
    const newsSection = document.getElementById('newsSection');
    const topPosition = newsSection.offsetTop;
    window.scrollTo({
      top: topPosition,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <Head>
        <title>Landing Page</title>
        <meta name="description" content="Welcome to the landing page" />
      </Head>

      <div className={styles.landingSection}>
        <h1>Welcome to the Landing Page</h1>

        <div className={styles.statisticsContainer}>
          <Statistics />
        </div>

        <div className={styles.scrollDown} onClick={scrollToNewsSection}>
          <i className={styles.arrow}></i>
        </div>
      </div>

      <div id="newsSection" className={styles.newsSection}>
        <NewsSection
          latestNews={mockNewsData.latestNews}
          pinnedNews={mockNewsData.pinnedNews}
          newsGrid={mockNewsData.newsGrid}
        />
      </div>

      <div className={styles.discordWidget}>
        <DiscordWidget />
      </div>
    </>
  );
}
