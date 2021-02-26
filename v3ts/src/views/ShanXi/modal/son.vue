<template>
    <div>
        姓名:{{name}}
        年龄：
        <slot name="age"></slot>
    </div>
</template>

<script>
    export default {
        name: "son",
        props: {
            name: {
                type: String,
                default: "未知"
            }
        }
    }
</script>

<style scoped>

</style>
