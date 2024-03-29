const fs = require('fs')
const copyDir = require('./copyDir')

var md = {}
var files = []

// 复制文件
md.copyDir = copyDir

// 生成文件
md.mkdir = (path, cb) => {
	fs.exists(path, function(exists) {
		if (!exists) {
			fs.mkdir(path, function() {
				if (typeof cb === 'function') {
					cb()
				}
			})
		} else {
			if (typeof cb === 'function') {
				cb()
			}
		}
	})
}

// 读取路径
md.scanDir = (path) => {
	var that = this
	if (fs.statSync(path).isFile()) {
		// cb(path)
		files.push(path)
	} else {
		fs.readdirSync(path).forEach(function(file) {
			console.log('path  + file', path + '/' + file)
			md.scanDir.call(that, path + '/' + file)
		})
	}
	return files
}

// 判断文件后缀
// function is_filetype(filename, types) {
//   types = types.split(',');
//   var pattern = '\.(';
//   for(var i=0; i<types.length; i++) {
//     if(0 != i) {
//       pattern += '|';
//     }
//       pattern += types[i].trim();
//   }
//   pattern += ')$';
//   return new RegExp(pattern, 'i').test(filename);
// };

// 复制文件
md.copyFloder = (path, newPath) => {
	fs.createReadStream(path).pipe(fs.createWriteStream(newPath))
}

// 写文件
md.writeFile = (file, data, cb) => {
	fs.writeFile(file, data, function(err, data) {
		if (err) {
			console.log(file + '写文件操作失败:', err)
		} else {
			console.log('写入成功' + file)
			if (cb) {
				cb()
			}
		}
	})
}

// 读文件
md.readFile = (file, cb) => {
	fs.readFile(file, function(err, data) {
		if (err) console.log('读文件fail' + err + file)
		else {
			cb(data)
			console.log('读文件成功' + file)
		}
	})
}

md.unlinkFile = (file) => {
	if (fs.existsSync(file)) {
		fs.unlinkSync(file)
	} else {
		console.log('需要删除的文件不存在')
	}
}

module.exports = md
