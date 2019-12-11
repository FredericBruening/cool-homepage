<template>
    <div>
        <div v-for="product in category.products">
            <img src="/gfx/keinBild.gif" alt="" width="300" height="250">
        </div>
    </div>
</template>
<script>
    export default {
        props: ['category']
    }
</script>

<style scoped>

</style>