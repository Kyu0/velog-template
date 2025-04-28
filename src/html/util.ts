export function copyClassList(from: HTMLElement, to: HTMLElement): void {
  const classList = from.classList;
  to.className = '';

  for (let i = 0; i < classList.length; i++) {
    to.classList.add(classList[i]);
  }
}
