//邮箱正则表达式
var regMail = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/;
//兼容浏览器trim
if (!String.prototype.trim) { 
    String.prototype.trim = function () { 
        return this.replace(/^\s+/, "").replace(/\s+$/, "");
        //\s匹配空白字符：回车、换行、制表符tab空格
         
    }
}