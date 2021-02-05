import Mock from 'mockjs'

const Random = Mock.Random
const getUserInfo = (options: any) => {
    const userInfo = []
    for (let i = 0; i < 10; i++) {
        const template = {
            'name': Random.cname(),
            'age': Random.natural(22, 40),
            'date': Random.date('yyyy-MM-dd'),
            'address': Random.county(true)
        }
        userInfo.push(template)
    }
    return userInfo
}
const menus = (options: any) => {
    const data = [
        {
            name: '动物', path: '/Animals', id: 1, comAdd: 'layout/index', children: [
                {name: '大象', id: 2, comAdd: 'Animals/elephant', path: 'elephant'},
                {name: '狮子', id: 3, comAdd: 'Animals/lion', path: 'lion'},
                {name: '老虎', id: 4, comAdd: 'Animals/tiger', path: 'tiger'},
            ]
        },
        {
            name: '植物', id: 4, comAdd: 'layout/index', path: '/Botanys', children: [
                {name: '向日葵', id: 5, comAdd: 'Botanys/sunflower', path: 'sunflower'},
                {name: '大树', id: 6, comAdd: 'Botanys/tree', path: 'tree'},
            ]
        },
    ]
    return data
}
export {getUserInfo, menus}
