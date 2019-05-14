<template>
    <div class = "catalog">
        <h1>
            <span @click = "clickSpan('A')" :class = "{'active':activeId == 'A'}">跳转A</span>
            <span @click = "clickSpan('B')" :class = "{'active':activeId == 'B'}">跳转B</span>
            <span @click = "clickSpan('C')" :class = "{'active':activeId == 'C'}">跳转C</span> 
        </h1>
        <div class = "content">
            <router-view/>
        </div>
    </div>
</template>
<script src = "./index.js"></script>
<style lang="scss" scoped src = "./index.scss"></style>


