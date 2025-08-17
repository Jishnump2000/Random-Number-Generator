function generateRandomNumber(min,max){
    return Math.floor(Math.random() * (max-min + 1) + min);
}

document.getElementById("generateButton").addEventListener("click", function(){

    let min = 1;
    let max = 100;

    let randomNumber = generateRandomNumber(min,max);
    document.getElementById("result").textContent = randomNumber;
    
})