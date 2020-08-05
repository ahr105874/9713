window.addEventListener('load',function(){
    var header=document.querySelector('.header');
    var banner=document.querySelector('.banner');
    window.addEventListener('scroll',function(){
        if(window.pageYOffset>=banner.offsetHeight){
            header.style.backgroundColor='skyblue';
        }else{
            header.style.backgroundColor='';
        }
    });

    var classs=document.querySelector('.classs');
    classs.addEventListener('touchstart',function(){
        location.assign('more.html')
    })

    // 轮播图


    // 点击登录跳转到登录界面
    var log_in=document.querySelector('.log_in');
    log_in.addEventListener('touchstart',function(){
        location.assign('login.html');
    });
    // 点击搜索块跳转到搜索界面
    var search=document.querySelector('.search');
    search.addEventListener('touchstart',function(){
        location.assign('search.html')
    });
    

    // 点击底部的导航栏 切换相应的页面以及样式

    var footer=document.querySelector('.footer');
    var a=footer.querySelectorAll('a');
    for(var i=0;i<a.length;i++){
        a[i].setAttribute('index',i);
        a[i].addEventListener('touchstart',function(){
            for(var i=0;i<a.length;i++){
                a[i].className='';
            }
            this.className='color-blue';
            if(this.getAttribute('index')==0){
                location.assign('index.html');
            }else if(this.getAttribute('index')==1){
                location.assign('more.html');
            }else if(this.getAttribute('index')==2){
                location.assign('shopcar.html');
            }else if(this.getAttribute('index')==3){
                location.assign('login.html');
            }
        })
    }
})