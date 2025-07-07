<template>
    <div class="fullscreen centralize my-3 py-5">
        <div class="row m-0 row-cols-1 row-cols-sm-2" :class="isMobile ? 'pt-4' : 'px-5'">
            <div class="col p-0 align-items-center justify-content-center" :style="{
                width: isMobile ? '100%' : '70%',
            }">
                <!-- Title -->
                <div class="row m-0">
                    <h3 class="display-3" style="font-weight: bold;">
                        Evandro Remolli</h3> </div>
                        
                <!-- Subtitle -->
                <div class="row m-0">
                    <h3 class="h3">
                        Desenvolvedor de sistemas <strong>Full-Stack</strong></h3> </div>

                <!-- Desc -->
                <div class="w-100 row text-start m-0 py-4 justify-content-center"> 
                    <blockquote class="m-2 px-4 blockquote fs-5" :class="isMobile ? '' : 'w-75'">
                        Transformo ideias em soluções digitais completas e escaláveis. Combinando técnica, criatividade e foco em resultados, ajudo empresas e empreendedores a tirarem projetos do papel com eficiência e qualidade. </blockquote>
                </div>

                <!-- Buttons -->
                <div class="row m-0 w-100 justify-content-center">
                    <div class="d-flex justify-content-center">
                        <Button class="m-2" icon="pi pi-github"/>
                        <Button class="m-2" icon="pi pi-linkedin"/>
                        <Button id="calendlyInlineWidget" class="m-2 fs-5" label="Agende uma reunião" style="max-width: max-content;"
                        onclick="Calendly.initPopupWidget({url: 'https://calendly.com/remolli?hide_landing_page_details=1&hide_gdpr_banner=1'}); "/>
                        <!-- <a href="" onclick="Calendly.initPopupWidget({url: 'https://calendly.com/remolli?hide_landing_page_details=1&hide_gdpr_banner=1'});return false;">Agende uma reunião</a> -->

                        <!-- <Button class="m-2 fs-5" label="Hobbies" style="max-width: max-content;"/>
                        <Button class="m-2 fs-5" label="Blog" style="max-width: max-content;"/> -->
                    </div>
                </div>
            </div>
            <div class="col p-0 align-self-center" :style="{
                width: isMobile ? '100%' : '30%',
            }">
                <div class="row m-0 w-100 justify-content-center">
                    <img style="max-width: 350px; max-height: 350px;" src="@/assets/piscadinha.webp" alt="Eu em emoji">
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Button from 'primevue/button';
import { ref, onMounted } from 'vue';

const isMobile = ref(window.innerWidth < 720);

function handleResize() {isMobile.value = window.innerWidth < 720 }

onMounted(() => {
    window.addEventListener('resize', handleResize)
} )
</script>

<style>

</style>