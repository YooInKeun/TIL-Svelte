<script>
    import { paint } from './gradient.js'
    import { afterUpdate, beforeUpdate, onMount } from 'svelte';
    import { tick } from 'svelte';

    onMount(() => {
        const canvas = document.querySelector('canvas');
        const context = canvas?.getContext('2d');

        requestAnimationFrame(function loop(t) {
            requestAnimationFrame(loop);
            paint(context, t);
        });
    });
    
    beforeUpdate(() => {
        console.log("beforeUpdate");
    })

    afterUpdate(() => {
        console.log("afterUpdate");
    })

    let text = `Select some text and hit the tab key to toggle uppercase`;

    async function handleKeydown(event) {
        if (event.key !== 'Tab') return;

        event.preventDefault();

        const { selectionStart, selectionEnd, value } = this;
        const selection = value.slice(selectionStart, selectionEnd);

        const replacement = /[a-z]/.test(selection)
            ? selection.toUpperCase()
            : selection.toLowerCase();

        text =
            value.slice(0, selectionStart) +
            replacement +
            value.slice(selectionEnd);

        // this has no effect, because the DOM hasn't updated yet
        // await tick();
        this.selectionStart = selectionStart;
        this.selectionEnd = selectionEnd;
    }
</script>

<canvas
    width={32}
    height={32}
/>

<textarea
	value={text}
	on:keydown={handleKeydown}
/>

<style>
    canvas {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: #666;
        mask: url(./svelte-logo-mask.svg) 50% 50% no-repeat;
		mask-size: 60vmin;
		-webkit-mask: url(./svelte-logo-mask.svg) 50% 50% no-repeat;
		-webkit-mask-size: 60vmin;
    }

    textarea {
		width: 100%;
		height: 100%;
		resize: none;
	}
</style>