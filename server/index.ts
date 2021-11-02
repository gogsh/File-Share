import express, { Express } from 'express'
import * as http from 'http'
import next, { NextApiHandler } from 'next'
import socker from './socker/socker'

const port: number = parseInt(process.env.PORT || '3000', 10)
const dev: boolean = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev })
const nextHandler: NextApiHandler = nextApp.getRequestHandler()

nextApp.prepare().then(async () => {
  const app: Express = express()
  const server: http.Server = http.createServer(app)
  socker(server)

  app.all('*', (req: any, res: any) => nextHandler(req, res))

  server.listen(port, () => {
    console.log(`Server started`)
  })
})
