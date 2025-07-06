<template>
    <form ref="form" @submit.prevent="sendEmail">
        <div class="row">
            <label for="name" class="text-start p-0" style="font-weight: 700;">Nome *</label>
            <InputText id="name" v-model="formData.name" name="name" required  autocomplete="off" placeholder="Digite aqui seu nome"/>
        </div>
        <div class="row">
            <label for="phone" class="text-start p-0" style="font-weight: 700;">Telefone (opcional)</label>
            <InputMask id="phone" v-model="formData.phone" name="phone" type="phone" mask="(99) 99999-9999" autocomplete="off" placeholder="Digite aqui seu número para contato"/>
        </div>
        <div class="row">
            <label for="email" class="text-start p-0" style="font-weight: 700;">E-mail *</label>
            <InputText id="email" v-model="formData.email" name="email" type="email" required  autocomplete="off" placeholder="Digite aqui seu e-mail"/>
        </div>
        <div class="row">
            <label for="message" class="text-start p-0" style="font-weight: 700;">Mensagem *</label>
            <Textarea id="message" v-model="formData.message"  name="message" required style="resize:none;" rows="3"  autocomplete="off" placeholder="Digite aqui sua mensagem"/>
        </div>
        <div class="row">
            <Toast/>
            <Button label="Enviar" class="fs-5" type="submit" />
        </div>
    </form>
</template>

<script>
import { ref } from 'vue';
import { InputText, InputMask, Textarea, Button, Toast } from 'primevue';
import { useToast } from "primevue/usetoast";
import emailjs from '@emailjs/browser';

export default {
    components: {
        InputText,
        InputMask,
        Textarea,
        Button,
        Toast,
    },
    setup() {
        const formData = ref({
            name: '',
            phone: '',
            email: '',
            message: '',
        });
        const toast = useToast();
        
        function sendEmail() {
            const showSuccess = () => {
                toast.add({ severity: 'success', summary: 'Sucesso', detail: 'Sucesso ao enviar o e-mail', life: 3000 });
            };
            const showError = () => {
                toast.add({ severity: 'error', summary: 'Erro', detail: 'Ocorreu um erro ao enviar o e-mail', life: 3000 });
            };
            emailjs
                .sendForm(process.env.VUE_APP_SERVICE_ID, process.env.VUE_APP_TEMPLATE_ID, 'form', {
                    publicKey: process.env.VUE_APP_PUBLIC_ID,
                })
                .then(
                    () => {
                        formData.value = {
                            name: '',
                            phone: '',
                            email: '',
                            message: '',
                        };
                        showSuccess();
                    },
                    () => {
                        showError();
                    },
                );
        }

        return {
            formData,
            sendEmail,
        };
    },
};
</script>

<style scoped>
.row {
    margin-bottom: 1rem;
}
</style>

<!-- <template>
    <form ref="form" @submit.prevent="sendEmail">
        <div class="row">
            <label>Name</label>
            <input type="text" name="name">
        </div>
        <div class="row">
            <label>Email</label>
            <input type="email" name="email">
        </div>
        <div class="row">
            <label>Message</label>
            <textarea name="message"></textarea>
        </div>
        <div class="row">
            <input type="submit" value="Send">
        </div>
    </form>
</template>

<script>
import emailjs from '@emailjs/browser';

export default {
    methods: {
        sendEmail() {
            emailjs
                .sendForm(process.env.VUE_APP_SERVICE_ID, process.env.VUE_APP_TEMPLATE_ID, this.$refs.form, {
                    publicKey: process.env.VUE_APP_PUBLIC_ID,
                })
                .then(
                    () => {
                        console.log('SUCCESS!');
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                    },
                );
        },
    },
};
</script> -->