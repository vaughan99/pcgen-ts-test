<script lang="ts">
    import { DiceRoll } from '@dice-roller/rpg-dice-roller';
    import { Button } from "$lib/components/ui/button";
    import * as Resizable from "$lib/components/ui/resizable/index.js";

    type LogEntry = {
        date: Date;
        expr: string;
        detail: string;
    }

    let lastRoll = $state<DiceRoll | undefined>(undefined);
    let logs = $state<LogEntry[]>([]);

    const diceRoller = (expr: string) => () => {
        lastRoll = new DiceRoll(expr);
        logs.unshift({
            date: new Date(),
            expr,
            detail: lastRoll.toString(),
        });
    };
</script>
<!--
    The idea is for the left pane have a number of single dice buttons for quick access, as well as a table of
    dice expressions each with a roll button.
    The right pane will contain two subpanes: the result dice roll pane (big font with dice breakdown),
    and a scrollable subpane that has a log of previous dice rolls (with breakdowns).
-->
<Resizable.PaneGroup direction="horizontal" class="max-w-md border">
  <Resizable.Pane defaultSize={200}>
    <div class="flex h-[200px] items-center justify-center p-6">
        <Button onclick={diceRoller('1d2')}>d2</Button>
        <Button onclick={diceRoller('1d3')}>d3</Button>
        <Button onclick={diceRoller('1d4')}>d4</Button>
        <Button onclick={diceRoller('1d6')}>d6</Button>
        <Button onclick={diceRoller('1d8')}>d8</Button>
        <Button onclick={diceRoller('1d10')}>d10</Button>
        <Button onclick={diceRoller('1d12')}>d12</Button>
        <Button onclick={diceRoller('1d20')}>d20</Button>
        <Button onclick={diceRoller('1d100')}>d100</Button>
    </div>
  </Resizable.Pane>
  <Resizable.Handle />
  <Resizable.Pane defaultSize={50}>
    <Resizable.PaneGroup direction="vertical">
      <Resizable.Pane defaultSize={25}>
        <div class="flex h-full items-center justify-center p-6">
          <span class="font-semibold">{lastRoll?.toString()}</span>
        </div>
      </Resizable.Pane>
      <Resizable.Handle />
      <Resizable.Pane defaultSize={75}>
        <div class="flex h-full items-center justify-center p-6">
          <span class="font-semibold">{logs.length}</span>
        </div>
      </Resizable.Pane>
    </Resizable.PaneGroup>
  </Resizable.Pane>
</Resizable.PaneGroup>
