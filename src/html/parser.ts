/**
 * '작성하기' 페이지에 존재하는 HTML 태그를 추출하여 태그 혹은 필요한 태그의 값을 제공하는 클래스입니다.
 *
 *  - exitButton: 나가기 버튼
 *  - publishButton: 출간하기 버튼
 *  - contentSpan: 작성 중인 포스트 내용
 */
export class Parser {
  private readonly _exitButton;
  private readonly _publishButton;
  private readonly _contentSpan;
  private _isContinuable = false;

  private static readonly EXIT_BUTTON_TEXT = '나가기';
  private static readonly PUBLISH_BUTTON_TEXT = '출간하기';
  private static readonly CONTENT_SPAN_ROLE = 'presentation';

  constructor() {
    const buttons = Array.from(document.querySelectorAll('button'));
    const spans = Array.from(document.querySelectorAll('span'));

    this._exitButton = buttons.find(
      (button) => button.innerText === Parser.EXIT_BUTTON_TEXT
    );

    this._publishButton = buttons.find(
      (button) => button.innerText === Parser.PUBLISH_BUTTON_TEXT
    );

    this._contentSpan = spans.find(
      (span) => span.role === Parser.CONTENT_SPAN_ROLE
    );

    const script = document.createElement('script');
    script.src = chrome.runtime.getURL('injected.js');
    script.onload = () => script.remove();
    (document.head || document.documentElement).appendChild(script);

    if (
      this._exitButton != null &&
      this._publishButton != null &&
      this._contentSpan != null
    ) {
      this._isContinuable = true;
    }
  }

  get exitButton(): HTMLButtonElement | undefined {
    return this._exitButton;
  }

  get publishButton(): HTMLButtonElement | undefined {
    return this._publishButton;
  }

  get contentSpan(): HTMLSpanElement | undefined {
    return this._contentSpan;
  }

  get writingContent(): string | undefined {
    const contentSpan = Array.from(document.querySelectorAll('span')).find(
      (span) => span.role === Parser.CONTENT_SPAN_ROLE
    );

    return contentSpan?.innerText;
  }

  get isContinuable(): boolean {
    return this._isContinuable;
  }

  public changeContent(content: string): void {
    window.postMessage({ type: 'VELOG_SET_CONTENT', content }, '*');
  }
}
