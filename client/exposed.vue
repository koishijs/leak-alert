<template>
    <k-layout>
        <div class="main">
            <div class="tipsBox">
                <div class="tipsTitle">
                    <h1>Tips:</h1>
                </div>
                <div class="tipsParagraph">
                    <p>你好~我在搜索引擎使用特殊语法的时候搜索到了你的koishi</p>
                    <p>在公网使用的时候，记住要启用auth插件防止别人登录哦</p>
                    <p>前往插件配置页面可以启动</p>
                    <p>点击顶部的报警条<a href="https://koishi.chat/manual/usage/platform.html#控制台登录" style="color: cadetblue;">或者戳我</a>可以查看相关的官方文档~</p>
                </div>
            </div>
        </div>
    </k-layout>
</template>

<style scoped>
.main {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.tipsBox {
    width: 60%;
    height: 60%;
    border: 1px solid #a8a8a8;
    border-radius: 10px;
}

.tipsTitle {
    width: 90%;
    margin-left: 5%;
    margin-right: 5%;

    height: 20%;
    color: #a8a8a8;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.tipsParagraph {
    width: 90%;
    margin-left: 5%;
    margin-right: 5%;

    height: 70%;
    color: #a8a8a8;
}</style>