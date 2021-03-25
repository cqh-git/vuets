<template>
    <div class="root">
        <div class="animate wave">
            <div class="w1"></div>
            <div class="w2"></div>
            <div class="w3"></div>
            <div class="w4"></div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Home',
    }
</script>
<style scoped>
    .root {
        position: relative;
    }

    .wave {
        width: 22.7rem;
        height: 22.7rem;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        margin: 0 auto;
        /*border: 1px solid black;*/
    }

    .wave * {
        border: 1px solid #fff;
        position: absolute;
        border-radius: 50%;
        /*-webkit-animation: opac 4s infinite;*/
		-webkit-animation-name: opac;
		-webkit-animation-duration: 4s;
		-webkit-animation-iteration-count: infinite;
		-webkit-animation-timing-function: ease;
        -webkit-animation-fill-mode: backwards;
		background-color: rgba(255,255,255,0.8);
    }

    .animate .w2 {
        -webkit-animation-delay: 1s;
    }

    .animate .w3 {
        -webkit-animation-delay: 2s;
    }

    .animate .w4 {
        -webkit-animation-delay: 3s;
    }

    @-webkit-keyframes opac {
        from {
            opacity: 1;
            width: 0;
            height: 0;
            top: 50%;
            left: 50%;
        }

        to {
            opacity: 0;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
        }
    }
</style>
