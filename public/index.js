document.addEventListener('DOMContentLoaded', ()=>{
    let num1 = document.getElementById('num1')
    let num2 = document.getElementById('num2')
    let ans = document.getElementById('ans')
    let add = document.getElementById('add')
    let result = document.getElementById('result')
    let submit = document.getElementById('submit')
    let sub = document.getElementById('sub')
    let mult = document.getElementById('mult')
    let div = document.getElementById('div')
    let mod = document.getElementById('mod')
    let sqrt = document.getElementById('sqrt')
    let areaOfC = document.getElementById('areaOfC')
    let celToF = document.getElementById('celToF')
    let fahToC = document.getElementById('fahToC')
    let msg = document.getElementById('message')
    let pre = document.querySelector('pre')
    let sum = document.getElementById('sum')
    let dif = document.getElementById('dif')
    let prod = document.getElementById('prod')
    let dividend = document.getElementById('dividend')
    let modulo = document.getElementById('modulo')
    let area = document.getElementById('area')
    let userAdd = document.getElementById('userAdd')
    let number1 = document.getElementById('number1')
    let number2 = document.getElementById('number2')
    let numFah = document.getElementById('numFah')
    let ansFah = document.getElementById('ansFah')
    let numCel = document.getElementById('numCel')
    let ansCel = document.getElementById('ansCel')
    let userDiv = document.getElementById('userDiv')
    let ansDiv = document.getElementById('ansDiv')
    let div1 = document.getElementById('div1')
    let div2 = document.getElementById('div2')
    let ansCir = document.getElementById('ansCir')
    let cir1 = document.getElementById('cir1')
    let ansMult = document.getElementById('ansMult')
    let mult1 = document.getElementById('mult1')
    let mult2 = document.getElementById('mult2')
    let numSqrt = document.getElementById('numSqrt')
    let ansSqrt = document.getElementById('ansSqrt')
    let numMod1 = document.getElementById('numMod1')
    let numMod2 = document.getElementById('numMod2')
    let ansMod = document.getElementById('ansMod')
    let numEx1 = document.getElementById('numEx1')
    let numEx2 = document.getElementById('numEx2')
    let ansEx = document.getElementById('ansEx')
    
    add.addEventListener('click', ()=>{
        
        fetch('/add')
        .then((response)=>{
            return response.json()
        })
        .then((obj)=>{
            num2.classList.remove('hide')            
            num1.innerText = obj.num1;
            num2.innerText = obj.num2;
            result.innerText = add = obj.num1 + obj.num2;
        })
        
    })
    
    sub.addEventListener('click', ()=>{
        fetch('/subtract')
        .then((response)=>{
            return response.json()
        })
        .then((obj)=>{
            num2.classList.remove('hide')            
            num1.innerText = obj.num1;
            num2.innerText = obj.num2;
            result.innerText = sub = obj.num1 - obj.num2;
        })
        
    })
    
    mult.addEventListener('click', ()=>{
        fetch('/multiply')
        .then((response)=>{
            return response.json()
        })
        .then((obj)=>{
            num2.classList.remove('hide')            
            num1.innerText = obj.num1;
            num2.innerText = obj.num2;
            result.innerText = mult = obj.num1 * obj.num2;
        })
        
    })
    
    div.addEventListener('click', ()=>{
        fetch('/divide')
        .then((response)=>{
            return response.json()
        })
        .then((obj)=>{
            num2.classList.remove('hide')            
            num1.innerText = obj.num1;
            num2.innerText = obj.num2;
            result.innerText = div = obj.num1 / obj.num2;
        })
        
    })   
    mod.addEventListener('click', ()=>{
        fetch('/modulo')
        .then((response)=>{
            return response.json()
        })
        .then((obj)=>{
            num2.classList.remove('hide')
            num1.innerText = obj.num1;
            num2.innerText = obj.num2;
            result.innerText = mod = obj.num1 % obj.num2;
        })
        
    })
    sqrt.addEventListener('click', ()=>{
        fetch('/square')
        .then((response)=>{
            return response.json()
        })
        .then((obj)=>{
            num2.classList.add('hide')
            num1.innerText = obj.num1;
            result.innerText = sqrt = Math.sqrt(obj.num1);
        })
        
    })
    areaOfC.addEventListener('click', ()=>{
        fetch('/areaOfC')
        .then((response)=>{
            return response.json()
        })
        .then((obj)=>{
            num2.classList.add('hide')
            num1.innerText = obj.num1;
            result.innerText = areaOfC = 3.141592 * Math.pow(obj.num1,2);
        })
        
    })
    celToF.addEventListener('click', ()=>{
        fetch('/celToF')
        .then((response)=>{
            return response.json()
        })
        .then((obj)=>{
            num2.classList.add('hide')
            num1.innerText = obj.num1;
            result.innerText = celToF = (obj.num1 * 1.8) + 32 + ' Fahrenheit';
            
        })
        
    })
    fahToC.addEventListener('click', ()=>{
        fetch('/fahToC')
        .then((response)=>{
            return response.json()
        })
        .then((obj)=>{
            num2.classList.add('hide')
            num1.innerText = obj.num1;
            result.innerText = fahToC = obj.num1 - 32 * 1.8 + ' Celsius';
            console.log(fahToC)
        })
        
    })
    userAdd.addEventListener('click', ()=>{       
        ans.innerText = Number(number1.value) + Number(number2.value);                
    })
    userCir.addEventListener('click', ()=>{
        ansCir.innerText = 3.141592 * Math.pow(cir1.value,2)
    })
    Sqrt.addEventListener('click', ()=>{
        ansSqrt.innerText = Math.sqrt(numSqrt.value)
    })
    userDiv.addEventListener('click', ()=>{
        ansDiv.innerText = div1.value / div2.value
    })
    userMult.addEventListener('click', ()=>{
        ansMult.innerText = mult1.value * mult2.value
    })
    fahrenheit.addEventListener('click', ()=>{
        ansFah.innerText = numFah.value * 1.8 + 32 + 'degrees'
    })
    celsius.addEventListener('click', ()=>{
        ansCel.innerText = numCel.value - 32 * 1.8 + ' Celsius'
    })
    modulo.addEventListener('click',()=>{
        ansMod.innerText = numMod1.value % numMod2.value
    })
    exponent.addEventListener('click',()=>{
        ansEx.innerText = Math.pow(numEx1.value,numEx2.value)
    })
})

