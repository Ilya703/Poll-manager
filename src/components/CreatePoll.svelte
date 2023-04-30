<script>
    import PollStore from "../stores/PollStore.js";
    import { createEventDispatcher } from "svelte";
    import Button from "./Button.svelte";

    const dispatch = createEventDispatcher();

    const fields = { 
        question: '',
        answerA: '',
        answerB: ''
    };
    const errors = { 
        question: '',
        answerA: '',
        answerB: ''
    };
    let valid = false;

    const onSubmit = () => {
        valid = true;
        
        if (fields.question.trim().length < 5) {
            valid = false;
            errors.question = 'Question must be at least 5 characters long';
        } else errors.question = '';

        if (fields.answerA.trim().length < 1) {
            valid = false;
            errors.answerA = 'Answer A cannot be empty';
        } else errors.answerA = '';

        if (fields.answerB.trim().length < 1) {
            valid = false;
            errors.answerB = 'Answer B cannot be empty';
        } else errors.answerB = '';

        if (valid) {
            const poll = { ...fields, votesA: 0, votesB: 0, id: Math.random() };
            PollStore.update(currentPolls => {
                return [...currentPolls, poll];
            });
            dispatch('add');
        }
    };
</script>

<form on:submit|preventDefault={onSubmit}>
    <div class="formField">
        <label for="question">Poll Question:</label>
        <input type="text" id="question" bind:value={fields.question}>
        <div class="error">{ errors.question }</div>
    </div>
    <div class="formField">
        <label for="answer-a">Answer A:</label>
        <input type="text" id="answer-a" bind:value={fields.answerA}>
        <div class="error">{ errors.answerA }</div>
    </div>
    <div class="formField">
        <label for="answer-b">Answer B:</label>
        <input type="text" id="answer-b" bind:value={fields.answerB}>
        <div class="error">{ errors.answerB }</div>
    </div>
    <Button type="secondary" flat={true} inverse={true}>Add Poll</Button>
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
        height: 40px;
        border-radius: 4px;
        color: #3aa6be;
    }
    label {
        margin: 10px auto;
        text-align: left;
        color: rgb(23 94 109);
    }
    .error {
        font-size: 14px;
        font-weight: bold;
        color: rgb(23 94 109);
    }
</style>
