import {port, publicDir} from './vars';

export default {
  port: port,
  rootDir: publicDir,
  nodeResolve: true,
  preserveSymlinks: true,
  middlewares:
      [
        // add the middlewares here
      ]
}