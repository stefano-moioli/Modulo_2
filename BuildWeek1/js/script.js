const body = document.querySelector('body');
const header = document.createElement('header');
body.append(header);
const main = document.createElement('main');
body.append(main);

const requests = [];

const answers = [];


//principal function
function structurePage(){
    const startButton = document.querySelector('#startButton');
    upSection()
    mainSection()

}structurePage()

//create up section
function upSection(){
    const figure = document.createElement('figure')
    header.appendChild(figure)

    const img = document.createElement('img')
    img.src='./assets/epicode_logo.png'
    figure.appendChild(img)

    const timer = document.createElement('div')
    timer.classList.add('timer')
    header.appendChild(timer)
}

//create main section
function mainSection(){
    const questionTitle = document.createElement('h1')

    const containerButton=document.createElement('div')
    containerButton.classList.add('containerButton')

    main.append(questionTitle,containerButton)
}

//function for quiz
const containerButton = document.querySelector('.containerButton');
let indiceCorrente = 0; // currentIndex


function structionQuiz() {
    if (indiceCorrente <= questions.length) {
        let itemNow = questions[indiceCorrente]

        const questionTitle = document.querySelector('h1');
        questionTitle.textContent = itemNow.question

        const totalRespons = [itemNow.correct_answer, ...itemNow.incorrect_answers]

        totalRespons.sort(() => Math.random() - 0.5);

        containerButton.innerHTML = ''
        totalRespons.forEach((element) => {

            const button = document.createElement('button')
            button.classList.add('buttonResponse')
            button.textContent = element
            containerButton.append(button)

            button.addEventListener('click', () => {
                console.log();
                indiceCorrente++
                structionQuiz()
                countPoint()
            })
        })
    } else {
        console.log('ciao');
    }
} structionQuiz()

let counter = 0

function countPoint() {
    const button = document.querySelectorAll('button')
    const textButton = button.textContent

    questions.forEach((e) => {
        const correct = e.correct_answer;
        if (correct === textButton) {
            counter++;
        }
        console.log(e);
        console.log("counter is" + counter);
    })
}     
