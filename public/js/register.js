var register=document.getElementById("register");

var input=register.querySelectorAll("#register>div>input");
var button=register.querySelector("#register>div>button");
console.log(input[0]);
var n=[];
input[0].onfocus=function(){
    Focus(input[0],"用户名长度为3~8,只能包含数字、字母、汉字");
    
}
input[1].onfocus=function(){
    Focus(input[1],"请输入11位手机号码");
    
}
input[2].onfocus=function(){
    Focus(input[2],"请输入常用邮箱");
    
}
input[3].onfocus=function(){
    Focus(input[3],"密度为6~12位字符，必须且只能包含字母，数字");
    
}
input[4].onfocus=function(){
    Focus(input[4],"请再次输入密码");
    
}
input[0].onblur=function(){
    var reg=/^[0-9a-zA-Z\u4e00-\u9fa5]{3,8}$/;
    Blur(reg,uname.value,0,"用户名格式正确","用户名格式错误");
}
input[1].onblur=function(){
    var reg=/^1[3-8]\d{9}$/;
    Blur(reg,phone.value,1,"手机号码格式正确","手机号码格式错误");
}
input[2].onblur=function(){
    var reg=/^[0-9a-zA-Z]+@[0-9a-zA-Z]+\.(com|cn)$/;
    Blur(reg,email.value,2,"邮箱格式正确","邮箱格式错误");
}
input[3].onblur=function(){
    var reg=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$/;
    Blur(reg,upwd.value,3,"密码格式正确","密码格式错误");
}
input[4].onblur=function(){
    if(upwd.value==upwd2.value&&upwd2.value!=""){
        input[4].nextElementSibling.innerHTML="密码已确认";
        input[4].nextElementSibling.style.color="#4ec14e";
        n[4]=1;
    }else{
        input[4].nextElementSibling.innerHTML="密码不一致";
        input[4].nextElementSibling.style.color="#dc1e32";
        n[4]=0;
    }
    isDisabled();
}
var Focus=function(a,b){
    a.nextElementSibling.innerHTML=b;
}
var Blur=function(reg,a,b,c,d){
    if(reg.test(a)){
        input[b].nextElementSibling.innerHTML=c;
        input[b].nextElementSibling.style.color="#4ec14e";
        n[b]=1;
    }else{
        input[b].nextElementSibling.innerHTML=d;
        input[b].nextElementSibling.style.color="#dc1e32";
        n[b]=0
        
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
    if(m==0||n.length<5){
        button.disabled=true;
        button.style.backgroundColor="#999";
    }else{ 
        button.style.backgroundColor="#dc1e32";
        button.style.cursor="pointer";
        button.disabled=false;
    }
}

button.onclick=function(){
    var uname=document.getElementById("uname").value;
var upwd=document.getElementById("upwd").value;
var phone=document.getElementById("phone").value;
var email=document.getElementById("email").value;
    ajax({
        url:"http://127.0.0.1:3000/user/register",
        type:"post",
        data:`uname=${uname}&upwd=${upwd}&phone=${phone}&email=${email}`,
        dataType:"json",
    }).then(function(data){
        console.log(data);
        if(data==1){
            alert("注册成功");
            location.href="../../public/html/index2.html";
            document.getElementById("reg").style.display="bolck";
        }else if(data==2){
            alert("该手机号已注册");
        }else{
            alert("注册失败");
        }
    })
}
/**/

