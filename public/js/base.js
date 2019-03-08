//选项卡
document.getElementById("wl").style.zIndex=10;
var options=document.querySelectorAll("[data-options=option]");
for(var option of options){
    option.onmouseenter=function(){
        var option=this;
        var lis=option.parentElement.parentElement.children;
        for(var li of lis){
            li.children[0].className="";
        }
        option.className="hover";
        var divs=document.querySelectorAll("#business>div");
        for(var div of divs){
            div.style.zIndex="";
        }
        var id=option.getAttribute("data-target").slice(1);
        document.getElementById(id).style.zIndex="10";
    }
}
//var login=document.querySelector("[data-login=login]");


/* $("#wl").css("z-index","10");
$("[data-options=option]").mouseenter(function(){
    var $a=$(this);
    $a.addClass("hover").parent().siblings().children().removeClass("hover");
    var id=$a.attr("data-target");
    $(id).css("z-index",10).siblings(".wu").css("z-index",0);
}); */

//轮播
/*window.onload=function(){
    setInterval(
        function(){
            var carousel=document.getElementById("carousel")
            var divs=carousel.children;
            var carcricle=document.getElementById("carcricle");
            var lis=carcricle.children[0].children;
            console.log(carousel);
            isActive(divs,carousel);
            isActive(lis,carcricle);
        },1000
    )
}
function isActive(elem,parent){
    if(elem[elem.length-1].className=="active"){
        elem[elem.length-1].className="";
        elem[0].className="active"
    }else {
        var act = parent.getElementsByClassName("active")[0];
        act.className = "";
        act.nextElementSibling.className = "active";
    }
}*/
var carcricle=document.getElementById("carcricle");
var lis=carcricle.children[0].children;
for(var li of lis){
    li.onmouseenter=function(){
        var li=this;
        var carli=document.getElementById("carcricle").getElementsByClassName("active")[0];
        var cardiv=document.getElementById("carousel").getElementsByClassName("active")[0];
        
        cardiv.className=carli.className="";
        var id=this.getAttribute("data-target");

        var div=document.getElementById(id);

        li.className=div.className="active";
    }
}



















