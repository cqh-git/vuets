import mitt from 'mitt'
import {Emitter} from 'mitt'

const emitter: Emitter = mitt()
const mittBus = {
    $on: emitter.on,
    $off: emitter.off,
    $emit: emitter.emit
}

export default mittBus
