export function account(options: any) {
    const params = JSON.parse(options.body)
    if (params.userName === 'admin' && params.password === '123456') {
        return {
            status: '200',
            uuid: "123456",
            token: "abcdef",
            msg: '请求成功'
        }
    } else {
        return {
            status: '400',
            msg: '账号或者密码不正确'
        }
    }

}
