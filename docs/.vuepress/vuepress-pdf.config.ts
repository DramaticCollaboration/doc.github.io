import { defineUserConfig } from '@condorhero/vuepress-plugin-export-pdf-v2'

const headerTemplate = `<div style="margin-top: -0.4cm; height: 70%; width: 100%; display: flex; justify-content: center; align-items: center; color: lightgray; border-bottom: solid lightgray 1px; font-size: 10px;">
  <span class="title"></span>
</div>`

const footerTemplate = `<div style="margin-bottom: -0.4cm; height: 70%; width: 100%; display: flex; justify-content: flex-start; align-items: center; color: lightgray; border-top: solid lightgray 1px; font-size: 10px;">
  <span style="margin-left: 15px;" class="url"></span>
</div>`

export default defineUserConfig({
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
    console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA')
    console.log(JSON.stringify(pageA))
    console.log(JSON.stringify(pageB))
    return 0
  },
  urlOrigin: 'https://doc.empasy.com',
})
