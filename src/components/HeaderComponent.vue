<script setup>

</script>

<template>
    <header class="header">
        <div class="container">
            <router-link :to="{ name: 'home' }">
                <img src="../assets/logo.svg" alt="">
            </router-link>
            <div class="favorite">
                <div class="like">
                    <img src="../assets/like.svg" alt="">
                </div>
                <div class="txt">
                    <router-link :to="{ name: 'favorite' }">
                        Избранное
                    </router-link>
                </div>
            </div>
        </div>
    </header>
</template>

<style scoped>
.header {
    background-color: #000000;
}

.container {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 1470px;
    padding: 38px 0;
}

.favorite {
    display: flex;
    justify-content: space-between;
}

.like {
    margin-right: 10px;
}

.txt {
    color: #ffffff;
    font-size: 18px;
}
</style>
