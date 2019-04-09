<template>
    <div v-show="show">
        <div class="background" @click="hideModal">
        </div>
        <div class="modal">
            <slot />
        </div>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            show: true
        }
    },
    methods: {
        hideModal() {
            this.show = false;
        }
    }
}
</script>


<style lang="scss" scoped>
.background {
    background: $dgrey;
    background: #00000040;
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 1000;
}
.modal {
    position: fixed;
    top: 50%;
    left: 50%;
    height: 100px;
    width: 100px;
    background: $mgrey;
    z-index: 2000;
}
</style>
