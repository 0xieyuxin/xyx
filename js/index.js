// 
nav();
// 商品列表
var shopList = document.querySelector('.shopList');
var back = document.querySelector('.back');
var input=document.querySelector('.search input');
var btn=document.querySelector('.search button');
var load=document.querySelector('.load');
// 点击 获取当前点击的文字
var navlist = document.querySelector('.navlist');
var page = 1;
add(page);

window.onscroll = function () {
    var top = document.documentElement.scrollTop;
    // 返回顶部
    top > 10 ? back.style.display = 'block' : back.style.display = 'none';
    back.onclick = function () {
        // anmations(window, 0)
        var t = setInterval(function () {
            top = top - 30;
            document.documentElement.scrollTop = top
            if (document.documentElement.scrollTop == 0) {
                clearInterval(t)
            }
        }, 16.5)
    }

    // 图片懒加载
    var img = document.querySelectorAll('.list-img img');
    var imgs = img[img.length - 1];
    for (var i = 0; i < img.length; i++) {
        if (window.innerHeight + top >= img[i].offsetTop) {
            img[i].src = img[i].dataset.src;
        }
    }

    // 判断数据触底
    if (Math.abs((window.innerHeight + top)-document.body.scrollHeight)<50) {
        setTimeout(function () {
            // load.style.display="block";
            page++;
            add(page);
        }, 2000)

    }
}
function add(page) {
    REQUEST.get('/goodlist', {
        params: {
            page: page,
        }
    }, function (data) {
        console.log(data);
        var html = shopList.innerHTML;
        for (var i = 0; i < data.length; i++) {
            html += `
        <div class="listitem" data-id="${data[i].Id}">
        <div class="list-img">
        <img src="../asses/images/loading.jpg" alt="" data-src="${data[i].img_list_url}">
            </div>
            <div class="title">
        <p>${data[i].title}</p>
            </div>
            <div class="text">
        <span class="price">￥${data[i].price}</span>
        <span>${data[i].mack}</span>
        </div>
        </div>
        `
            shopList.innerHTML = html;
        }
        var items = document.querySelectorAll('.listitem');
        for (let i = 0; i < items.length; i++) {
            items[i].onclick = function (e) {
                console.log("sdf");
                //  获取当前点击的自定义属性
                var id = items[i].getAttribute('data-id');

                // var id=e.target.dataset.id;
                location.href = `./detail.html?goodId=${id}`;
            }
        }


    })
}

// 导航栏url传值
var lis = document.querySelectorAll('.navlist li a');
var list;
for (var i = 0; i < lis.length; i++) {
    lis[i].index = i;
    lis[i].onclick = function (e) {
        e.preventDefault();
        list = this.innerHTML;
        console.log(list);
        list=encodeURI(list)
        location.href=`./classification.html?type_one=${list}`
    }

}

//轮播图
var swiper = document.querySelector('.swiper');
var circle = document.querySelector('.circle');
var ul = document.querySelector('.swiper ul');
var prev = document.querySelector('.prev');
var next = document.querySelector('.next');
var imgwidth = swiper.offsetWidth;
var num = 0, c = 0, flag = true, timer = null;
function swipers() {
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
            num = c = index;
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
    timer = setInterval(function () {
        next.click();
    }, 2000);
    swiper.onmouseenter = function () {
        clearInterval(timer);
    }
    swiper.onmouseleave = function () {
        timer = setInterval(function () {
            next.click();
        }, 2000);
    }
}
function change() {
    for (var i = 0; i < circle.children.length; i++) {
        circle.children[i].classList.remove("current");
    }
    circle.children[c].classList.add("current");
}
swipers();


// 搜索
btn.onclick=function(){
    console.log(input.value);
    var text=encodeURI(input.value)
    location.href=`./search.html?word=${text}`
}
