<template>
    <div class="fullscreen centralize p-3 py-5 w-100">
        <div class="col p-0">
            <div class="row m-0 justify-content-center">
                <h3 class="display-4" style="font-weight: bold;">
                    📞 Contatos </h3>
            </div>
            <div class="p-3"></div>
            <div class="row m-0 row-cols-1 row-cols-sm-2">
                <div class="col my-2 py-3 align-self-center">
                    <div class="row justify-content-center">
                        <ul style="max-width: 450px;">
                            <li class="text-start">
                                <span class="fs-5">
                                    E-mail: 
                                    <Button asChild>
                                        <a href="mailto:remollievandro@gmail.com" target="_blank"> remollievandro@gmail.com </a>
                                    </Button>
                                </span>
                            </li>
                            <li class="text-start">
                                <span class="fs-5">
                                    LinkedIn: 
                                    <Button asChild>
                                        <a href="https://www.linkedin.com/in/evandro-remolli" target="_blank"> linkedin.com/in/evandro-remolli/ </a>
                                    </Button>
                                </span>
                            </li>
                            <li class="text-start">
                                <span class="fs-5">
                                    GitHub: 
                                    <Button asChild>
                                        <a href="https://github.com/remolli" target="_blank"> github.com/remolli </a>
                                    </Button>
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col my-2 py-3">
                    <div class="row">
                        <h3 class="h3">✉️ Me envie um e-mail</h3>
                    </div>
                    
                    <Divider/>

                    <EmailForm></EmailForm>

                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {  Divider, Button } from 'primevue';
import { ref, onMounted } from 'vue';
import EmailForm from '../components/EmailForm.vue';

const isMobile = ref(window.innerWidth < 720);

function handleResize() {isMobile.value = window.innerWidth < 720 }

onMounted(() => window.addEventListener('resize', handleResize) )
</script>

<style scoped>
a {
    color: var(--principal-button-primary-background);
    transition: .25s;
}
a:hover{
    color: var(--principal-button-primary-hover-background);
}
a:active{
    color: var(--principal-button-primary-active-background);
}
</style>