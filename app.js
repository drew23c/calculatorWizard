const express = require('express');
const app = express();
const morgan = require('morgan');
const port = 8877

app.use(express.static('public'))
app.use(morgan('tiny'));
app.get('/', (req,res)=>{
    res.send(homepage)
})
app.get('/add', (req,res)=>{
    let {num1,num2,add} = req.params;
    let obj = {}
    obj.num1
    obj.num2
    obj.num1 = Math.floor(Math.random() * 100)
    obj.num2 = Math.floor(Math.random() * 100)
    obj.add = obj.num1 + obj.num2
    res.json(obj)
})
app.get('/subtract',(req,res)=>{
    let {num1,num2,dif} = req.params;
    let obj = {}
    obj.num1
    obj.num2
    obj.num1 = Math.floor(Math.random() * 100)
    obj.num2 = Math.floor(Math.random() * 100)
    obj.dif = obj.num1 - obj.num2
    res.json(obj)
})
app.get('/multiply',(req,res)=>{
    let {num1,num2,prod} = req.params;
    let obj = {}
    obj.num1
    obj.num2
    obj.num1 = Math.floor(Math.random() * 100)
    obj.num2 = Math.floor(Math.random() * 100)
    obj.prod = obj.num1 * obj.num2
    res.json(obj)
})
app.get('/divide',(req,res)=>{
    let {num1,num2,div} = req.params;
    let obj = {}
    obj.num1
    obj.num2
    obj.num1 = Math.floor(Math.random() * 100)
    obj.num2 = Math.floor(Math.random() * 100)
    obj.div = obj.num1 / obj.num2
    res.json(obj)
})
app.get('/modulo',(req,res)=>{
    let {num1,num2,mod} = req.params;
    let obj = {}
    obj.num1
    obj.num2
    obj.num1 = Math.floor(Math.random() * 100)
    obj.num2 = Math.floor(Math.random() * 100)
    obj.mod = obj.num1 % obj.num2
    res.json(obj)
})
app.get('/square',(req,res)=>{
    let {num1,sqrt} = req.params;
    let obj = {}
    obj.num1
    obj.num1 = Math.floor(Math.random() * 100)
    obj.sqrt = Math.sqrt(obj.num1)
    res.json(obj)
})
app.get('/areaOfC',(req,res)=>{
    let {num1,areaOfC} = req.params;
    let obj = {}
    obj.num1
    obj.num1 = Math.floor(Math.random() * 20)
    obj.areaOfC = 3.141592 * Math.pow(obj.num1,2)
    res.json(obj)
})
app.get('/celToF',(req,res)=>{
    let {num1,celToF} = req.params;
    let obj = {}
    obj.num1
    obj.num1 = Math.floor(Math.random() * 100)
    obj.celToF = obj.num1 * 1.8 + 32
    res.json(obj)
})
app.get('/fahToC',(req,res)=>{
    let {num1,fahToC} = req.params;
    let obj = {}
    obj.num1
    obj.num1 = Math.floor(Math.random() * 100)
    obj.fahToC = obj.num1 - 32 * 1.8
    res.json(obj)
})
app.listen(port);
const homepage = `
<html>
<head>
<link href="style.css" type="text/css" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Fjalla+One" rel="stylesheet">
<script src="index.js"></script>
<script src="bootstrap/js/bootstrap.min.js"></script>
<link href="bootstrap/css/bootstrap.min.css" rel="stylesheet">
<title>Math Wizard School</title>
</head>
<body>
<div class="container">
    <h1>Math Wizard School</h1>
    <h3>Click a button and number(s) will be randomly picked to give a solution</h3>
    <p id="num1"></p>
    <p id="num2"></p>
    <p id="result"></p> 
    
    <button id="add" class="btn btn-primary">Add</button>
    <button id="sub" class="btn btn-primary">Subtract</button>
    <button id="mult" class="btn btn-primary">Multiply</button>
    <button id="div" class="btn btn-primary">Divide</button>
    <button id="mod" class="btn btn-primary">Modulo</button>
    <button id="sqrt" class="btn btn-primary">Square Root</button>
    <button id="areaOfC" class="btn btn-primary">Area of Circle</button>
    <button id="celToF" class="btn btn-primary">Celsius to Fahrenheit</button>
    <button id="fahToC" class="btn btn-primary">Fahrenheit to Celsius</button>
    <br>
    <div class="row">
    <div id="userInput" class="col-sm">
        <h3>Addition</h3>
        <p><input type="text" id="number1" class="form-control" placeholder="1st number"/></p> +
        <p><input type="text" id="number2" class="form-control" placeholder="2nd number"/></p> 
        <button id="userAdd" class="btn btn-primary">Add</button>  
        <p id="ans">The answer goes here</p>    
    </div>

    <div id="userInput" class="col-sm">
    <h3>Division</h3>
        <p><input type="text" id="div1" class="form-control" placeholder="1st number"/></p> /
        <p><input type="text" id="div2" class="form-control" placeholder="2nd number"/></p> 
        <button id="userDiv" class="btn btn-primary">Calculate</button>
        <p id="ansDiv">The answer goes here</p>            
    </div>

    <div id="userInput" class="col-sm">
    <h3>Multiplication</h3>
        <p><input type="text" id="mult1" class="form-control" placeholder="1st number"/></p> *
        <p><input type="text" id="mult2" class="form-control" placeholder="2nd number"/></p> 
        <button id="userMult" class="btn btn-primary">Calculate</button>
        <p id="ansMult">The answer goes here</p>            
    </div>

    <div id="userInput" class="col-sm">
    <h3>Area of Circle</h3>
        <p>3.141592 * <input type="text" class="form-control" id="cir1" placeholder="radius"/>&sup2</p>
        <button id="userCir" class="btn btn-primary">Calculate</button>
        <p id="ansCir">The answer goes here</p>            
    </div>
    <div id="userInput" class="col-sm">
        <h3>Square Root</h3>
        <p><input type="text" id="numSqrt" class="form-control" placeholder="Enter a number"/></p>
        <button id="Sqrt" class="btn btn-primary">Calculate</button>
        <p id="ansSqrt">The answer goes here</p>            
    </div>

    <div id="userInput" class="col-sm">
        <h3>Solution for Fahrenheit</h3>
        <p>(<input type="text" id="numFah" class="form-control" placeholder="celsius"/> * 1.8) + 32</p>
        <button id="fahrenheit" class="btn btn-primary">Calculate</button>
        <p id="ansFah">The answer goes here</p>            
    </div>

    <div id="userInput" class="col-sm">
        <h3>Solution for Celsius</h3>
        <p>(<input type="text" id="numCel" class="form-control" placeholder="fahrenheit"/> - 32) + 1.8</p>
        <button id="celsius" class="btn btn-primary">Calculate</button>
        <p id="ansCel">The answer goes here</p>            
    </div>
    <div id="userInput" class="col-sm">
        <h3>Modulo</h3>
        <p><input type="text" id="numMod1" class="form-control" placeholder="Enter Value"/></p>
        <p><input type="text" id="numMod2" class="form-control" placeholder="Enter Value"/></p>        
        <button id="modulo" class="btn btn-primary">Calculate</button>
        <p id="ansMod">The answer goes here</p>            
    </div>
    <div id="userInput" class="col-sm">
        <h3>Exponent</h3>
        <p><input type="text" id="numEx1" class="form-control" placeholder="Enter the value"/></p>
        <p>To the power of<input type="text" id="numEx2" class="form-control" placeholder="Enter the value"/></p>        
        <button id="exponent" class="btn btn-primary">Calculate</button>
    <p id="ansEx">The answer goes here</p>            
</div>

    </div>
</div>
</body>
</html>`
