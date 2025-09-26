
let greeting="Hello";
let userName = "Peter";
let question ="What is the magic number trick";
let randomNumber= Math.ceil(Math.random()*8);
let answer= "";

if( randomNumber==1){
    answer="It is certain";
}
else if( randomNumber==2){
    answer="Without a doubt"
}
else if(randomNumber==3){
    answer="You may reply on it";
}
else if(randomNumber==4){
    answer="Ask again later";
}
else if(randomNumber==5){
answer="Better not tell you now";
}
else if(randomNumber==6){
 answer="Dont count on it";
}
else if(randomNumber==8){
 answer="Not really";
}
else{
    answer="Outlook not so good";
}

console.log(`${greeting} ,${userName}`);
console.log(`You asked a, ${question}`);
console.lof(`Magic 8=ball is, ${answer}`);