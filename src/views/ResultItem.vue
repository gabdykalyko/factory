<script setup>
import HeaderAlternative from '../components/HeaderAlternative.vue'
</script>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';

export default {
  computed: {
    ...mapState(['photos']),
    ...mapGetters(['isImageLiked', 'allImageLinks'])
  },
  methods: {
    ...mapActions(['toggleImageLike'])
  }
};
</script>

<template>
    <HeaderAlternative />
    <div class="image" :style="{ backgroundImage: 'url(' + this.$route.query.source + ')' }">
        <div class="user__nav">
            <div class="user">
                <div class="icon">
                    <img :src="this.$route.query.photo" alt="">
                </div>
                <div class="info">
                    <div class="name">
                        {{ this.$route.query.name }}
                    </div>
                    <div class="username">
                        @{{ this.$route.query.username }}
                    </div>
                </div>
            </div>
            <div class="links">
                <div class="like" @click="toggleImageLike(this.$route.query.source)">
                    <img :src="isImageLiked(this.$route.query.source) ? 'src/assets/heart.png' : 'src/assets/love.png'" alt="">
                </div>
                <div class="download">
                    <div class="download__icon">
                        <img src="../assets/download.svg" alt="">
                    </div>
                    <div>
                        Downloand
                    </div>
                </div>
            </div>
        </div>

        <div class="blacknwhite">

        </div>

        <div class="main">
            <img :src="this.$route.query.source" alt="">
        </div>
    </div>
</template>

<style scoped>
.image {
    background-repeat: no-repeat;
    background-size: cover;
    height: 774px;
    padding-top: 43px;
    position: relative;
}

.blacknwhite {
    background-color: rgba(0, 0, 0, 0.75);
    bottom: 0;
    left: 0;
    right: 0;
    position: absolute;
    top: 0;
    z-index: 1;
}

.user__nav {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin: auto;
    max-width: 1480px;
    position: relative;
    z-index: 2;
}

.user {
    color: #ffffff;
    display: flex;
}

.icon {
    margin-right: 10px;
}

.icon img {
    height: 55px;
    width: 55px;
}

.name {
    font-size: 30px;
}

.username {
    font-size: 18px;
}

.links {
    align-items: center;
    display: flex;
    justify-content: space-between;
}

.like {
    align-items: center;
    background-color: #ffffff;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    height: 49px;
    width: 49px;
}

.like img {
    width: 24px;
}

.download {
    align-items: center;
    background-color: #FFF200;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    font-size: 20px;
    height: 49px;
    margin-left: 20px;
    width: 206px;
}

.download__icon {
    margin-right: 16px;
}

.main {
    margin: 40px auto;
    padding-bottom: 102px;
    position: relative;
    width: 1482px;
    z-index: 2;
}

.main img {
    width: 1482px;
}
</style>
