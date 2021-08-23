<template>
    <div id="main">
        <left-menu-top class="top"></left-menu-top>
        <left-menu-bottom class="bottom"></left-menu-bottom>
    </div>
</template>

<script>
import LeftMenuTop from '../LeftMenu/leftMenuTop.vue'
import LeftMenuBottom from '../LeftMenu/leftMenuBottom.vue'
export default {
    components :{
        LeftMenuTop,
        LeftMenuBottom
    }
}
</script>

<style scoped>
.top {
    position: relative;
}
.bottom {
    height: 333px;
}
</style>