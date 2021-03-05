<template>
    <div class="root">
        <AsyncPageWithOptions></AsyncPageWithOptions>
    </div>
</template>
<script>
    import {defineAsyncComponent, getCurrentInstance} from "vue"

    export default {
        name: 'WX',
        abe: 222,
        created() {
            console.log(this.$options)
        },
        components: {
            AsyncPageWithOptions: defineAsyncComponent({
                loader: () => import("./components/son.vue"),
                delay: 2000,
                timeout: 3000,
                suspensible: false,
                errorComponent: () => import("./components/Foo.vue"),
                loadingComponent: () => import("./components/Foo.vue"),
            })


        },
    }
</script>
