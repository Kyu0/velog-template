export class Parser {
  private readonly buttons;
  private readonly _exitButton;
  private readonly _publishButton;

  private static readonly EXIT_BUTTON_TEXT = '나가기';
  private static readonly PUBLISH_BUTTON_TEXT = '출간하기';

  constructor() {
    this.buttons = Array.from(document.querySelectorAll('button'));
    this._exitButton = this.buttons.find(
      (button) => button.innerText === Parser.EXIT_BUTTON_TEXT
    );
    this._publishButton = this.buttons.find(
      (button) => button.innerText === Parser.PUBLISH_BUTTON_TEXT
    );
  }

  get exitButton(): HTMLButtonElement | undefined {
    return this._exitButton;
  }

  get publishButton(): HTMLButtonElement | undefined {
    return this._publishButton;
  }
}
