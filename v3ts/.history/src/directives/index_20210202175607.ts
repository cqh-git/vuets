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
        mounted(el, binding) {
            el.style.position = 'fixed'
            const s = binding.arg || 'top'
            el.style[s] = binding.value + 'px'
        },
        updated(el, binding) {
            const s = binding.arg || 'top'
            el.style[s] = binding.value + 'px'
        }
    }
}
