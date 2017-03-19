window.addEventListener('load', () => {
  'use strict';
  Array.prototype.slice.call(document.getElementsByTagName('a')).forEach((element) => {
    if (element.target === '_blank' && element.rel.indexOf('noopener') === -1) {
      element.rel += ' noopener';
    }
  });
});
