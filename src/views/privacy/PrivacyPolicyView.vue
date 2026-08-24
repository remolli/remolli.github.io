<template>
    <div class="dark-theme privacy-page">
        <div class="privacy-container p-3 py-5">

            <div class="row m-0 mb-4 align-items-center justify-content-between gap-3">
                <div class="col-auto p-0">
                    <Button asChild>
                        <router-link to="/"> ← {{ content.backLabel }} </router-link>
                    </Button>
                </div>
                <div class="col-auto p-0">
                    <SelectButton
                        v-model="lang"
                        :options="langOptions"
                        option-label="label"
                        option-value="value"
                        :allow-empty="false"
                        aria-label="Idioma / Language" />
                </div>
            </div>

            <div class="row m-0">
                <h1 class="display-5 text-start p-0" style="font-weight: bold;">
                    {{ content.title }} </h1>
                <p class="lead text-start p-0 mb-0" style="font-weight: 400;">
                    {{ content.appName }} </p>
            </div>

            <Divider/>

            <div v-for="section, idx in content.sections" :key="idx" class="row m-0">
                <h2 v-if="section.title" class="h4 text-start p-0 mt-4 mb-3">
                    {{ section.title }} </h2>

                <template v-for="block, bIdx in section.blocks" :key="bIdx">
                    <p v-if="block.type === 'p'" class="text-start p-0">
                        {{ block.text }} </p>

                    <ul v-else-if="block.type === 'ul'" class="text-start">
                        <li v-for="item, iIdx in block.items" :key="iIdx"> {{ item }} </li>
                    </ul>

                    <ul v-else-if="block.type === 'links'" class="text-start">
                        <li v-for="item, iIdx in block.items" :key="iIdx">
                            <a :href="item.url" target="_blank" rel="noopener noreferrer"> {{ item.label }} </a>
                        </li>
                    </ul>
                </template>
            </div>

            <Divider/>

            <p class="text-start p-0">
                {{ content.effectiveDateLabel }} {{ formattedEffectiveDate }} </p>

            <p class="text-start p-0 mb-0" style="opacity: .7;">
                <span>{{ content.generatedBy.before }}</span>
                <a :href="content.generatedBy.url" target="_blank" rel="noopener noreferrer">
                    {{ content.generatedBy.label }} </a>
            </p>

        </div>
    </div>
</template>

<script setup>
import { Button, Divider, SelectButton } from 'primevue'
import { computed, ref, watch, onMounted, onUnmounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import policy from '@/views/privacy/content/focoNoTreino.js'

const route = useRoute()
const router = useRouter()

const langOptions = [
    { label: 'Português', value: 'pt' },
    { label: 'English', value: 'en' }
]

function initialLang() {
    const queryLang = String(route.query.lang || '').toLowerCase()
    if (queryLang === 'pt' || queryLang === 'en') return queryLang
    return String(navigator.language || '').toLowerCase().startsWith('pt') ? 'pt' : 'en'
}

const lang = ref(initialLang())
const content = computed(() => policy[lang.value])

const formattedEffectiveDate = computed(() => {
    const [year, month, day] = content.value.effectiveDate.split('-').map(Number)
    return new Date(year, month - 1, day).toLocaleDateString(content.value.htmlLang, {
        year: 'numeric', month: 'long', day: 'numeric'
    })
})

function applyLang() {
    document.title = content.value.documentTitle
    document.documentElement.setAttribute('lang', content.value.htmlLang)
}

// O index.html traz o título/idioma do portfólio; restauramos ao sair da rota.
const originalTitle = document.title
const originalHtmlLang = document.documentElement.getAttribute('lang')

onMounted(applyLang)

onUnmounted(() => {
    document.title = originalTitle
    document.documentElement.setAttribute('lang', originalHtmlLang || 'pt-BR')
})

watch(lang, (value) => {
    applyLang()
    router.replace({ query: { ...route.query, lang: value } })
})
</script>

<style scoped>
.privacy-page {
    min-height: 100vh;
    display: flex;
    justify-content: center;
}
.privacy-container {
    width: 100%;
    max-width: 900px;
}
.privacy-container p,
.privacy-container li {
    line-height: 1.7;
}
.privacy-container ul {
    padding-left: 1.5rem;
}

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
