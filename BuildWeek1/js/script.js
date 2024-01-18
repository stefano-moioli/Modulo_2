//variabili globali
const body = document.querySelector('body');
const header = document.createElement('header');
const main = document.createElement('main');
const footer = document.createElement('footer')
body.append(header, main, footer)
const requests = [];
const answers = [];
let indiceCorrente = 0;
let currentQuestion = 1;
let counter = 0;
let remainingTime=60;

/* struttura pagina */

//principal function
function structurePage() {
    upSection()
    mainSection()
    footerSection()
} structurePage()

//create up section
function upSection() {
    const figure = document.createElement('figure')
    header.appendChild(figure)

    const img = document.createElement('img')
    img.src = './assets/epicode_logo.png'
    figure.appendChild(img)

    const timer = document.createElement('div')
    timer.classList.add('timer')
    header.appendChild(timer)

    const seconds = document.createElement('p')
    seconds.classList.add('second')
    seconds.textContent='SECONDS'

    let countdown = document.createElement('p')
    countdown.classList.add('countdown')
    countdown.textContent=remainingTime

    const remaining = document.createElement('p')
    remaining.classList.add('remaining')
    remaining.textContent='REMAINING'

    timer.append(seconds, countdown, remaining)
}

//create main section
function mainSection() {
    const questionTitle = document.createElement('p')
    questionTitle.classList.add('questionTitle')

    const containerButton = document.createElement('div')
    containerButton.classList.add('containerButton')

    main.append(questionTitle, containerButton)
}
//footer
function footerSection(indiceCorrente){
    const numberQuestion = document.createElement('p')
    numberQuestion.classList.add('footer')
    footer.innerText=''
    numberQuestion.textContent='QUESTIONS '+indiceCorrente+' / 10'
    footer.append(numberQuestion)
}

/* logica quiz */
function structionQuiz() {
    if (indiceCorrente <= questions.length) {
        let itemNow = questions[indiceCorrente]

        const questionTitle = document.querySelector('.questionTitle');
        questionTitle.textContent = itemNow.question

        const totalRespons = [itemNow.correct_answer, ...itemNow.incorrect_answers]

        totalRespons.sort(() => Math.random() - 0.5);

        const containerButton = document.querySelector('.containerButton');
        containerButton.innerHTML = ''
        totalRespons.forEach((element) => {

            const button = document.createElement('button')
            button.classList.add('buttonResponse')
            
            button.textContent = element
            containerButton.append(button)
        })
        footerSection(currentQuestion)
        pressButton()
        
    } else {
        console.log('ciao');
    }
} structionQuiz()

function pressButton() {
    const allButton = document.querySelectorAll('button')
    const correct = questions[indiceCorrente].correct_answer

    allButton.forEach((e) => {
        e.addEventListener('click', () => {
            currentQuestion++;
            indiceCorrente++;
            structionQuiz();

            if (correct.includes(e.textContent)) {
                counter++
                console.log(counter);
            }
        })
    })
}
function timer(){
    remainingTime--
    document.querySelector('.countdown')==remainingTime
}timer()
