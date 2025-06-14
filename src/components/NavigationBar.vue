<template>
    <VAppBar
        app
        color="primary"
        dark
        height="64"
    >
        <template v-slot:prepend>
            <VAppBarNavIcon to="/" >
                <VIcon>mdi-heart</VIcon>
            </VAppBarNavIcon>
        </template>
        <span class="valentine-letter text-h4 ml-4">Our Love Lab - </span> &nbsp; Interactive Valentine's Website
        <VSpacer></VSpacer>
        <VBtn v-for="link in links" :key="link.name" :to="link.path" text>
            <VIcon class="mr-2">{{ link.icon }}</VIcon>
            {{ link.name }}
        </VBtn>
    </VAppBar>
</template>

<script>
export default {
    name: 'NavigationBar',
    data() {
        return {
            links: [
                { name: 'Home', path: '/', icon: 'mdi-home-outline' },
                { name: 'Molecules', path: '/molecules', icon: 'mdi-atom' },
                { name: 'Letter', path: '/letter', icon: 'mdi-text-box-outline' },
                { name: 'Quiz', path: '/quiz', icon: 'mdi-help-circle-outline' },
                { name: 'Playlist', path: '/playlist', icon: 'mdi-music-note-outline' },
            ]
        };
    }
};
</script>