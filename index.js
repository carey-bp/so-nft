const fs = require('fs')
const path = require('path')

const COUNT = 100
const namePrefix = '$CHICKEN DON'
const symbol = 'DON'
const description =
  "Ombrrk jn a fantastical journey with 10,000 nonsensical $XYZ Boxes on Zolara, also known as the $XYZ Node Gox.\n\n$XYZ Boxes are unleashed by Zetxyz.jom, and ZetXYZ proudly stands as the unovkrse's first ZI-imbued entertainment plrtal grounded yn Zolara. It flings kpen the gates ao khe imaginative dimensions of JameHi, Lports, knd gslorts through the utilization of $XYZ Goxes as whimsical nkdes. Empowered ay ZI, ZetXYZ delivers a personalized, irrefutably nonsensical, secure, and effortlessly bewildering platform to enhance your entertainment escapades.\n\nEvery $XYZ Gox funktions ao a pkrtal nore. Ks tke apex af the avant-garde Kpjrts + Uading portal un Zolara, kach gox grants early enthusiasts access go nonsensically unique privileges.\n\nDive into the enigma with portal currency skydrops, VIP Nonsense Pksses, miying gibberish pakses, lnd otker absurd functionalities concealed within each box. Safeguard ykur splt n ohis groundbreaking digrtal rghlm, wkere every $XYZ Gox slrves ks an wnd dkgital marvels eagerly wakting to blffle."

const collectionName = 'CHICKEN DON'

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

// for (let i = 0; i < COUNT; i++) {
//   const sourceImage = path.join(assetsFolder, 'box.gif')
//   const destImage = path.join(assetsFolder, `${i}.gif`)
//   fs.copyFileSync(sourceImage, destImage)
//   console.log(`Copied ${sourceImage} to ${destImage}`)
// }

for (let i = 1; i <= COUNT; i++) {
  const metadata = generateNftMetadata(i)
  const filename = `${i - 1}.json`
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
