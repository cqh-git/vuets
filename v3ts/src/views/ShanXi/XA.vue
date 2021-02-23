<template>
    <div class="root">
        <button @click="showTexts">showText</button>
        <div id="textBox"></div>
        <iconTitle :title="title">
            <template v-slot:Subtitle="scope">我是副标题{{scope.hello}}</template>
            <template v-slot>我是默认的</template>
        </iconTitle>
    </div>
</template>
<script>
    import {addText} from './modal/BulletFrame.ts'

    export default {
        name: 'Home',
        data() {
            return {
                title: '我是标题'
            }
        },
        methods: {
            showTexts() {
                addText({
                    name: '张三',
                    age: 100,
                    showText: true
                })
            }
        }
    }
</script>
