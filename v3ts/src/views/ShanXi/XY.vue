<template>
    <div class="root">
        <slot-component>
            <template v-slot:la="scope">
                张三{{scope.msg}}
            </template>
        </slot-component>
    </div>
</template>
<script>
    import slotComponent from './modal/slot.vue'

    export default {
        name: 'Home',
        components: {slotComponent}
    }
</script>
