const fs = require('fs')
const path = require('path')

const COUNT = 1
const namePrefix = '$LOKI BOX'
const symbol = 'LOKI'
const description = `Embark on a digital odyssey with 10,000 unique $LOKI Box on Solana, also referred as the $LOKI Node Box.\n\n$LOKI Box are released by Betloki.com, and BetLoki stands as the world's first AI-empowered gaming platform based on Solana. It unlocks the doors to the creative realms of GameFi, Sports and Esports by utilizing $LOKI Box as unique nodes. With AI empowerment, BetLoki offers a personalized, provably fair, secure, efficient platform to rock your gaming experience.\n\nEach $LOKI Box serves as a platform node. As the pinnacle of the innovative Sports + Gaming platform on Solana, each box provides early adopters with unique privileged access.\n\nDelve into the mystery with platform currency airdrops, VIP Passes, mining passes, and other exclusive functionalities concealed within each box. Secure your place in this groundbreaking digital realm, where each $LOKI Box is a key to the $LOKI world of rare opportunities and digital marvels waiting to be discovered.`

const collectionName = 'LOKI BOX'

function generateNftMetadata(nftNumber) {
  const metadata = {
    name: `${namePrefix} #${String(nftNumber).padStart(5, '0')}`,
    symbol: symbol,
    description: description,
    attributes: [],
    image: 'box.gif',
    animation_url: 'box.mp4',
    external_url: 'https://betloki.com',
    properties: {
      files: [
        {
          uri: 'box.mp4',
          type: 'video/mp4',
        },
        {
          uri: 'box.gif',
          type: 'image/gif',
        },
      ],
      category: 'video',
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
  image: 'collection.jpeg',
  attributes: [],
  properties: {
    files: [
      {
        uri: 'collection.jpeg',
        type: 'image/jpeg',
      },
    ],
  },
}

const finalFilePath = path.join(__dirname, 'assets', 'collection.json')
fs.writeFileSync(finalFilePath, JSON.stringify(finalMetadata, null, 2))

console.log('Generation complete.')
