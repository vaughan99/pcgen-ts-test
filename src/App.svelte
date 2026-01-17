<script lang="ts">
  import './app.css';
  import { window } from '@neutralinojs/lib';
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

  //   const openExternal: MouseEventHandler<HTMLAnchorElement> = (e) => {
  //     e.preventDefault();
  //     os.open(e.currentTarget!.href);
  //   };

  const spawnApp2 = () => {
    console.log(`Spawning App2 with enableInspector ${isDebugMode}`);
    window.create('/index2.html', {
      enableInspector: isDebugMode,
      x: 0,
      y: 0,
    });
  };
</script>

<main>
  <Menu />
  <h1>Neutralino PCGen Toy App</h1>
  <Button onclick={spawnApp2}>Spawn App2</Button>
</main>
