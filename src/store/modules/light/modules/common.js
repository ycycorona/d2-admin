import { GetProjectGroup } from '@api/sys.login'
export default {
  namespaced: true,
  state: {
    // 项目、分组数据
    projectGroup: []
  },
  mutations: {
    /**
     * @description 设置项目、分组数据
     * @param {Object} state vuex state
     */
    projectGroupSet(state, data) {
      state.projectGroup = data
    }
  },
  actions: {
    reqProjectGroup({ dispatch, commit }) {
      console.log(GetProjectGroup)
      return new Promise((resolve, reject) => {
        GetProjectGroup()
          .then(res => {
            commit('projectGroupSet', res)
            resolve()
          })
          .catch(err => {
            console.log('err: ', err)
            reject(err)
          })
      })
    }
  }
}