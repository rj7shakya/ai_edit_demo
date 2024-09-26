const videoPlayer = document.getElementById("videoPlayer");
const wordContainer = document.getElementById("wordContainer");
const wordContainerWrapper = document.getElementById("wordContainerWrapper");
const playPauseBtn = document.getElementById("playPauseBtn");
const replayBtn = document.getElementById("replayBtn");
const seekBarContainer = document.getElementById("seekBarContainer");
const seekBar = document.getElementById("seekBar");
const seekHandle = document.getElementById("seekHandle");
const currentTimeDisplay = document.getElementById("currentTime");
const totalDurationDisplay = document.getElementById("totalDuration");

const videoUrl = "./videos/teach.mp4";
videoPlayer.src = videoUrl;
videoPlayer.controls = false;

let videoDuration = 0;
const transcript = [
  { word: "hi", start: 2.41, end: 2.75, disable: 0 },
  { word: "everyone", start: 2.75, end: 3.12, disable: 0 },
  { word: "in", start: 3.5, end: 3.65, disable: 0 },
  { word: "this", start: 3.65, end: 3.83, disable: 0 },
  { word: "we", start: 3.83, end: 3.94, disable: 0 },
  { word: "will", start: 3.94, end: 4.11, disable: 0 },
  { word: "i", start: 4.11, end: 4.2, disable: 1 },
  { word: "am", start: 4.2, end: 4.3, disable: 1 },
  { word: "going", start: 4.3, end: 4.53, disable: 1 },
  { word: "to", start: 4.53, end: 4.64, disable: 1 },
  { word: "explain", start: 4.64, end: 4.98, disable: 0 },
  { word: "about", start: 4.98, end: 5.31, disable: 0 },
  { word: "the", start: 5.31, end: 5.41, disable: 0 },
  { word: "loop", start: 5.41, end: 5.71, disable: 0 },
  { word: "statement", start: 5.71, end: 6.18, disable: 0 },
  { word: "in", start: 6.18, end: 6.32, disable: 0 },
  { word: "vhdl", start: 6.32, end: 6.8, disable: 0 },
  { word: "code", start: 6.8, end: 6.93, disable: 0 },
  { word: "coding", start: 6.93, end: 7.31, disable: 0 },
  { word: "so", start: 8.04, end: 8.58, disable: 0 },
  { word: "loop", start: 8.96, end: 9.5, disable: 0 },
  { word: "loop", start: 9.5, end: 10.08, disable: 1 },
  { word: "means", start: 10.08, end: 10.86, disable: 0 },
  { word: "it", start: 11.21, end: 11.36, disable: 0 },
  { word: "is", start: 11.36, end: 11.54, disable: 0 },
  { word: "used", start: 11.54, end: 11.95, disable: 0 },
  { word: "to", start: 11.95, end: 12.29, disable: 0 },
  { word: "iterate", start: 12.63, end: 13.77, disable: 0 },
  { word: "through", start: 14.17, end: 14.3, disable: 0 },
  { word: "set", start: 14.3, end: 14.59, disable: 1 },
  { word: "of", start: 14.59, end: 14.86, disable: 1 },
  { word: "sequential", start: 14.86, end: 15.61, disable: 1 },
  { word: "statements", start: 15.61, end: 16.34, disable: 1 },
  { word: "a", start: 18.87, end: 18.92, disable: 1 },
  { word: "loop", start: 18.92, end: 19.37, disable: 1 },
  { word: "statement", start: 19.37, end: 20.19, disable: 1 },
  { word: "a", start: 23.02, end: 23.08, disable: 1 },
  { word: "loop", start: 23.08, end: 23.72, disable: 1 },
  { word: "statement", start: 23.93, end: 24.86, disable: 1 },
  { word: "is", start: 26.41, end: 26.88, disable: 1 },
  { word: "used", start: 26.88, end: 27.57, disable: 1 },
  { word: "to", start: 29.9, end: 30.14, disable: 1 },
  { word: "iterate", start: 30.14, end: 30.9, disable: 1 },
  { word: "to", start: 33.53, end: 33.7, disable: 1 },
  { word: "iterate", start: 33.7, end: 34.36, disable: 1 },
  { word: "through", start: 34.44, end: 34.94, disable: 1 },
  { word: "a", start: 38.63, end: 38.78, disable: 1 },
  { word: "set", start: 38.78, end: 39.14, disable: 1 },
  { word: "of", start: 39.14, end: 39.59, disable: 1 },
  { word: "sequential", start: 42.75, end: 43.51, disable: 1 },
  { word: "statements", start: 43.51, end: 44.24, disable: 1 },
  { word: "set", start: 52.54, end: 52.8, disable: 0 },
  { word: "of", start: 52.8, end: 53.14, disable: 0 },
  { word: "sequential", start: 53.24, end: 54.03, disable: 0 },
  { word: "statements", start: 54.14, end: 54.82, disable: 0 },
  { word: "so", start: 56.04, end: 56.11, disable: 0 },
  { word: "the", start: 57.12, end: 57.55, disable: 0 },
  { word: "syntax", start: 57.89, end: 58.91, disable: 0 },
  { word: "for", start: 60.97, end: 61.16, disable: 0 },
  { word: "this", start: 61.16, end: 61.42, disable: 0 },
  { word: "loop", start: 61.42, end: 61.64, disable: 0 },
  { word: "statement", start: 61.64, end: 62.15, disable: 0 },
  { word: "is", start: 62.15, end: 62.51, disable: 0 },
  { word: "loop", start: 64.76, end: 65.38, disable: 0 },
  { word: "iphone", start: 69.18, end: 69.65, disable: 0 },
  { word: "label", start: 69.65, end: 70.15, disable: 0 },
  { word: "so", start: 75.13, end: 75.3, disable: 0 },
  { word: "this", start: 75.3, end: 75.52, disable: 0 },
  { word: "is", start: 75.52, end: 75.66, disable: 0 },
  { word: "optional", start: 75.66, end: 76.15, disable: 0 },
  { word: "actually", start: 76.18, end: 76.53, disable: 0 },
  { word: "this", start: 76.53, end: 76.81, disable: 0 },
  { word: "we", start: 76.84, end: 77.01, disable: 0 },
  { word: "can", start: 77.01, end: 77.21, disable: 0 },
  { word: "keep", start: 77.21, end: 77.52, disable: 0 },
  { word: "our", start: 77.52, end: 77.83, disable: 0 },
  { word: "wanted", start: 78.15, end: 78.46, disable: 0 },
  { word: "to", start: 78.46, end: 78.59, disable: 0 },
  { word: "keep", start: 78.59, end: 78.9, disable: 0 },
  { word: "so", start: 79.39, end: 79.6, disable: 0 },
  { word: "loop", start: 79.6, end: 80.03, disable: 0 },
  { word: "label", start: 80.06, end: 80.82, disable: 0 },
  { word: "colon", start: 81.21, end: 81.74, disable: 0 },
  { word: "iteration", start: 82.68, end: 83.44, disable: 1 },
  { word: "iteration", start: 85.49, end: 86.42, disable: 0 },
  { word: "and", start: 88.17, end: 88.53, disable: 0 },
  { word: "loop", start: 93.2, end: 93.82, disable: 1 },
  { word: "ok", start: 94.75, end: 95.2, disable: 1 },
  { word: "iteration", start: 95.27, end: 96.0, disable: 1 },
  { word: "loop", start: 96.08, end: 96.38, disable: 0 },
  { word: "sequential", start: 96.38, end: 96.92, disable: 0 },
  { word: "statements", start: 96.92, end: 97.6, disable: 0 },
  { word: "so", start: 101.67, end: 101.87, disable: 0 },
  { word: "set", start: 101.87, end: 102.09, disable: 0 },
  { word: "of", start: 102.09, end: 102.22, disable: 0 },
  { word: "sequential", start: 102.22, end: 102.79, disable: 0 },
  { word: "statements", start: 102.79, end: 103.3, disable: 0 },
  { word: "here", start: 103.3, end: 103.61, disable: 0 },
  { word: "and", start: 106.7, end: 107.04, disable: 0 },
  { word: "loop", start: 107.04, end: 107.54, disable: 0 },
  { word: "end", start: 111.52, end: 111.84, disable: 0 },
  { word: "loop", start: 111.84, end: 112.32, disable: 0 },
  { word: "and", start: 112.61, end: 112.93, disable: 0 },
  { word: "if", start: 112.93, end: 113.09, disable: 0 },
  { word: "you", start: 113.09, end: 113.2, disable: 0 },
  { word: "have", start: 113.2, end: 113.62, disable: 0 },
  { word: "initiated", start: 113.62, end: 114.56, disable: 0 },
  { word: "with", start: 114.56, end: 114.76, disable: 0 },
  { word: "the", start: 114.76, end: 114.83, disable: 0 },
  { word: "loop", start: 114.83, end: 115.23, disable: 0 },
  { word: "label", start: 115.23, end: 115.88, disable: 0 },
  { word: "that", start: 115.88, end: 116.1, disable: 0 },
  { word: "should", start: 116.1, end: 116.33, disable: 0 },
  { word: "be", start: 116.33, end: 116.66, disable: 0 },
  { word: "written", start: 117.6, end: 117.91, disable: 0 },
  { word: "at", start: 117.91, end: 118.07, disable: 0 },
  { word: "the", start: 118.07, end: 118.2, disable: 0 },
  { word: "end", start: 118.2, end: 118.36, disable: 0 },
  { word: "here", start: 118.36, end: 118.6, disable: 0 },
  { word: "this", start: 119.97, end: 120.47, disable: 0 },
  { word: "is", start: 120.47, end: 120.6, disable: 0 },
  { word: "what", start: 120.6, end: 120.91, disable: 0 },
  { word: "the", start: 120.91, end: 121.05, disable: 0 },
  { word: "loop", start: 121.05, end: 121.44, disable: 0 },
  { word: "statement", start: 122.27, end: 122.97, disable: 0 },
  { word: "basic", start: 123.06, end: 123.54, disable: 0 },
  { word: "syntax", start: 123.54, end: 124.13, disable: 0 },
];

