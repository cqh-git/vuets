<template>
    <div class="root">

        <transition name="fade" mode="out-in" appear>
            <keep-alive include="firstStep,secondStep,thirdStep">
                <component :is="currentStep" @changeComponent="changeComponent"></component>
            </keep-alive>
        </transition>
    </div>
</template>
<script>
    import {ref} from 'vue';
    import {firstStep, secondStep, thirdStep} from './step'

    export default {
        name: "XYDetail",
        components: {firstStep, secondStep, thirdStep},
        setup(props, context) {
            const {attrs, emit, slots} = context;
            const currentStep = ref(firstStep);

            function changeComponent(val) {
                currentStep.value = val
            }

            return {currentStep, changeComponent};
        },
    };
</script>
<style scoped lang="scss">
    .root {
        width: 100%;
        height: 100%;
    }
</style>
