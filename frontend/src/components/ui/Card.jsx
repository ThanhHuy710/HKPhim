export function Card({ children, hoverable = false, className = "", ...props }) {
  return (
    <div 
      className={`card ${hoverable ? 'card-hoverable' : ''} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardImage({ src, alt, badge }) {
  return (
    <div className="card-image">
      <img src={src} alt={alt} loading="lazy" />
      {badge && <span className="card-badge">{badge}</span>}
    </div>
  );
}

export function CardContent({ children }) {
  return <div className="card-content">{children}</div>;
}

export function CardTitle({ children }) {
  return <h3 className="card-title">{children}</h3>;
}

export function CardDescription({ children }) {
  return <p className="card-description">{children}</p>;
}
