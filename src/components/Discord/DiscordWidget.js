import React, { useState, useEffect } from 'react';
import styles from '../../assets/styles/DiscordWidget.module.css';

const DiscordWidget = () => {
  const [onlineCount, setOnlineCount] = useState(null);

  useEffect(() => {
    const fetchDiscordData = async () => {
      try {
        const response = await fetch(
          'https://discord.com/api/guilds/445694480205742083/widget.json'
        );
        const data = await response.json();
        setOnlineCount(data.presence_count);
      } catch (error) {
        console.error('Error fetching Discord widget data:', error);
      }
    };

    fetchDiscordData();
  }, []);

  const handleJoinClick = () => {
    window.open('https://discord.gg/rB9WkcQUqu', '_blank');
  };

  return (
    <div className={styles.discordWidget}>
      <div className="discord">
        <iframe
          src="https://discord.com/widget?id=445694480205742083&theme=dark"
          sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
          title="Discord Widget"
        ></iframe>
      </div>
      <button onClick={handleJoinClick}>Join Us</button>
    </div>
  );
};

export default DiscordWidget;
