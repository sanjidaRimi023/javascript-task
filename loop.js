// for loop 

const name = ['rime', 'binoy', 'ripa', 'uthsob'];
for (const student of name){
    console.log(student);
}

const roll = [909, 919, 956, 954, 969];
for (const studentroll of roll){
    console.log(studentroll);
    console.log("every student roll");
}

// while loop

let num = 50;
while(num <= 100) {
    console.log('the number:', num);
    num++;
}

// 1 to 10 number total

let number = 1;
let total = 0;
while(number <= 10){
    console.log('num:', number);
    total = total + number;
    console.log('total:', total);
    number++;
}

// even number

let mark = 1;
while(mark <= 20){
    console.log(mark);
    if(mark % 2 === 0){
        console.log('even num:', mark)
    }
    mark++;
}

// sum using for loop
let sum = 0;
for (let i = 300; i <= 400; i++){
    console.log(i);
    sum = sum + i;
}
console.log('sum of 300 to 400:', sum);


for (let i = 0; i < 5; i+=3) {
    console.log(i);
   }

   const array = [1, 2, 3, 4, 5, 6, 7];

for (let i = 1; i < array.length; i++) {
 if (i == 5) {
 continue;
 }
 console.log(array[i]);
}