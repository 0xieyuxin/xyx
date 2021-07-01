window.onload=function(){

function anomation(box, target, callback) {
    var time = null;
    time = setInterval(function () {
        var step = (target - box.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (box.offsetLeft == target) {
            clearInterval(time);
            if (callback) {
                callback();
            }
        }
        box.style.left = box.offsetLeft + step + "px";
    }, 15)
}

var swiper=document.querySelector('.swiper');
var ul=document.querySelector('.swiper ul');
var lis=document.querySelectorAll('.swiper ul li');
var circle=document.querySelector('.circle');
var prev=document.querySelector('.prev');
var next=document.querySelector('.next');
var imgwidth=swiper.offsetWidth;
// 设置ul的长度
ul.style.width=lis.length*imgwidth+"px";
// 图片索引
var index=0;
// 动态生成li的圆点
for(var i=0;i<lis.length;i++){
    var circleli=document.createElement('li');
    circle.appendChild(circleli);
}

}
