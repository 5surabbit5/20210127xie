// import img1 from './img/logo.png';

//ES6中的语法 异步处理
// async function sayHello() {
//     const result = await fetch('https://www.baidu.com');
//     console.log(result);
// }

// sayHello();

import Vue from 'vue'
import App from './vue/app.vue'

// import './css/global.scss'
new Vue({
    el: '#app',
    template: '<App/>',
    components: {
        App
    }
})
