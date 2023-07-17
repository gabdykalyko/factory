<script setup>

import { RouterLink } from 'vue-router';

</script>

<script>
export default {
    props: [
        "results"
    ],
    components: { RouterLink }
}
</script>

<template>
    <div class="result">
        <div v-for="link in results">
            <router-link :to="{ name: 'image', params: { id: link.id }, query: { id: link.id, source: link.links.download, username: link.user.username,
    name: link.user.name, photo: link.user.profile_image.medium}}">
                <img :src="link.links.download" alt="">
            </router-link>
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
