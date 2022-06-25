const fs = require('fs'); // to download image to computer
const axios = require('axios'); // to hit picture of the day link
const cheerio = require('cheerio'); // web scraping // uses jquery behind the scenes
const dateFormat = require('dateformat');

async function main(){
  const dates = fs.readFileSync('./input.txt').toString().split('\n');
  
  for(const date of dates){
    const wikiCompatibleDate = dateFormat(date, 'yyyy-mm-dd');
    const res = await axios.get(`https://en.wikipedia.org/wiki/Template:POTD/${wikiCompatibleDate}`)

    const $ = cheerio.load(res.data); // get html of webpage to scrape

    const imageSrc = $("div a.image img").attr('src');
    const imageUrl = `https:${imageSrc}`;
    const imageUrlString = imageUrl.toString()

    // download image
    const image = await axios({
      method: 'get',
      url: imageUrl,
      responseType: 'stream' // because we want to download an image
    })
    // save image to computer
    const usDateFormat = dateFormat(date, 'mm-dd-yyyy');
    image.data.pipe(fs.createWriteStream(`${usDateFormat}.jpeg`))
  }
}

main()