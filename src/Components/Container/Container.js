import styles from "./Container.module.css";

export default function Container({ children, title }) {
  return (
    <div className={styles.container}>
      <h1 className="title">{title}</h1>
      {children}
    </div>
  );
}
