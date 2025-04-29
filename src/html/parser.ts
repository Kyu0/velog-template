export class Parser {
  private readonly _exitButton;
  private readonly _publishButton;
  private _isContinuable = false;

  private static readonly EXIT_BUTTON_TEXT = '나가기';
  private static readonly PUBLISH_BUTTON_TEXT = '출간하기';

  constructor() {
    const buttons = Array.from(document.querySelectorAll('button'));

    this._exitButton = buttons.find(
      (button) => button.innerText === Parser.EXIT_BUTTON_TEXT
    );

    this._publishButton = buttons.find(
      (button) => button.innerText === Parser.PUBLISH_BUTTON_TEXT
    );

    if (this._exitButton != null && this._publishButton != null) {
      this._isContinuable = true;
    }
  }

  get exitButton(): HTMLButtonElement | undefined {
    return this._exitButton;
  }

  get publishButton(): HTMLButtonElement | undefined {
    return this._publishButton;
  }

  get isContinuable(): boolean {
    return this._isContinuable;
  }
}
