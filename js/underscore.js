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