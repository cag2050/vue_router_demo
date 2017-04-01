<template>
    <div class='navi'>navi内容
        <div class='logo'>
            <router-view></router-view>
            <router-view name='content'></router-view>
        </div>
    </div>
</template>

<script>
export default {
    name: 'hello',
    data () {
        return {
        }
    }
}
</script>

<style>
.navi {
    background-color: gray
}
.logo {
    width: 300px;
    background-color: red
}
</style>
