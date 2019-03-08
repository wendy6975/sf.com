//下拉菜单
(function(){
    var lis=document.getElementById("Hnav").children;
    for(var li of lis){
        li.onmouseenter=function(){
            var a=this;
            console.log(a);
            for(var li of lis){
                li.children[1].style.display="none";
            }
            a.children[1].style.display="block";
        }
        li.onmouseleave=function(){
            var a=this;
            a.children[1].style.display="none";
        }
        
    }


//登录界面
    var Hlogin=document.getElementById("Hlogin");
    var reg=document.getElementById("reg");
    Hlogin.onclick=function(){ 
        reg.style.display="block";
    }
    var close=document.getElementById("close");
    close.onclick=function(){
        reg.style.display="none";
    } 


//登录验证

    var h=document.getElementById("uphone");
    var p=document.getElementById("upwd");
    var button=document.getElementById("login");
   
    var n=[];
    h.onfocus=function(){
        Focus(h,"请输入11位手机号");
    }
    h.onblur=function(){
        var reg=/^(1[3-8]\d{9})$/;
        Blur(reg,this.value,h,"手机号格式正确","手机号格式有误",0);
    }
    p.onfocus=function(){
        Focus(p,"请输入相应密码");
    }
    p.onblur=function(){
        var reg=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$/;
        Blur(reg,this.value,p,"密码格式正确","密码格式有误",1);
    }
    var Focus=function(a,b){
        a.nextElementSibling.innerHTML=b;
    }
    var Blur=function(reg,a,b,c,d,e){
        if(reg.test(a)){
            b.nextElementSibling.innerHTML=c;
            b.nextElementSibling.style.color="#4ec14e";
            n[e]=1;
        }else{
            b.nextElementSibling.innerHTML=d;
            b.nextElementSibling.style.color="#dc1e32";
            n[e]=0
            
            return;
        }
        isDisabled();
    }
    var isDisabled=function(){
        var m;
        for(var i of n){
            if(i==0){
                m=0;
                return;
            }else{
                m=1;
            }
        }
        if(m==0||n.length<2){
            button.disabled=true;
            button.style.backgroundColor="#999";
        }else{ 
            button.style.backgroundColor="#dc1e32";
            button.style.cursor="pointer";
            button.disabled=false;
        }
    }
    button.onclick=function(){
        ajax({
            url:"http://127.0.0.1:3000/user/login",
            type:"post",
            data:`phone=${h.value}&upwd=${p.value}`,
            dataType:"json",
        }).then(function(data){
            console.log(data.code);
            /* */ if(data.code==1){
                alert("登录成功");
                
                var Hlogin=document.getElementById("Hlogin");
                sessionStorage.setItem("uname",data.data[0].uname);
                setTimeout(function(){
                    location.href="index2.html";
                },100);
            }else{
                alert("登录失败");
            }
        })
    }
    
    window.onload=function(){
        var n=this.sessionStorage.getItem("uname"); 
        var Hlogin=document.getElementById("Hlogin");
        if(n){
            document.getElementById("reg").style.display="none";
            
            Hlogin.innerHTML=`欢迎回来，${n}，<span id="logout">退出</span>`;
            var logout=document.getElementById("logout");
                logout.onclick=function(){
                    sessionStorage.removeItem("uname");
                    Hlogin.innerHTML=`<a href="javascript:;">快速登陆/注册</a>`;
                }
        }else{
            
            Hlogin.innerHTML=`<a href="javascript:;">快速登陆/注册</a>`;
        }
    setInterval(
        function(){
            var carousel=document.getElementById("carousel")
            var divs=carousel.children;
            var carcricle=document.getElementById("carcricle");
            var lis=carcricle.children[0].children;
            console.log(carousel);
            isActive(divs,carousel);
            isActive(lis,carcricle);
        },1000)
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
    }
})()
