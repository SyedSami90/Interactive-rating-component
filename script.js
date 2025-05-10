const question = document.getElementById('question')
const response = document.getElementById('response')
const buttonNodeList = document.querySelectorAll("#buttons button")
const buttonArray = Array.from(buttonNodeList)
const submitBtn = document.getElementById('submitbtn')
const resultDisplay = document.getElementById('resultDisplay')
let myChosenButton = ''
let shownMsg = ''

//the following loop should start when the submit button is clicked

buttonArray.forEach((button) => {
    button.addEventListener('click',() => {
        myChosenButton = button.innerText
    })
})



submitBtn.addEventListener('click',()=>{

    if (myChosenButton != '') {
        shownMsg = `You selected ${myChosenButton} out of 5`
        resultDisplay.innerText = shownMsg

        question.classList.remove('opacity-100', 'pointer-events-auto', 'z-10');
        question.classList.add('opacity-0', 'pointer-events-none', 'z-0');

        response.classList.remove('opacity-0', 'pointer-events-none', 'z-0');
        response.classList.add('opacity-100', 'pointer-events-auto', 'z-10');
    }
    else {
        alert('Click a button first!')
    }
})

