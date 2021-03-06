var Bettle, formatRequires, replaceDefine, splitStr;

replaceDefine = require('./define/replace');

formatRequires = require('./define/format');

splitStr = '\n';

Bettle = (function() {
  function Bettle(fileStr) {
    if (fileStr) {
      fileStr = fileStr + "";
      this.fileList = fileStr.split(splitStr);
    }
    return this;
  }

  Bettle.prototype.fileList = [];

  Bettle.prototype.translateFileStringToList = function(fileStr) {
    if (fileStr) {
      fileStr = fileStr + "";
      this.fileList = fileStr.split(splitStr);
    }
    return this;
  };

  Bettle.prototype.replaceDefine = function(options) {
    this.fileList = replaceDefine(this.fileList, options);
    return this;
  };

  Bettle.prototype.formatRequires = function(options) {
    this.fileList = formatRequires(this.fileList, options);
    return this;
  };

  Bettle.prototype.getFileString = function() {
    return this.fileList.join(splitStr);
  };

  return Bettle;

})();

module.exports = Bettle;
