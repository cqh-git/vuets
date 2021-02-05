"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var storage_1 = require("../../storage");
var menus = {
    state: {
        menus: []
    },
    mutations: {},
    actions: {
        setStorage: function (state, data) {
            var uuid = data.uuid, token = data.token;
            storage_1.setToken(data.token);
            storage_1.setUuid(uuid);
        },
        getMenus: function () {
            // return new Promise((resolve, reject) => {
            //   setTimeout(() => {
            //     resolve(1)
            //   },2000)
            // })
            axios_1["default"].get('/getUser').then(function (res) {
                if (res.status === 200) {
                    console.log(res);
                    return Promise.resolve(res);
                }
            });
        }
    }
};
exports["default"] = menus;
