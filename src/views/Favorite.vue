<script setup>
import HeaderAlternative from '../components/HeaderAlternative.vue'
</script>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';

export default {
    computed: {
        ...mapGetters(['allImageLinks'])
    }
};
</script>

<template>
    <HeaderAlternative />
    <div class="favorite">
        Избранное
    </div>
    <div class="result">
        <div v-for="link in allImageLinks">
            <img :src="link" alt="">
        </div>
    </div>
</template>

<style scoped>
.favorite {
    font-size: 72px;
    font-weight: 700;
    text-align: center;
    margin-top: 94px;
    margin-bottom: 101px;
}

.result {
    column-gap: 30px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    row-gap: 30px;
    margin: 114px auto;
    width: 1479px;
}


.result img {
    height: 440px;
    width: 473px;
}

@media (max-width: 1488px) {
    .result {
        grid-template-columns: 1fr;
        text-align: center;
        width: 100%;
    }
}

@media (max-width: 508px) {
    .favorite {
        font-size: 36px;
    }
    .result img {
        height: 331px;
        width: 334px;
    }
}
</style>
