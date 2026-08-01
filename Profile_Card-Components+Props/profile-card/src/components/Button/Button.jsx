import styles from "./Button.module.css";

function Button({ title }) {
  return (
    <button
      className={styles.button}
      onClick={() =>
        (window.location.href = "mailto:soham@example.com")
      }
    >
      {title}
    </button>
  );
}

export default Button;