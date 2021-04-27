<template>
    <button class="ui-btn"
    @click="$emit('click', $event)"
    :class="{
        'ui-btn--default': type === 'default',
        'ui-btn--pink': type === 'pink'
    }">
        <slot></slot>
    </button>
</template>

<script>

export default {
    
    name: 'btn',
    props: {

        type: {
            type: String,
            default: 'default',
        },

    },

};

</script>

<style lang="scss" src="./btn.scss" />
