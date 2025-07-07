<template>
  <div class="centralize-col dark-theme">
    <div class="row row-menu-bar" style="position: fixed; top:0px; width:100vw; display: flex; z-index: 2;">
        <div class="p-0" style="width:max-content;">
            <Menubar :model="items">
                <template #item="{ item, props, hasSubmenu }">
                    <a v-ripple :href="item.url || '#'" :target="item.target" v-bind="props.action">
                        <span :class="item.icon" />
                        <span>{{ item.label }}</span>
                        <span v-if="hasSubmenu" class="pi pi-fw pi-angle-down" />
                    </a>
                </template>
            </Menubar>
        </div>
    </div>

    <OverviewView id="home"/>
    
    <svg style="transform: translateY(-1px); rotate: 180deg" fill="#FAF9F6" xmlns="http://www.w3.org/2000/svg" class="shapediv13" viewBox="0 0 1000 100" preserveAspectRatio="none"><path d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7 c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4 c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"></path></svg>
    
    <div class="light-theme w-100 d-flex justify-content-center">
        <ServicesView id="servicos"/>
    </div>

    <svg style="transform: translateY(-1px);" fill="#FAF9F6" xmlns="http://www.w3.org/2000/svg" class="shapediv13" viewBox="0 0 1000 100" preserveAspectRatio="none"><path d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7 c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4 c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"></path></svg>
    
    <ProjectsView id="projetos"/>
    
    <svg style="transform: translateY(-1px); rotate: 180deg" fill="#FAF9F6" xmlns="http://www.w3.org/2000/svg" class="shapediv13" viewBox="0 0 1000 100" preserveAspectRatio="none"><path d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7 c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4 c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"></path></svg>

    <div class="light-theme w-100 d-flex justify-content-center">
        <SkillsView id="skills"/>
    </div>

    <svg style="transform: translateY(-1px);" fill="#FAF9F6" xmlns="http://www.w3.org/2000/svg" class="shapediv13" viewBox="0 0 1000 100" preserveAspectRatio="none"><path d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7 c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4 c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"></path></svg>

    <ContactsView id="contatos"/>
    
  </div>
</template>

<script>
import OverviewView from '@/views/home/pages/OverviewView.vue'
import ServicesView from '@/views/home/pages/ServicesView.vue'
import ProjectsView from '@/views/home/pages/ProjectsView.vue'
import SkillsView from '@/views/home/pages/SkillsView.vue'
import ContactsView from '@/views/home/pages/ContactsView.vue'

export default {
  name: 'HomeView',
  components: {
    OverviewView,
    ServicesView,
    ProjectsView,
    SkillsView,
    ContactsView,
  }
}
</script>

<script setup>
import Menubar from "primevue/menubar";
import { ref } from "vue";

const items = ref([
    {
        label: 'Home',
        icon: 'pi pi-home',
        url: '#home'
    },
    {
        label: 'Sobre',
        icon: 'pi pi-user',
        items: [
            {
                label: 'Habilidades',
                icon: 'pi pi-cog',
                url: '#skills',
            },
            // {
            //     label: 'Hobbies',
            //     icon: 'pi pi-heart'
            // },
            {
                label: 'Contatos',
                icon: 'pi pi-envelope',
                url: "#contatos"
            }
        ]
    },
    {
        label: 'Portfólio',
        icon: 'pi pi-briefcase',
        items: [
            {
                label: 'Serviços',
                icon: 'pi pi-wrench',
                url: '#servicos',
            },
            {
                label: 'Projetos',
                icon: 'pi pi-folder',
                url: '#projetos'
            },
            // {
            //     label: 'Playground',
            //     icon: 'pi pi-sitemap'
            // }
        ]
    },
    // {
    //     label: 'Blog',
    //     icon: 'pi pi-comments'
    // }
]);
</script>

<style scoped>
* /deep/ .p-menubar-mobile .p-menubar-root-list{
    width: min-content !important;
}

.row-menu-bar{ padding: 20px; }
@media (max-width: 960px) {
    .row-menu-bar{
        justify-content: flex-start;
    }
}
@media (min-width: 961px) {
    .row-menu-bar{
        justify-content: center;
    }
}
</style>