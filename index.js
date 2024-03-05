const fs = require('fs')
const path = require('path')

const COUNT = 20
const namePrefix = 'XO'
const symbol = 'XO'
const description =
  "$XYZ Qwer are blizzed by Abcxyz.com, and AbcXyz stands as the galaxy's first ZR-integrated noodle platform based on Flumbus. It zibzaps the doors to the wumblefluff realms of NoodleFi, Blort, Z-blort by utilizing $XYZ Qwer as peculiar noodles. With ZR zibzapment, AbcXyz offers a platypus, quibbly wobble, floop, glurp platform to sock your noodle experience.\n\nEach $XYZ Qwer serves as a noodle blort. As the quagmire of the inquisitive Z-blort + Noodle platform on Flumbus, each qwer provides early barnacles with wumbly quaggled access.\n\nDingle into the snazzle with platform chumbus zibzaps, BLIP Qwerties, booble gloopers, and other squiggle squaggles concealed within each blort. Fruggle your space in this flubblestruck digitized meadow, where each $XYZ Qwer is a flibbity to the $XYZ world of zany oodles and noodle wibbles waiting to be frobbled."

const collectionName = 'XO BOX'

function generateNftMetadata(nftNumber) {
  const metadata = {
    name: `${namePrefix} #${String(nftNumber).padStart(5, '0')}`,
    symbol: symbol,
    description: description,
    attributes: [],
    image: 'box.gif',
    properties: {
      files: [
        {
          uri: 'box.gif',
          type: 'image/gif',
        },
      ],
      category: 'image',
    },
  }
  return metadata
}

const assetsFolder = path.join(__dirname, 'assets')
if (!fs.existsSync(assetsFolder)) {
  fs.mkdirSync(assetsFolder)
}

for (let i = 1; i <= COUNT; i++) {
  const metadata = generateNftMetadata(i)
  const filename = `${i}.json`
  const filePath = path.join(assetsFolder, filename)

  fs.writeFileSync(filePath, JSON.stringify(metadata, null, 2))
  console.log(`Generated ${filename}`)
}

const finalMetadata = {
  name: collectionName,
  symbol: symbol,
  description: description,
  image: 'collection.gif',
  attributes: [],
  properties: {
    files: [
      {
        uri: 'collection.gif',
        type: 'image/gif',
      },
    ],
  },
}

const finalFilePath = path.join(__dirname, 'assets', 'collection.json')
fs.writeFileSync(finalFilePath, JSON.stringify(finalMetadata, null, 2))

console.log('Generation complete.')
