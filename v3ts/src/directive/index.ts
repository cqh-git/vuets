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
    // 'pin': {
    //     mounted(el:any, binding:any) {
    //         el.style.position = 'absolute'
    //         const s = binding.arg || 'top'
    //         el.style[s] = binding.value + 'px'
    //     },
    //     updated(el:any, binding:any) {
    //         const s = binding.arg || 'top'
    //         el.style[s] = binding.value + 'px'
    //     }
    // }
    //您可能希望在mounted和上具有相同的行为updated，但不必关心其他挂钩。您可以通过将回调传递给指令来实现
    'pin': (el: any, binding: any) => {
        el.style.position = 'absolute'
        const s = binding.arg || 'top'
        el.style[s] = binding.value + 'px'
    },
    'demo': (el: any, binding: any) => {
        el.style.color = binding.value.color
    },
    'hidePhone': {
        mounted(el: any, binding: any) {
            let tel = "" + binding.value;
            const reg = /(\d{3})\d{4}(\d{4})/;
            const newTel = tel.replace(reg, "$1****$2")
            el.innerHTML = newTel
        }
    }
}
