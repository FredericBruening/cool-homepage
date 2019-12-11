window.Vue = require('vue');

Vue.component('app', require('./components/mybax/App.vue'));

let vm1 = new Vue({
    el: '#app'
});