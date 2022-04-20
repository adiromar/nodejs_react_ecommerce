const multer = require("multer");
const myStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        let path = "uploads";
        cb(null, path);
    },
    filename: (req,file,cb) => {
        let filename = Date.now()+"-"+file.originalname;
        cb(null, filename);
    }
});

const imageFilter = (req, file, cb) => {
    let parts = file.originalname.split(".");
    let ext = parts[parts.length-1];

    let allowed = ['jpg','png','jpeg','bmp','svg','webp','gif'];

    if(allowed.includes(ext)){
        cb(null, true);
    }else {
        cb(null, false);
    }
}

const imageUploader = multer({
    storage: myStorage,
    fileFilter: imageFilter,
    limits: {
        filesize: 5000000
    }
})

module.exports = imageUploader;