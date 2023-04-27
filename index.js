// 1. ყველა კენტი რიცხვი 2000-მდე
for( i = 1 ; i <= 2000 ; i+=2){
    console.log(`${i}`);
}

// ------------------------------------

// 2. ყველა ლუწი რიცხვი -2000 მდე
for( i = 0 ; i >= -2000 ; i-=2){
    console.log(`${i}`);
 }

// ------------------------------------

// 3. ჩექფოინთი

for (let i = 0; i <= 100; i++) {
    if (i == 10 || i === 25 || i === 75 || i === 90) {
        console.log(`გილოცავთ, თქვენ გაიარეთ ${i} კილომეტრიანი ჩექფოინთი`);
      }
}

// ------------------------------------

// 4. კენტი რიცხვების ჯამი
let jami = 0;
for (let i = 1; i <= 25000; i += 2) {
  jami += i;
}
console.log(`0 დან 25000 მდე კენტი რიცხვების ჯამია ${jami}`);

// ------------------------------------

// 5. ჯამი და ჯამი

let kenti = 0
let luwi = 0
for( i = 501; i <800; i += 2){
    kenti +=i;
}
for( i= 1000; i <= 2000; i += 2){
    luwi +=i;
}
console.log(`ლუწი და კენტი რიცხვების ჯამია ${kenti + luwi}`)

// ------------------------------------

// 6. მათემატიკური ფაქტორიალი
let x = 2;
let factorial = 1;
for(i = 1; i <= x ; i++ ){
    factorial *= i;
}
console.log(`${x} ის ფაქტორიალი არის ${factorial}`);

// ------------------------------------

// 7. 300-is გამყოფები
for( i = 1; i <= 300 ; i++){
    if( 300 % i === 0 ){
        console.log(i);
    }
}

// ------------------------------------

// 8. რიცხვის გამყოფები
let z = 300
let gamyofebisJami = 0;
for( i = 1; i <= z ; i++){
        if( z % i === 0 ){
            gamyofebisJami +=i
        }
}
console.log(gamyofebisJami);

// ------------------------------------

// 9. მარტივი რიცხვი

let y= 4;
let count = 0;
for( i = 1; i <= y ; i++){
        if( y % i === 0 ){
            count++
        }
}
if(count === 2){
    console.log(`${y} მარტივი რიცხვია`);
}else{
    console.log(`${y} არ არის მარტივი რიცხვია`);
}



