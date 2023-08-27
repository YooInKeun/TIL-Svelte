<script>
    import { createEventDispatcher } from "svelte";

    const dispatch = createEventDispatcher();

    function sayHello() {
        dispatch('greet', {
            text: 'Hello!'
        });
    }
</script>

<button on:click={sayHello}>
    Click to say hello
</button>