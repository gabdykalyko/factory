<script setup>
</script>

<template>
    <header class="header">
        <div class="container">
            <router-link :to="{ name: 'home' }">
                <img src="../assets/logosmall.svg" alt="">
            </router-link>
            <div class="nav">
                <router-link :to="{ name: 'home' }">
                    <div class="nav__item">
                        <div class="like">
                            <img src="../assets/searchwhite.svg" alt="">
                        </div>
                        <div class="txt">
                            Поиск
                        </div>
                    </div>
                </router-link>
                <router-link :to="{ name: 'favorite' }">
                    <div class="nav__item">
                        <div class="like">
                            <img src="../assets/like.svg" alt="">
                        </div>
                        <div class="txt">
                            Избранное
                        </div>
                    </div>
                </router-link>
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
    padding: 23px 0 14px;
}

.nav {
    display: flex;
}

.nav__item {
    display: flex;
    justify-content: space-between;
}

.nav__item:nth-child(1) {
    margin-right: 38px;
}

.like {
    margin-right: 10px;
}

.txt {
    color: #ffffff;
    font-size: 18px;
}

@media (max-width: 508px) {
    .txt {
        display: none;
    }
}
</style>
