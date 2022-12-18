<script setup>
    import { onMounted } from "@vue/runtime-core";
    import { useRouter } from "vue-router";

    const router = useRouter();

    // 每次頁面結束後，就將位置跳轉到頁面頂端。
    onMounted(() => {
        router.afterEach((to, from) => window.scrollTo(0, 0));
    });
</script>

<template>

</template>

<style lang="scss" scoped>

</style>