function escapeHtml(str) {
    //[<>"&]:中括号中字符只要其中的一个出现就代表满足条件
    //给replace第二个参数传递一个回调函数，回调函数中参数就是匹配结果，如果匹配不到就是null
    return str.replace(/[<>"&]/g, function (match) {    
                switch (match) {     
                    case "<":
                                return "&lt;";     
                    case ">":
                               return "&gt;";     
                    case "&":
                               return "&amp;";     
                    case "\"":
                                return "&quot;";    
                }