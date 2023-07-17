import { createStore } from 'vuex';

const store = createStore({
  state: {
    imageLinks: [] 
  },
  mutations: {
    addImageLink(state, link) {
      state.imageLinks.push(link);
    },
    removeImageLink(state, link) {
      const index = state.imageLinks.indexOf(link);
      if (index !== -1) {
        state.imageLinks.splice(index, 1);
      }
    }
  },
  actions: {
    toggleImageLike({ commit, state }, link) {
      if (state.imageLinks.includes(link)) {
        commit('removeImageLink', link);
      } else {
        commit('addImageLink', link);
      }
    }
  },
  getters: {
    isImageLiked: (state) => (link) => state.imageLinks.includes(link),
    allImageLinks: (state) => state.imageLinks
  }
});

export default store;
