type CreateOptions = {
  content: string;
  position?: 'left' | 'right' | 'none';
};

export class CustomHTMLCreator {
  constructor() {}

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
