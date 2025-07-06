<template>
    <div class="row m-0 mb-2 align-items-center">
        <div class="col">
            <p class="mb-1 lead fs-5 text-start" style="font-weight: 800">
                <img width="24" height="24" :src="icon" :alt="'Icone do '+title">
                {{ title }} </p> 
            </div>
        <div class="col">
            <ProgressBar :value="progress"> {{ progress ? '' : '' }} </ProgressBar>
        </div>
        <p v-if="specification" class="lead m-0 mx-4 fs-6 text-start border-start border-4" style="font-weight: 400;">
            <strong>Especificações técnicas:</strong> {{ specification }} </p>
    </div>
</template>

<script setup>
import { ProgressBar } from 'primevue';
import { defineProps } from 'vue';

defineProps({
    icon: String,
    title: String,
    progress: Number,
    specification: String,
})
</script>

<style scoped>

</style>