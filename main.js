let selection = document.querySelector('#price');
let result=document.querySelector('#totalSum');
let totalOfEvery=document.querySelector('#totalSumOfEveryItem');
let resultIphone=document.querySelector('#rIphone');
let resultSony=document.querySelector('#rSony');
let resultSamsung=document.querySelector('#rSamsung');
let resultHuawei=document.querySelector('#rHuawei');
let numbers=document.querySelector('#numbersOfSelectedItem');
let a=document.querySelector('#all');

let sI=document.querySelector('#singleIphone');
let sSony=document.querySelector('#singleSony');
let sSamsung=document.querySelector('#singleSamsung');
let sH=document.querySelector('#singleHuawei');

numbers.addEventListener('change',() => {
result.innerText=selection.options[selection.selectedIndex].value;

if(result.innerText=="iphone")
{
    resultIphone.innerText='Iphone Total Price $';
    a.innerText+=1199*numbers.value;
    resultIphone.innerText+=1199*numbers.value;
    sI.innerText=' Single Iphone Price $'+1199;
}
else if(result.innerText=="sony")
{
    resultSony.innerText='Sony Total Price $';
    resultSony.innerText+=750*numbers.value;
    a.innerText+=750*numbers.value;
    sSony.innerText=' Single Sony Price $'+750;
}
else if(result.innerText=="samsung")
{
    resultSamsung.innerText=' samsung total price $';
    resultSamsung.innerText+=999*numbers.value;
    a.innerText+=999*numbers.value;
    sSamsung.innerText=' Single Samsung Price $'+999;
}
else if(result.innerText=="huawei")
{
    resultHuawei.innerText='huawei total price $';
    resultHuawei.innerText+=850*numbers.value;
    a.innerText+=850*numbers.value;
    sH.innerText=' Single Huawei Price $'+850;
}
});