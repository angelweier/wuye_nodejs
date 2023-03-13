 var express=require('express')

 var app = express();

 app.use(express.static('images'))
 app.listen(9588,()=> {
     console.log('服务器启动成功');
 })

 app.get('/api/list',(err,res)=>{
     res.send({
         code:200,
         data:[{name:1},{name:2},{name:3}]
     })
 })

 app.use(express.urlencoded({extended:false}))

 //post接口的开发
 app.post('/api/setList',(req,res)=>{
     const newList = req.body
     console.log(newList);
     res.send({newList})
 })
