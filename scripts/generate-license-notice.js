import * as fs from 'fs/promises'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'

import chalk from 'chalk'
import puppeteer from 'puppeteer'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

async function generateLicenseNotice() {
  try {
    console.log(chalk.blue('오픈소스 라이센스 문서 생성을 시작합니다...'))

    // package.json 읽기
    const packageJson = JSON.parse(await fs.readFile(join(process.cwd(), 'package.json'), 'utf-8'))

    // 모든 의존성 수집
    const dependencies = {
      ...(packageJson.dependencies || {}),
      ...(packageJson.devDependencies || {}),
    }

    // npm으로부터 각 패키지의 라이센스 정보 가져오기
    const packagesInfo = await Promise.all(
      Object.entries(dependencies).map(async ([name, version]) => {
        try {
          const packageData = await fetch(`https://registry.npmjs.org/${name}`).then(res =>
            res.json()
          )

          const latestVersion = version.replace(/^\^|~/, '')
          const versionInfo = packageData.versions[latestVersion] || packageData['dist-tags'].latest

          return {
            name,
            version: latestVersion,
            license: versionInfo.license || 'Unknown',
            homepage: versionInfo.homepage,
            repository: versionInfo.repository?.url,
            author: versionInfo.author?.name,
          }
        } catch {
          console.warn(chalk.yellow(`${name} 패키지 정보를 가져오는데 실패했습니다`))
          return {
            name,
            version: version.replace(/^\^|~/, ''),
            license: 'Unknown',
          }
        }
      })
    )

    // 라이센스별로 그룹화
    const licenseGroups = packagesInfo.reduce((acc, pkg) => {
      const license = pkg.license || 'Unknown'
      if (!acc[license]) {
        acc[license] = []
      }
      acc[license].push(pkg)
      return acc
    }, {})

    // HTML 생성
    const html = generateHTML(packageJson, licenseGroups)
    const outputDir = join(process.cwd(), 'dist', 'licenses')
    await fs.mkdir(outputDir, { recursive: true })

    await fs.writeFile(join(outputDir, 'third-party-licenses.html'), html, 'utf-8')

    console.log(chalk.green('HTML 문서가 생성되었습니다.'))

    // PDF 생성
    console.log(chalk.yellow('PDF 생성 중...'))
    await generatePDF(join(outputDir, 'third-party-licenses.html'), outputDir)

    console.log(chalk.green('라이센스 문서 생성이 완료되었습니다.'))
    console.log(chalk.blue(`생성된 파일 위치: ${outputDir}`))
  } catch (error) {
    console.error(chalk.red('라이센스 문서 생성 중 오류 발생:'), error)
    process.exit(1)
  }
}

function generateHTML(packageJson, licenseGroups) {
  const today = new Date().toLocaleDateString('ko-KR')

  return `
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>서드파티 라이센스</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            margin: 40px;
        }
        .header {
            margin-bottom: 30px;
        }
        .license-group {
            margin-bottom: 30px;
        }
        .license-title {
            background-color: #f4f4f4;
            padding: 10px;
            margin-bottom: 15px;
        }
        .package {
            margin-bottom: 20px;
            padding-left: 20px;
        }
        .package-name {
            font-weight: bold;
        }
        .links {
            margin-top: 5px;
        }
        a {
            color: #0366d6;
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>서드파티 라이센스</h1>
        <p>프로젝트: ${packageJson.name} (버전 ${packageJson.version})</p>
        <p>생성일: ${today}</p>
    </div>

    ${Object.entries(licenseGroups)
      .map(
        ([license, packages]) => `
        <div class="license-group">
            <h2 class="license-title">${license} 라이센스</h2>
            ${packages
              .map(
                pkg => `
                <div class="package">
                    <div class="package-name">${pkg.name} (${pkg.version})</div>
                    ${pkg.author ? `<div>제작자: ${pkg.author}</div>` : ''}
                    <div class="links">
                        ${pkg.homepage ? `<a href="${pkg.homepage}" target="_blank">홈페이지</a> | ` : ''}
                        ${pkg.repository ? `<a href="${pkg.repository.replace('git+', '').replace('.git', '')}" target="_blank">저장소</a>` : ''}
                    </div>
                </div>
            `
              )
              .join('')}
        </div>
    `
      )
      .join('')}
</body>
</html>`
}

async function generatePDF(htmlPath, outputDir) {
  try {
    const browser = await puppeteer.default.launch()
    const page = await browser.newPage()

    const htmlContent = await fs.readFile(htmlPath, 'utf-8')
    await page.setContent(htmlContent)

    await page.pdf({
      path: join(outputDir, 'third-party-licenses.pdf'),
      format: 'A4',
      margin: {
        top: '20mm',
        right: '20mm',
        bottom: '20mm',
        left: '20mm',
      },
    })

    await browser.close()
    console.log(chalk.green('PDF 버전이 생성되었습니다.'))
  } catch (error) {
    console.error(chalk.red('PDF 생성 중 오류 발생:'), error)
  }
}

// 실행
await generateLicenseNotice().catch(console.error)

export { generateLicenseNotice }
