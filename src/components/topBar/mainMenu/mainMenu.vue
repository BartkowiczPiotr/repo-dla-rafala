<template>
    <div class="app-menu">

        <div class="app-menu__ico" @click="menu()">
            <i class="mtl-notes-1" title="Menu"></i>
        </div>

        <transition name="fade" @after-enter="slideMenu = true">
            <div v-if="open" class="app-menu__side">

                <transition name="slide" @enter="addListener()">
                    
                    <div v-if="slideMenu" class="app-side-menu">
                        <div class="app-side-menu__header">
                            <div class="menu-controls">
                                <i class="mtl-close" @click="menu()"></i>
                            </div>
                        </div>

                        <div class="app-side-menu__body">
                            <div class="menu-list-wrapper">
                                <div class="menu-list">
                                    <router-link class="menu-list__item" to="/dashboard"><i class="mtl-widgets"></i>Dashboard</router-link>
                                    <router-link class="menu-list__item" to="/posm"><i class="mtl-local_offer"></i>POS Materials</router-link>
                                    <router-link class="menu-list__item" to="/receivers"><i class="mtl-store_mall_directory"></i>Receivers</router-link>
                                    <router-link class="menu-list__item" to="/places"><i class="mtl-location_on"></i>Places</router-link>
                                    <router-link class="menu-list__item" to="/services"><i class="mtl-swap_horiz"></i>Services</router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </transition>

            </div>
        </transition>

    </div>
</template>

<script>

export default {

    name: 'mainMenu',
    data(){

        return {

            open: false,
            slideMenu: false,
            menuBar: null,

        };

    },
    watch: {
        $route(){
            if (this.open) this.menu();
        },
    },
    methods: {

        menu(){

            if (this.open){

                this.slideMenu = false;
                this.open = false;
                document.body.removeEventListener('click', this.close, true);
                return;

            }

            this.open = true;

        },

        addListener(){

            this.menuBar = document.querySelector('.app-side-menu');
            document.body.addEventListener('click', this.close, true);

        },

        close(e){

            if (this.menuBar){

                const isClickInside = this.menuBar.contains(e.target);

                if (!isClickInside){

                    document.body.removeEventListener('click', this.close, true);
                    this.slideMenu = false;
                    this.open = false;

                }

            }

        },

    },
    
};

</script>

<style lang="scss" src="./mainMenu.scss"/>
