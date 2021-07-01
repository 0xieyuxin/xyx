
    var header = document.querySelector('header');
    header.innerHTML = `
    <div class="top">
    <div class="logo">
    <img src="../asses/images/logo.png" alt="">
    </div>
    <div class="search">
        <input type="text" name="" id="" placeholder="请输入想要的商品"><button>搜索</button>
    </div>
    </div>
    <nav>
    <li class="a-bottom"><a href="./index.html">首页</a></li>
    <li><a href="./login.html">登录</a></li>
    <li><a href="./register.html">注册</a></li>
    </nav>
    `
    var lis=document.querySelectorAll('nav li');
    for(var i=0;i<lis.length;i++){
        lis[i].index=i;
    }

    var nav=document.querySelector('header nav');
    window.onscroll=function(){
        var top=document.documentElement.scrollTop;
        var dictop=nav.offsetTop;
        console.log(top,dictop);
        // if(top>=dictop){
        //     nav.classList.add('fix');
        // }else{
        //     nav.classList.remove('fix');

        // }
    }

