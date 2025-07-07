<template>
    <div class="fullscreen centralize p-3 py-5 w-100">
        <div class="col p-0">
            <div class="row m-0 justify-content-center">
                <h4 class="display-4" style="font-weight: bold;">
                    💼 Projetos </h4>
            </div>
            <div class="p-3"></div>
            <div class="row m-0 row-cols-1 row-cols-sm-3">
                <div v-for="project,idx in projects" :key="idx" class="col my-2 py-3">
                    <div class="row m-0 bg-dark d-flex justify-content-center align-items-center" style="height: 200px; border-radius: 10px;">
                        <Image v-if="project.image" :src="project.image" :alt="'Imagem do projeto '+project.title" height="200" width="100%" image-style="object-fit: contain;" preview />
                        <p v-else class="m-0 fs-4" style="font-weight:700"> Em breve </p>
                    </div>
                    <Divider/>
                    <div class="row">
                        <p class="lead fs-5 text-start mb-1" style="font-weight: 1000">
                            {{ project.title }} </p>
                    </div>
                    <div class="row">
                        <p class="lead fs-6 text-start mb-0" style="font-weight: 400">
                            {{ project.description }} </p>
                    </div>
                    <div v-if="project.link" class="row">
                        <a class="lead fs-6 text-start mb-2" style="font-weight: 400" :href="project.link" target="_blank">
                            {{ project.link }} </a>
                    </div>
                    <div v-if="project.tecnologias" class="row m-0">
                        <p class="lead fs-6 text-start border-start border-4" style="font-weight: 400;">
                            <strong>Tecnologias:</strong> {{ project.tecnologias }} </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {  Divider, Image } from 'primevue'
import { ref, onMounted } from 'vue';

const isMobile = ref(window.innerWidth < 720);

const blankList = [
    require('@/assets/beleza.webp'),
    require('@/assets/estrela.webp'),
    require('@/assets/ideia.webp'),
    require('@/assets/meditacao.webp'),
    require('@/assets/neblina.webp'),
    require('@/assets/notebook.webp'),
    require('@/assets/piscadinha.webp'),
    require('@/assets/saudacao.webp'),
];
const diffIndexes = [];
function getRandomIndex() {
    let randomIndex = Math.floor(Math.random() * blankList.length);
    while (diffIndexes.includes(randomIndex)) {
        randomIndex = Math.floor(Math.random() * blankList.length);
    }
    diffIndexes.push(randomIndex);
    if (diffIndexes.length > 3) {
        diffIndexes.shift();
    }
    return randomIndex;
}

const projects = [
    {
        title: 'SearchMovie',
        description: 'Aplicativo desenvolvido para pesquisa de filmes utilizando a API pública do OMDB.',
        tecnologias: 'ASP.NET, .NET, C#, Integração com API externa',
        image: require('@/assets/projects/SearchMovie-desktop.png'),
        link: 'https://searchmovie.azurewebsites.net'
    },
    {
        title: 'Projeto em desenvolvimento',
        description: 'Este projeto está em construção e será atualizado em breve.',
        tecnologias: '',
        image: blankList[getRandomIndex()],
        link: ''
    },
    {
        title: 'Projeto em desenvolvimento',
        description: 'Este projeto está em construção e será atualizado em breve.',
        tecnologias: '',
        image: blankList[getRandomIndex()],
        link: ''
    },
    // {
    //     title: 'Projeto',
    //     description: 'Descrição do projeto',
    //     tecnologias: 'Vue.js, ASP.NET e Flutter',
    //     image: require('@/assets/neblina.webp'),
    //     link: ''
    // },
];

function handleResize() {isMobile.value = window.innerWidth < 720 }

onMounted(() => {
    window.addEventListener('resize', handleResize);
    getRandomIndex();
})
</script>

<style>

</style>