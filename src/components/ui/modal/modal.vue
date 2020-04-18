<template>
    <div class="ui-modal">
        <transition name="fade">
            <div v-if="showWrapper" class="ui-modal-wrapper">
                <div class="ui-modal__header">
                    <div class="modal-ico">
                        <i v-if="mode === 'success'" class="mtl-done_all success"></i>
                        <i v-if="mode === 'warning'" class="mtl-warning warning"></i>
                        <i v-if="mode === 'error'" class="mtl-error_outline error"></i>
                    </div>
                    <h3><slot name="header"></slot></h3> 
                </div>
                <div class="ui-modal__body">
                    <slot name="body"></slot> 
                </div>
                <div class="ui-modal__footer">
                    <button v-for="(button, index) in buttons" :key="index"
                    :style="{background: button.background, color: button.color}"
                    @click="$emit(button.emit)">
                        {{button.text}}
                    </button>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>

export default {

    name: 'modal',
    props: {

        mode: {
            type: String,
            default: 'success',
        },
        
        buttons: {
            type: Array,
            default: () => [],
        },

    },
    data(){

        return {

            showWrapper: false,

        };

    },
    mounted(){

        setTimeout(() => {
            this.showWrapper = true;
        }, 100);

    },
    
};

</script>

<style lang="scss" src="./modal.scss"/>
