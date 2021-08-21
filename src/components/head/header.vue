<template>
    <div>
        <!-- <nav-menu :leftNav="leftNav" :headBanner="headBanner" :menuShow="menuShow"></nav-menu> -->
    <nav-menu></nav-menu>
    </div>
</template>

<script>
import NavMenu from "../NavMenu/navMenu.vue";
import { mapState, mapMutations, mapActions } from "vuex";

export default {
    computed: {
        // 使用对象展开运算符将此对象混入到外部对象中
        ...mapState("header", [
            "leftNav",
            "headBanner",
            "searchWord",
            "suggest",
            "menuLeft"
        ])
    },
    ...mapState("search", ["menuShow"]),

    components: {
        NavMenu
    },

    methods: {
        // ...mapMutations调用的是header.js里mutations中的方法, "SET_SEARCH_WORD"可以为state.searchValue进行赋值
        ...mapMutations("header",{
            setSearchValue: "SET_SEARCH_WORD"
        }),
        // ...mapActions调用的是header.js里mapActions中的方法
        ...mapActions("header", [
        "setHeadBanner", // 将 `this.setHeadBanner(amount)` 映射为 `this.$store.dispatch('headBanner', amount)`
        "setSearchDefaultWords",
        "setSuggest"
        ])
    }
}
</script>


<style scoped>

</style>