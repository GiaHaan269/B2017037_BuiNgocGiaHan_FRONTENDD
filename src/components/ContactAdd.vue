<template>
    <div class="page">
        <h4>Thêm Liên hệ</h4>
        <ContactForm :contact="contact" @submit:contact="saveContact" />
        <p>{{ message }}</p>
    </div>
</template>


<script>
import ContactForm from "@/components/ContactForm.vue";
import ContactService from "../services/contact.service";

export default {
    components: {
        ContactForm,
    },

    data() {
        return {
            contact: {
                name: '',
                email: '',
                address: '',
                phone: ''
            },
            message: "",
        }
    },

    methods: {
        async saveContact(contact) {
            try {
                await ContactService.create(contact)
                this.message = 'Liên hệ đã được thêm vào danh bạ!!!'
            } catch (error) {
                this.message = 'Có lỗi xảy ra, không thể thêm liên hệ vào danh bạ...'
                console.log(error)
            }
        },
    },
    
    created() {
        this.message = "";
    },
}
</script>