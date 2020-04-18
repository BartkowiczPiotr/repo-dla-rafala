<template>
    <div class="app-topBar">
        <div class="app-topBar__left">
            <mainMenu />
            <h3>{{appHeading}}</h3>
        </div>
        <div class="app-topBar__center">
            <div class="app-logo" @click="$router.push('/dashboard')">
                <img src="../../assets/images/logo/emblem.png" alt="Posly logo" title="Posly - Dashboard"/>
            </div>
        </div>
        <div class="app-topBar__right">
            <i class="mtl-settings btn-ico" title="Admin panel"></i>
            <i class="mtl-power_settings_new btn-logout btn-ico" title="Logout" @click="logout()"></i>
        </div>
    </div>
</template>

<script>

import { mapState, mapActions } from 'vuex';

import mainMenu from './mainMenu/mainMenu.vue';

export default {

    name: 'topBar',
    components: {

        mainMenu,

    },
    methods: {

        ...mapActions([
            'SET_USER',
        ]),

        logout(){

            this.app__deleteLocalStorage('token');
            this.SET_USER();
            this.$router.push('/');

        },

    },
    computed: {

        ...mapState([
            'appHeading',
        ]),

    },
    
};

</script>

<style lang="scss" src="./topBar.scss"/>
