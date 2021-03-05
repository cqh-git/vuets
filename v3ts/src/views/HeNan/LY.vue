<template>
    <div class="root">
        <div>
            firstName:{{fm}}
            <my-input v-model:firstName="fm"></my-input>
        </div>
        <div>
            myText:{{ myText }}
            <my-component v-model.capitalize="myText"></my-component>
        </div>
        <div>
            myText1:{{ text }}
            <my-components v-model:description.capitalize="text"></my-components>
        </div>

    </div>
</template>

<script>
    import {getData} from '@/api/user'

    export default {
        name: 'a2',
        data() {
            return {
                fm: '',
                myText: '',
                text: '222222'
            }
        },
        setup() {
            getData().then((res) => {
                console.log(res)
            })
            return {}
        }
    }
</script>
