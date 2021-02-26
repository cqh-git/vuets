class Father {
    constructor(name, age) {
        this.name = name;
        this.age = age
        this.address = '北京'
        this.home = 'henan'
    }

    sayHi() {
        return '张三'
    }
}

class Son extends Father {
    constructor(name, sex) {
        super(name)
        this.sex = sex
    }

    sonSay() {
        return '我是' + super.sayHi()
    }
}
