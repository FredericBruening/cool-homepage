window.Vue = require('vue');

import Buefy from 'buefy';

Vue.use(Buefy, {
    defaultIconPack:         'fa',
    defaultContainerElement: '#product-page'
});

let vm1 = new Vue({
    el: '#main-wrapper'
});