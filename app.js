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
app.get('userAdd/:number1/:number2', (req,res)=>{
    let {number1,number2,userAdd} = req.params
    let obj = {}
    obj.number1 = number1
    obj.number2 = number2
    obj.userAdd = userAdd
    obj.userAdd = obj.number1 + obj.number2
    res.json(obj)
})
app.listen(port);
const homepage = `
<html>
<head>
<link href="style.css" type="text/css" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Fjalla+One" rel="stylesheet">
<script src="index.js"></script>
<title>Math Wizard School</title>
</head>
<body>
    <h1>Math Wizard School</h1>
    <h3>Click a button and number(s) will be randomly picked to give a solution</h3>
    <p id="num1"></p>
    <p id="num2"></p>
    <p id="result"></p> 
    
    <button id="add">Add</button>
    <pre id="sum" class="hide">number + number = sum</pre>
    <button id="sub">Subtract</button>
    <pre id="dif" class="hide">number - number = difference</pre>    
    <button id="mult">Multiply</button>
    <pre id="prod" class="hide">number * number = product</pre>    
    <button id="div">Divide</button>
    <pre id="dividend" class="hide">number / number = dividend</pre>    
    <button id="mod">Modulo</button>
    <pre id="modulo" class="hide">number / number = remainder</pre>        
    <button id="sqrt">Square Root</button>
    <button id="areaOfC">Area of Circle</button>
    <pre id="area" class="hide">pi * r to the 2nd power = area</pre>                
    <button id="celToF">Celsius to Fahrenheit</button>
    <button id="fahToC">Fahrenheit to Celsius</button>
    <br>
    <div id="userInput">
        <h3>Addition</h3>
        <p><input type="text" id="number1" placeholder="1st number"/></p> +
        <p><input type="text" id="number2" placeholder="2nd number"/></p> 
        <button id="userAdd">Add</button>  
        <p id="ans">The answer goes here</p>    
    </div>

    <div id="userInput">
    <h3>Division</h3>
        <p><input type="text" id="div1" placeholder="1st number"/></p> /
        <p><input type="text" id="div2" placeholder="2nd number"/></p> 
        <button id="userDiv">Calculate</button>
        <p id="ansDiv">The answer goes here</p>            
    </div>

    <div id="userInput">
    <h3>Area of Circle</h3>
        <p>3.141592 * <input type="text" id="cir1" placeholder="radius"/>&sup2</p>
        <button id="userCir">Calculate</button>
        <p id="ansCir">The answer goes here</p>            
    </div>

    <div id="userInput">
        <h3>Solution for Fahrenheit</h3>
        <p>(<input type="text" id="numFah" placeholder="celsius"/> * 1.8) + 32</p>
        <button id="fahrenheit">Calculate</button>
        <p id="ansFah">The answer goes here</p>            
    </div>

    <div id="userInput">
        <h3>Solution for Celsius</h3>
        <p>(<input type="text" id="numCel" placeholder="fahrenheit"/> - 32) + 1.8</p>
        <button id="celsius">Calculate</button>
        <p id="ansCel">The answer goes here</p>            
    </div>

</body>
</html>`
