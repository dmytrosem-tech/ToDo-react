export default function Container({ children, title }) {
  return (
    <div className="container">
      <h1 className="title">{title}</h1>
      {children}
    </div>
  );
}
