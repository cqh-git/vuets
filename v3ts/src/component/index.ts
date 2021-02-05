export default {
    'tag': {
        props: {
            params: {
                type: Object,
                default: () => {
                    return {color: 'black', innerHTML: 'tag标签'}
                }
            }
        },
        template: `
            <div class="tag" :style="{color:params.color}">{{params.innerHTML}}</div>`
    },

}
