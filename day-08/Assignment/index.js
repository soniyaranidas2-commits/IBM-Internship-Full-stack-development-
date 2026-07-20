//Variables and Data Types
let firstName="Soniya";
let lastName="Das";
console.log(firstName,lastName);
let age=19;
console.log(age);
console.log(typeof age);
let place="Silchar";
let pin=788003;
let isNear=true;
let hobbies;
let listening=null;
console.log(typeof age,typeof place,typeof pin,typeof isNear,typeof hobbies,typeof listening);
let num1=20;
let num2=10;
let sum=num1+num2;
console.log(sum);
console.log(num1-num2);
console.log(num1*num2);
console.log(num1/num2);
let price=99.99;
console.log(typeof price);
console.log(typeof null);
console.log(typeof undefined);

//Comparison Operators
let num3=40;
let num4=30;
console.log(num3==num4);
console.log(num3===num4);
console.log(num3!=num4);
console.log(num3!==num4);
console.log(num3>num4);
console.log(num3<num4);
console.log(num3>=num4);
console.log(num3<=num4);
console.log(10=='10');
console.log(10==='10');
console.log(null==undefined);
console.log(null===undefined);
let age1=18;
let age2=19;
if(age1>age2){
    console.log(age1+" "+"Years old is older");
}
else{
    console.log(age2+" "+"Years old is older");
}

//Conditional Statements
let n=4;
if(n>0){
    console.log("The number is positive");
}
else{
    console.log("The number is negative");
}
let marks = 80;
if(marks>=40){
    console.log("The student passed");
}
else{
    console.log("The student failed");
}
if (n>marks){
    console.log(n+" "+"is grater");
}
else{
    console.log(marks+" "+"is grater");
}
if (num1>num2 && num1>num3){
    console.log(num1+" "+"is grater among the three");
}
else if(num2>num1 && num2>num3){
    console.log(num2+" "+"is grater among the three");
}
else{
    console.log(num3+" "+"is grater among the three");
}
if (num1%2==0){
    console.log(num1+" "+"is even number");
}
else{
    console.log(num1+" "+"is odd number");
}
if (marks>90){
    console.log("Excellent");
}
else if(marks>=75 && marks<=90){
    console.log("Good");
}
else if(marks>=50 && marks<=74){
    console.log("Average");
}
else{
    console.log("Fail");
}

//Arrays
let arr=["Soniya",19,true,null,undefined];
console.log(arr)
console.log(arr[0]) //First Element
console.log(arr[-1]) //Last Element
console.log(arr.length) //Length of array
arr.push(6,7); //Adds element in the last
console.log(arr)
arr.pop() //Removes last element
console.log(arr)
arr[2]="Silchar"
console.log(arr)

let arr2=[10,20,30,40,50];
console.log(arr2.length)
arr2.push(60)
console.log(arr2)
arr2.pop()
console.log(arr2)
arr2[2]=100;
console.log(arr2)

let data=[1,2,[3,4,5],6];
console.log(data[2][0])
console.log(data[2][2])
console.log("Length of Nested Array is"+" "+data[2].length)

//Challenge Question
let arr3=[1,2,3,4,5,6,7,8,9,10];
for(let i=0;i<arr3.length;i++){
    if(i%2==0){
        arr3[i]="JavaScript"
    }
}
console.log(arr3)

let name="Rani";
let age3=19;
let city="Silchar";
console.log("Hello I am"+" "+name+" "+"and I am"+" "+age3+" "+"years old. I live in"+" "+city)

let data2=["Soniya","BCA",19,null];
console.log(data2.length)