window.addEventListener('message', (event) => {
  if (event.data?.type === 'VELOG_SET_CONTENT') {
    const CODE_MIRROR = document.querySelector('.CodeMirror')?.CodeMirror;
    if (CODE_MIRROR) {
      CODE_MIRROR.setValue(event.data.content);
    }
  }
});
