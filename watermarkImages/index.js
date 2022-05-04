const jimp = require('jimp');
const fs = require('fs');

const squareSize = 500;

async function addLogoToImages() {
  const logoImage = await jimp.read('./images/propertyofkevin.png');

  logoImage.opacity(0.5); // make watermark more see through

  // grab all non edited photos
  const arrFileNames = fs.readdirSync('./images/non_watermarked');
  for(const fileName of arrFileNames){
    const image = await jimp.read(`./images/non_watermarked/${fileName}`)

    image.resize(squareSize, squareSize);
    console.log('Resizing' + fileName)

    image.composite(logoImage, squareSize / 2, squareSize / 2);
    console.log('Adding water mark to' + fileName)
    image.greyscale();
    console.log('Grey scaling' + fileName)

    // save out newly edited image
    const imageFileName = 'watermarked_' + fileName
    image.write('./images/watermarked/' + imageFileName)
  }
}
addLogoToImages();