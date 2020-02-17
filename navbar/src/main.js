import './set-public-path'
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import singleSpaVue from 'single-spa-vue';
import ElementUI from 'element-ui';

Vue.use(ElementUI);
Vue.config.productionTip = false;
let vueLifecycles = null;
if(window._hucais_microfontends) {
  vueLifecycles = singleSpaVue({
    Vue,
    appOptions: {
      render: (h) => h(App),
      router,
    },
  });
  bootstrap = vueLifecycles.bootstrap;
  mount = vueLifecycles.mount;
  unmount = vueLifecycles.unmount;
}else {
  new Vue({
    router,
    render: h => h(App),
  }).$mount('#app')
}

export let bootstrap = bootstrap;
export let mount = mount;
export let unmount = unmount;