function makeResizableDiv(div) {
  const element = document.getElementById(div);
  const resizer = document.createElement('div');
  resizer.classList.add('active');

  element.appendChild(resizer);
  console.log(resizer);

  resizer.addEventListener('mousedown', function (e) {
    e.preventDefault();
    document.addEventListener('mousemove', resize);
    document.addEventListener('mouseup', stopResize);
  });

  function resize(e) {
    element.style.width = e.pageX - element.getBoundingClientRect().left + 'px';
    element.style.height = e.pageY - element.getBoundingClientRect().top + 'px';
  }

  function stopResize() {
    document.removeEventListener('mousemove', resize);
    document.removeEventListener('mouseup', stopResize);
  }
}

export default makeResizableDiv;
