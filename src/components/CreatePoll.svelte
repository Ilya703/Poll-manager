<script>
    const fields = { 
        question: '',
        answerA: '',
        answerB: ''
    };

    const onSubmit = () => {

    };
</script>

<form on:submit|preventDefault={onSubmit}>
    <div class="formField">
        <label for="question">Poll Question:</label>
        <input type="text" id="question" bind:value={fields.question}>
    </div>
    <div class="formField">
        <label for="answer-a">Poll Question:</label>
        <input type="text" id="answer-a" bind:value={fields.answerA}>
    </div>
    <div class="formField">
        <label for="answer-b">Poll Question:</label>
        <input type="text" id="answer-b" bind:value={fields.answerB}>
    </div>
    <button>Add Poll</button>
</form>

<style>
	form {
        width: 400px;
        margin: 0 auto;
        text-align: center;
    }
    .formField {
        margin: 10px auto;
    }
    input {
        width: 100%;
        border-radius: 6px;
    }
    label {
        margin: 10px auto;
        text-align: left;
    }
</style>
