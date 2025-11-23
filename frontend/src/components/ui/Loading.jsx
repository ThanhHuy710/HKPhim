export function Loader({ size = "md", fullScreen = false }) {
  if (fullScreen) {
    return (
      <div className="loader-fullscreen">
        <div className={`loader loader-${size}`}></div>
      </div>
    );
  }

  return <div className={`loader loader-${size}`}></div>;
}

export function Skeleton({ width = "100%", height = "20px", className = "" }) {
  return (
    <div 
      className={`skeleton ${className}`}
      style={{ width, height }}
    ></div>
  );
}

export function SkeletonCard() {
  return (
    <div className="skeleton-card">
      <Skeleton height="300px" />
      <div className="skeleton-card-content">
        <Skeleton height="20px" width="80%" />
        <Skeleton height="16px" width="60%" />
      </div>
    </div>
  );
}
