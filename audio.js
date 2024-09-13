function preload() {
    sound = loadSound("Roblox.mp3");
}

function audio() {
    sound.playMode('restart');
    sound.amp(7);
    sound.play();
    time1();

}