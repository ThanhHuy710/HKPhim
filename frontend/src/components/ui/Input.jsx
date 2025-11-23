export function Input({ 
  label, 
  error, 
  icon: Icon,
  type = "text",
  className = "",
  ...props 
}) {
  return (
    <div className={`input-wrapper ${className}`}>
      {label && <label className="input-label">{label}</label>}
      
      <div className="input-container">
        {Icon && <Icon className="input-icon" size={18} />}
        <input
          type={type}
          className={`input ${error ? 'input-error' : ''} ${Icon ? 'input-with-icon' : ''}`}
          {...props}
        />
      </div>
      
      {error && <span className="input-error-message">{error}</span>}
    </div>
  );
}
