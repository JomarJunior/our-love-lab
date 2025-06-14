import { createRouter, createWebHistory } from 'vue-router';

// Import your page components
import HomePage from '@/views/HomePage.vue';
import MoleculesPage from '@/views/MoleculesPage.vue';
import QuizPage from '@/views/QuizPage.vue';
import LetterPage from '@/views/LetterPage.vue';
import PlaylistPage from '@/views/PlaylistPage.vue';

const routes = [
    { path: '/', component: HomePage, name: 'home' },
    { path: '/molecules', component: MoleculesPage, name: 'molecules' },
    { path: '/quiz', component: QuizPage, name: 'quiz' },
    { path: '/letter', component: LetterPage, name: 'letter' },
    { path: '/playlist', component: PlaylistPage, name: 'playlist' }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;