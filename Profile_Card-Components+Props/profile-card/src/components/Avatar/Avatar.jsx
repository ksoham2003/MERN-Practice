import styles from "./Avatar.module.css";

function Avatar({ avatar, name }) {
  return (
    <img
      className={styles.avatar}
      src={avatar}
      alt={name}
    />
  );
}

export default Avatar;