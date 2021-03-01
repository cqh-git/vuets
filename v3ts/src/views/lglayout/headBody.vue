<template>
    <div class="headBody">
        <head-top></head-top>
        <main-body></main-body>
    </div>
</template>
<script>
    import mainBody from "./modules/mainBody";
    import headTop from "./modules/headTop";
    import {onMounted, onUnmounted} from 'vue';

    export default {
        name: "headBody",
        components: {mainBody, headTop},
        setup() {
            const responseFont = () => {
                const dew = 1920, maxWidth = document.documentElement.clientWidth, fontSize = 20;
                if (document.documentElement.clientWidth <= 1100) {
                    document.documentElement.style.fontSize = 1100 / dew * fontSize + 'px'
                } else {
                    document.documentElement.style.fontSize = maxWidth / dew * fontSize + 'px';
                }
            }
            const cancellation = () => {
                document.documentElement.style.fontSize = '16px'
            }
            onUnmounted(() => {
                window.removeEventListener('resize', cancellation())
            })

            onMounted(() => {
                window.addEventListener('resize', responseFont())
            })
            return {responseFont,cancellation}
        }
    };
</script>
<style scoped lang="scss">
    .headBody {
        width: 100%;
        height: 100%;
    }
</style>
