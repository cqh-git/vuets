<template>
    <div>
        <slot name="la" :msg="msg"></slot>
    </div>
</template>

<script>
    export default {
        name: "bb.vue",
        data(){
            return{
                msg:'22222222222222'
            }
        }
    }
</script>

<style scoped>

</style>
