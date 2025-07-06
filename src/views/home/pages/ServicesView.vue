<template>
    <div class="fullscreen centralize p-3 py-5 w-100">
        <div class="col p-0">
            <div class="row m-0 justify-content-center">
                <h3 class="display-4" style="font-weight: bold;">
                    🚀 Serviços </h3>
            </div>
            <div class="p-3"></div>
            <div class="row m-0 row-cols-1 row-cols-sm-3">
                <div class="col my-2 py-3">
                    <div class="row">
                        <h3 class="h3">💻 Desenvolvimento Web</h3>
                    </div>
                    <Divider/>
                    <div class="row">
                        <p class="lead fs-6 text-start" style="font-weight: 400" :style="isMobile ? '' : 'min-height: 125px'">
                            Criação de interfaces modernas, responsivas e centradas no usuário. Utilizo tecnologias como Vue.js, Flutter Web e ASP.NET para entregar experiências digitais fluidas, funcionais e otimizadas para diferentes dispositivos e navegadores. </p>
                    </div>
                    <div class="row m-0">
                        <p class="lead fs-6 text-start border-start border-4" style="font-weight: 400;">
                            <strong>Destaque:</strong> Layouts personalizados, performance otimizada e foco em acessibilidade. </p>
                    </div>
                </div>
                <div class="col my-2 py-3">
                    <div class="row">
                        <h3 class="h3">🌐 APIs RESTful</h3>
                    </div>
                    <Divider/>
                    <div class="row">
                        <p class="lead fs-6 text-start" style="font-weight: 400" :style="isMobile ? '' : 'min-height: 125px'">
                            Desenvolvimento de APIs escaláveis, seguras e bem documentadas, que facilitam a comunicação entre sistemas e plataformas. Integrações pensadas para serem reutilizáveis, com testes automatizados e documentação via Swagger/OpenAPI. </p>
                    </div>
                    <div class="row m-0">
                        <p class="lead fs-6 text-start border-start border-4" style="font-weight: 400;">
                            <strong>Destaque:</strong> Arquitetura limpa, autenticação JWT, versionamento e performance. </p>
                    </div>
                </div>
                <div class="col my-2 py-3">
                    <div class="row">
                        <h3 class="h3">🗄️ Banco de Dados</h3>
                    </div>
                    <Divider/>
                    <div class="row">
                        <p class="lead fs-6 text-start" style="font-weight: 400" :style="isMobile ? '' : 'min-height: 125px'">
                            Modelagem eficiente e otimização de queries SQL para garantir performance e estabilidade em qualquer projeto. </p>
                    </div>
                    <div class="row m-0">
                        <p class="lead fs-6 text-start border-start border-4" style="font-weight: 400;">
                            <strong>Destaque:</strong> Normalização, índices, procedures, queries otimizadas e replicação. </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {  Divider } from 'primevue'
import { ref, onMounted } from 'vue';

const isMobile = ref(window.innerWidth < 720);

function handleResize() {isMobile.value = window.innerWidth < 720 }

onMounted(() => window.addEventListener('resize', handleResize) )
</script>

<style>

</style>