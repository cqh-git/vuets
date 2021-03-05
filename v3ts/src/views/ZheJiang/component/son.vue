<template>
    <div>
        <slot-one></slot-one>
        <slot-two></slot-two>
        <slot text="我是温州"></slot>
    </div>
</template>

<script>
    import {h, onUpdated, ref} from 'vue';

    export default {
        name: "son",
        setup(props, context) {
            const {slots, attrs} = context


            function slotOne() {
                return h('div', {style: {color: 'red'}}, slots.aaa({
                        name: 'jone'
                    })
                )
            }

            function slotTwo() {
                return h('div', {style: {color: 'blue'}}, slots.bbb({
                        name: 'Tom'
                    })
                )
            }

            console.log(slots)
            return {slotOne, slotTwo}
        },
        props: {
            aaa: {
                type: String
            }
        }
    }
</script>

<style scoped>

</style>
