
//成功案例下拉菜单
var suc=document.getElementById("suc");
suc.onclick=function(){
    var ul=suc.parentElement.nextElementSibling;
    if(ul.className=="none"){
        ul.className=""
    }else{
        ul.className="none"
    }
}