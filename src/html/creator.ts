type CreateOptions = {
  content: string;
  position?: 'left' | 'right' | 'none';
};

/**
 * 익스텐션에서 추가로 사용할 HTML 태그를 생성하는 클래스입니다.
 */
export class CustomHTMLCreator {
  constructor() {}

  /**
   * 사용자 정의 HTML Button 태그를 생성합니다.
   *
   * @param options 생성할 버튼의 옵션
   * @returns 생성된 HTML Button 태그
   */
  public createButton(options: CreateOptions) {
    const span = document.createElement('span');
    span.innerText = options.content;
    const button = document.createElement('button');
    button.appendChild(span);

    switch (options.position) {
      case 'left':
        button.style.marginRight = 'auto';
        break;
      case 'right':
        button.style.marginLeft = 'auto';
        break;
      case 'none':
        break;
    }

    return button;
  }
}
