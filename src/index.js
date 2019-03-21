'use strict';


/**
 *
 */
function get(obj, path, defaultValue) {
  if (!obj) return defaultValue;
  if (typeof obj === 'function') {
    try { return obj(); }
    catch (err) { return path === undefined ? defaultValue : path; }
  }
  // Define a getter.
  if (path === undefined) return (fn) => {
    return typeof fn === 'function'
      ? get(() => fn(obj))
      : get(obj, fn);
  };

  const split = Array.isArray(path) ? path : path.split('.');
  let current = obj;
  for (const i in split) {
    const prop = split[i];
    current = get(() => current[prop]);
    if (current === undefined) return defaultValue;
  }

  return current;
};


/**
 *
 */
module.exports = get;
