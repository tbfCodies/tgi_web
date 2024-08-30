// src/utils/auth.js

/**
 * Kontrollera om användaren har en viss rättighet
 * @param {Object} user - Den aktuella användaren
 * @param {String} permission - Rättigheten att kontrollera
 * @returns {Boolean} - Om användaren har rättigheten eller inte
 */
export const checkAccess = (user, permission) => {
    return user.permissions.includes(permission);
  };
  