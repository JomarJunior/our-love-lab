<template>
    <VContainer class="hero-section pa-12" fluid>
        <h1 class="display-2 hero-title">
            <span class="script-font">
                LoveLab
            </span>: Where Love Meets Code
        </h1>
        <p class="subtitle-1 hero-subtitle">
            Explore playful love molecules, take a couples quiz, and read a heartfelt letter, all while enjoying a curated playlist of love songs.
        </p>
        <VBtn color="primary" class="mr-4 love-btn-hover" to="/molecules">
            <VIcon class="mr-4">mdi-atom</VIcon>
            Explore Molecules
        </VBtn>
        <VBtn color="secondary" class="mr-4 love-btn-hover" to="/quiz">
            <VIcon class="mr-4">mdi-help-circle-outline</VIcon>
            Take the Quiz
        </VBtn>
        <VBtn color="accent" class="mr-4 love-btn-hover" to="/letter">
            <VIcon class="mr-4">mdi-text-box-outline</VIcon>
            Read the Letter
        </VBtn>
        <VBtn color="info" class="love-btn-hover" to="/playlist">
            <VIcon class="mr-4">mdi-music-note-outline</VIcon>
            Listen to the Playlist
        </VBtn>
    </VContainer>
    <VContainer class="text-center mt-12">
        <p class="subtitle-2">
            Inspired by the love that we share, let's celebrate it with a touch of creativity and fun! Made with ❤️ by me to you.
            <br>
            <span class="script-font">LoveLab</span> is a playful space to explore the chemistry of our love.
        </p>
        <br>
        <VIcon size="48" color="pink">
            mdi-heart
        </VIcon>
    </VContainer>
    <VContainer class="text-center mt-6">
        <p class="caption">
            © 2025 Beb. All rights reserved.
        </p>
    </VContainer>
</template>

<style>
.love-btn-hover {
    transition: transform 0.3s cubic-bezier(0.4,0,0.2,1), box-shadow 0.2s cubic-bezier(0.4,0,0.2,1);
}

.love-btn-hover:hover {
    animation: wiggle 1s infinite cubic-bezier(0.4,0,0.2,1);
    transform: scale(1.05);
    box-shadow: 0 8px 32px 0 rgba(255, 182, 193, 0.5), 
                0 2px 12px 0 rgba(186, 225, 255, 0.4),
                0 1px 4px 0 rgba(255, 221, 244, 0.3);
    z-index: 1;
}

@keyframes wiggle {
    0% { transform: scale(1.05) rotate(0deg);}
    15% { transform: scale(1.05) rotate(4deg);}
    30% { transform: scale(1.05) rotate(-4deg);}
    45% { transform: scale(1.05) rotate(3deg);}
    60% { transform: scale(1.05) rotate(-3deg);}
    75% { transform: scale(1.05) rotate(2deg);}
    100% { transform: scale(1.05) rotate(0deg);}
}
</style>