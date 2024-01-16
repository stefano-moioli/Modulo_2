/* function visualizeQuestion(){
    questions.forEach(question=>{
    let mainQuestion = document.createElement("h2");
    mainQuestion.innerHTML = question.question;
    document.body.append(mainQuestion);
    })
}

visualizeQuestion(); */

function getRandomQuestion(arrayOfQuestions){
    const casualIndex = Math.floor(Math.random() * arrayOfQuestions.length);
    return arrayOfQuestions[casualIndex];
}

const randomQuestion = getRandomQuestion(questions);

console.log(randomQuestion);