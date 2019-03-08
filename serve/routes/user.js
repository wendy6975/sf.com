const express=require("express");
const pool=require("../pool");
var router=express.Router();
router.post("/register",(req,res)=>{
    console.log(5545);
    /* */ var obj=req.body;
    console.log(obj);
    pool.query(`SELECT *FROM sf_user WHERE phone=?`,[obj.phone],(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            res.send("2");
        }else{
            pool.query('INSERT INTO sf_user SET ?',[obj],(err,result)=>{
                if(err)throw err;
                console.log(result);
                if(result.affectedRows>0){
                    
                    res.send("1");
                }else{
                    res.send("0");
                }
            });
        }
    })
});
router.post("/login",(req,res)=>{
    var obj=req.body;
    console.log(obj);
    pool.query('SELECT *FROM sf_user WHERE phone=? AND upwd=?',[obj.phone,obj.upwd],(err,result)=>{
        if(err)throw err;
        if(result.length>0){
            res.send({code:1,data:result});
        }else{
            res.send({code:0,data:result});
        }
    });
});
module.exports=router;