const questionsEl = document.getElementsByClassName('questions')
const scoreEl = document.getElementById('score')
const btnEl = document.getElementById('btn')
var data;

var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = (e) => {
    data = (JSON.parse(e.target.response));
    if(e.target.readyState===4 && e.target.status ===200){
        renderQuestions(data);
    }
}

xhttp.open("GET", "https://5d76bf96515d1a0014085cf9.mockapi.io/quiz", true)
xhttp.send()

function renderQuestions(data){
    let output = '';
    console.log(data)
    for(let i = 0; i < data.length; i++){
        output += `
        <div class="question">
        <h2>Q${i+1}. ${data[i].question}</h2>
        <label><input type="radio" id="${1}" name="id${i}">${data[i].options[0]}</label><br>
        <label><input type="radio" id="${2}" name="id${i}">${data[i].options[1]}</label><br>
        <label><input type="radio" id="${3}" name="id${i}">${data[i].options[2]}</label><br>
        <label><input type="radio" id="${4}" name="id${i}">${data[i].options[3]}</label><br>
    </div>
        `
    }
    questionsEl[0].innerHTML = output;
}

btnEl.addEventListener('click', () =>{
    let score = 0;
    for(let i = 0; i < 5; i++){
        let selector = `input[name="id${i}"]:checked`
        let selectedOption =+ document.querySelector(selector).id
        if(selectedOption == data[i].answer){
            score++;
        }
    }
    scoreEl.innerHTML = `${score} / 5`
})