videoPlayer.onloadedmetadata = () => {
  const enabledTranscriptDuration = calculateEnabledTranscriptDuration();
  totalDurationDisplay.textContent = formatTime(enabledTranscriptDuration);
};

transcript.forEach((item, index) => {
  const wordSpan = document.createElement("button");
  wordSpan.classList.add("mx-3");
  wordSpan.classList.add("hover:text-red-600");
  wordSpan.classList.add("text-2xl");
  wordSpan.classList.add("font-bold");
  wordSpan.textContent = item.word;
  wordSpan.classList.add("word");
  wordSpan.dataset.start = item.start;
  wordSpan.dataset.end = item.end;
  wordSpan.onclick = () => {
    toggleWordDisable(wordSpan);
    updateEnabledTranscriptDuration();
    updateSeekBar();
  };
  if (item.disable === 1) {
    wordSpan.classList.add("disabled");
  }
  wordContainer.appendChild(wordSpan);
});

function toggleWordDisable(wordElement) {
  wordElement.classList.toggle("disabled");
}

function calculateEnabledTranscriptDuration() {
  const enabledWords = document.querySelectorAll(".word:not(.disabled)");
  let totalDuration = 0;
  enabledWords.forEach((word) => {
    totalDuration +=
      parseFloat(word.dataset.end) - parseFloat(word.dataset.start);
  });
  return totalDuration;
}

