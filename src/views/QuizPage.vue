<template>
    <VContainer class="quiz-page py-10">
        <h1 class="text-h3 text-center mb-8">Love Quiz 💘</h1>

        <VCard class="pa-6" elevation="3">
            <div v-if="currentQuestion">
                <h2 class="text-h5 mb-4">Question {{ currentIndex + 1 }}:</h2>
                <p class="mb-6">{{ currentQuestion.question }}</p>

                <VBtn v-for="(choice, index) in currentQuestion.choices" :key="index" class="mb-2 text-left" block
                    :color="getChoiceColor(index)" :disabled="answered" @click="selectChoice(index)">
                    {{ choice }}
                </VBtn>

                <div class="mt-6 d-flex justify-space-between">
                    <VBtn @click="prevQuestion" :disabled="currentIndex === 0">Back</VBtn>
                    <VBtn @click="nextQuestion" :disabled="currentIndex === questions.length - 1">Next</VBtn>
                </div>
            </div>
            <div v-else>
                <p class="text-h6 text-center">Quiz completed! 🎉</p>
                <VBtn color="primary" class="mt-4" @click="restartQuiz">Restart</VBtn>
            </div>
        </VCard>
    </VContainer>
</template>

<script>
export default {
    name: 'QuizPage',
    data() {
        return {
            currentIndex: 0,
            selectedChoices: {},
            questions: [
                {
                    question: 'When we started our relationship?',
                    choices: ['14 February 1975', '8 August 2021', '1 January 1790', '21 August 1898'],
                    answer: 1
                },
                {
                    question: 'Between these choices, which is my favorite food?',
                    choices: ['Pizza', 'Sushi', 'Burgers', 'Pasta'],
                    answer: 2
                },
                {
                    question: 'What is my favorite color?',
                    choices: ['Red', 'Blue', 'Green', 'Yellow'],
                    answer: 1
                },
                {
                    question: 'Where did we first meet in person?',
                    choices: ['At a lookout point', 'At the park', 'At a concert', 'At a federal road'],
                    answer: 3
                },
                {
                    question: 'What is my favorite game genre?',
                    choices: ['Action', 'Romance', 'Comedy', 'Role-playing'],
                    answer: 3
                },
                {
                    question: 'Which is my favorite football team?',
                    choices: ['Vasco da Gama', 'Al Ithad', 'Schalke 04', 'Internazionale Milano'],
                    answer: 0
                },
                {
                    question: 'What is my favorite type of fantasy weapon?',
                    choices: ['Sword', 'Staff', 'Spear', 'Knife'],
                    answer: 1
                },
                {
                    question: 'What is my favorite programing language?',
                    choices: ['Python', 'C#', 'Java', 'C++'],
                    answer: 3
                },
                {
                    question: 'What is my favorite game series?',
                    choices: ['Final Fantasy', 'The Legend of Zelda', 'Halo', 'The Witcher'],
                    answer: 0
                },
                {
                    question: 'What is my favorite anime?',
                    choices: ['Naruto', 'One Piece', 'Bleach', 'Death Note'],
                    answer: 2
                },
                {
                    question: 'What is the size of my shoe?',
                    choices: ['39', '40', '41', '42'],
                    answer: 2
                },
                {
                    question: 'Which of these places had the best food?',
                    choices: ['Alla Bandierine - Pisa', 'Pizzeria Gino Sorbillo - Milano', 'Zeldina - Roma', 'Burguer King - Genève'],
                    answer: 0
                },
                {
                    question: 'What is my favorite way to receive love?',
                    choices: ['Words of affirmation', 'Acts of service', 'Receiving gifts', 'Quality time'],
                    answer: 3
                },
            ]
        }
    },
    computed: {
        currentQuestion() {
            return this.questions[this.currentIndex] || null;
        },
        answered() {
            const selected = this.selectedChoices[this.currentIndex];
            const correct = this.currentQuestion?.answer;
            return selected === correct;
        }
    },
    methods: {
        selectChoice(index) {
            if (!this.answered) {
                this.selectedChoices[this.currentIndex] = index;
            }
        },
        getChoiceColor(index) {
            const selected = this.selectedChoices[this.currentIndex];
            const correct = this.currentQuestion.answer;

            if (selected === undefined) return 'default';
            if (index === correct && index === selected) return 'green';
            if (index === selected && index !== correct) return 'red';
            return 'default';
        },
        nextQuestion() {
            if (this.currentIndex < this.questions.length - 1) {
                this.currentIndex++;
            }
        },
        prevQuestion() {
            if (this.currentIndex > 0) {
                this.currentIndex--;
            }
        },
        restartQuiz() {
            this.currentIndex = 0;
            this.selectedChoices = {};
        }
    }
}
</script>

<style scoped>
.quiz-page {
    max-width: 600px;
    margin: 0 auto;
}
</style>
