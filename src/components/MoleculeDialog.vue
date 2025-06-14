<template>
    <VDialog v-model="dialogVisible" max-width="500">
        <VCard class="pa-4 text-center rounded-xl">
            <VCardTitle>
                <div class="d-flex">
                    <VSpacer />
                    <VIcon class="ml-auto" size="18" color="primary" @click.stop="closeDialog">
                        mdi-close
                    </VIcon>
                </div>
            </VCardTitle>
            <h2 class="script-font pink--text text-h2">{{ molecule.name }}</h2>
            <p class="body-1 mt-7 mb-7">
                {{ molecule.longDescription }}
            </p>
            <VProgressLinear class="mb-4 rounded-xl" color="primary" height="25" :model-value="molecule.loveIndex"
                striped>
                <template v-slot:default="{ value }">
                    <span class="caption font-weight-bold">{{ value }}% Love Index</span>
                </template>
            </VProgressLinear>

            <!-- Photo Gallery -->
            <VRow dense v-if="molecule.photos && molecule.photos.length" class="mb-5">
                <VCol v-for="(photo, index) in molecule.photos" :key="index" cols="4">
                    <VImg :src="photo" aspect-ratio="1" cover class="rounded" />
                </VCol>
            </VRow>

            <VBtn class="rounded-xl" color="primary" @click="closeDialog">
                Close
            </VBtn>
        </VCard>
    </VDialog>
</template>

<script>
export default {
    name: 'MoleculeDialog',
    props: {
        molecule: {
            type: Object,
            required: false,
            default: () => ({
                name: 'Unknown Molecule',
                longDescription: 'No description available.'
            })
        }
    },
    data() {
        return {
            dialogVisible: false
        };
    },
    methods: {
        openDialog() {
            this.dialogVisible = true;
        },
        closeDialog() {
            this.dialogVisible = false;
            this.$emit('close');
        },
    },
    watch: {
        molecule: {
            immediate: true,
            handler() {
                this.openDialog();
            }
        }
    }
};
</script>
