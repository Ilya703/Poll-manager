<script>
    // import { onDestroy } from "svelte";
    import { flip } from 'svelte/animate';
    import { fade, scale } from 'svelte/transition';
    import PollStore from "../stores/PollStore.js";
    import PollDetails from "./PollDetails.svelte";

    // const unsub = PollStore.subscribe(data => {
    //     polls = data;
    // });

    // onDestroy(() => {
    //     unsub();
    // });
</script>

<div class="pollList">
    {#each $PollStore as poll (poll.id)}
        <div in:fade out:scale|local animate:flip={{duration:500}}>
            <PollDetails {poll}/>
        </div>
    {/each}
</div>

<style>
    .pollList {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 20px;
    }
</style>