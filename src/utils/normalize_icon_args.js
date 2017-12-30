'use strict';

export default function normalizeIconArgs (icon) {
  if (!icon) {
    return null
  }

  if (typeof icon === 'object' && icon.prefix && icon.iconName) {
    return icon
  }

  if (Array.isArray(icon) && icon.length === 2) {
    return { prefix: icon[0], iconName: icon[1] }
  }

  if (typeof icon === 'string') {
    // Add: allow space-separated prefix
    if(icon.indexOf(' ') !== -1) {
      const arr = icon.split(' ')
      return { prefix: arr[0], iconName: arr[1] }
    }
    return { prefix: 'fas', iconName: icon }
  }
}
