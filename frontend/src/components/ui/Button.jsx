export function Button({ 
  children, 
  variant = "primary", 
  size = "md", 
  fullWidth = false,
  loading = false,
  disabled = false,
  onClick,
  type = "button",
  className = "",
  ...props 
}) {
  const baseClass = "btn";
  const variantClass = `btn-${variant}`;
  const sizeClass = `btn-${size}`;
  const widthClass = fullWidth ? "btn-full" : "";
  const loadingClass = loading ? "btn-loading" : "";
  
  return (
    <button
      type={type}
      className={`${baseClass} ${variantClass} ${sizeClass} ${widthClass} ${loadingClass} ${className}`}
      onClick={onClick}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? "Loading..." : children}
    </button>
  );
}
