<script>
    import { onMount } from 'svelte';
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<head>
    <title>Changelog {data.date}</title>
</head>

<div class="background"></div>

<section class="topbar">
    <a class="back" href="/changelog">Return to changelog</a>
</section>

<article>
    <h1 class="cl-title">{data.date}</h1>
    <main>
        <svelte:component this={data.content} />
    </main>
</article>

<style>
    *{
        font-family: Arial, Helvetica, sans-serif;
        caret-color: transparent;
        cursor: default;
    }

    ::selection{
        background: transparent;
    }

    .background{
        z-index: -1;
        width: 100%;
        height: 100%;
        position: absolute;
        background: #EEEEF1;
        top: 0;
        left: 0;
    }

    .cl-title{
        position: relative;
        top: 35px;
        left: 50px;
        width: calc(100% - 120px);
        font-size: 26px;
    }

    article{
        background: #fdfdfd;
        width: 75%;
        position: relative;
        left: 50%;
        top: 50px;
        transform: translateX(-50%);
        border-radius: 4px;
        color: #2A3951;
        padding-bottom: 80px;
    }

    main{
        position: relative;
        left: 60px;
        top: 40px;
        width: calc(100% - 120px);
    }

    .topbar{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 42px;
        background: #fdfdfd;
        box-shadow: 0 -1px 3px #2A3951;
        display: table;
    }

    a{
        cursor: pointer;
        color: #2A3951;
        text-decoration: none;
    }

    a.back{
        display: table-cell;
        font-size: 18px;
        vertical-align: middle;
        position: relative;
        left: 18px;
    }
</style>