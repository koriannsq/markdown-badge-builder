function createBadge(label, message, color = 'blue') {
  return `https://img.shields.io/badge/${encodeURIComponent(label)}-${encodeURIComponent(message)}-${color}`;
}
module.exports = { createBadge };
