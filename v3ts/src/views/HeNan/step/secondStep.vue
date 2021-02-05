<template>
    <div>
        <div>我是第二步</div>
        <input type="text">
        <el-button @click="prevStep" type="success">上一页</el-button>
        <el-button @click="nextStep" type="warning">下一页</el-button>
    </div>
</template>

<script>
    import {onMounted} from 'vue';
    export default {
        name: "secondStep",
        activated() {
            console.log(200)
        },
        deactivated() {
            console.log('second destroy')
        },
        setup(props, context) {
            const {attrs, emit, slots} = context;
            onMounted(() => {
                console.log(222)
            })
            function nextStep() {
                emit('changeComponent', 'thirdStep')
            }

            function prevStep() {
                emit('changeComponent', 'firstStep')
            }

            return {nextStep, prevStep};
        },
    }
</script>

<style scoped>

</style>
