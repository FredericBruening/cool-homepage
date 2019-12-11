<template>
    <div>
        <category v-for="category in categories" :category="category" :key="category.name"></category>
    </div>
</template>

<script>
import Category from './Category.vue'

    export default {
        components: { Category },
        data() {
            return {
                categories: []
            }
        },
        created() {
            this.fetch()
        },
        methods: {
            fetch() {
                this.categories.push(
                    {
                        id: '',
                        name: '',
                        products: [
                            { name: '1', url:'/123' }
                        ]
                    }
                )
            }
        }
    }
</script>

<style scoped>

</style>