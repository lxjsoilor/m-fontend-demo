import './set-public-path';
import Vue from 'vue';
import singleSpaVue from 'single-spa-vue';

import App from './App.vue';

Vue.config.productionTip = false;

let vueLifecycles = null;
let bootstrap1 = null;
let mount1 = null;
let unmount1 = null;
if(window._hucais_microfontends) {
  vueLifecycles = singleSpaVue({
    Vue,
    appOptions: {
      render: (h) => h(App),
    },
  });
  bootstrap1 = vueLifecycles.bootstrap;
  mount1 = vueLifecycles.mount;
  unmount1 = vueLifecycles.unmount;
}else {
  new Vue({
    render: h => h(App),
  }).$mount('#app')
}


export let bootstrap = bootstrap1;
export let mount = mount1;
export let unmount = unmount1;

