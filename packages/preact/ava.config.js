export default {
  files: ['test/**/*'],
  compileEnhancements: false,
  extensions: ['ts', 'tsx'],
  helpers: ['test/helpers/**'],
  require: ['ts-node/register', './test/helpers/setup.ts'],
};
