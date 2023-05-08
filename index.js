let guess = 0;
let answer = Math.floor(Math.random() * (100 - 1) + 1);
let limit = 10;
let tries = 1;

for (tries = 1; tries < 11; tries++){
    guess = prompt(`Guess a number between 1 and 100:\nNumber of tries left: ${limit}`);
        
        if(guess < answer && guess > 0){
            alert('Too low! Guess again.');
        } else if (guess > answer && guess < 101){
            alert('Too high! Guess again.')
        } else if (guess == answer){
            alert(`Congratulations, you guessed the number in ${tries} tries!`)
            break
        } else {    
            alert('Error! Please enter a number between 1 and 100')
        }
        limit--
}
if (tries == 11){
    alert(`Fail! You reached the maximum number of tries.\nThe correct number is ${answer}`)
}