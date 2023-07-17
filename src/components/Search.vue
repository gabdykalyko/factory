<script setup>
import axios from 'axios'
import Result from './Result.vue';
</script>

<script>

export default {
    data() {
        return {
            result: null,
            searchValue: '',
            loading: false,
            error: null
        }
    },
    mounted() {
        axios.get('https://api.unsplash.com/photos/random', {
            params: { count: '8' },
            headers: {
                Authorization: 'Client-ID hW9Ksvol1DwVc_WWsWrRfywa52fF_QtKHRsVdHmYyMA'
            }
        }).then((response) => {
            this.result = response.data
        })
    },
    methods: {
        search: function () {
            this.loading = true;
            axios.get('https://api.unsplash.com/photos/random', {
                params: { count: '8', query: this.searchValue },
                headers: {
                    Authorization: 'Client-ID hW9Ksvol1DwVc_WWsWrRfywa52fF_QtKHRsVdHmYyMA'
                }
            }).then((response) => {
                this.result = response.data
            }).catch((error) => {
                this.error = 'Failed to search photos';
                console.error(error);
            }).finally(() => {
                this.loading = false;
            })
        }
    }
}
</script>

<template>
    <div class="container">
        <div class="wrapper">
            <form action="">
                <div>
                    <input type="text" placeholder="Поиск" v-model="searchValue">
                </div>
                <div>
                    <button v-on:click.stop.prevent="search">
                        <img src="../assets/search.svg" alt="">
                    </button>
                </div>
            </form>
        </div>
    </div>

    <div v-if="loading" class="loader">
        <img src="../assets/loader.svg" alt="">
    </div>

    <Result :results="result" v-if="!loading && result" />

    <div v-if="error" class="error">{{ error }}</div>
</template>

<style scoped>
.container {
    background-image: url('../assets/banner.jpg');
    padding-top: 92px;
    padding-bottom: 106px;
}

.wrapper {
    background-color: #ffffff;
    height: 70px;
    margin: 0 auto;
    width: 866px;
}

form {
    display: flex;
    justify-content: space-between;
    padding: 21px 34px 23px 39px;
}

input {
    border: none;
    font-size: 24px;
    outline: none;
    width: 700px;
}

button {
    background-color: unset;
    border: none;
    cursor: pointer;
    outline: none;
}

.loader {
    margin-top: 30px;
    text-align: center;
}

@media (max-width: 900px) {
    input {
        width: 100%;
    }

    .wrapper {
        width: 100%;
    }
}
</style>
