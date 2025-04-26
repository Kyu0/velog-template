function createTemplateButton() {
  const span = document.createElement('span');
  span.innerText = '템플릿';

  const saveButton = document.createElement('button');
  saveButton.appendChild(span);

  return saveButton;
}

function returnExitButton() {
  const buttons = document.querySelectorAll('button');
  const exitButton = Array.from(buttons).find(
    (btn) => btn.textContent?.trim() === '나가기'
  );

  return exitButton;
}

function copyClassList(from: HTMLElement, to: HTMLElement): void {
  const classList = from.classList;
  to.className = '';

  for (let i = 0; i < classList.length; i++) {
    to.classList.add(classList[i]);
  }
}

function appendSaveButton() {
  const templateButton = createTemplateButton();
  const exitButton = returnExitButton();

  if (!exitButton) {
    return;
  }

  copyClassList(exitButton, templateButton);
  templateButton.style.marginRight = 'auto';

  exitButton?.parentNode?.insertBefore(templateButton, exitButton.nextSibling);
}

appendSaveButton();
