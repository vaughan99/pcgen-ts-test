<script lang="ts">
  import './app.css';
  import Counter from '$lib/components/custom/Counter.svelte';
  import NeutralinoCheck from '$lib/components/custom/NeutralinoCheck.svelte';
  import { os } from '@neutralinojs/lib';
  import type { MouseEventHandler } from 'svelte/elements';
  import * as Accordion from '$lib/components/ui/accordion';
  import { cn } from '$lib/utils';
  import Menu from '$lib/components/custom/Menu.svelte';

  const openExternal: MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault();
    os.open(e.currentTarget!.href);
  };
</script>

<main>
  <Menu />
  <h1>Neutralino PCGen Toy App</h1>

  <Accordion.Root
    type="single"
    class={cn('w-full sm:max-w-[100%]')}
    value="item-1"
  >
    <Accordion.Item value="item-1">
      <Accordion.Trigger>Counter</Accordion.Trigger>
      <Accordion.Content class={cn('flex flex-col gap-4 text-balance')}>
        <Counter />
      </Accordion.Content>
    </Accordion.Item>
    <Accordion.Item value="item-2">
      <Accordion.Trigger>Neutralino OS Call</Accordion.Trigger>
      <Accordion.Content class={cn('flex flex-col gap-4 text-balance')}>
        <NeutralinoCheck />
      </Accordion.Content>
    </Accordion.Item>
  </Accordion.Root>
</main>
