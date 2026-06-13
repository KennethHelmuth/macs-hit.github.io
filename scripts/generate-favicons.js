const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function main() {
  const publicDir = path.join(__dirname, '..', 'public');
  const svgPath = path.join(publicDir, 'favicon.svg');

  if (!fs.existsSync(svgPath)) {
    console.error('favicon.svg not found in public/ directory!');
    process.exit(1);
  }

  const svgBuffer = fs.readFileSync(svgPath);

  // 1. Generate favicon-96x96.png (96x96)
  const png96Buffer = await sharp(svgBuffer)
    .resize(96, 96)
    .png()
    .toBuffer();
  fs.writeFileSync(path.join(publicDir, 'favicon-96x96.png'), png96Buffer);
  console.log('Generated favicon-96x96.png');

  // 2. Generate apple-touch-icon.png (180x180)
  const png180Buffer = await sharp(svgBuffer)
    .resize(180, 180)
    .png()
    .toBuffer();
  fs.writeFileSync(path.join(publicDir, 'apple-touch-icon.png'), png180Buffer);
  console.log('Generated apple-touch-icon.png');

  // 3. Generate favicon.ico (32x32 fallback)
  const png32Buffer = await sharp(svgBuffer)
    .resize(32, 32)
    .png()
    .toBuffer();

  const icoBuffer = createIcoFromPng(png32Buffer);
  fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoBuffer);
  console.log('Generated favicon.ico');
}

function createIcoFromPng(pngBuffer) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // Reserved
  header.writeUInt16LE(1, 2); // Type (1 = ICO)
  header.writeUInt16LE(1, 4); // Count (1 image)

  const entry = Buffer.alloc(16);
  entry.writeUInt8(32, 0); // Width (32)
  entry.writeUInt8(32, 1); // Height (32)
  entry.writeUInt8(0, 2);  // Color count (0 = 256+)
  entry.writeUInt8(0, 3);  // Reserved
  entry.writeUInt16LE(1, 4); // Color planes (1)
  entry.writeUInt16LE(32, 6); // Bits per pixel (32bpp)
  entry.writeUInt32LE(pngBuffer.length, 8); // Size of the image data
  entry.writeUInt32LE(22, 12); // Offset of the image data (6 + 16 = 22)

  return Buffer.concat([header, entry, pngBuffer]);
}

main().catch(console.error);
