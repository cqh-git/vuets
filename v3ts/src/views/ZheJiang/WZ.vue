<template>
    <div class="root">
        <son>
            <template v-slot:aaa="slotProps">
                <p>我是温州aaa--{{slotProps.name}}</p>
            </template>
            <template v-slot:bbb="slotProps">
                <p>我是温州bbb--{{slotProps.name}}</p>
            </template>
            <template v-slot="slotProps">
                <p>我是默认--{{slotProps.text}}</p>
            </template>
        </son>
        <hz>
            <template v-slot="slotProps" aaa="1">
                <p>我是青华--{{slotProps.text}}</p>
            </template>
            <template v-slot:footer="slotProps">
                <p>梦想--{{slotProps.text}}</p>
            </template>
        </hz>
    </div>
</template>
<script>
    import son from "./component/son"

    export default {
        name: 'Home',
        components: {son},
    }
</script>
