import { defineUserConfig } from '@condorhero/vuepress-plugin-export-pdf-v2'
import { sep, resolve } from 'path'

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

function normalizePath(dir) {
  if (!dir) return ''

  // 1. 시작 부분의 '/' 또는 '\' 제거
  // 2. 경로 구분자를 현재 OS에 맞게 변환
  return dir
    .replace(/^[/\\]+/, '')
    .split(/[/\\]+/)
    .join(sep)
}

function isPathSame(path1, path2) {
  if (!path1 || !path2) return false

  // 1. 두 경로 모두 정규화
  const normalizedPath1 = normalizePath(path1)
  const normalizedPath2 = normalizePath(path2)

  // 2. 절대 경로로 변환 (선택적)
  const absolutePath1 = resolve(normalizedPath1)
  const absolutePath2 = resolve(normalizedPath2)

  // 3. 대소문자 구분 없이 비교 (Windows의 경우)
  if (process.platform === 'win32') {
    return absolutePath1.toLowerCase() === absolutePath2.toLowerCase()
  }

  // Unix 계열은 대소문자 구분
  return absolutePath1 === absolutePath2
}

export default defineUserConfig({
  pdfOutlines: false,
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
    const aIndex = routeOrder.findIndex(route => {
      return isPathSame(route, pageA.path)
    })
    const bIndex = routeOrder.findIndex(route => {
      return isPathSame(route, pageB.path)
    })
    console.log(pageA.path + ':' + pageB.path + ':' + aIndex + ':' + bIndex)
    return aIndex - bIndex
  },
  urlOrigin: 'https://doc.empasy.com',
})
