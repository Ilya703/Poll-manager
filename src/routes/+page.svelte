<script>
  import CreatePoll from "../components/CreatePoll.svelte";
  import Footer from "../components/Footer.svelte";
  import Header from "../components/Header.svelte";
  import PollList from "../components/PollList.svelte";
  import Tabs from "../components/Tabs.svelte";

  const tabs = ["Current Polls", "Add New Poll"];
  let activeTab = "Current Polls";

  const handleAdd = () => {
    // polls = [...polls, e.detail];
    activeTab = "Current Polls";
  };
</script>

<Header />
<main>
  <Tabs {tabs} {activeTab} on:tabChange={(e) => (activeTab = e.detail)} />
  {#if activeTab === "Current Polls"}
    <PollList />
  {:else if activeTab === "Add New Poll"}
    <CreatePoll on:add={handleAdd} />
  {/if}
</main>
<Footer />

<style>
  main {
    max-width: 960px;
    margin: 0 auto;
  }
</style>
