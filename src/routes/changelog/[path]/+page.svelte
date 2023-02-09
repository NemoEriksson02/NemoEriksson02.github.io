<script>
    import { onMount } from 'svelte';


/** @type {import('./$types').PageData} */
export let data;

onMount(()=>{
    try {
        hljs.highlightAll();
    } catch (error) {
        location.reload();
        console.log(error);
    }
});
</script>

<head>
    <title>Changelog {data.date}</title>
    <link rel="stylesheet"
      href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/tomorrow-night-bright.min.css">
    <script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/highlight.min.js"></script>
</head>


<section class="topbar">
    <a class="back" href="/changelog">Return to changelog</a>
</section>

<div class="background">
<article>
    <h1 class="cl-title">{data.date}</h1>
    <main>
        <svelte:component this={data.content} />
    </main>
</article>
</div>

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
        position: absolute;
        background: #EEEEF1;
        min-height: calc(100vh - 110px);
        height: fit-content;
        padding-bottom: 100px;
        width: 100%;
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
        padding-left: 18px;
    }
</style>