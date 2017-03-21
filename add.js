window.addEventListener('DOMContentLoaded', () => {
  'use strict';
  Array.prototype.slice.call(document.getElementsByTagName('a')).filter((element) => (
    element.target === '_blank' && element.rel.indexOf('noopener') === -1
  )).forEach((element) => {
    element.rel += ' noopener';
  });
});
