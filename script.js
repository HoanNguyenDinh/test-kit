// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const fs = require('fs');
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();

const filePath = path.resolve(__dirname, './build', 'index.html');

if (fs.existsSync(filePath)) {
  const originalContent = fs.readFileSync(filePath, 'utf-8');
  let data = originalContent;
  const okayBearsMetas = {
    title: 'Okay Bears',
    description:
      'Okay Bears is a culture shift. A clean collection of 10.000 diverse bears building a virtuous community that transcends the metaverse into the real world.',
    image: 'https://assets-global.website-files.com/622eead55797fc2865c24818/6259673c554c184351c18d50_Okay-Bears-OpenGraph.png',
    favicon: ''
  };
  data = data.replace(/\$OG_TITLE/g, okayBearsMetas.title);
  data = data.replace(/\$OG_DESCRIPTION/g, okayBearsMetas.description);
  data = data.replace(/\$OG_IMAGE/g, okayBearsMetas.image);
  fs.writeFileSync(filePath, data, { encoding: 'utf-8' });
}
