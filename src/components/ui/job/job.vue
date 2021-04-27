<template>
    <div class="ui-job">
        <div class="ui-job__header">
            <p>contract order</p>
            <h3>{{ item.title }}</h3>
            <h4>RATE: {{ item.rate }}</h4>
            <p class="address">{{ item.address }}</p>
        </div>
        <div class="ui-job__row">
            <p>Key Duties / Responsibilities</p>
            <p>{{ item.duties }}</p>
        </div>
        <div class="ui-job__row">
            <p>Qualification / Skills / Experience</p>
            <p>{{ item.skills }}</p>
        </div>
        <div class="ui-job__footer">
            <btn type="pink">view job</btn>
        </div>
    </div>
</template>

<script>

import btn from '@/components/ui/btn/btn.vue';

export default {
    
    name: 'job',
    components: {
        btn,
    },
    props: {
        
        item: {
            type: Object,
            default: () => {},
            required: true,
        },

    },

};

</script>

<style lang="scss" src="./job.scss" />
