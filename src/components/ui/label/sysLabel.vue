<template>
    <div class="sys-label" :class="{
        'error': mode === 'error',
        'warning': mode === 'warning',
    }">
        <p><slot></slot></p>
        <label v-if="controls"><i class="mtl-close"></i></label>
    </div>
</template>

<script>

export default {

    name: 'sysLabel',
    props: {

        mode: {
            type: String,
            required: true,
        },

        controls: {
            type: Boolean,
            default: false,
        },

    },
    
};

</script>

<style lang="scss" src="./sysLabel.scss"/>
