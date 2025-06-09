import { copyClassList, CustomHTMLCreator, Parser } from './html';

const PARSER = new Parser();
const CREATOR = new CustomHTMLCreator();

/**
 * 템플릿 불러오기 버튼 삽입
 */
function appendLoadButton() {
  if (document.querySelector('#velog-template-load-btn')) return;

  const exitButton = PARSER.exitButton;
  if (!exitButton) return;

  const loadButton = CREATOR.createButton({
    content: '템플릿 불러오기',
    position: 'right',
  });
  loadButton.id = 'velog-template-load-btn';

  loadButton.addEventListener('click', () => {
    chrome.storage.local.get('velog_template', (result) => {
      if (!result.velog_template) return;
      PARSER.changeContent(result.velog_template);
    });
  });

  copyClassList(exitButton, loadButton);
  exitButton.parentNode?.insertBefore(loadButton, exitButton.nextSibling);
}

/**
 * 템플릿 저장 버튼 삽입
 */
function appendSaveButton() {
  if (document.querySelector('#velog-template-save-btn')) return;

  const exitButton = PARSER.exitButton;
  const publishButton = PARSER.publishButton;
  if (!exitButton || !publishButton) return;

  const saveButton = CREATOR.createButton({
    content: '템플릿 저장하기',
    position: 'left',
  });
  saveButton.id = 'velog-template-save-btn';

  saveButton.addEventListener('click', () => {
    chrome.storage.local.set({ velog_template: PARSER.writingContent }, () => {
      alert('템플릿이 저장되었습니다.');
    });
  });

  copyClassList(publishButton, saveButton);
  exitButton.parentNode?.insertBefore(saveButton, exitButton.nextSibling);
}

/**
 * 버튼 삽입을 시도하고, 성공 시 observer 중단
 */
function tryInsertButtons(observer: MutationObserver) {
  if (PARSER.isContinuable) {
    appendSaveButton();
    appendLoadButton();

    if (
      document.querySelector('#velog-template-save-btn') &&
      document.querySelector('#velog-template-load-btn')
    ) {
      observer.disconnect();
    }
  }
}

// 옵저버 생성
const observer = new MutationObserver(() => {
  tryInsertButtons(observer);
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
});

// 초기 진입 시도
tryInsertButtons(observer);
