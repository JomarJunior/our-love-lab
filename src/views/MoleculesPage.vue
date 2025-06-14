<template>
    <VContainer class="molecules-page" fluid>
        <h1 class="display-2 text-center mb-6 text-h2">
            <span class="script-font">Molecules of Love</span>
        </h1>
        <p class="subtitle-1 text-center mb-8">
            Each molecule captures an essence of our love. Tap to examine the chemistry that binds us.
        </p>
        <VRow dense align="stretch">
            <VCol v-for="molecule in molecules" :key="molecule.id" cols="12" :sm="`${6 / molecule.rank}`" :md="`${4 / molecule.rank}`" :lg="`${3 / molecule.rank}`"
                class="d-flex flex-column">
                <div class="d-flex flex-column fill-height">
                    <MoleculeCard class="fill-height" :molecule="molecule" @viewDetails="viewDetails(molecule.id)" />
                </div>
            </VCol>
        </VRow>

        <MoleculeDialog v-if="selectedMolecule" :molecule="selectedMolecule" @close="selectedMolecule = null" />
    </VContainer>
</template>

<script>
import MoleculeDialog from '@/components/MoleculeDialog.vue';
import MoleculeCard from '@/components/MoleculeCard.vue';

import snugglium1 from '@/assets/photos/snugglium1.png';
import snugglium2 from '@/assets/photos/snugglium2.png';
import snugglium3 from '@/assets/photos/snugglium3.png';

import laughylene1 from '@/assets/photos/laughylene1.png';
import laughylene2 from '@/assets/photos/laughylene2.png';
import laughylene3 from '@/assets/photos/laughylene3.png';

import supportine1 from '@/assets/photos/supportine1.png';
import supportine2 from '@/assets/photos/supportine2.png';
import supportine3 from '@/assets/photos/supportine3.png';

import trustonium1 from '@/assets/photos/trustonium1.jpeg';
import trustonium2 from '@/assets/photos/trustonium2.png';
import trustonium3 from '@/assets/photos/trustonium3.png';

import flirtogen1 from '@/assets/photos/flirtogen1.jpeg';
import flirtogen2 from '@/assets/photos/flirtogen2.jpeg';
import flirtogen3 from '@/assets/photos/flirtogen3.jpeg';

import curiosiol1 from '@/assets/photos/curiosiol1.png';
import curiosiol2 from '@/assets/photos/curiosiol2.png';
import curiosiol3 from '@/assets/photos/curiosiol3.png';

import travelium1 from '@/assets/photos/travelium1.png';
import travelium2 from '@/assets/photos/travelium2.png';
import travelium3 from '@/assets/photos/travelium3.png';

import affectionateon1 from '@/assets/photos/affectionateon1.png';
import affectionateon2 from '@/assets/photos/affectionateon2.png';
import affectionateon3 from '@/assets/photos/affectionateon3.png';

