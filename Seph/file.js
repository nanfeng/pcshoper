var request = require('request')
var fs = require('fs')
var path = require('path')

const hostdir = "C:\\Users\\Administrator\\Desktop\\data\\"
// const hostdir = "/Users/qianxin/Downloads//plugin/seph/data/"
function mkdirSync(dirname) {
    if (fs.existsSync(dirname)) {
        return true;
    } else {
        if (mkdirSync(path.dirname(dirname))) {   
            fs.mkdirSync(dirname);
            return true;
        }
    }
    return false
}

function downloadUrl(url, name) {
    const ext = url.lastIndexOf(".");
    let dstpath = hostdir + name + "_" + url.substr(ext+1) + ".jpg";
    if (!fs.existsSync(dstpath)) {
        request(url).pipe(fs.createWriteStream(dstpath))
        console.log("download img " + dstpath + " OK!");
    }
}

function writeData(file, content, idx) {
    fs.writeFile(hostdir + file, content, {'flag':'a+'}, function(err) {
       if (err) {
           return console.error(err);
       }
       console.log("save data " + idx + " OK！");
    });
}
module.exports.downloadUrl = downloadUrl;
module.exports.writeData = writeData;
