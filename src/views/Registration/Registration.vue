<template>
    <div class="view-registration">
        <div class="register">
            <h1>REGISTER WITH GENIUS</h1>
            <p>Please fill in the below form to register with Genius Money.</p>
            <p>If you do not have your own email address. consider creating your own Google Gmail address, it's free and only takes a couple of minutes.</p>
            <p>If you wish to use the same email as someone else to receive your statements, etc, please contact Genius Money on <a href="tel:0330 335 0400">0330 335 0400</a></p>
            <input type="text" placeholder="First Name" v-model="user.name"/>
            <input type="text" placeholder="Surname" v-model="user.surname"/>
            <p>This email will be used to login to your account</p>
            <input type="email" placeholder="E-Mail Address" v-model="user.email"/>
            <input type="password" placeholder="Password (8 Characters Minimum)" v-model="user.password"/>
            <input type="password" placeholder="Confirm password" v-model="user.password2"/>
            <label> 
                <input type="checkbox" v-model="agreements.services"/>    
                I agree to the Genius Money <a href="https://geniusmoney.co.uk/terms/Contract-10.pdf" target="_blank" class="bp-color">Contract for Services</a>
            </label>
            <label> 
                <input type="checkbox" v-model="agreements.gdpr"/>    
                I agree to the Genius Money <a href="https://geniusmoney.co.uk/terms/GM--0805DataProtectionPolicy1.pdf" target="_blank" class="bp-color">Data Protection &amp; Privacy
           Policy</a>
            </label>
            <label> 
                <input type="checkbox" v-model="agreements.optOut"/>    
                I agree to the Genius Money <a href="https://geniusmoney.co.uk/docs/GM-Conduct-Regulations-Opt-Out-Notice.pdf" target="_blank" class="bp-color">Conduct Regulations Opt Out
           Notice</a>
            </label>
            <btn type="pink" @click="register()">Register</btn>
        </div>
    </div>
</template>

<script>

import btn from '@/components/ui/btn/btn.vue';

export default {
    
    name: 'registration',
    components: {
        btn,
    },
    data(){
        return {

            user: {
                name: '',
                surname: '',
                email: '',
                password: '',
                password2: '',
            },

            agreements: {
                services: false,
                gdpr: false,
                optOut: false,
            },

        };
    },
    methods: {

        register(){
            console.log(this.user);
        },

    },

};

</script>

<style lang="scss" src="./Registration.scss" />
