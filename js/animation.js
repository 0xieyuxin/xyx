function anmation(obj, target, callback) {
    var time = null;
    clearInterval(obj.time);

    obj.time = setInterval(function () {
        var step = (target - obj.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == target) {
            clearInterval(obj.time);
            if (callback) {
                callback();
            }
        }
        obj.style.left = obj.offsetLeft + step + "px";
    }, 15)
}

function change() {
    for (var i = 0; i < circle.children.length; i++) {
        circle.children[i].classList.remove("current");
    }
    circle.children[c].classList.add("current");
}

function anmations(obj, target, callback) {
    var time = null;
    clearInterval(obj.time);
    obj.time = setInterval(function () {
        var step = (target - window.pageYOffset) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (window.pageYOffset == target) {
            clearInterval(obj.time);
            if (callback) {
                callback();
            }
        }
        // window.pageYOffset==window.scrollTop  是scrolltop的别称
        //            x      y
        window.scrollTo(0,window.pageYOffset+step);
    }, 15)
}

var swiper = document.querySelector('.swiper');
var circle = document.querySelector('.circle');
var ul = document.querySelector('.swiper ul');
var prev = document.querySelector('.prev');
var next = document.querySelector('.next');
var imgwidth = swiper.offsetWidth;
var num = 0, c = 0, flag = true,timer=null;
// 设置ul的长度
ul.style.width = ul.length * imgwidth + "px";
for (var i = 0; i < ul.children.length; i++) {
    var li = document.createElement("li");
    li.setAttribute("ie", i);
    circle.appendChild(li);
    li.onclick = function () {
        for (var i = 0; i < circle.children.length; i++) {
            circle.children[i].classList.remove("current");
        }
        this.classList.add("current");
        var index = this.getAttribute("ie");
        //  图片的索引和圆点的点击和圆点样式结合起来
        num = c=index;
        anmation(ul, -index * imgwidth)
    }
}
circle.children[0].classList.add('current');
// 图片索引 圆点索引
// 克隆最后一张图片
var first = ul.children[0].cloneNode(true);
ul.appendChild(first);
//下一张
next.onclick = function () {
    if (flag) {
        flag = false;
        if (num == 5) {
            ul.style.left = 0;
            num = 0;
        }
        num++;
        anmation(ul, -num * imgwidth, function () {
            flag = true;
        });
        c++;
        // 圆点跟随变化
        if (c == 5) {
            c = 0;
        }
        change();
    }
}

// 上一张
prev.onclick = function () {
    if (flag) {
        flag = false;
        if (num == 0) {
            num = 5;
            ul.style.left = -num * imgwidth + "px";
        }
        num--;
        anmation(ul, -num * imgwidth, function () {
            flag = true;
        });
        c--;
        if (c < 0) {
            c = 4;
        }
        change();
    }

}
//自动播放
timer=setInterval(function(){
    next.click();
},2000);
swiper.onmouseenter=function(){
    clearInterval(timer);
}
swiper.onmouseleave=function(){
    timer=setInterval(function(){
        next.click();
    },2000);
}