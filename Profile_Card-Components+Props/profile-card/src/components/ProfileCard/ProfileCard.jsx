import Avatar from '../Avatar/Avatar.jsx'
import Button from '../Button/Button';
import SkillList from '../SkillList/SkillList';
import SocialLinks from '../SocialLinks/SocialLinks';
import UserInfo from '../UserInfo/UserInfo';

import styles from "./ProfileCard.module.css";

function ProfileCard({ profile }) {
  const { name, role, bio, avatar, skills, social } = profile;

  return (
    <div className={styles.card}>
      <Avatar avatar={avatar} name={name} />
      <UserInfo name={name} role={role} bio={bio} />
      <SkillList skills={skills} />
      <SocialLinks social={social} />
      <Button title="Contact Me" />
    </div>
  );
}

export default ProfileCard