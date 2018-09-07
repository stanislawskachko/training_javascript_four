const btnAddNote = document.querySelector('.notebook .add-note');
btnAddNote.addEventListener('click', () => {
    const textArea = document.querySelector('.notebook .note-text');
    const li = document.createElement('li');
    li.innerText = textArea.value;
    const link = document.createElement('a');
    link.textContent = 'remove';
    link.href = '#';
    link.addEventListener('click', e => {
       e.preventDefault();
       e.target.parentElement.parentElement.removeChild(e.target.parentElement);
    });
    li.appendChild(link);
    document.querySelector('.notebook .notes').appendChild(li);
    textArea.value = '';    
});