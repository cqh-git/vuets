<template>
    <div class="root">
        <p>我是第一步</p>
        <input type="text">
        <el-button @click="nextStep" type="error">下一步</el-button>
    </div>
</template>

<script>
    import {onMounted} from 'vue';

    export default {
        name: "firstStep",
        activated() {
            console.log(100)
        },
        deactivated() {
            console.log('first destroy')
        },
        setup(props, context) {
            const {attrs, emit, slots} = context;
            onMounted(() => {
                console.log(111)
            })

            function nextStep() {
                emit('changeComponent', 'secondStep')
            }

            return {nextStep}
        }
    }
</script>

<style scoped lang="scss">
    .root {
        width: 100%;
        height: 100%;
    }
</style>
