document.getElementById("trueColorsForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let score = {
        blue: 0,
        green: 0,
        gold: 0,
        orange: 0
    };

    const answers = document.querySelectorAll('input[type="radio"]:checked');
    answers.forEach(answer => {
        score[answer.value]++;
    });

    let result = Object.keys(score).reduce((a, b) => score[a] > score[b] ? a : b);
    
    alert("Your dominant personality color is: " + result);
});
