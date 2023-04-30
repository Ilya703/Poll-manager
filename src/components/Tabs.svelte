<script>
    import { createEventDispatcher } from "svelte";

    export let tabs;
    export let activeTab;

    const dispatcher = createEventDispatcher();
</script>

<div class="tabs">
    <ul>
        {#each tabs as tab}
            <li on:click={() => dispatcher('tabChange', tab)}>
                <div class:active={tab === activeTab}>{tab}</div>
            </li>
        {/each}
    </ul>
</div>

<style>
    .tabs {
        margin-bottom: 40px;
    }
    ul {
        display: flex;
        justify-content: center;
        padding: 0;
        list-style-type: none;
    }
    li {
        margin: 0 14px;
        font-size: 18px;
        color: #fff;
        cursor: pointer;
    }
    li div {
        padding: 8px;
    }
    .active {
        color: #3aa6be;
        background: #fff;
        border-radius: 6px;
    }
</style>