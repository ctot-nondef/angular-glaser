'use strict';

/* Filters */

GlaserApp
.filter('type', function() {
  return function(input) {
    switch (input) {
      case 'AT-OeAW-BA-3-27-P':
        return 'image';
      case 'AT-OeAW-BA-3-27-A':
        return 'layers';
      case 'AT-OeAW-BA-3-27-T':
        return 'library_books';
    }
  };
})
.filter('encode', function() {
  return function(input) {
    return encodeURIComponent(input);
  };
});

