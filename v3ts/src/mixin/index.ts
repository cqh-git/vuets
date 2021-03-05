export default {
    custom: "mix custom",
    mounted() {
        console.log(2222222222222)
    },
    methods: {
        getAlert() {
            console.log('我是全局混入的方法')
        }
    }
}
