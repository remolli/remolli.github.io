/**
 * O GitHub Pages serve arquivos estáticos, então acessar uma rota do SPA
 * diretamente (sem passar pela home) resultaria em 404. Aqui copiamos o
 * index.html gerado para cada rota, de forma que o caminho exato responda
 * 200 e o Vue Router assuma a partir dali. O 404.html é a rede de segurança
 * para qualquer rota ainda não listada.
 */
const fs = require('fs')
const path = require('path')

const PRERENDER_ROUTES = [
  'privacidade/foco-no-treino'
]

const distDir = path.resolve(__dirname, '..', 'dist')
const indexFile = path.join(distDir, 'index.html')

if (!fs.existsSync(indexFile)) {
  console.error('postbuild-pages: dist/index.html não encontrado. Rode o build antes.')
  process.exit(1)
}

const html = fs.readFileSync(indexFile)

fs.writeFileSync(path.join(distDir, '404.html'), html)
console.log('postbuild-pages: dist/404.html')

for (const route of PRERENDER_ROUTES) {
  const routeDir = path.join(distDir, route)
  fs.mkdirSync(routeDir, { recursive: true })
  fs.writeFileSync(path.join(routeDir, 'index.html'), html)
  console.log(`postbuild-pages: dist/${route}/index.html`)
}
