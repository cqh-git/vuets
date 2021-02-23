<template>
    <div class="sonClass" :level="level">
        <div v-if="showText" @dblclick="eventBus" :level="level">
            name:{{name}}---age:
            <slot name="age"></slot>
            <slot name="sex"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "aa.vue",
        data() {
            return {
                level: '我是传过去'
            }
        },
        props: {
            showText: {
                type: Boolean,
                default: false
            },
            name: {
                type: String,
                default: '我是默认姓名'
            },
            age: {
                type: Number,
                default: 0
            }

        },
        watch: {
            age(a, b) {
                console.log(a, b)
            }
        },
        setup(props, context) {
            function eventBus() {
                context.emit('hh', false)
            }

            return {eventBus}
        }
    }
</script>

<style scoped>

</style>
