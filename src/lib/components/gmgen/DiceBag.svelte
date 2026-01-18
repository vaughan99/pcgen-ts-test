<script lang="ts">
    import { DiceRoll } from '@dice-roller/rpg-dice-roller';
    import { memoize } from 'lodash';
    import { Button } from "$lib/components/ui/button";
    import * as Resizable from "$lib/components/ui/resizable/index.js";

    const diceGenerator = memoize((expr: string) => new DiceRoll(expr));

    const rollDice = (expr: string) => () => {
        return diceGenerator(expr).roll();
    }
</script>

<Resizable.PaneGroup direction="horizontal" class="max-w-md rounded-lg border">
  <Resizable.Pane defaultSize={50}>
    <div class="flex h-[200px] items-center justify-center p-6">
        <Button>d2</Button>
        <Button>d3</Button>
        <Button>d4</Button>
        <Button>d6</Button>
        <Button>d8</Button>
        <Button>d10</Button>
        <Button>d12</Button>
        <Button>d20</Button>
        <Button>d100</Button>
    </div>
  </Resizable.Pane>
  <Resizable.Handle />
  <Resizable.Pane defaultSize={50}>
    <Resizable.PaneGroup direction="vertical">
      <Resizable.Pane defaultSize={25}>
        <div class="flex h-full items-center justify-center p-6">
          <span class="font-semibold">Two</span>
        </div>
      </Resizable.Pane>
      <Resizable.Handle />
      <Resizable.Pane defaultSize={75}>
        <div class="flex h-full items-center justify-center p-6">
          <span class="font-semibold">Three</span>
        </div>
      </Resizable.Pane>
    </Resizable.PaneGroup>
  </Resizable.Pane>
</Resizable.PaneGroup>
