import styles from "./highlight.module.css";

type HighlightProps = {
  children: React.ReactNode;
};

export default function Highlight({ children }: HighlightProps) {
  return <span className={styles.highlight}>{children}</span>;
}
