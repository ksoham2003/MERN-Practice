import styles from "./SocialLinks.module.css";

const SocialLinks = ({ social }) => {
  const { github, linkedin, twitter } = social;

  return (
    <div className={styles.links}>
      <a
        className={styles.link}
        href={github}
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </a>

      <a
        className={styles.link}
        href={linkedin}
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>

      <a
        className={styles.link}
        href={twitter}
        target="_blank"
        rel="noopener noreferrer"
      >
        Twitter
      </a>
    </div>
  );
};

export default SocialLinks;