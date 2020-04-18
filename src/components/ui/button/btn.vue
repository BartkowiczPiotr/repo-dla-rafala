<template>
    <div class="btn-regular">
        <slot></slot>
        <div v-if="loading" class="loading-spinner"></div>
    </div>
</template>

<script>

export default {

    name: 'btn',
    props: {

        loading: {
            type: Boolean,
            default: false,
        },

    },
    
};

</script>

<style lang="scss" src="./btn.scss"/>
