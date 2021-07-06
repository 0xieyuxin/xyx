function format(){
    var date=new Date();
    var res='YYYY/MM/DD hh:mm:ss';

    var obj={
        'Y+':date.getFullYear(),
        'M+':date.getMonth(),
        'D+':date.getDate(),
        'h+':date.getHours(),
        'm+':date.getMinutes(),
        's+':date.getSeconds()
    }

    for(k in obj){
        obj[k]=obj[k]<10?'0'+obj[k]:obj[k];

        var reg=new RegExp(k);

        res =res.replace(reg,obj[k]);


    }
    console.log(res);
}
format();

function getUrl(url) {
    var res = {};
    var urlstr = url.slice(url.indexOf('?') + 1);
    var str = urlstr.split('&');
    for (var i = 0; i < str.length; i++) {
        var index = str[i].indexOf('=');
        var key = str[i].slice(0, index);
        var value = str[i].slice(index + 1);
        console.log(key, value);
        res[key] = value;
    }
    return res;
}

function text(url){
    var strurl = url.slice(url.indexOf('=') + 1);
    var str = decodeURI(strurl);
    return str;
}