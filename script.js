const btn = document.getElementById('darkmode');
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

function setLightMode() {
    document.documentElement.classList.remove('dark');
    btn.innerText = 'Dark mode';
    localStorage.setItem('theme', 'light');
}

function setDarkMode() {
    document.documentElement.classList.add('dark');
    btn.innerText = 'Light mode';
    localStorage.setItem('theme', 'dark');
}

if (prefersDarkScheme) {
    setDarkMode();
}

if (localStorage.getItem('theme') == 'dark') {
    setDarkMode();
}
else {
    setLightMode();
}

btn.onclick = () => {
    if (document.documentElement.classList.contains('dark')) {
        setLightMode();
    }
    else {
        setDarkMode();
    }
}

const images = document.querySelectorAll('.gallery-img');
images.forEach(img => {
    img.addEventListener('click', () => {
        document.getElementById('modal-img').src = img.src;
        document.getElementById('modal-img').alt = img.alt;
        document.getElementById('modal-caption').innerText = img.alt;
        document.getElementById('modal').classList.remove('hidden');
    });
});

document.getElementById('close').addEventListener('click', () => document.getElementById('modal').classList.add('hidden'));