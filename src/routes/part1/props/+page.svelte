<script>
    import Nested from "./nested.svelte";
    import PacakgeInfo from "./PacakgeInfo.svelte";

    const pkg = {
        name: 'svelte',
        speed: 'blazing',
        version: 4,
        website: 'htps://svelte.dev'
    };
</script>

<Nested answer={42} />
<Nested />

<PacakgeInfo {...pkg}/>
