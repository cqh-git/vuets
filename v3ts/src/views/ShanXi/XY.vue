<template>
    <div class="root">
        <slot-component>
            <template v-slot:la="scope">
                张三{{scope.msg}}
            </template>
        </slot-component>
        <div id="fatherBox"></div>
    </div>
</template>
<script>
    import slotComponent from './modal/slot.vue'
    import {watchEffect, ref, onMounted, onUnmounted} from 'vue'
    import {createTemplate} from './modal/son.ts'

    export default {
        name: 'Home',
        components: {slotComponent},
        setup() {
            const num = ref(1);
            setInterval(() => {
                num.value++
            }, 2000)
            const stop = watchEffect(() => {
                console.log(num.value)
                if (num.value >= 20) stop()
            })
            onMounted(() => {
                createTemplate({
                    name: '张三',
                    age: '12岁'
                })
            });
            onUnmounted(() => {
                stop()
            });
            return {}
        },
    }
</script>
<style scoped>
    #fatherBox {
        width: 200px;
        height: 200px;
        border: 1px solid black;
    }
</style>
