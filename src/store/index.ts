import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      count: 0
    } as {
      count: number;
    }
  },
  mutations: {
  },
  actions: {
    increment(context) {
      // context.commit('increment')
      return new Promise((resolve, reject) => {
        console.log('increment started');

        setTimeout(() => {
          console.log('timeouted');
          // context.state.count++;
          (this.state as any).count++;
          resolve();
        }, 3000);
      });
    }
  },
  modules: {
  }
})
