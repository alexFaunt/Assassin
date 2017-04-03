import express from 'express'
import path from 'path'
import hogan from 'hogan-express-strict'
import app from './app'

const server = express()

server.use('/assets/js/', express.static(path.join(__dirname, '../build/')))

server.set('view engine', 'mustache')
server.set('views', path.join(__dirname, './views/'))
server.engine('mustache', hogan)

server.get('*', (req, res) => {
  res.status(200).render('index', app(req))
})

export default server
