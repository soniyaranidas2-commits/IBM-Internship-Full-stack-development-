// You have to take one input as number, if that number is multiple of 3 then print "Humpty", if the number is multiple of 5 the  print "dumpty", if number is multiple of both 3 and 5 then print "Humpty Dumpty"
let n=6;
if(n%3==0){
    console.log("Humpty")
}
else if(n%5==0){
    console.log("dumpty")
}
else if(n%3==0 && n%5==0){
    console.log("Humpty Dumpty")
}
else{
    console.log("Try another number.")
}

// You have one string which is str = "We are in full stack batch", in this string you need to get all vowels and make one word out of it. then print it.
// output = eaeiuaa
let str = "We are in full stack batch";
let vowels = "";

for (let i = 0; i < str.length; i++) {
    if (
        str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" ||str[i] == "u"
    ) {
        vowels = vowels + str[i];
    }
}

console.log(vowels);

// let firstStudent = std[0];


// for(let i=0; i<firstStudent.length; i++){
//     console.log(firstStudent[i])
// }



// let num = 1;


// while(num<10){
//     console.log("while loop is running");


//     num++;
// }



//for of loop is specially for arrays only



// let arr = [1,2,3,4,5,6,7,8,9];


// for(let num of arr){
//     console.log(num)
// }


// let arr1 = ["Bikash", "Satyam", "Dhiman", "Satya", "Dikshyan"];



// for (let names of arr1){
//     if(names == "Satyam"){
//         console.log("He is from ADTU")
//     }else{
//         console.log("He is from Amity")
//     }
// }



//for in loop, this loop is specially used in objects



let obj = {
    name: "Suraj",
    uni: "ADTU",
    course: "Btech",
    year: 3,
    isAlumni: false,
    sub: ["FS", "AI", "DL", "ML"],
    hobbies: {
        games: ["Cricket", "Football"],
        listening: "Starboy",
    },
    67:"test"
}


//Find which subject has maximum marks along with subject name


let obj1 = {
    maths:56,
    english:89,
    science:67,
    punjabi:88
}


let max = 0
let sub = ""


for (let i in obj1){
    if(obj1[i]>max){
        max = obj1[i];
        sub = i
    }
}

console.log(sub, max)

//functions




function myFunction(a, b, c) {   //parameters
    let out = a + b + c;


    console.log(out)
}


//ES6:- Ecma script 6, commonJS


// let, const, arrow function


const arrowFun = (a, b, c) => {
    let out = a + b + c;


    console.log(out)
}


arrowFun(89, 89, 89)


// arrowFun(10, 20, 30)   //invoking the function
// arrowFun(10, 60, 40)


// arrowFun(178, 567, 4563)


// arrowFun(78654, 87634, 976345) //arguments



console.log(batch)


var batch = "FS";

