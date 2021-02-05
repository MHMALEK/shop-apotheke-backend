const path = require('path');

const projectRoot = path.resolve(__dirname, "../../..");

/**
 * Paths to directories and files of the project.
 */
module.exports = {
  projectRoot,

  // Files
  mainProdEnvSrc: path.resolve(projectRoot, '.env.prod'),

  // Directories
  viewsDir: path.resolve(projectRoot, 'src/views'),
  publicDir: path.resolve(projectRoot, 'public'),
  routesDir: path.resolve(projectRoot, 'src/routes'),
  utilsDir: path.resolve(projectRoot, 'src/utils'),
};
