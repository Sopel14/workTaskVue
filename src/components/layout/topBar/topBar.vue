<template>
    <div class="app-topbar">
        <div class="app-topbar__left">
            <img class="logo" src="@/assets/logo/logo.svg" alt="logo"/>
            <h1 @click="$router.push('/')">Genius money</h1>
        </div>
        <div class="app-topbar__right">
            <div class="controls">
                <!-- <btn type="default" @click="$router.push('/login')">client login</btn> -->
                <btn type="pink" @click="$router.push('/login')">worker login</btn>
            </div>
            <div class="menu">
                <ul>
                    <li><router-link to="/contact">get in touch</router-link></li>
                    <li><router-link to="/register">worker register</router-link></li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>

import btn from '@/components/ui/btn/btn.vue';

export default {
    
    name: 'topBar',
    components: {
        btn,
    },

};

</script>

<style lang="scss" src="./topBar.scss" />
