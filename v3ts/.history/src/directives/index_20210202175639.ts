export default {
    'focus': {
        mounted(el: any) {
            if (!el.children.length && el.localName === 'input') {
                el.focus()
            }
            if (el.children.length && el.children[0].localName === 'input') {
                el.children[0].focus()
            }

        }
    },
    'pin': {
        mounted(el:any, binding:any) {
            el.style.position = 'fixed'
            const s = binding.arg || 'top'
            el.style[s] = binding.value + 'px'
        },
        updated(el:any, binding:any) {
            const s = binding.arg || 'top'
            el.style[s] = binding.value + 'px'
        }
    }
}
