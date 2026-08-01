import Skill from "../Skill/Skill";
import styles from "./SkillList.module.css";

const SkillList = ({ skills }) => {
  return (
    <div className={styles.container}>
      {skills.map((skill) => (
        <Skill key={skill} skill={skill} />
      ))}
    </div>
  );
};

export default SkillList;