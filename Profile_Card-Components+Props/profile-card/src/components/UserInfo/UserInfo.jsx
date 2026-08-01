import styles from "./UserInfo.module.css";

const UserInfo = ({ name, role, bio }) => {
  return (
    <div>
      <h2 className={styles.name}>{name}</h2>
      <p className={styles.role}>{role}</p>
      <p className={styles.bio}>{bio}</p>
    </div>
  );
};

export default UserInfo;