<script lang="ts">
  import { theme, setTheme, mode, setMode } from 'mode-watcher';
  import * as Menubar from '$lib/components/ui/menubar';
  import Check from '@lucide/svelte/icons/check';

  // Default to blue theme and light mode.
  const themeLabelMap = new Map(
    Object.entries({
      blue: 'Blue',
      red: 'Red',
      'mocha-mousse': 'Mocha Mousse',
    }),
  );
  const modeLabelMap = new Map(
    Object.entries({
      light: 'Light',
      dark: 'Dark',
    }),
  );
  if (!theme.current) {
    setTheme('blue');
  }
  if (!mode.current) {
    setMode('light');
  }
</script>

<Menubar.Root>
  <Menubar.Menu>
    <!-- File -->
    <Menubar.Trigger>File</Menubar.Trigger>
    <Menubar.Content>
      <Menubar.Item>
        New
        <Menubar.Shortcut>⌘+N</Menubar.Shortcut>
      </Menubar.Item>
      <Menubar.Item>
        Open
        <Menubar.Shortcut>⌘+O</Menubar.Shortcut>
      </Menubar.Item>
      <Menubar.Separator />
      <Menubar.Item>
        Close
        <Menubar.Shortcut>⌘+C</Menubar.Shortcut>
      </Menubar.Item>
      <Menubar.Item>Close All</Menubar.Item>
      <Menubar.Separator />
      <Menubar.Item>
        Save
        <Menubar.Shortcut>⌘+S</Menubar.Shortcut>
      </Menubar.Item>
      <Menubar.Item>
        Save As...
        <Menubar.Shortcut>⌘+Shift+S</Menubar.Shortcut>
      </Menubar.Item>
      <Menubar.Item>
        Save All
        <Menubar.Shortcut>⌘+S</Menubar.Shortcut>
      </Menubar.Item>
      <Menubar.Item>Revert to Saved</Menubar.Item>
      <Menubar.Separator />
      <Menubar.Item>Open Party</Menubar.Item>
      <Menubar.Item>Close Party</Menubar.Item>
      <Menubar.Separator />
      <Menubar.Item>Save Party</Menubar.Item>
      <Menubar.Item>Save Party As...</Menubar.Item>
      <Menubar.Separator />
      <Menubar.Item>
        Print
        <Menubar.Shortcut>⌘+P</Menubar.Shortcut>
      </Menubar.Item>
      <Menubar.Item>
        Export
        <Menubar.Shortcut>⌘+Shift+P</Menubar.Shortcut>
      </Menubar.Item>
      <Menubar.Separator />
      <Menubar.Item>
        Manage Sources
        <Menubar.Shortcut>⌘+M</Menubar.Shortcut>
      </Menubar.Item>
      <Menubar.Separator />
      <Menubar.Item>
        Exit
        <Menubar.Shortcut>⌘+X</Menubar.Shortcut>
      </Menubar.Item>
    </Menubar.Content>
  </Menubar.Menu>
  <Menubar.Menu>
    <!-- View -->
    <Menubar.Trigger>View</Menubar.Trigger>
    <Menubar.Content>
      <Menubar.RadioGroup value={theme.current} onValueChange={setTheme}>
        {#each themeLabelMap as themeLabel, i}
          <Menubar.RadioItem
            value={themeLabel[0]}
            class="rounded-button data-highlighted:bg-muted flex h-10 select-none items-center gap-2 py-3 pl-3 pr-1.5 text-sm font-medium focus-visible:outline-none"
          >
            {#snippet children({ checked })}
              {themeLabel[1]}
              <div class="ml-auto size-5">
                {#if checked}
                  <Check class="size-5" />
                {/if}
              </div>
            {/snippet}
          </Menubar.RadioItem>
        {/each}
      </Menubar.RadioGroup>
      <Menubar.Separator />
      <Menubar.RadioGroup
        value={mode.current}
        onValueChange={setMode as (arg: string) => void}
      >
        {#each modeLabelMap as modeLabel, i}
          <Menubar.RadioItem
            value={modeLabel[0]}
            class="rounded-button data-highlighted:bg-muted flex h-10 select-none items-center gap-2 py-3 pl-3 pr-1.5 text-sm font-medium focus-visible:outline-none"
          >
            {#snippet children({ checked })}
              {modeLabel[1]}
              <div class="ml-auto size-5">
                {#if checked}
                  <Check class="size-5" />
                {/if}
              </div>
            {/snippet}
          </Menubar.RadioItem>
        {/each}
      </Menubar.RadioGroup>
    </Menubar.Content>
  </Menubar.Menu>
</Menubar.Root>
