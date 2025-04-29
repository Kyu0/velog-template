import { copyClassList, CustomHTMLCreator, Parser } from './html';

const PARSER = new Parser();
const CREATOR = new CustomHTMLCreator();

function appendLoadButton() {
  const loadButton = CREATOR.createButton({
    content: '템플릿 불러오기',
    position: 'right',
  });
  const exitButton = PARSER.exitButton;

  copyClassList(exitButton, loadButton);

  exitButton?.parentNode?.insertBefore(loadButton, exitButton.nextSibling);
}

function appendSaveButton() {
  const saveButton = CREATOR.createButton({
    content: '템플릿 저장하기',
    position: 'left',
  });
  const [exitButton, publishButton] = [PARSER.exitButton, PARSER.publishButton];

  copyClassList(publishButton, saveButton);

  exitButton?.parentNode?.insertBefore(saveButton, exitButton.nextSibling);
}

if (PARSER.isContinuable) {
  appendSaveButton();
  appendLoadButton();
}
