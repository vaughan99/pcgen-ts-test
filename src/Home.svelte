<script lang="ts">
  import './app.css';
  import { Button } from '$lib/components/ui/button';
  import { type Campaign, PageNavTitles, type PageNav } from '$lib/types';
  import { window } from '@neutralinojs/lib';

  // Enable vite to lazy load apps as needed.
  const CampaignSelectorGenerator = () =>
    import('$lib/components/campaign-selector/CampaignSelector.svelte');
  const DiceBagGenerator = () =>
    import('$lib/components/dice-bag/DiceBag.svelte');

  const navState = $state<PageNav>('home');
  const activeCampaign = $state<Campaign | null>(null);

  // If the activeCampaign or navState changes, set window title.
  $effect(() => {
    const campaignPart = activeCampaign
      ? activeCampaign.name
      : 'Select Campaign';
    const navPart = PageNavTitles[navState];
    window.setTitle(`PCGen - ${campaignPart} - ${navPart}`);
  });
</script>

<main>
  {#if activeCampaign === null}
    {#await CampaignSelectorGenerator() then CampaignSelector}
      <CampaignSelector.default />
    {/await}
  {:else if navState === 'home'}
    <!-- We have an active campaign but no selected app. Show all the app launchers. -->
    <p>Selected Campaign: {activeCampaign.name}</p>
    <p>
      Campaign Path: {activeCampaign.path}
      <Button>Open</Button>
      <Button>Delete</Button>
    </p>
    <hr />
    <!-- Let's get big image icons for these -->
    <Button>Dice Bag</Button>
    <Button>Character Generator</Button>
  {:else if navState === 'diceBag'}
    {#await DiceBagGenerator() then DiceBag}
      <DiceBag.default />
    {/await}
  {:else if navState === 'characterGenerator'}
    Character Generator
  {:else}
    Unknown App??
  {/if}
</main>
