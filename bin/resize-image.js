const Jimp = require('jimp');
const imagePaths = process.argv.slice(2)
if (imagePaths.length > 0) {
    imagePaths.forEach(imagePath => {
        Jimp.read(imagePath)
            .then(image => image.resize(image.getWidth() / 20, image.getHeight() / 20))
            .then(image => image.blur(3))
            .then(image => {
                const pathArray = imagePath.split(".")
                return image.getBase64Async(`image/${pathArray[pathArray.length - 1]}`)
            })
            .then(console.log)
            .catch(console.log)
    })
} else {
    console.log("Please provide one or more image paths as argument")
}
