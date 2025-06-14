<template>
    <VCard
        class="rounded-xl"
    >
        <VCardText
            class="text-center login-card"
        >
            <VForm
                v-model="valid"
                class="pa-0"
                @submit.prevent="handleLogin"
            >
                <VContainer class="pa-0">
                    <VRow>
                        <VCol>
                            <h2 class="text-h3 font-weight-bold mb-4 script-font mt-15">Welcome to Our Love Lab</h2>
                        </VCol>
                    </VRow>
                    <VRow>
                        <VCol>
                        <VTextField
                            v-model="password"
                            label="Enter Password"
                            type="password"
                            outlined
                            dense
                            class="mb-4 mt-10"
                        />
                        </VCol>
                    </VRow>
                    <VRow>
                        <VCol>
                            <p class="text-caption text-grey-darken-1">
                                Hint: It follows a known pattern of passwords you know, but related to us. ❤️
                            </p>
                        </VCol>
                    </VRow>
                    <VRow>
                        <VCol>
                            <VBtn
                                color="primary"
                                @click="handleLogin"
                                style="width: 100%;"
                            >
                                Login
                            </VBtn>
                        </VCol>
                    </VRow>
                    <VRow>
                        <VCol>
                            <p class="mt-4">
                                Please enter the password to access the lab.
                            </p>
                        </VCol>
                    </VRow>
                </VContainer>
            </VForm>
        </VCardText>
    </VCard>
</template>

<script>
import { useAuthStore } from '../stores/authStore';

export default {
    name: 'LoginCard',
    data() {
        return {
            password: '',
            valid: false,
            authStore: useAuthStore(),
        };
    },
    methods: {
        async handleLogin() {
            if (this.valid && this.password) {
                this.authStore.login(this.password).then(() => {
                    if (this.authStore.isLoggedIn) {
                        this.$emit('login-success');
                    } else {
                        this.$emit('login-failure');
                    }
                }).catch(error => {
                    console.error('Login error:', error);
                    this.$emit('login-failure');
                });
            } else {
                console.warn('Invalid form submission');
            }
        }
    },
};
</script>

<style scoped>
.login-card {
    background: linear-gradient(
        to bottom,
        rgb(var(--v-theme-primary)) 1%,
        rgb(var(--v-theme-background)) 40%
    );
}
</style>