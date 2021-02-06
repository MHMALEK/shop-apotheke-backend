const path = require('path');

const projectRoot = path.resolve(__dirname, '../../..');

/**
 * Paths to directories and files of the project.
 */
const pathTo = {
  projectRoot,

  // Files
  entryPointSrc: path.resolve(projectRoot, 'src/bootstrap/index.ts'),

  // Directories
  srcDir: path.resolve(projectRoot, 'src'),
  buildDir: path.resolve(projectRoot, 'build'),
};
const isDev = () => ({ NODE_ENV = 'production' } = process.env);

exports.pathTo = pathTo;
