/* test
console.log("tous va bien! play js");
*/

const question = document.getElementById('question');
const choices = Array.from(
	document.getElementsByClassName('choice-text')
	);

let currentQuestion = {};
let acceptingAnswer = false;
let score = 0, questionCounter = 0;

/*
	For not repeating the same question a second time !! 
*/
let availableQuestions = [];


/*
		Just some few questions to test  
*/
let questions = [
    {
		question: 'Inside which HTML element do we put the JavaScript ?',
		choice1: '<script>',
        choice2: '<javascript>',
        choice3: '<js>',
        choice4: '<scripting>',
        answer: 1,
    },
    
    {
        question:"What is the correct syntax for referring to an external script called 'xxx.js'?",
        choice1: "<script href='xxx.js'>",
        choice2: "<script name='xxx.js'>",
        choice3: "<script src='xxx.js'>",
        choice4: "<script file='xxx.js'>",
        answer: 3,
    },

    {
        question: " How do you write 'Hello World' in an alert box?",
        choice1: "msgBox('Hello World');",
        choice2: "alertBox('Hello World');",
        choice3: "msg('Hello World');",
        choice4: "alert('Hello World');",
        answer: 4,
    },
];


const CORRECT_BONNUS = 10; 	// the score of a correct answer
const MAX_QUESTIONS = 3; 	// the max number of the question in a quizz


/*
	ES6 Function
*/
startGame = () => {
	questionCounter = 0;
	availableQuestions = [...questions];  //  we spread the array in availble questions 

	//test
	console.log(availableQuestions);

	getNewQuestion();
};


getNewQuestion = () =>{

	// Check if we have an available question in our array or if we did exceed the number maximum of the question
	if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS) {
        // Redirect to the end page
        return window.location.assign('./end.html');
    }

	questionCounter++;
	const index = Math.floor( Math.random() * availableQuestions.length );
	currentQuestion = availableQuestions[index];
	question.innerText = currentQuestion.question; // Extract and display the question from current question

	choices.forEach( choice =>{
		const number = choice.dataset['number']; // Get the data number of the choice, check play.html
		choice.innerText = currentQuestion['choice' + number]; 
	});

	availableQuestions.splice(index,1) // Removing of the displayed question of our array 

	acceptingAnswer = true;
};


choices.forEach((choice) => {
    choice.addEventListener('click', (e) => {
        if (!acceptingAnswer) return;

        acceptingAnswer = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];
        
        //test 
        console.log(selectedChoice);
        console.log('The number of the selected choice' + selectedAnswer);

        getNewQuestion();
    });
});



/*
	Functions call 
*/
startGame();