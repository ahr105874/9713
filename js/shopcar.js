window.addEventListener('load',function(){
    // 后退按钮
    var remove=document.querySelector('#remove');
    remove.addEventListener('touchstart',function(){
        location.assign('index.html');
    })




    // 点击底部的导航栏 切换相应的页面以及样式

    var nav_bottom=document.querySelectorAll('.nav-bottom');
    for(var i=0;i<nav_bottom.length;i++){
        nav_bottom[i].setAttribute('index',i);
        nav_bottom[i].addEventListener('touchstart',function(){
            for(var i=0;i<nav_bottom.length;i++){
                nav_bottom[i].className='nav-bottom';
            }
            this.className='nav-bottom color-blue';
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




