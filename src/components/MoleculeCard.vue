<template>
    <VCard v-if="molecule && molecule.rank === 1"
        class="pa-4 molecule-card d-flex flex-column justify-space-between rounded-xl"
        @click="$emit('viewDetails', molecule.id)" outlined>
        <div>
            <VIcon size="36" color="pink">{{ molecule.icon }}</VIcon>
            <h3 class="headline font-weight-medium">{{ molecule.name }}</h3>
            <p class="caption text-grey-darken-1">{{ molecule.description }}</p>
        </div>
    </VCard>
    <VCard v-else-if="molecule && molecule.rank !== 1"
        class="pa-4 molecule-card d-flex flex-column justify-space-between rounded-xl align-center"
        color="accent"
        @click="$emit('viewDetails', molecule.id)" outlined>
        <div>
            <VIcon size="36" color="pink">{{ molecule.icon }}</VIcon>
        </div>
    </VCard>
</template>

<script>
export default {
    props: {
        molecule: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>
.molecule-card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border-radius: 16px;
    height: 100%;
}

.molecule-card:hover {
    transform: scale(1.1);
    animation: wiggle 1s infinite cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 1;
}

@keyframes wiggle {
    0% {
        transform: scale(1.1) rotate(0deg);
    }

    15% {
        transform: scale(1.1) rotate(4deg);
    }

    30% {
        transform: scale(1.1) rotate(-4deg);
    }

    45% {
        transform: scale(1.1) rotate(3deg);
    }

    60% {
        transform: scale(1.1) rotate(-3deg);
    }

    75% {
        transform: scale(1.1) rotate(2deg);
    }

    100% {
        transform: scale(1.1) rotate(0deg);
    }
}
</style>