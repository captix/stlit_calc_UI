const doc = window.parent.document;

doc.addEventListener('keydown', function(e) {
    let key = e.key;
    if (key === 'Enter') { e.preventDefault(); key = '=';}
    if (key === 'Delete') {e.preventDefault(); key = 'C';}
    
    const buttons = Array.from(doc.querySelectorAll('button'));
    const target = buttons.find(el => el.innerText.trim() === key);
    
    if (target) {
        target.click();
        target.blur();
    }
}, true);