function updateEnabledTranscriptDuration() {
  const enabledTranscriptDuration = calculateEnabledTranscriptDuration();
  totalDurationDisplay.textContent = formatTime(enabledTranscriptDuration);
}

function scrollToActiveWord(activeWord) {
  const containerRect = wordContainerWrapper.getBoundingClientRect();
  const wordRect = activeWord.getBoundingClientRect();
  const scrollLeft =
    wordRect.left -
    containerRect.left -
    containerRect.width / 2 +
    wordRect.width / 2;
  wordContainerWrapper.scrollTo({
    left: wordContainerWrapper.scrollLeft + scrollLeft,
    behavior: "smooth",
  });
}

function updateSeekBar() {
  const progress =
    (getCurrentTime() / calculateEnabledTranscriptDuration()) * 100;
  seekBar.style.width = `${progress}%`;
  seekHandle.style.left = `${progress}%`;
}

function getCurrentTime() {
  const currentTime = videoPlayer.currentTime;
  const enabledWords = document.querySelectorAll(".word:not(.disabled)");
  let totalDuration = 0;
  enabledWords.forEach((word) => {
    if (word.dataset.start < currentTime) {
      totalDuration +=
        parseFloat(word.dataset.end) - parseFloat(word.dataset.start);
    }
  });
  return totalDuration;
}

function updateCurrentTimeDisplay() {
  currentTimeDisplay.textContent = formatTime(getCurrentTime());
}

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

videoPlayer.ontimeupdate = () => {
  updateSeekBar();
  updateCurrentTimeDisplay();
  const currentTime = videoPlayer.currentTime;
  const words = document.querySelectorAll(".word:not(.disabled)");
  let isWithinDefinedSegment = false;

  words.forEach((word) => {
    const start = parseFloat(word.dataset.start);
    const end = parseFloat(word.dataset.end);
    if (currentTime >= start && currentTime < end) {
      word.classList.add("active");
      scrollToActiveWord(word);
      isWithinDefinedSegment = true;
    } else {
      word.classList.remove("active");
    }
  });

  if (!isWithinDefinedSegment) {
    const nextSegment = Array.from(words).find(
      (word) => currentTime < parseFloat(word.dataset.start)
    );
    if (nextSegment) {
      videoPlayer.currentTime = parseFloat(nextSegment.dataset.start);
    } else {
      videoPlayer.pause();
      playPauseBtn.setAttribute("src", "../assets/play.png");
    }
  }
};

seekBarContainer.onclick = (e) => {
  const rect = seekBarContainer.getBoundingClientRect();
  const pos = (e.clientX - rect.left) / rect.width;
  videoPlayer.currentTime = pos * videoPlayer.duration;
};

playPauseBtn.onclick = () => {
  if (videoPlayer.paused) {
    videoPlayer.play();
  } else {
    videoPlayer.pause();
  }
};

replayBtn.onclick = () => {
  videoPlayer.currentTime = 0;
  videoPlayer.play();
};

videoPlayer.onplay = () => {
  playPauseBtn.setAttribute("src", "../assets/pause.png");
};

videoPlayer.onpause = () => {
  playPauseBtn.setAttribute("src", "../assets/play.png");
};
