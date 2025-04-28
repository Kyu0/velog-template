import { copyClassList, CustomHTMLCreator, Parser } from './html';

const parser = new Parser();
const creator = new CustomHTMLCreator();

function appendLoadButton() {
  const loadButton = creator.createButton({
    content: '템플릿 불러오기',
    position: 'right',
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
  const [exitButton, publishButton] = [parser.exitButton, parser.publishButton];

  if (!publishButton) {
    return;
  }

  copyClassList(publishButton, saveButton);

  exitButton?.parentNode?.insertBefore(saveButton, exitButton.nextSibling);
}

appendSaveButton();
appendLoadButton();
