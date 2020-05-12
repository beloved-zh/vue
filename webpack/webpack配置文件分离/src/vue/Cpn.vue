<template>
    <div>
        <h1>我是cpn组件的标题</h1>
        <h2>{{cpn}}</h2>
    </div>
    
</template>

<script>
    export default {
        data(){
        return{
            cpn: 'Hello Vue',
        }
    }
    }
</script>

<style scoped>
    
</style>