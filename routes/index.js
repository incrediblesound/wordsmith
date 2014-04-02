
var fs = require('fs');

exports.index = function(req, res){
  fs.readdir('./public/words/', function (err, files) {
    res.render('index', {
  	 files: files
    });
  })
};

exports.save = function(req, res) {
  var title = req.body.name,
      content = req.body.content,
      filename = req.body.file
  fs.open('./public/words/'+filename+'.txt', 'w+', function opened(err, fd) {
  if(err) { console.log(err); }
  var writeBuffer = new Buffer(title+'<T>'+content),
  bufferPosition = 0,
  bufferLength = writeBuffer.length, filePosition = null;
  fs.write(fd,
    writeBuffer,
    bufferPosition,
    bufferLength,
    filePosition,
    function wrote(err, written){
      if (err) { console.log(err); }
      res.redirect('/')
    })
})
};

exports.open = function (req, res) {
  var file = req.params.file;
  var tester = new RegExp('\.txt');
  if(!tester.test(file)) {
    res.redirect('/');
  }
  fs.open('./public/words/'+file, 'r', function opened(err, fd) {
    if (err) { console.log(err); }
    var readBuffer = new Buffer(1024),
    bufferOffset = 0,
    bufferLength = readBuffer.length,
    filePosition = 0;
    fs.read(fd, 
      readBuffer, 
      bufferOffset, 
      bufferLength, 
      filePosition,
      function read(err, readBytes) {
        var fileBody = readBuffer.slice(0, readBytes);
        var fileBody = fileBody.toString().split('<T>');
        var title = fileBody[0];
        var text = fileBody[1];
        res.render('read', {
          title: title,
          text: text
        })
      })
  })
};