export default {
    name: 'MoleculesPage',
    components: {
        MoleculeDialog,
        MoleculeCard
    },
    data() {
        return {
            molecules: [
                {
                    id: 3,
                    name: 'Snugglium',
                    icon: 'mdi-bed',
                    rank: 1,
                    description: 'Activates cuddle reflex.',
                    longDescription: 'Snugglium is released when two bodies are in close proximity on a soft surface. Best observed during movies or cold nights.',
                    photos: [
                        snugglium1,
                        snugglium2,
                        snugglium3
                    ]
                },
                {
                    id: 4,
                    name: 'Laughylene',
                    icon: 'mdi-emoticon-excited-outline',
                    rank: 1,
                    description: 'Spontaneous laughter generator.',
                    longDescription: 'This molecule bonds over shared jokes, silly dances, and unexpected puns. It thrives in awkward silences and goofy moments.',
                    photos: [
                        laughylene1,
                        laughylene2,
                        laughylene3
                    ]
                },
                {
                    id: 5,
                    name: 'Supportine',
                    icon: 'mdi-hand-heart',
                    rank: 1,
                    description: 'Strengthens emotional resilience.',
                    longDescription: 'Supportine stabilizes mood swings and reinforces confidence. Found in daily encouragement, late-night pep talks, and “you’ve got this” texts.',
                    photos: [
                        supportine1,
                        supportine2,
                        supportine3
                    ]
                },
                {
                    id: 6,
                    name: 'Trustonium',
                    icon: 'mdi-lock-check-outline',
                    rank: 1,
                    description: 'Core compound in long-term bonds.',
                    longDescription: 'Trustonium forms slowly, through honesty and vulnerability. Once stable, it resists most relational corrosion.',
                    photos: [
                        trustonium1,
                        trustonium2,
                        trustonium3
                    ]
                },
                {
                    id: 7,
                    name: 'Flirtogen',
                    icon: 'mdi-account-heart',
                    rank: 1,
                    description: 'Triggers butterflies and smirks.',
                    longDescription: 'This cheeky molecule is activated via winks, inside jokes, and sweet nothings. Handle with charm.',
                    photos: [
                        flirtogen1,
                        flirtogen2,
                        flirtogen3
                    ]
                },
                {
                    id: 8,
                    name: 'Affectionateon',
                    icon: 'mdi-handshake',
                    rank: 1,
                    description: 'Strengthens physical bonding.',
                    longDescription: 'This molecule is highly active during hugs, forehead kisses, and gentle hand-holding. Its bonds are non-covalent, but emotionally unbreakable.',
                    photos: [
                        affectionateon1,
                        affectionateon2,
                        affectionateon3
                    ]
                },
                {
                    id: 9,
                    name: 'Curiosiol',
                    icon: 'mdi-magnify',
                    rank: 1,
                    description: 'Feeds the desire to know each other deeply.',
                    longDescription: 'Curiosiol is sparked during long conversations, shared dreams, and discovering weird facts about each other.',
                    photos: [
                        curiosiol1,
                        curiosiol2,
                        curiosiol3
                    ]
                },
                {
                    id: 10,
                    name: 'Travelium',
                    icon: 'mdi-airplane',
                    rank: 1,
                    description: 'Bonds formed through shared adventures.',
                    longDescription: 'Travelium is a rare compound that emerges during trips, explorations, and spontaneous road trips. It solidifies connections through shared experiences and memories.',
                    photos: [
                        travelium1,
                        travelium2,
                        travelium3
                    ]
                },
                {
                    id: 11,
                    name: 'Harmonixin',
                    icon: 'mdi-music',
                    rank: 2,
                    description: 'Enhances shared vibe through sound.',
                    longDescription: 'Harmonixin resonates in sync with playlists, slow dancing in the kitchen, and singing badly in the car. A rhythm-based bond enhancer.',
                },
                {
                    id: 12,
                    name: 'Vibrium',
                    icon: 'mdi-headphones',
                    rank: 2,
                    description: 'Tuned to shared energy.',
                    longDescription: 'Vibrium enhances emotional resonance. It syncs with music, shared jokes, eye contact, and the unspoken vibe between soulmates.',
                },
                {
                    id: 13,
                    name: 'Compassionite',
                    icon: 'mdi-heart-plus',
                    rank: 2,
                    description: 'Soothes emotional wounds.',
                    longDescription: 'Compassionite is produced during times of vulnerability. It facilitates healing, forgiveness, and unconditional support.',
                },
                {
                    id: 14,
                    name: 'Teasium',
                    icon: 'mdi-emoticon-wink-outline',
                    rank: 2,
                    description: 'Tickles playful banter.',
                    longDescription: 'Formed when sarcasm meets sincerity. Teasium diffuses quickly in flirty remarks and playful teasing, boosting overall romantic energy.',
                },
                {
                    id: 15,
                    name: 'Admiritol',
                    icon: 'mdi-star-shooting-outline',
                    rank: 2,
                    description: 'Released when awe strikes.',
                    longDescription: 'Admiritol spikes when you watch your partner do something amazing — whether solving problems, being kind, or just existing beautifully.',
                },
                {
                    id: 16,
                    name: 'Cozygen',
                    icon: 'mdi-sofa-outline',
                    rank: 2,
                    description: 'Supports emotional thermoregulation.',
                    longDescription: 'Cozygen thrives in blankets, late-night cuddles, and shared naps. It’s also an excellent insulator against life’s stress.',
                },
                {
                    id: 17,
                    name: 'Joydrate',
                    icon: 'mdi-water-outline',
                    rank: 2,
                    description: 'Infuses moments with giddiness.',
                    longDescription: 'This molecule bubbles up during spontaneous fun — dance breaks, shared memes, unexpected gifts, or laughing until it hurts.',
                },
                {
                    id: 18,
                    name: 'Serenitol',
                    icon: 'mdi-weather-night',
                    rank: 2,
                    description: 'Encourages deep calm.',
                    longDescription: 'Formed during quiet moments — reading together, nighttime walks, or lying silently side by side. It enhances emotional clarity.',
                },
                {
                    id: 19,
                    name: 'Whimsicolin',
                    icon: 'mdi-balloon',
                    rank: 2,
                    description: 'Triggers lighthearted randomness.',
                    longDescription: 'Whimsicolin appears in spontaneous adventures, goofy selfies, and unexpected pillow fights. It elevates joy through silliness.',
                },
                {
                    id: 20,
                    name: 'Gratitine',
                    icon: 'mdi-heart-flash',
                    rank: 2,
                    description: 'Increases emotional appreciation.',
                    longDescription: 'Released in quiet “thank you” moments, Gratitine deepens emotional connection and enhances long-term relationship stability.',
                },
                {
                    id: 21,
                    name: 'Encouragene',
                    icon: 'mdi-rocket-launch-outline',
                    rank: 2,
                    description: 'Fuels ambition with love.',
                    longDescription: 'This compound lifts you up before exams, job interviews, or life’s challenges. Encouragene turns shared belief into emotional momentum.',
                },
                {
                    id: 22,
                    name: 'Protectamide',
                    icon: 'mdi-shield-account',
                    rank: 2,
                    description: 'Surrounds with emotional safety.',
                    longDescription: 'Protectamide forms invisible bonds of support in hard times. It absorbs negativity and reflects warmth and loyalty.',
                },
                {
                    id: 23,
                    name: 'Amazium',
                    icon: 'mdi-eye-outline',
                    rank: 2,
                    description: 'Spikes during admiration.',
                    longDescription: 'Amazium levels surge when witnessing moments of brilliance, strength, or kindness in your partner. Highly contagious when shared.',
                },
                {
                    id: 24,
                    name: 'Patiencynol',
                    icon: 'mdi-clock-outline',
                    rank: 2,
                    description: 'Slows reaction during tension.',
                    longDescription: 'Patiencynol is a rare stabilizer that neutralizes heated moments with a calming presence. Often released after deep breaths and loving pauses.',
                },
                {
                    id: 25,
                    name: 'Stubbornlite',
                    icon: 'mdi-emoticon-devil-outline',
                    rank: 2,
                    description: 'Causes playful friction.',
                    longDescription: 'Stubbornlite is activated during harmless disagreements about pizza toppings or what movie to watch. Can form cute ionic bonds with Patiencynol.',
                },
                {
                    id: 26,
                    name: 'Familiarin',
                    icon: 'mdi-home-heart',
                    rank: 2,
                    description: 'Gives that “home” feeling.',
                    longDescription: 'Familiarin wraps you in comfort, trust, and belonging — a compound only formed with someone who truly feels like home.',
                },
                // Add more molecules as needed
            ],
            selectedMolecule: null
        };
    },
    created() {
        this.molecules = this.molecules.map(molecule => ({
            ...molecule,
            loveIndex: Math.floor(85 + Math.random() * 16) // 85 to 100
        }));
    },
    methods: {
        viewDetails(moleculeId) {
            const molecule = this.molecules.find(m => m.id === moleculeId);
            this.selectedMolecule = { ...molecule }; // Create a copy to avoid direct mutation
        }
    }
};
</script>