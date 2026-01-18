<script lang="ts">
  // import './app.css';
  // import type { MouseEventHandler } from 'svelte/elements';
  import Menu from '$lib/components/gmgen/Menu.svelte';
  import * as Tabs from "$lib/components/ui/tabs/index.js";
  import DiceBag from '$lib/components/gmgen/DiceBag.svelte';

  /*
  const openExternal: MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault();
    os.open(e.currentTarget!.href);
  };
  */
</script>

<main>
  <Menu />
  <h1>GMGen</h1>
 
  <div class="-mb-4 flex w-full max-w-sm flex-col gap-6">
    <Tabs.Root value="account">
      <Tabs.List>
        <Tabs.Trigger value="diceBag">Dice Bag</Tabs.Trigger>
        <Tabs.Trigger value="encounter">Encounter</Tabs.Trigger>
        <Tabs.Trigger value="initiative">Initiative</Tabs.Trigger>
        <Tabs.Trigger value="experienceAdjuster">Experience Adjuster</Tabs.Trigger>
        <Tabs.Trigger value="notes">Notes</Tabs.Trigger>
        <Tabs.Trigger value="randomName">Random Name</Tabs.Trigger>
        <Tabs.Trigger value="overlandTravel">Overland Travel</Tabs.Trigger>
        <Tabs.Trigger value="characterTracker">Character Tracker</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="diceBag">
        <DiceBag />
      </Tabs.Content>
      <Tabs.Content value="encounter">
      </Tabs.Content>
      <Tabs.Content value="initiative">
      </Tabs.Content>
      <Tabs.Content value="experienceAdjuster">
      </Tabs.Content>
      <Tabs.Content value="notes">
      </Tabs.Content>
      <Tabs.Content value="randomName">
      </Tabs.Content>
      <Tabs.Content value="overlandTravel">
      </Tabs.Content>
      <Tabs.Content value="characterTracker">
      </Tabs.Content>
    </Tabs.Root>
  </div>
</main>