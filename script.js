let js = 'Amazing';
console.log(40+8+23-10);
console.log("Jonas");
console.log(23);

let firstName = "Jonas Schmedtamnn";
console.log(firstName);
/*values and Variables*/
let country = 'Portugal';
let continent = 'Europe';
let population = 10;
console.log(country);
console.log(continent);
console.log(population);
/*Data Types*/
let isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof continent);
console.log(typeof country);
console.log(typeof language);*/
 let const var*/
language = 'portuguese';
const country = 'portugal';
const continent = 'Europe';
const isIsland = false;
console.log(population /2);
population ++;
console.log(population);
console.log(population < 6);
console.log(population < 33);
const description1 = 
country + ' is in ' + continent + ', and its ' + population + 'million people speak ' + language;
console.log(description1);
/*------------------>Strings and Template Literals<---------------------------- */
const description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;*/
/*------------>Taking Decession : IF/else Statement<------------ */
if (population > 33){
  console.log(`${country}'s population is above average`);
}else{
  console.log(
 `${country}'s population is ${33 - population } million value average`,

 );
  
}
console.log('123' < 57);
/*------->Equality Operations<----------------- */
const numNeighbours = prompt('How many neighbour countries does your country have? ');
const numNeighbours = Number(prompt('How many neighbour countries does your country have?'));
if (numNeighbours === 1){
  console.log('only one border');
}else if(numneighbours >1){
  console.log('only 1 border');
}else{
  console.log('No border');
}
/*Logical Operator*/
if(language === 'english' &&population < 50 && ! isIsland);
{
  console.log(`You should live in ${country}:)`);
} else {
  console.log(`${country} does not meet your criteria :(`);
}
/*9The Switch Statement*/
switch (language){
  case 'chinese':
  case 'Mandarin':
    console.log('Most numbers of native speakers!');
    break;
  case 'spanish':
    console.log('2nd place in the number of native speakers');
    break;
  case 'english':
    console.log('3rd place');
    break;
  case 'hindi':
    console.log('Number 4');
    break;
  case 'arabic':
    console.log('5th Most spoken language');
    break;
  default:
    console.log('Great language too :D');
}
Conditional ternary operator*/

console.log(`${country}'s population is ${population > 33 ? 'above' : 'below'}average`);*/

let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log( typeof 23);
console.log(typeof 'Jonas');
 
let year;

year = 1991;
console.log(typeof year);
const now = 2037;
const ageJonas = now-1990;
const ageSarah = now-2020;*/
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageSarah / 3, 2 ** 3);


const firstName = 'Jonas';
const lastName = 'Schmedtmann';
console.log(firstName +' ' +  lastName);

let x = 10 + 5;
x += 10;
x *= 4;
x++;
x--;
x--;
console.log(x);
console.log(ageJonas < ageSarah);
console.log(ageJonas >= 50);
console.log(ageSarah <= 20);

const isFullAge = ageSarah >= 19;

console.log(now - 1990 > now - 2020);
const averageAge = ageJonas + ageSarah / 2;
console.log(averageAge);


const averageAge = (ageJonas + ageSarah) /2;
console.log(averageAge);*/

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn;

console.log(BMIMark, BMIJohn, markHigherBMI);

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);
const markHigherBMI = BMIMark > BMIJohn; 
console.log(BMIMark, BMIJohn, markHigherBMI);
console.log(typeof markHigherBMI);

const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const Jonas =  "I'm " + firstName + ", a " + (year - birthYear) + " Years old " + job + "!";
console.log(Jonas)

const jonasNew = `I'm ${firstName},  a ${year - birthYear} Year Old ${job} !`;
console.log(jonasNew);
console.log(`Just a regular String`);
console.log('String with \n\
multiple\n\
lines.');

console.log(`String with 
multiple line
facilities available`);
const age = 14;
const isOldEnough = age >= 18;

if(age >= 18){
  console.log('Sarah can start driving license');
}else{
  const yearsLeft = 18 - age;
  console.log(`Sarah is too young, wait another ${yearsLeft} years:)`);
}

const birthYear = 2012;
let century;
if(birthYear <= 2000){
  century = 20;
}else{
  century = 21;
}
console.log(century);


/* Codding Challenge=2*/
const totalPoint = 32;
let point;

if( totalPoint < 50){
  point = 28.3;
  console.log('markBMI is higher than johnBMI');

}else{
  point = 23.9;
  console.log('johnBMI is higher than markBMI');
}
console.log(28.3 > 23.9);

const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / (heightJohn * heightJohn);


if(BMIMark > BMIJohn){
  console.log(`Mark's BMI (${BMIMark}) is higher than John(${BMIJohn})`);
}else{
  console.log(`John's BMI(${BMIJohn}) is higher than Mark(${BMIMark})`);
}
// type conversionconst  inputYear = '1991';
console.log(inputYear + 18);
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);
console.log(Number('Rashel'));
console.log(typeof NaN);
console.log(String(23), 23);

//ype  coercion
console.log('I am ' + 23 + ' years old ');
console.log('23' - '10' - 3);
console.log('23' / '2');
console.log('23' > '18');

let n = "1" + 1;
n = n-1;
console.log(n);
//5 falsy value in Javascript: 0, undefined, ' ', null, NaN;
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Jonas'));
console.log(Boolean({}));
console.log(Boolean(''));


const money = 55;
if(money){
  console.log("Don't spend it all!");
}else{
  console.log("You should get a job ");
}

