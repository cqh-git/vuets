<template>
    <div class="sideBar">
        <div
                class="btnCollapse"
                @click="clickExpand"
                :class="{ btnExpand: isCollapse }"
        ></div>
        <el-menu
                :default-active="getSelectMenu"
                unique-opened
                class="el-menu-vertical-demo"
                @select="selectMenu"
                background-color="#2e3553"
                text-color="#9de6f7"
                active-text-color="#ffffff"
                :collapse="isCollapse"
                :collapse-transition="true"
        >
            <router-link to="/home">
                <el-menu-item index="1000">
                    <i class="iconfont iconshouye-copy"></i>
                    <template #title>{{ $t("menu.Home") }}</template>
                </el-menu-item>
            </router-link>
            <el-submenu :index="item.path" v-for="item in menus" :key="item.id">
                <template #title>
                    <i class="iconfont" :class="item.iconfont"></i>
                    <span>{{ $t("menu." + item.name) }}</span>
                </template>
                <template v-for="son in item.children" :key="son.id">
                    <router-link :to="item.path + '/' + son.path" v-if="son.type === 1">
                        <el-menu-item :index="son.id" v-if="son.level === 1">
                            <span>{{ $t("menu." + son.name) }}</span>
                        </el-menu-item>
                    </router-link>
                    <router-link :to="item.path + '/' + son.path" target="_blank" v-else>
                        <el-menu-item :index="son.id">
                            <span>{{ $t("menu." + son.name) }}</span>
                        </el-menu-item>
                    </router-link>
                </template>
            </el-submenu>
        </el-menu>
    </div>
</template>

<script lang="ts">
    import {defineComponent, computed, ref} from "vue";
    import {useStore} from "vuex";

    export default defineComponent({
        name: "sideBar",
        setup() {
            const {getters} = useStore();
            const isCollapse = ref(false);
            const {commit} = useStore();
            const menus = computed(() => getters.menus);
            const getSelectMenu = computed(() => getters.getSelectMenu);

            function selectMenu(a: any, b: any) {
                commit("setSelectMenu", a);
            }

            function clickExpand() {
                isCollapse.value = !isCollapse.value;
            }

            return {
                getSelectMenu,
                selectMenu,
                isCollapse,
                clickExpand,
                menus,
            };
        },
    });
</script>
<style lang="scss">

    .el-menu-item.is-active {
        background-color: #3296fa !important;
    }

    a {
        text-decoration: none;
    }

    .sideBar {
        max-width: 200px;
        box-sizing: border-box;
        background: #2e3553;
        height: 100%;
        float: left;

        .iconfont {
            font-size: 22px;
            margin-right: 2px;
        }

        .btnCollapse {
            width: 25px;
            height: 25px;
            background: #b887f8;
            margin: 15px auto;
            cursor: pointer;
            transition: all 0.5s;
            transform: rotate(45deg);
            border-radius: 2px;
        }

        .btnExpand {
            width: 25px;
            background: rgb(145, 212, 233);
            transform: rotate(360deg);
        }
    }

    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: 400px;
    }
</style>
