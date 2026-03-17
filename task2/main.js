//if ოპერატორი

let age = 18;

if (age >= 18) {
  console.log("სრულწლოვანი ხარ");
}

//2. if...else

let age2 = 16; 

if (age2 >= 18) {
  console.log("სრულწლოვანი ხარ");
} else {
  console.log("არ ხარ სრულწლოვანი");
}

//3. if...else if...else

let score = 81; // score ქულა  //40, 51, 70, 80, 81;

if (score > 80) {
    console.log("საუკეთესო შეფასება")
} else if (score >=50 && score <= 80){
    console.log("დამაკმაყოფილებელი") 
}else {
    console.log("სამწუხაროდ ჩაიჭერი!")
}

let asaki = 5;
while (asaki < 18) {
    console.log("asaki gaxda" + asaki);
    asaki++; //+1;
}

let count = 10;

do {
    console.log(count);
    count++;
}while (count < 5);


let asaki2 = 5;
while (asaki2 < 20) {
    console.log(asaki2);
    asaki2++; //+1;
}
console.log("=======");
do{
    console.log("DO", asaki2);
    asaki2++;
}while(asaki2<10);

for (let i = 1; i <=10; i++){
    console.log(`იტერაციის ნომერი: ${i}`)
}

let fruits = ["vashli", "banani", "alubali"];

for(let xili of fruits){
    console.log(xili)
}


