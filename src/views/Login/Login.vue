<template>
    <div class="login">
        <div class="login__feed">
            <div class="feed">
                <div class="feed__head">
                    <h1>Login</h1>
                </div>
                <div class="feed__body">
                    <p>Login to Your app</p>
                </div>
            </div>
        </div>
        <div class="login__body">
            <div class="login-form">
                <div class="login-form__head">
                    <div class="logo">
                        <img src="../../assets/images/logo/logo.png" alt="Posly"/>
                    </div>
                </div>
                <div class="login-form__body">
                    <sysLabel v-if="invalidData" mode="error">Invalid email or password</sysLabel>
                    <sysLabel v-if="notActivated" mode="warning">Your account has not been activated. Please check your mailbox</sysLabel>
                    <sysLabel v-if="connectErr" mode="warning">Something went wrong, please try again in a moment</sysLabel>
                    <h3>Login</h3>
                    <div class="group" :class="{'error': $v.data.email.$error}">
                        <label>E-mail</label>
                        <input type="text" v-model="data.email" @blur="$v.data.email.$touch()" @keydown.enter="login()"/>
                        <span v-if="!$v.data.email.required" class="error-label"><i class="mtl-error_outline"></i> this field is required</span>
                        <span v-if="!$v.data.email.email" class="error-label"><i class="mtl-error_outline"></i> enter valid email</span>
                    </div>
                    <div class="group" :class="{'error': $v.data.password.$error}">
                        <label>Password</label>
                        <input type="password" v-model="data.password" @blur="$v.data.password.$touch()" @keydown.enter="login()"/>
                        <span v-if="!$v.data.password.required" class="error-label"><i class="mtl-error_outline"></i> this field is required</span>
                    </div>
                </div>
                <div class="login-form__footer">
                    <btn :loading="loading" @click.native="login()">Login</btn>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import { mapState, mapActions } from 'vuex';
import { validationMixin } from 'vuelidate';
import { required, email } from 'vuelidate/lib/validators';

import btn from '../../components/ui/button/btn.vue';
import sysLabel from '../../components/ui/label/sysLabel.vue';

export default {
    
    name: 'Login',
    mixins: [validationMixin],
    components: {

        btn,
        sysLabel,

    },
    data(){

        return { 

            loading: false,
            invalidData: false,
            connectErr: false,

            data: {
                email: '',
                password: '',
            },

        };

    },
    validations: {
        
        data: {

            email: {
                required,
                email,
            },

            password: {
                required,
            },

        },

    },
    methods: {

        ...mapActions([
            'SET_USER',
        ]),

        login(){

            this.invalidData    = false;
            this.connectErr     = false;

            this.$v.$touch();
            if (this.$v.$invalid) return;

            this.loading = true;

            this.$http.post('users/auth', this.data, {
            headers: {

                'Content-Type': 'application/json',

            },
            })
            .then((response) => {

                this.loading = false;
                this.app__setLocalStorage('token', response.data.data.token, 1);
                this.SET_USER(response.data.data.user);
                this.$router.push('/dashboard');

            })
            .catch((error) => {
                
                this.loading = false;

                if (error.response){

                    if (error.response.status === 400 || error.response.status === 401){
                    
                        this.invalidData = true;
                        return;

                    }

                    if (error.response.status === 403){

                        this.notActivated = true;
                        return;

                    }

                }

                this.connectErr = true;

            });

        },

    },
    mounted(){

        if (this.app__getLocalStorage('token') && this.user) this.$router.push('/dashboard');

    },
    computed: {

        ...mapState([
            'user',
        ]),

    },

};

</script>

<style lang="scss" src="./Login.scss"/>