let height = 0;
if(height){
  console.log('YaY! Height is defined');
}else{
  console.log('Height is undefined');
}
const age = 16;
if(age === 18)console.log('You just became an adult:D(strict)');


if(age == 18)console.log('You just became an adult:D(Loose)');
const favourite = Number(prompt("What's Your favourite Number?"));
console.log(favourite);
console.log(typeof favourite);
if(favourite === 23){
  console.log('Cool!, 23 is an Amazing Number');
}else if(favourite === 7){
  console.log("7 is a lucky Number");
}else if(favourite === 9){
  console.log('9 is also be very good Number for you');
}else{
  console.log('Number is not only 23 or 7 or 9');
}

if(favourite !== 23)console.log('Why is not 23?');

const hasDriversLicense = true;//variable=a
const hasGoodVision = true;// variable = b

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

if(hasDriversLicense && hasGoodVision){
  console.log('Sarah is able to Drive');
}else{
  console.log('Someone else should Drive...');
}

onst isTired = false;//variable = c

console.log(hasDriversLicense && hasGoodVision && isTired);

if(hasDriversLicense && hasGoodVision && isTired){
  console.log('Sarah is able to Drive');
}else{
  console.log('Someone else should Drive...');
}

/**Codding <Challenge-3></Challenge-3> */

const scoreDolphins = (96 + 108 + 89) /3;
const scoreKoalas = (88 + 91 + 110) / 3;
console.log(scoreDolphins, scoreKoalas);


if(scoreDolphins > scoreKoalas){
  console.log(`If Dolphins score(${scoreDolphins}) is high than Dolphin will be winner` );
}else if(scoreKoalas < scoreDolphins){
  console.log( `If Koalas score(${scoreKoalas}) is bigger than Koalas will be winner`);
}else if(scoreDolphins === scoreKoalas){
  console.log('IF the result is equal than trophy will equal or draw');
}
/*Bonus===01=================*/
const scoreDolphins = (97 + 112 + 110) / 3;
const scoreKoalas = (109 + 95 + 123) / 3;
console.log(scoreDolphins, scoreKoalas);

if(scoreDolphins > scoreKoalas && scoreDolphins >= 100){
  console.log(`scoredolphin's score:(${scoreDolphins}), So Dolphin is champion`);
}else if(scoreKoalas > scoreDolphins && scoreKoalas >= 100){
  console.log(`scorekoala's score:(${scoreKoalas}), So Koalas is champion`)
}else if(scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100){
  console.log('This math is draw'); 
}else{
  console.log('No one win the trophy.')
}

/*=========BONUS=02===========*/
const scoreDolphins = (97 + 112 + 110) / 3;
const scoreKoalas = (109 + 95 + 123) / 3;
console.log(scoreDolphins, scoreKoalas);

if(scoreDolphins > scoreKoalas && scoreDolphins >= 100){
  console.log(`scoredolphin's score:(${scoreDolphins}), So Dolphin is champion`);
}else if(scoreKoalas > scoreDolphins && scoreKoalas >= 100){
  console.log(`scorekoala's score:(${scoreKoalas}), So Koalas is champion`)
}else if(scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100){
  console.log('This math is draw'); 
}else{
  console.log('No one win the trophy.')
}
/*===========Switch Statement==================*/

const day = 'friday';
switch(day){
   case 'sunday':
   console.log('This is start day of working');
   break;
  case 'monday' :
    console.log('This is 2nd working day in a week.')
    break;
  case 'tuesday':
    console.log('This is 3rd of day working in a week');
    break;
  case 'wednesday':
    console.log('This is heavy working for me.');
    break;
  case 'thursday':
    console.log('This is another hard working day');
    break;
  case 'friday':
  case 'saturday':
    console.log('This is my favourite day');
    break;
  default:
    console.log('This is not a valid day for me.');
}
/*======================switch statement by completed by if else method==============*/

if(day === 'monday'){
  console.log('This is 2nd working day in a week.')
}else if(day === 'tuesday'){
  console.log('This is 3rd of day working in a week');
}else if(day === 'wednesday'){
  console.log('This is heavy working for me.');
}else if(day === 'thursday'){
  console.log('This is another hard working day');
}else if(day === 'friday'){
  console.log('This is my favourite day');
}else if(day === 'saturday'){
  console.log('This is my favourite day');

}else if(day === 'sunday'){
  console.log('This is start day of working');
}else{
  console.log('This is not a valid day for me.');
}
/* ====================================Statement & Expressions====================*/
const age = 18;
if (18 > 23){
  console.log('23 is bigger than 18-> expression')
}
/*=============Conditional Operator=========================*/
const age = 23;
//age >= 18 ? console.log('I like to drink wine🍷') : console.log('I like to drink water🥤');

const drink = age >= 18 ? 'wine🍷' : 'water🥤';
console.log(drink);

let drink2;
if(age >= 18){
  drink2 = 'wine🍷';
}else{
  drink2 = 'water🥤';
}
console.log(drink2);
console.log(`I like to drink ${ age >= 18 ? 'wine🍷' : 'water🥤'}`);

const bill = 40;
const tip = bill <= 300 && bill <= 50 ? bill * 0.15 : bill * 0.15;
console.log(`The bill was ${bill} the tip was ${tip}, and the total value
${bill + tip}`);
/*===========practice=========Codding challenge==>4=================*/
const bill = 300;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 :bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
