<script>
    export let type = "primary";
    export let flat = false;
    export let inverse = false;
</script>

<button class={type} class:flat={flat} class:inverse={inverse} on:click>
    <slot></slot>
</button>

<style>
    button {
        border: 0;
        cursor: pointer;
        border-radius: 6px;
        padding: 8px 12px;
        box-shadow: 1px 2px 3px rgb(0, 0, 0, 0.2);
        font-weight: bold;
    }
    .primary {
        background: #d91b42;
        color: #fff;
    }
    .secondary {
        background: #3aa6be;
        color: #fff;
    }
    .primary.inverse {
        background: #fff;
        color: #d91b42;
    }
    .secondary.inverse {
        background: #fff;
        color: #3aa6be;
    }
    .flat {
        box-shadow: none;
    }
</style>