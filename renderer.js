const darkBtn = document.getElementById('dark-mode');

darkBtn.addEventListener('click', async () => {
    darkBtn.innerText = `${(await window.darkMode.toggle()) ? 'Dark' : 'Light'} mode`;
});

document.getElementById('dark-mode-system').addEventListener('click', async () => {
    await window.darkMode.system();
    darkBtn.innerText = 'Default mode'
});