document.querySelectorAll('.btn').forEach(btn => {
    btn.innerHTML = `
        <span></span>
        <span>${btn.textContent}</span>
    `
})