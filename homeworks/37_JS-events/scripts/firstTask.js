function changeTextarea() {
  const changeText = document.getElementById('text');
  const textarea = document.getElementById('edit');
  textarea.style.display = 'none';

  document.addEventListener('keydown', function (e) {
    if (e.ctrlKey && e.code === 'KeyE') {
      e.preventDefault();
      changeText.style.display = 'none';
      textarea.style.display = 'block';
      textarea.value = changeText.innerText;
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.ctrlKey && e.code === 'KeyS') {
      e.preventDefault();
      changeText.style.display = 'block';
      textarea.style.display = 'none';
      changeText.innerText = textarea.value;
    }
  });
}

export default changeTextarea;
