const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(
  jsonServer.rewriter({
    "/artistas": "/artists",
    "/movimientos": "/movements",
    "/obras": "/artworks",
    "/museos": "/museums",
    "/artistas/:id": "/artists/:id",
    "/movimientos/:id": "/movements/:id",
    "/obras/:id": "/artworks/:id",
    "/museos/:id": "/museums/:id"
  })
);
server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})