/**
 * '작성하기' 페이지에 존재하는 HTML 태그를 추출하여 태그 혹은 필요한 태그의 값을 제공하는 클래스입니다.
 *
 *  - exitButton: 나가기 버튼
 *  - publishButton: 출간하기 버튼
 */
export class Parser {
  private static readonly EXIT_BUTTON_TEXT = '나가기';
  private static readonly PUBLISH_BUTTON_TEXT = '출간하기';
  private static readonly CONTENT_SPAN_ROLE = 'presentation';

  constructor() {
    // CodeMirror의 내용을 변경하는 이벤트 리스너를 추가하는 스크립트를 삽입합니다.
    const script = document.createElement('script');
    script.src = chrome.runtime.getURL('injected.js');
    script.onload = () => script.remove();
    (document.head || document.documentElement).appendChild(script);
  }

  get exitButton(): HTMLButtonElement | undefined {
    return Array.from(document.querySelectorAll('button')).find(
      (button) => button.innerText === Parser.EXIT_BUTTON_TEXT
    );
  }

  get publishButton(): HTMLButtonElement | undefined {
    return Array.from(document.querySelectorAll('button')).find(
      (button) => button.innerText === Parser.PUBLISH_BUTTON_TEXT
    );
  }

  get writingContent(): string | undefined {
    const content = Array.from(document.querySelectorAll('span'))
      .filter((span) => span.role === Parser.CONTENT_SPAN_ROLE)
      .map((span) => span.innerText)
      .join('\n');

    return content;
  }

  get isContinuable(): boolean {
    return this.exitButton != null && this.publishButton != null;
  }

  /**
   * 포스트의 내용을 주어진 문자열로 변경합니다.
   * CodeMirror 에디터를 크롬 익스텐션에서 참조할 수 없어 window.postMessage를 사용하여 내용을 변경합니다.
   * @param content 변경할 문자열
   */
  public changeContent(content: string): void {
    window.postMessage({ type: 'VELOG_SET_CONTENT', content }, '*');
  }
}
