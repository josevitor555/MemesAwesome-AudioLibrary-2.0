let play_meme_1 = document.getElementById("btn-1");
let play_meme_2 = document.getElementById("btn-2");
let play_meme_3 = document.getElementById("btn-3");
let play_meme_4 = document.getElementById("btn-4");
let play_meme_5 = document.getElementById("btn-5");
let play_meme_6 = document.getElementById("btn-6");
let play_meme_7 = document.getElementById("btn-7");
let play_meme_8 = document.getElementById("btn-8");
let play_meme_9 = document.getElementById("btn-9");
let play_meme_10 = document.getElementById("btn-10");
let play_meme_11 = document.getElementById("btn-11");
let play_meme_12 = document.getElementById("btn-12");

let stop_meme = document.getElementById("stop-meme");
let currentAudio = null;

function playAudio_meme_1() {
    if (currentAudio) {
        currentAudio.pause();
    }
    let audio_meme_1 = new Audio("audios-meme/Abre essa porta carai que eu te mato diabo.mp3");
    currentAudio = audio_meme_1;
    audio_meme_1.play();
}
play_meme_1.addEventListener("click", playAudio_meme_1);

function playAudio_meme_2() {
    if (currentAudio) {
        currentAudio.pause();
    }
    let audio_meme_2 = new Audio("audios-meme/musica do pou estourado.mp3");
    currentAudio = audio_meme_2;
    audio_meme_2.play();
}
play_meme_2.addEventListener("click", playAudio_meme_2);

function playAudio_meme_3() {
    if (currentAudio) {
        currentAudio.pause();
    }
    let audio_meme_3 = new Audio("audios-meme/Teto - Dia Azul (Ft. Pou).mp3");
    currentAudio = audio_meme_3;
    audio_meme_3.play();
}
play_meme_3.addEventListener("click", playAudio_meme_3);

function playAudio_meme_4() {
    if (currentAudio) {
        currentAudio.pause();
    }
    let audio_meme_4 = new Audio("audios-meme/Meme do cebolinha xingando.mp3");
    currentAudio = audio_meme_4;
    audio_meme_4.play();
}
play_meme_4.addEventListener("click", playAudio_meme_4);

function playAudio_meme_5() {
    if (currentAudio) {
        currentAudio.pause();
    }
    let audio_meme_5 = new Audio("audios-meme/Ain Nobruzera apelão(ESTOURADO).mp3");
    currentAudio = audio_meme_5;
    audio_meme_5.play();
}
play_meme_5.addEventListener("click", playAudio_meme_5);

function playAudio_meme_6() {
    if (currentAudio) {
        currentAudio.pause();
    }
    let audio_meme_6 = new Audio("audios-meme/porn hub meme.mp3");
    currentAudio = audio_meme_6;
    audio_meme_6.play();
}
play_meme_6.addEventListener("click", playAudio_meme_6);

function playAudio_meme_7() {
    if (currentAudio) {
        currentAudio.pause();
    }
    let audio_meme_7 = new Audio("audios-meme/Me dá minha sacola fí duma égua.mp3");
    currentAudio = audio_meme_7;
    audio_meme_7.play();
}
play_meme_7.addEventListener("click", playAudio_meme_7);

function playAudio_meme_8() {
    if (currentAudio) {
        currentAudio.pause();
    }
    let audio_meme_8 = new Audio("audios-meme/PEGUE NA MINHA POMBAAAAAA - áudio meme.mp3");
    currentAudio = audio_meme_8;
    audio_meme_8.play();
}
play_meme_8.addEventListener("click", playAudio_meme_8);

function playAudio_meme_9() {
    if (currentAudio) {
        currentAudio.pause();
    }
    let audio_meme_9 = new Audio("audios-meme/Musica da universal esttourada.mp3");
    currentAudio = audio_meme_9;
    audio_meme_9.play();
}
play_meme_8.addEventListener("click", playAudio_meme_9);

function playAudio_meme_10() {
    if (currentAudio) {
        currentAudio.pause();
    }
    let audio_meme_10 = new Audio("audios-meme/Bass Drum Impact Sound Effect.mp3");
    currentAudio = audio_meme_10;
    audio_meme_10.play();
}
play_meme_10.addEventListener("click", playAudio_meme_10);

function playAudio_meme_11() {
    if (currentAudio) {
        currentAudio.pause();
    }
    let audio_meme_11 = new Audio("audios-meme/aí aí zé da manga.mp3");
    currentAudio = audio_meme_11;
    audio_meme_11.play();
}
play_meme_11.addEventListener("click", playAudio_meme_11);

function playAudio_meme_12() {
    if (currentAudio) {
        currentAudio.pause();
    }
    let audio_meme_12 = new Audio("audios-meme/O Novo Gemidão - Áudio para edição YouTube e whatsapp.mp3");
    currentAudio = audio_meme_12;
    audio_meme_12.play();
}
play_meme_12.addEventListener("click", playAudio_meme_12);

function stopMeme() {
    if (currentAudio) {
        currentAudio.pause();
    } else {
        alert("No meme running!")
    }
}
stop_meme.addEventListener("click", stopMeme);