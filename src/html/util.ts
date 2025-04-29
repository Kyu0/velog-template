/**
 * 특정 HTML 태그의 클래스 목록을 복사하여 다른 HTML 태그의 클래스 목록으로 붙여넣습니다.
 *
 * @param from 복사할 HTML 태그
 * @param to 복사한 클래스 목록을 붙여넣을 HTML 태그
 */
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
