<script>
    import Header from "../components/Header.svelte";
    import Footer from "../components/Footer.svelte";
    import Tabs from '../components/Tabs.svelte';
    import CreatePoll from "../components/CreatePoll.svelte";

    const tabs = ['Current Polls', 'Add New Poll'];
    let activeTab = 'Current Polls';
</script>

<Header />
<main>
    <Tabs {tabs} {activeTab} on:tabChange={(e) => activeTab = e.detail}/>
    {#if activeTab === 'Current Polls'}
        <div></div>
    {:else if activeTab === 'Add New Poll'}
        <CreatePoll />
    {/if}
</main>
<Footer />

<style>
	main {
        max-width: 960px;
        margin: 0 auto;
    }
</style>
