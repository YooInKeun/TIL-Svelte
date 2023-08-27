<script>
    import Inner from './Inner.svelte';
    import Outer from './Outer.svelte';
    import BigRedButton from './BigRedButton.svelte';
    import horn from './horn.mp3'

    let m = { x: 0, y: 0};

    const audio = new Audio();
    audio.src = horn;

    function handleMove(event) {
        m.x = event.clientX;
        m.y = event.clientY;
    }

    function handleMessage(event) {
        alert(event.detail.text);
    }

    function handleClick() {
        audio.play;
    }
</script>

<!-- <div on:pointermove={handleMove}> -->
<!-- <div on:pointermove={(e) => {m = { x: e.clientX, y: e.clientY };}}> -->
    <!-- The pointer is at {m.x} x {m.y} -->
<!-- </div> -->

<button on:click|once={() => alert('clicked')}>
    Click me
</button>

<Outer on:greet={handleMessage}/>

<BigRedButton on:click={handleClick}/>

<style>
    div {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        padding: 1rem;
    }
</style>