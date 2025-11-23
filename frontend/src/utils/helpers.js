/**
 * Format duration từ phút sang giờ:phút
 */
export function formatDuration(minutes) {
  if (!minutes) return "N/A";
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`;
}

/**
 * Format số lượt xem
 */
export function formatViews(views) {
  if (!views) return "0";
  if (views >= 1000000) return `${(views / 1000000).toFixed(1)}M`;
  if (views >= 1000) return `${(views / 1000).toFixed(1)}K`;
  return views.toString();
}

/**
 * Truncate text với số ký tự giới hạn
 */
export function truncateText(text, maxLength = 100) {
  if (!text || text.length <= maxLength) return text;
  return text.slice(0, maxLength) + "...";
}

/**
 * Format rating
 */
export function formatRating(rating) {
  if (!rating) return "0.0";
  return parseFloat(rating).toFixed(1);
}

/**
 * Get year from date string
 */
export function getYear(dateString) {
  if (!dateString) return "";
  return new Date(dateString).getFullYear();
}

/**
 * Debounce function
 */
export function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}
