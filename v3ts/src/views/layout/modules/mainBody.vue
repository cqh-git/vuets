<template>
    <div class="main">
        <!--    <router-view></router-view>-->
        <router-view v-slot="{ Component }">
            <transition name="fade-transform" mode="out-in">
                <component :is="Component"/>
            </transition>
        </router-view>
    </div>
</template>

<script lang="ts">
    import {defineComponent, computed, watch, getCurrentInstance} from "vue";
    import {useRoute} from "vue-router";

    export default defineComponent({
        name: "Home",
        setup() {
            const route = useRoute();
            const routerKey = computed(() => route.path);
            return {
                routerKey,
            };
        },
    });
</script>
<style lang="scss">
    .main {
        width: 100%;
        height: calc(100% - 100px);
        margin-top: 60px;
        background: white;
        border: 8px solid lightgrey;
        box-sizing: border-box;
        overflow: auto;
    }

    /*---------------------------------------------*/
    .slide-fade-enter-active {
        transition: all .6s ease-out;
    }

    .slide-fade-leave-active {
        transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }

    .slide-fade-enter-from,
    .slide-fade-leave-to {
        transform: translateX(-20px);
        opacity: 0;
    }

    /*-----------------------------------------------*/
    .bounce-enter-active {
        animation: bounce-in 0.5s;
    }

    .bounce-leave-active {
        animation: bounce-in 0.5s reverse;
    }

    @keyframes bounce-in {
        0% {
            transform: scale(0);
        }
        50% {
            transform: scale(1.25);
        }
        100% {
            transform: scale(1);
        }
    }

    /*------------------------------------------------*/
    .flip-enter-active {
        transition: all 0.2s cubic-bezier(0.55, 0.085, 0.68, 0.53); //ease-in-quad
        transform-origin: 50% 50%;
    }

    .flip-leave-active {
        transform-origin: 50% 50%;
        transition: all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94); //ease-out-quad
    }

    .flip-enter-from,
    .flip-leave-to {
        transform-origin: 50% 50%;
        transform: scaleY(0) translateZ(0);
        opacity: 0;
    }

    /*---------------------------------------------------*/
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.28s;
    }

    .fade-enter,
    .fade-leave-active {
        opacity: 0;
    }

    .fade-leave-to {
        display: none;
    }

    /*------------------------------------*/
    // fade-transform
    .fade-transform-leave-active,
    .fade-transform-enter-active {
        transition: all .5s;
    }

    .fade-transform-enter {
        opacity: 0;
        transform: translateX(-30px);
    }

    .fade-transform-leave-to {
        opacity: 0;
        transform: translateX(-30px);
    }

    /*-------------------------------------*/
    // fade-transform-up
    .fade-transform-up-enter-active {
        transition: all 0.5s ease-out;
    }

    .fade-transform-up-leave-active {
        transition: all 0.5s ease-out;
    }

    .fade-transform-up-enter-from,
    .fade-transform-up-leave-to {
        transform: translateX(-6px);
        opacity: 0;
    }
</style>
