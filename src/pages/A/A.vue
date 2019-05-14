<template>
    <div class = "A" :class = "{'red':myState == true,'pink':myState == false}">
        {{myState}}
        <button @click = "changeState()">改变状态</button>
    </div>
</template>
<script src = "./index.js"></script>
<style lang = "scss" scoped src = "./index.scss"></style>
