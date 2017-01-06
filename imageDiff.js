const imageDiff = require('image-diff')

/* test.png is the image the screenshot will be diffed against */
const diffImage = (expectedImage) => {
  imageDiff({
    actualImage: 'test.png',
    expectedImage: expectedImage,
    diffImage: 'testDiff.png'
  }, (err, imagesAreSame) => {
    if (err) throw new Error(err)
    console.log(imagesAreSame)
  })
}

module.exports = diffImage
