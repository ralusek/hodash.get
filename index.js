'use strict';


/**
 *
 */
function get(obj, path, defaultValue) {
  if (!obj) return defaultValue;
  const split = path.split('.');
  let current = obj;
  for (const i in split) {
    const prop = split[i];
    current = current[prop];
    if (current === undefined) return defaultValue;
  }

  return current;
};


/**
 *
 */
module.exports = get;
