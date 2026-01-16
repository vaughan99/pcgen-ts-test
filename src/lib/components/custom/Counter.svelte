<script lang="ts">
    import { Button } from '$lib/components/ui/button';

    let count: number = $state(0);
    const increment = () => {
        count += 1;
    };
</script>

Try clicking this Svelte button!
<Button variant='default' onclick={increment}>
    count is {count}
</Button>
