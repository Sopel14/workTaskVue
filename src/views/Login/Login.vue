<template>
    <div class="view-login">
        <div class="login">
            <h1>GENIUS WORKER LOGIN</h1>
            <p>Use this worker login form to access your Genius Portal where you can view and update the information held on you by Genius.</p>
            <p>Functionality is continually being added to your Portal giving you easier and quicker access to the services and information important to you.</p>
            <p>If you are having difficulties, please contact Genius on <a href="tel:0330 335 0400">0330 335 0400</a></p>
            <input type="email" placeholder="E-Mail Address" v-model="user.email"/>
            <input type="password" placeholder="Password (8 Characters Minimum)" v-model="user.password"/>
            <label> 
                <input type="checkbox" v-model="rememberMe"/>    
                Remember Me
            </label>
            <btn type="pink" @click="login()">Login</btn>
        </div>
    </div>
</template>

<script>

import btn from '@/components/ui/btn/btn.vue';

export default {
    
    name: 'login',
    components: {
        btn,
    },
    data(){
        return {

            user: {
                email: '',
                password: '',
            },

            rememberMe: false,

        };
    },
    methods: {

        login(){
            console.log(this.user);
        },

    },

};

</script>

<style lang="scss" src="./Login.scss" />
