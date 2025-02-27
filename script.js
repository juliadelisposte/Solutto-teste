const avatars = [
    'https://storage.googleapis.com/mokaly_public/assets/avatars/mokaly-avatar-cup-2.png',
    'https://storage.googleapis.com/mokaly_public/assets/avatars/mokaly-avatar-cup-3.png',
    'https://storage.googleapis.com/mokaly_public/assets/avatars/mokaly-avatar-cup-4.png',
    'https://storage.googleapis.com/mokaly_public/assets/avatars/mokaly-avatar-cup-5.png',
    'https://storage.googleapis.com/mokaly_public/assets/avatars/mokaly-avatar-cup-6.png'
];
let container = document.body;

function createAvatar(src, delay) {
    setTimeout(() => {
        let avatar = document.createElement('img');
        avatar.src = src;
        avatar.classList.add('avatar');

        if (window.innerWidth < 768) {
            avatar.style.left = Math.random() * (window.innerWidth - 50) + 'px';
            avatar.style.top = Math.random() * (window.innerHeight - 50) + 'px';
        } else {
            avatar.style.left = Math.random() * (window.innerWidth - 50) + 'px';
        }

        container.appendChild(avatar);
        setTimeout(() => avatar.remove(), 3000);
    }, delay);
}

function startAnimation() {
    document.getElementById('repeatBtn').style.display = 'none';
    let delay = 0;
    avatars.forEach((avatar, index) => {
        createAvatar(avatar, delay);
        delay += 2000;
    });

    // Navegadores modernos exigem interação do usuário para reprodução de áudio, 
    // por isso o áudio só toca após o clique no botão, não na primeira execução.
    setTimeout(() => {
        document.getElementById('audio').play();
    }, delay + 1000);

    setTimeout(() => {
        document.getElementById('repeatBtn').style.display = 'block';
    }, delay + 2000);
}

window.onload = function() {
    setTimeout(startAnimation, 4000);
};
