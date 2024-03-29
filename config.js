const path = require("path");
const projectPath = path.join(__dirname, ".");
const scanPath = "./src/views"; // './test'
const cachePath = "./translate/cache";
const translatePath = "./translate";
const enLanguagePath = path.join(cachePath, "./en");
const twLanguagePath = path.join(cachePath, "./tw");
const zhLanguagePath = path.join(cachePath, "./zh");
const generateFilePath = path.join(__dirname, cachePath, "./zh_cn.js");

module.exports = {
  status: "test", // test or default
  key: "default",
  projectPath,
  scanPath,
  cachePath,
  enLanguagePath,
  twLanguagePath,
  zhLanguagePath,
  generateFilePath,
  translatePath
};
