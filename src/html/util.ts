export function copyClassList(
  from: HTMLElement | undefined,
  to: HTMLElement
): void {
  if (from == null) {
    return;
  }

  const classList = from.classList;
  to.className = '';

  for (let i = 0; i < classList.length; i++) {
    to.classList.add(classList[i]);
  }
}
