
const User = {
  state: sessionStorage.getItem("state") ? JSON.parse(sessionStorage.getItem("state")) : {
    user: {
      username: ""
    }
  },
  getters: {
    getUser(state) {
      return state.user
    }
  },

// 同步更新无法满足
  mutations: {
    updateUser(state, user) {
      state.user = user;
    }
  },

// 异步执行更新用户
  actions: {
    asyncUpdateUser(context, user) {
      context.commit('updateUser', user);
    }
  }
}

export default User;
