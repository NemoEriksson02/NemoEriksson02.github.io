<script>
    /** @type {import('./$types').PageData} */
    export let data;

    let searchbar;
    let searchQuery = '';

    function search(){
        searchQuery = searchbar.value;
    }
</script>

<head>
    <title>Changelog</title>
</head>

<div class="background"></div>

<section class="topbar">
    <a class="back" href="/">Return to main</a>
    <input type="text" class="searchbar" bind:this={searchbar} on:keyup={search} placeholder="Search by date (YYYY-MM-DD)"/>
</section>

<main>
    <h1 class="cl-title">Changelog</h1>
    <a class="cl-full" target="_blank" rel="noopener noreferrer" 
    href="https://github.com/NemoEriksson02/NemoEriksson02.github.io/commits/main">Full changelog</a>
    
    <div class="posts">
        {#each data.posts.reverse() as post}
            {#if post.meta.date.includes(searchQuery)}
                <hr class="post-divider">
                <h2>
                    <a class="post-title" href={"/changelog/"+post.path}>{post.meta.date}</a>
                </h2>
                {#each post.meta.points as point}
                    <p><span class={point[0]}>{point[0]}</span>{point[1]}</p>
                {/each}
            {/if}
        {/each}
    </div>
</main>

<style>
    *{
        font-family: Arial, Helvetica, sans-serif;
        caret-color: transparent;
        cursor: default;
        letter-spacing: normal;
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

    main{
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

    .cl-title{
        position: relative;
        top: 35px;
        left: 50px;
        width: calc(100% - 120px);
    }

    .posts{
        position: relative;
        left: 60px;
        top: 40px;
        width: calc(100% - 120px);
    }

    a{
        cursor: pointer;
        color: #2A3951;
        text-decoration: none;
    }
    
    a.post-title{
        font-size: 24px;
    }

    a.cl-full{
        position: absolute;
        right: 50px;
        top: 35px;
        font-size: 18px;
        font-weight: 600;
    }

    p span{
        border-radius: 7px;
        height: 12px;
        padding: 2px 8px;
        margin-right: 12px;
        color: #EEEEF1;
        text-transform: capitalize;
        font-weight: 600;
        font-size: 14px;
    }

    p span.added{
        background: #01bfb2;
    }
    p span.fixed{
        background: #E7E7E7;
        color: #2A3951;
    }
    p span.removed{
        background: #5F80DC;
    }

    .post-divider{
        background: #E7E7E7;
        margin-top: 30px;
        height: 2px;
        border: none;
    }

    .post-divider:first-of-type{
        display: none;
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

    .searchbar{
        cursor: text;
        caret-color: auto;
        outline: none;
        border: 1px solid #2A3951;
        border-radius: 2px;
        font-size: 16px;
        height: 28px;
        width: 230px;
        transform: translateY(4px);
        position: relative;
        right: 60px;
        float: right;
        padding: 0 8px;
    }

    a.back{
        display: table-cell;
        font-size: 18px;
        vertical-align: middle;
        position: relative;
        left: 18px;
    }
</style>