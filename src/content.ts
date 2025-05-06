import { copyClassList, CustomHTMLCreator, Parser } from './html';

const PARSER = new Parser();
const CREATOR = new CustomHTMLCreator();

/**
 * 템플릿을 불러오는 버튼을 추가합니다.
 */
function appendLoadButton() {
  const loadButton = CREATOR.createButton({
    content: '템플릿 불러오기',
    position: 'right',
  });
  const exitButton = PARSER.exitButton;
  loadButton?.addEventListener('click', async () => {
    chrome.storage.local.get(
      'velog_template',
      (result: { ['velog_template']: string }) => {
        if (result.velog_template == null) return;

        PARSER.changeContent(result.velog_template);
      }
    );
  });

  copyClassList(exitButton, loadButton);

  exitButton?.parentNode?.insertBefore(loadButton, exitButton.nextSibling);
}

/**
 * 템플릿을 저장하는 버튼을 추가합니다.
 */
function appendSaveButton() {
  const saveButton = CREATOR.createButton({
    content: '템플릿 저장하기',
    position: 'left',
  });
  const [exitButton, publishButton] = [PARSER.exitButton, PARSER.publishButton];
  saveButton?.addEventListener('click', () => {
    chrome.storage.local.set({ velog_template: PARSER.writingContent }, () => {
      alert('템플릿이 저장되었습니다.');
    });
  });

  copyClassList(publishButton, saveButton);

  exitButton?.parentNode?.insertBefore(saveButton, exitButton.nextSibling);
}

if (PARSER.isContinuable) {
  appendSaveButton();
  appendLoadButton();
}
