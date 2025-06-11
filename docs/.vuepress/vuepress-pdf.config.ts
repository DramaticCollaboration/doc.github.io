import { defineUserConfig } from '@condorhero/vuepress-plugin-export-pdf-v2'

const headerTemplate = `<div style="margin-top: -0.4cm; height: 70%; width: 100%; display: flex; justify-content: center; align-items: center; color: lightgray; border-bottom: solid lightgray 1px; font-size: 10px;">
  <span class="title"></span>
</div>`

const footerTemplate = `<div style="margin-bottom: -0.4cm; height: 70%; width: 100%; display: flex; justify-content: flex-start; align-items: center; color: lightgray; border-top: solid lightgray 1px; font-size: 10px;">
  <span style="margin-left: 15px;" class="url"></span>
</div>`

const routeOrder = [
  '/',
  '/syncadmin/',
  '/syncadmin/index.html/',
  '/synccms/',
  '/synccms/index.html/',
  '/syncboot/',
  '/syncboot/index.html/',
  '/syncapim/',
  '/syncapim/index.html/',
  '/synceta/',
  '/synceta/index.html/',
  '/synceta/account.html/',
  '/synceta/project.html/',
  '/synceta/scenario.html/',
  '/synceta/dataset.html/',
  '/synceta/collection.html/',
]

const isWin = process.platform === 'win32'

export default defineUserConfig({
  debug: true,
  pdfOptions: {
    format: 'A4',
    displayHeaderFooter: true,
    headerTemplate,
    footerTemplate,
    margin: {
      bottom: 70,
      left: 25,
      right: 25,
      top: 70,
    },
  },
  sorter: (pageA, pageB) => {
    console.log('페이지 정보')

    const aIndex = routeOrder.findIndex(route => {
      const newRoute = isWin ? route.replaceAll('/', '\\') : route
      const newPath = isWin ? pageA.path.replaceAll('/', '\\').replaceAll('\\\\', '\\') : route
      console.log(newRoute + ':' + newPath)
      return newRoute === newPath
    })
    const bIndex = routeOrder.findIndex(route => {
      const newRoute = isWin ? route.replaceAll('/', '\\') : route
      const newPath = isWin ? pageB.path.replaceAll('/', '\\').replaceAll('\\\\', '\\') : route
      console.log(newRoute + ':' + newPath)
      return newRoute === newPath
    })
    //console.log(pageA.path)
    //console.log(pageB.path)
    console.log('aIndex ' + aIndex)
    console.log('bIndex ' + bIndex)
    return aIndex - bIndex
  },
  urlOrigin: 'https://doc.empasy.com',
})
