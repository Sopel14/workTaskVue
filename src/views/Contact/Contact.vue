<template>
    <div class="view-contact">
        <div class="view-contact__header">
            <img src="@/assets/images/google.png" />
        </div>
        <div class="view-contact__content">
            <div class="address">
                <h2>Mailing Address:</h2>
                <p>
                    Genius Money<br>
                    Unit 6 Sovereign Gate<br>
                    308-314 Commercial Road<br>
                    Portsmouth<br>
                    PO4 1BL<br>
                </p>
                <p>
                    Genius Money<br>
                    4 Old Park Lane<br>
                    Mayfair<br>
                    London<br>
                    W1K 1QW<br>
                </p>
                <h2>Drop Us a Line</h2>
                <p>
                    Need to speak with someone?
                    <a href="tel:0330 335 0400">0330 335 0400</a>
                    (Free to call from most mobile tariffs)
                </p>
            </div>
            <div class="contact-form">
                <h1>contact us</h1>
                <div class="input-row">
                    <label>Name</label>
                    <input type="text" v-model="form.name"/>
                </div>
                <div class="input-row">
                    <label>Email address</label>
                    <input type="text" v-model="form.email"/>
                </div>
                <div class="input-row">
                    <label>Telephone number</label>
                    <input type="text" v-model="form.telephone"/>
                </div>
                <div class="input-row">
                    <label>Message</label>
                    <textarea v-model="form.message"></textarea>
                </div>
                <btn type="pink">Send message</btn>
            </div>
        </div>
    </div>
</template>

<script>

import btn from '@/components/ui/btn/btn.vue';

export default {
    
    name: 'contact',
    components: {
        btn,
    },
    data(){
        return {

            form: {
                name: '',
                email: '',
                telephone: '',
                message: '',
            },

        };
    },

};

</script>

<style lang="scss" src="./Contact.scss" />
