<template>
    <div>
        <p>我是第三步</p>
        <input type="text">
        <el-button @click="prevStep" type="primary">上一页</el-button>
    </div>
</template>

<script>
    import {onMounted} from 'vue';
    export default {
        name: "thirdStep",
        activated() {
            console.log(300)
        },
        deactivated() {
            console.log('third destroy')
        },
        setup(props, context) {
            const {attrs, emit, slots} = context;
            onMounted(() => {
                console.log(333)
            })
            function prevStep() {
                emit('changeComponent', 'secondStep')
            }

            return {prevStep}
        }
    }
</script>

<style scoped>

</style>
