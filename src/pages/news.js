import NewsSection from '../components/NewsSection';
import { mockNewsData } from '../data/mockNewsData';

const NewsPage = () => {
  return (
    <div>
      <NewsSection 
        latestNews={mockNewsData.latestNews} 
        pinnedNews={mockNewsData.pinnedNews} 
        newsGrid={mockNewsData.newsGrid}
      />
    </div>
  );
};

export default NewsPage;
