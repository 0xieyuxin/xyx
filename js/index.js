// 商品列表
function shoplist() {
    var shopList = document.querySelector('.shopList');
    var page = 1;
    page++;
    // ajax请求数据
    REQUEST.get('/goodlist', { params: { page: page } }, function (data) {
        // console.log(data);
        var html=shopList.innerHTML;
        for (var i = 0; i < data.length; i++) {
        html+= `
        
        <div class="listitem">
        
        <div class="list-img">
        <img src="${data[i].img_list_url}" alt="">
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
        shopList.innerHTML=html
            // var item = document.createElement('div');
            // item.classList.add('listitem');
            // item.innerHTML = `
        // <div class="list-img">
        //     <img src="${data[i].img_list_url}" alt="">
        // </div>
        // <div class="title">
        //     <p>${data[i].title}</p>
        // </div>
        // <div class="text">
        //     <span class="price">￥${data[i].price}</span>
        //     <span>${data[i].mack}</span>
        // </div>
        // shopList.appendChild(item);

        
        }
    })
}
shoplist();

//返回顶部
var back = document.querySelector('.back');
window.onscroll = function () {
    // 这是window下的滚动 
    var top = document.documentElement.scrollTop;
    // console.log(top);

    top > 100 ? back.style.display = 'block' : back.style.display = 'none';
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
}
