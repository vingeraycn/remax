const stylus = require('@remax/plugin-stylus');

module.exports = {
  one: true,
  output: 'dist/' + process.env.REMAX_PLATFORM,
  plugins: [stylus({})],
};
