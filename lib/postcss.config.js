'use strict';

module.exports = function (_ref) {
  var file = _ref.file,
      options = _ref.options,
      env = _ref.env;
  return {
    parser: file.extname === '.sss' ? 'sugarss' : false, // Handles `.css` && '.sss' files dynamically
    plugins: {
      'postcss-cssnext': {},
      'cssnano': env === 'production' ? {} : false
    }
  };
};