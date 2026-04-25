import sharp from 'sharp'

const inputPath = 'src/assets/images/fotoc.png'
const outputPath = 'src/assets/images/fotoc.webp'

async function main() {
  await sharp(inputPath)
    .resize({ width: 1000 })
    .webp({ quality: 80 })
    .toFile(outputPath)

  console.log(`Generated ${outputPath} from ${inputPath}`)
}

main().catch((error) => {
  console.error('Image optimization failed:')
  console.error(error)
  process.exitCode = 1
})
