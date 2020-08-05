window.addEventListener('load',function(){
   
    // 点击相应的显示相应的内容
    var num=0;
    var li=document.querySelectorAll('li');
    var content=document.querySelectorAll('.content');
    for(var i=0;i<li.length;i++){
        li[i].setAttribute('index',i);
        li[i].addEventListener('touchstart',function(){
            for(var i=0;i<li.length;i++){
                li[i].className='';
            }
            this.className='current';
            num=this.getAttribute('index');
            content[num].style.diplay='block';
        })
    }



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
