export class Command {
  execute: (x: number, y: number) => number;
  value: number;
  current: number;
  undoValue: number = 0;

  constructor(execute: (x: number, y: number) => number, value: number, current: number) {
    this.execute = execute;
    this.value = value;
    this.current = current;
  }

  setUndo() {
    this.undoValue = this.current;
  }
}

export class Calculator {
  current = 0;
  commands: Command[] = [];

  execute(command: Command): number {
    this.current = command.execute(command.value, command.current);
    command.setUndo();
    this.commands.push(command);

    return this.current;
  }

  undo(): number {
    const command = this.commands.pop();

    if (command) this.current = command.undoValue;

    return this.current;
  }
}
