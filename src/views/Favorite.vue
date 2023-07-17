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
    <div class="result">
        <div v-for="link in allImageLinks">
            <img :src="link" alt="">
        </div>
    </div>
</template>

<style scoped>
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
</style>
