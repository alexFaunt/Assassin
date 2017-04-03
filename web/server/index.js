/* eslint-disable global-require */
require('babel-register')()
const logger = require('../../utils/logger').default

const path = require('path')

const getApp = () => require('./server').default
const startApp = () => getApp().listen(process.env.PORT || 3000, (error) => {
  if (error) logger.error(error)
  else logger.log('App started!')
})

// start the app!
let server = startApp()

// In dev mode we need to destroy the cache and restart the server if there are file changes
// Or server side render will be wrong.
if (process.env.DEV) {
  const appDelete = () => {
    // delete everything from the require cache
    Object.keys(require.cache)
      .forEach((id) => {
        if (!id.includes('node_modules')) delete require.cache[id]
      })

    // Kill the server and when complete restart it.
    server.close(() => {
      logger.log('App restarting...')
      try {
        server = startApp()
      }
      catch (error) {
        logger.error(error)
      }
    })
  }

  // Watching file system with chokidar
  const chokidar = require('chokidar')
  const paths = [path.join(__dirname, '../'), path.join(__dirname, '../../components/')]
  const watcher = chokidar.watch(paths)
  watcher.on('ready', () => watcher.on('change', () => appDelete()))
}
