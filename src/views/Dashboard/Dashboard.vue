<template>
    <div class="app-view view-dashboard">

    </div>
</template>

<script>

import { mapState, mapActions } from 'vuex';

export default {
    
    name: 'Dashboard',
    data(){

        return { 

        };

    },
    methods: {

        ...mapActions([
            'SET_APP_HEADING',
        ]),

    },
    mounted(){

        this.SET_APP_HEADING('Dashboard');
        
    },

};

</script>

<style lang="scss" src="./Dashboard.scss"/>
