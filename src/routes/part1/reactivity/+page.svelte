<h1>Welcome to {name.toUpperCase()}</h1>
<img {src} alt="favicon">
<p class="paragraph">This is paragraph.</p>
<Nested />
<button on:click={increment}>
    Clicked {count}
    {count == 0 ? 'time' : 'times'}
</button>

<p>{count} doubled is {doubled}</p>

<button on:click={addNumbers}>Add Number</button>
<p>numbers is {numbers}</p>

<script>
    import Nested from "./Nested.svelte";

    let name = 'SvelteKit'
    let src = "/favicon.png"

    let count = 0;
    let numbers = [1, 2, 3, 4];

    $: doubled = count * 2;
    
    $: console.log(`the count is ${count}`);
    $: if (count >= 10) {
        alert('count is dangerously high!');
        count = 0;
    }

    const increment = () => {
        count += 1;
    }

    const addNumbers = () => {
        numbers.push(numbers.length + 1);
        numbers = numbers
    }
</script>

<style>
    .paragraph {
        color: goldenrod;
        font-family: 'Comics Sans MS', cursive;
        font-size: 2em;
    }
</style>