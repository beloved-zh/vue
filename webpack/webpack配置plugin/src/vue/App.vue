<template>
    <div>
        <h1>{{msg}}</h1>
        <h2>{{name}}</h2>
        <Cpn/>
    </div>
    <!-- 
        安装vue-loader和vue-template-compiler
        npm install vue-loader vue-template-compiler --save-dev
     -->
</template>

<script>
    import Cpn from './Cpn'

    export default {
        data(){
            return{
                msg: 'Hello Webpack',
                name: '张恒'
            }
        },
        components: {
            Cpn
        }
    }
</script>

<style scoped>
    h2{
        color: blue;
    }
</style>