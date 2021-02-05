<template>
    <div class="root">

    </div>
</template>

<script>
    import {getData} from '@/api/user'

    export default {
        name: 'a2',
        setup() {
            getData().then((res) => {
				console.log(res)
            })
            return {}
        }
    }
</script>
