import styles from "./globalButton.module.css";

interface ButtonProps {
  text: string;
  backgroundColor?: string;
  padding?: string;
  color?: string;
  onClick?: () => void;
}

function GlobalButton({
  text,
  backgroundColor = "transparent",
  padding = ".8rem 1rem",
  color = "#fff",
  onClick,
}: ButtonProps) {
  return (
    <div>
      <button
        className={styles.btn}
        type="submit"
        style={{ backgroundColor, padding, color }}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
}

export default GlobalButton;
