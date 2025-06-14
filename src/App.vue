<template>
    <VApp>
        <NavigationBar />
        <VMain>
            <router-view v-if="isAuthenticated" />
            <VDialog
                v-else
                v-model="showLoginDialog"
                max-width="500px"
                persistent
            >
                <LoginCard />
            </VDialog>
        </VMain>
    </VApp>
</template>

<script>
import LoginCard from './components/LoginCard.vue';
import NavigationBar from './components/NavigationBar.vue';
import { useAuthStore } from './stores/authStore';

export default {
    name: 'App',
    components: {
        NavigationBar,
        LoginCard
    },
    data() {
        return {
            showLoginDialog: false,
            authStore: useAuthStore(),
        };
    },
    computed: {
        isAuthenticated() {
            return this.authStore.isLoggedIn;
        }
    },
    created() {
        this.showLoginDialog = !this.isAuthenticated;
    },
};
</script>
