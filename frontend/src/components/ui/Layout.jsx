export function Container({ children, className = "" }) {
  return <div className={`container ${className}`}>{children}</div>;
}

export function Grid({ 
  children, 
  cols = 4, 
  gap = "md",
  className = "" 
}) {
  return (
    <div 
      className={`grid grid-cols-${cols} grid-gap-${gap} ${className}`}
    >
      {children}
    </div>
  );
}

export function Flex({ 
  children, 
  direction = "row",
  justify = "start",
  align = "start",
  gap = "md",
  wrap = false,
  className = ""
}) {
  return (
    <div 
      className={`flex flex-${direction} flex-justify-${justify} flex-align-${align} flex-gap-${gap} ${wrap ? 'flex-wrap' : ''} ${className}`}
    >
      {children}
    </div>
  );
}

export function Section({ 
  children, 
  title, 
  subtitle,
  className = "" 
}) {
  return (
    <section className={`section ${className}`}>
      {(title || subtitle) && (
        <div className="section-header">
          {title && <h2 className="section-title">{title}</h2>}
          {subtitle && <p className="section-subtitle">{subtitle}</p>}
        </div>
      )}
      <div className="section-content">{children}</div>
    </section>
  );
}
