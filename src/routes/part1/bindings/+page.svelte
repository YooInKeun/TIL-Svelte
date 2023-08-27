<script>
    let name = 'world';

    let a = 1;
    let b = 2;

    let yes = false;

    let questions = [
		{
			id: 1,
			text: `Where did you go to school?`
		},
		{
			id: 2,
			text: `What is your mother's name?`
		},
		{
			id: 3,
			text: `What is another personal fact that an attacker could easily find with Google?`
		}
	];

	let selected;

	let answer = '';

	function handleSubmit() {
		alert(
			`answered question ${selected.id} (${selected.text}) with "${answer}"`
		);
	}
</script>

<input bind:value={name} />

<h1>Hello {name}!</h1>

<label>
    <input type="number" bind:value={a} min="0" max="10" />
    <input type="range" bind:value={a} min="0" max="10" />
</label>

<label>
    <input type="number" bind:value={b} min="0" max="10" />
    <input type="range" bind:value={b} min="0" max="10" />
</label>

<br>
<br>

<label>
    <input type="checkbox" bind:checked={yes} />
    Yes! Send me regular email spam
</label>

{#if yes}
    <p>
        Thank you. We Will bombard your inbox and sell your personal details.
    </p>
{:else}
    <p>
        You must op in to continue. If you're not paying, you're the product.
    </p>
{/if}

<button disabled={!yes}>Subscribe</button>

<br>
<br>

<h2>Insecurity questions</h2>

<form on:submit|preventDefault={handleSubmit}>
	<select
		bind:value={selected}
		on:change={() => (answer = '')}
	>
		{#each questions as question}
			<option value={question}>
				{question.text}
			</option>
		{/each}
	</select>

	<input bind:value={answer} />

	<button disabled={!answer} type="submit">
		Submit
	</button>
</form>

<p>
	selected question {selected
		? selected.id
		: '[waiting...]'}
</p>