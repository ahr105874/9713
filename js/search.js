window.addEventListener('load',function(){
    var close=document.querySelector('#close');
    var hot_bd=document.querySelector('.hot-bd');
    var flag=1;
    close.addEventListener('touchstart',function(){
        if(flag){
            hot_bd.style.display='none';
            close.innerHTML='打开';
            flag=0;
        }else{
            hot_bd.style.display='block';
            close.innerHTML='隐藏';
            flag=1;
        }
    })
    var remove=document.querySelector('#remove');
    remove.addEventListener('touchstart',function(){
        location.assign('index.html');
    })
})