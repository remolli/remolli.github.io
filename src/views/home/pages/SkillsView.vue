<template>
    <div class="fullscreen centralize p-3 py-5 w-100">
        <div class="col p-0">
            <div class="row m-0 justify-content-center">
                <h3 class="display-4" style="font-weight: bold;">
                    🛠️ Habilidades </h3>
            </div>

            <div class="p-3"></div>

            <div class="row m-0 row-cols-1 row-cols-sm-3">
                <div class="col my-2 py-3">
                    <div class="row">
                        <h3 class="h3">🎨 Front-End</h3>
                    </div>

                    <Divider/>

                    <SkillsItem
                    icon="https://www.vectorlogo.zone/logos/vuejs/vuejs-icon.svg"
                    title="Vue.js"
                    :progress="90"
                    specification="BootstrapVue, PrimeVue, Vuex, Vue-Router, Axios e integração com APIs REST."
                    ></SkillsItem>

                    <SkillsItem
                    icon="https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg"
                    title="Flutter"
                    :progress="70"
                    specification="Desenvolvimento mobile com Provider, MobX, Dio e Material Design."
                    ></SkillsItem>

                    <SkillsItem
                    icon="https://www.vectorlogo.zone/logos/w3_html5/w3_html5-icon.svg"
                    title="HTML"
                    :progress="90"
                    specification="Otimização de SEO, Estruturação semântica, acessibilidade e integração com frameworks modernos."
                    ></SkillsItem>

                    <SkillsItem
                    icon="https://www.vectorlogo.zone/logos/w3_css/w3_css-icon~old.svg"
                    title="CSS"
                    :progress="90"
                    specification="Estilização responsiva e pré-processadores (SCSS)."
                    ></SkillsItem>

                    <SkillsItem
                    icon="https://www.vectorlogo.zone/logos/javascript/javascript-icon.svg"
                    title="JavaScript"
                    :progress="95"
                    specification="Vanilla JS, ES6+, manipulação DOM, integrações com APIs utilizando Axios e Fetch."
                    ></SkillsItem>

                </div>
                <div class="col my-2 py-3">
                    <div class="row">
                        <h3 class="h3">⚙️ Back-End</h3>
                    </div>

                    <Divider/>

                    <SkillsItem
                    icon="https://www.vectorlogo.zone/logos/dotnet/dotnet-tile.svg"
                    title=".NET"
                    :progress="60"
                    specification="APIs RESTful, C#, Entity Framework Core e autenticação com JWT."
                    />

                    <SkillsItem
                    icon="https://www.vectorlogo.zone/logos/springio/springio-icon.svg"
                    title="Java com Spring"
                    :progress="80"
                    specification="Spring Boot, JPA, construção de APIs REST e gerenciamento de dependências com Maven."
                    />

                    <SkillsItem
                    icon="https://www.vectorlogo.zone/logos/python/python-icon.svg"
                    title="Python"
                    :progress="80"
                    specification="FlaskAPI, SQLAlchemy, documentação com Swagger, autenticação e PostgreSQL."
                    />
                    
                </div>
                <div class="col my-2 py-3">
                    <div class="row">
                        <h3 class="h3">🗄️ Banco de Dados</h3>
                    </div>
                    
                    <Divider/>
                    
                    <SkillsItem
                    icon="https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg"
                    title="PostgreSQL"
                    :progress="60"
                    specification="Criação de esquemas, procedures, constraints, relacionamento entre tabelas."
                    />

                    <SkillsItem
                    icon="https://cdn-icons-png.flaticon.com/512/29/29195.png"
                    title="SQL Queries"
                    :progress="60"
                    specification="Consultas otimizadas, joins, agregações, subqueries e manipulação de dados."
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {  Divider } from 'primevue'
import { ref, onMounted } from 'vue';
import SkillsItem from '../components/SkillsItem.vue';

const isMobile = ref(window.innerWidth < 720);

function handleResize() {isMobile.value = window.innerWidth < 720 }

onMounted(() => window.addEventListener('resize', handleResize) )
</script>

<style>

</style>