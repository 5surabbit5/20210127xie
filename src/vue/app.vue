<template>
    <div>
        <h1>登录组件</h1>
        <p>{{message}}</p>
        555555555555555555
        <Login/>
    </div>
</template>

<script>
    import Login from './logo.vue'
    export default {
        data: function() {
            return {
                message: '登录下面的内容'
            }
        },
        components: { Login }
    }
</script>

<style>
    p {
        background: blueviolet;
    }
</style>