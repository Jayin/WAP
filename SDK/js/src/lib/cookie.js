/**
 * 读取cookie中的信息
 * @param  {string} name 
 * @return {[string|null]}      
 */
var getCookie = function (name) {
    var getCookieVal =function (offset) {
        var endstr = document.cookie.indexOf (";", offset);
        if (endstr == -1)
            endstr = document.cookie.length;
        return unescape(document.cookie.substring(offset, endstr));
    }

    var arg = name + "=";
    var alen = arg.length;
    var clen = document.cookie.length;
    var i = 0;
    while (i < clen) {
        var j = i + alen;
        if (document.cookie.substring(i, j) == arg)
            return getCookieVal(j);
        i = document.cookie.indexOf(" ", i) + 1;
        if (i == 0) break;
    }
    return null;
}

/**
 * 设置Cookie
 * @param {string} name   名 [required]
 * @param {string} value  值  [required]
 * @param {Data} expires  过期时间 [required]
 * @param {string} path    作用路径
 * @param {string} domain  作用域
 * @param {boolean} secure  是否支持https
 */
var setCookie = function (name, value, expires, path, domain, secure) {
    document.cookie = name + "=" + escape(value) 
                    + ((expires == null) ? "" : ("; expires=" + expires.toGMTString())) 
                    + ((path == null) ? "" : ("; path=" + path)) 
                    + ((domain == null) ? "" : ("; domain=" + domain)) 
                    + ((secure == true) ? "; secure" : "");
}