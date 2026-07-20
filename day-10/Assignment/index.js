//Conditions and Operators
let num=Number(prompt("Enter a number:"));
if(num%2==0){
    console.log("Even")
}
else{
    console.log("Odd")
}
let num2=Number(prompt("Enter a number:"))
if(num2%3==0){
    console.log("Fizz")
}
else if(num2%7==0){
    console.log("Buzz")
}
else if(num2%3==0 && num2%7==0){
    console.log("FizzBuzz")
}
else{
    console.log("Enter another number")
}
let num3=4;
let num4=6;
let num5=3;
if(num3>num4 && num3>num5){
    console.log(num3+" "+"is greater")
}
if(num4>num3 && num4>num5){
    console.log(num4+" "+"is greater")
}
else{
    console.log(num5+" "+"is greater")
}
let marks=60;
if(marks>=40){
    console.log("Pass")
}
else{
    console.log("Fail")
}

//Strings
let str="JavaScript is awesome"
let vowels="";
for(let i=0;i<str.length;i++){
    if(str[i]=="a"||str[i]=="e"||str[i]=="i"||str[i]=="o"||str[i]=="u"){
        vowels=vowels+str[i]
    }
}
console.log(vowels)
let str2="Masai School";
let count=0;
for(let i=0;i<str2.length;i++){
    if(str2[i]!=" "){
        count=count+1;
    }
}
console.log(count)
let str3="Full Stack Developent"
for(let i=0;i<str3.length;i++){
    console.log(str3[i])
}
let str4="We are learning JavaScript"
let count2=0;
for(let i=0;i<str4.length;i++){
    if(str4[i]==" "){
        count2=count2+1
    }
}
console.log(count2)
let str5="Hello";
let reverse="";
for(let i=str5.length-1;i>=0;i--){
    reverse = reverse + str5[i];
}
console.log(reverse)

//Loops
for(let i=1;i<21;i++){
    console.log(i)
}

let i=20
while(i>=1){
    console.log(i)
    i--
}

for(let i=1;i<11;i++){
    console.log(7+" "+"x"+" "+i+" "+"="+" "+7*i)
}

for(let i=1;i<51;i++){
    if(i%2==0){
        console.log(i)
    }
}

let sum=0;
for(let i=0;i<101;i++){
    sum=sum+i
}
console.log(sum)

//Arrays
let arr=[10, 20, 30, 40, 50];
arr.push(60)
console.log(arr)
console.log(arr.length)
arr.pop()
console.log(arr)
console.log(arr.length)
arr[2] = 100;
console.log(arr);

let fruits = ["Apple", "Mango", "Banana", "Orange"];
for (let fruit of fruits) {
    console.log(fruit);
}

let arr2 = [23, 56, 89, 12, 100, 45];
let largest = arr2[0];
for (let num of arr2) {
    if (num > largest) {
        largest = num;
    }
}
console.log(largest);

let arr3 = [5, 10, 15, 20, 25];
let sum2 = 0;
for (let num of arr3) {
    sum2 = sum2 + num;
}
console.log(sum2);

let arr4 = [2, 5, 8, 11, 14, 17, 20];
let count3 = 0;
for (let num of arr4) {
    if (num % 2 == 0) {
        count3++;
    }
}
console.log(count3);
