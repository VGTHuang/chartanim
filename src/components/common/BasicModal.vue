<template>
    <div>
        <div class="background">
            <div class="modal">
                <slot />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>


<style lang="scss" scoped>
.background {
    display: flex;
    justify-content: center;
    align-items: center;
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
    min-height: 100px;
    min-width: 100px;
    background: $dgrey;
    z-index: 2000;
}
</style>
