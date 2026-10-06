function openGift() {
    const message = document.getElementById("message");

    message.classList.add("show");

    setTimeout(function () {
        message.scrollIntoView({
            behavior: "smooth"
        });
    }, 100);
}

function openPhotos() {
    const photos = document.querySelector(".photos");

    photos.scrollIntoView({
        behavior: "smooth"
    });
}
// =========================
// ПАДАЮЩИЕ СЕРДЕЧКИ
// =========================

function createHeart() {

    const heartsContainer = document.querySelector(".hearts");

    const heart = document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "%";

    heart.style.fontSize =
        (12 + Math.random() * 20) + "px";

    heart.style.animationDuration =
        (4 + Math.random() * 6) + "s";

    heart.style.animationDelay =
        Math.random() * 2 + "s";

    heartsContainer.appendChild(heart);


    // Удаляем сердечко после анимации
    setTimeout(function () {
        heart.remove();
    }, 12000);
}



setInterval(createHeart, 500);

function openSecretCard() {
    const card = document.getElementById("secretCard");

    card.classList.toggle("open");
}

function scrollToSecret() {
    const secretCard = document.querySelector(".secret-card-section");

    if (secretCard) {
        secretCard.scrollIntoView({
            behavior: "smooth"
        });
    }
}
let heartClicks = 0;

function heartClick() {

    const message = document.getElementById("heartMessage");
    const heart = document.querySelector(".big-heart");

    heartClicks++;

    const messages = [
        "Tu mă faci să fiu fericit ❤️",
        "Ești cea mai frumoasă 🥰",
        "Am avut marele noroc să te întâlnesc ❤️",
        "Eu te iubesc ❤️",
        "Tu — ești persoana mea preferată din lume💕",
        "Te-aș alege pe tine din nou și din nou ❤️"
    ];

    const index = (heartClicks - 1) % messages.length;

    message.textContent = messages[index];

    heart.style.transform = "scale(1.35)";

    setTimeout(function () {
        heart.style.transform = "scale(1)";
    }, 200);
}

function scrollToHeart() {
    const heartSection = document.querySelector(".heart-section");

    if (heartSection) {
        heartSection.scrollIntoView({
            behavior: "smooth"
        });
    }
}

function scrollToFinal() {
    const finalSection = document.querySelector(".final-section");

    if (finalSection) {
        finalSection.scrollIntoView({
            behavior: "smooth"
        });
    }
}

