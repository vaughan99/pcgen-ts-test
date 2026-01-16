<script lang="ts">
  import './app.css';
  import Counter from '$lib/components/custom/Counter.svelte';
  import NeutralinoCheck from '$lib/components/custom/NeutralinoCheck.svelte';
  import { os, window } from '@neutralinojs/lib';
  import type { MouseEventHandler } from 'svelte/elements';
  import { Button } from '$lib/components/ui/button';
  import Menu from '$lib/components/custom/Menu.svelte';

  // In your main.js or other frontend script
  const isDebugMode = typeof NL_PATH !== 'undefined';
  if (isDebugMode) {
    console.log('Application is running in debug/development mode.');
    // Add other debug-only code here (e.g., enable DevTools via native API, etc.)
  } else {
    console.log('Application is running in production/packaged mode.');
  }

  const openExternal: MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault();
    os.open(e.currentTarget!.href);
  };

  const spawnApp2 = (e) => {
    console.log('Spawning App2');
    window.create('/index2.html', {
      enableInspector: isDebugMode,
    });
  };
</script>

<main>
  <Menu />
  <h1>Neutralino PCGen Toy App</h1>
  <Button onclick={spawnApp2}>Click</Button>
</main>
