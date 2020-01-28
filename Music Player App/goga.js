const songs = [
  "bensound-goinghigher.mp3",
  "bensound-jazzyfrenchy.mp3",
  "bensound-memories.mp3",
  "bensound-onceagain.mp3",
  "bensound-summer.mp3",
  "bensound-tomorrow.mp3"
];

const createSongList = () => {
  const list = document.createElement("ol");

  for (let i = 0; i < songs.length; i++) {
    const item = document.createElement("li");
    item.appendChild(document.createTextNode(songs[i]));
    list.appendChild(item);
  }
  return list;
};

document.querySelector("#songList").appendChild(createSongList());

songList.onclick = e => {
  const clickedItem = e.target;
  const source = document.querySelector("#source");
  source.src = "songs/" + clickedItem.innerText;
  document.querySelector("#currentlyPlayingSong").innerText =
    "~Currently Playing~ ";
  document.querySelector("#currentSong").innerText = clickedItem.innerText;

  player.load();
  player.play();
};

const playAudio = () => {
  if (player.readyState) {
    player.play();
  }
};

const pauseAudio = () => {
  player.pause();
};

const slider = document.querySelector("#volumeSlider");
slider.oninput = e => {
  const volume = e.target.value;
  player.volume = volume;
};

const updateProgress = () => {
  if (player.currentTime > 0) {
    const progressBar = document.querySelector("#progress");
    progressBar.value = (player.currentTime / player.duration) * 100;
  }
};
