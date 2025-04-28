import { CustomHTMLCreator, Parser } from './html';

const parser = new Parser();
const creator = new CustomHTMLCreator();

// function createLoadTemplateButton() {
//   const span = document.createElement('span');
//   span.innerText = '템플릿 불러오기';

//   const loadButton = document.createElement('button');
//   loadButton.appendChild(span);

//   return loadButton;
// }

// function createSaveTemplateButton() {
//   const span = document.createElement('span');
//   span.innerText = '템플릿 저장하기';

//   const saveButton = document.createElement('button');
//   saveButton.appendChild(span);

//   return saveButton;
// }

function copyClassList(from: HTMLElement, to: HTMLElement): void {
  const classList = from.classList;
  to.className = '';

  for (let i = 0; i < classList.length; i++) {
    to.classList.add(classList[i]);
  }
}

function appendLoadButton() {
  const loadButton = creator.createButton({
    content: '템플릿 불러오기',
    position: 'left',
  });
  const exitButton = parser.exitButton;

  if (!exitButton) {
    return;
  }

  copyClassList(exitButton, loadButton);

  exitButton?.parentNode?.insertBefore(loadButton, exitButton.nextSibling);
}

function appendSaveButton() {
  const saveButton = creator.createButton({
    content: '템플릿 저장하기',
    position: 'left',
  });
  const publishButton = parser.publishButton;

  if (!publishButton) {
    return;
  }

  copyClassList(publishButton, saveButton);

  publishButton?.parentNode?.insertBefore(
    saveButton,
    publishButton.nextSibling
  );
}

appendLoadButton();
appendSaveButton();
