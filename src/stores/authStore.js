// src/stores/authStore.js
import { defineStore } from 'pinia';

// Replace this with the actual hashed password you want to compare against
const HARD_HASHED_PASSWORD = '9982f1ceea7cce352f675a9bc8daef1f570410fb63ad44b46e79a9e06dd5a2ea';

async function hashPassword(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
}

export const useAuthStore = defineStore('auth', {
    state: () => ({
        loggedIn: false,
    }),

    getters: {
        isLoggedIn: (state) => state.loggedIn,
    },

    actions: {
        async login(plainPassword) {
            console.log('Attempting to log in with password:', plainPassword);
            const hashed = await hashPassword(plainPassword);
            console.log('Hashed password:', hashed);
            console.log('Expected hashed password:', HARD_HASHED_PASSWORD);
            if (hashed === HARD_HASHED_PASSWORD) {
                this.loggedIn = true;
                return true;
            } else {
                this.loggedIn = false;
                return false;
            }
        },
        logout() {
            this.loggedIn = false;
        }
    }
});
