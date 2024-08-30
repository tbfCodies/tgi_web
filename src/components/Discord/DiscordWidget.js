// src/components/Discord/DiscordWidget.js

import styles from '../../assets/styles/DiscordWidget.module.css'; // Justera sökvägen efter behov

const DiscordWidget = () => {
  return (
    <div className={styles.discordWidget}>
      <h2>Discord Status</h2>
      <div className="discord">
        <iframe
          src="mylinktodiscord"
          width="350"
          height="500"
          allowtransparency="true"
          frameBorder="0"
          sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
          title="Discord Widget"
        ></iframe>
      </div>
      <p>Online: 123</p>
      <button>Join Us</button>
    </div>
  );
};

export default DiscordWidget;


