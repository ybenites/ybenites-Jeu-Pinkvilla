import getDataApi from "@/api/index";

const state = {
    allData: [],
    dataOnecall: [],
    page: 0
}

const getters = {
    getAllGalleryData: state => {
        return state.allData;
      },
      getPage: state =>{
        return state.page;
      }
}

const actions = {
    getPhotoGallery(context)
    {
        return getDataApi.getGallery(context.getters.getPage).then( galleries => {
            context.commit("setGallery", galleries);
        });
    },
    updatePage(context, page){
        context.commit('setPage', page);
    }
}

const mutations = {
    setGallery (state, galleries) {
        state.dataOnecall = galleries;
        state.allData.push(...galleries);
        state.page++;
    },
    setPage (state, page){
        state.page = page;
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}