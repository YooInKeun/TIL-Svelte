<script>
    import { count, count2, time, elapsed, name, greeting } from './stores.js';
    import Incrementer from './Incrementer.svelte';
    import Decrementer from './Decrementer.svelte';
    import Resetter from './Resetter.svelte';

    const formatter = new Intl.DateTimeFormat(
        'en',
        {
            hour12: true,
            hour: 'numeric',
            minute: '2-digit',
            second: '2-digit',
        }
    )
</script>

<h1>The count is {$count}</h1>
<Incrementer />
<Decrementer />
<Resetter />

<h1>The time is {formatter.format($time)}</h1>


<p>
	This page has been open for
	{$elapsed}
	{$elapsed === 1 ? 'second' : 'seconds'}
</p>

<h1>The count is {$count2}</h1>

<button on:click={count2.increment}>+</button>
<button on:click={count2.decrement}>-</button>
<button on:click={count2.reset}>reset</button>

<h1>{$greeting}</h1>
<input bind:value={$name} />

<button on:click={() => $name += '!'}>Add exclamation mark!</button>