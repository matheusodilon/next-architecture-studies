const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')([
  '@estudos/design-system',
  '@estudos/utils'
]);

/**
 * @type {import('next').NextConfig}
 */
module.exports = withPlugins([withTM], {
  trailingSlash: true
});
