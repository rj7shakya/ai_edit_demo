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

const videoUrl = "./videos/teach2.mp4";
videoPlayer.src = videoUrl;
videoPlayer.controls = false;

let videoDuration = 0;
const transcript = [
  { word: "it", start: 0.58, end: 0.8, disable: 0 },
  { word: "is", start: 0.8, end: 1.49, disable: 0 },
  { word: "a", start: 3.36, end: 3.39, disable: 0 },
  { word: "sequential", start: 3.71, end: 4.63, disable: 0 },
  { word: "statement", start: 4.63, end: 5.5, disable: 0 },
  { word: "sequential", start: 7.37, end: 7.95, disable: 1 },
  { word: "means", start: 7.95, end: 8.16, disable: 0 },
  { word: "executes", start: 8.16, end: 8.7, disable: 0 },
  { word: "one", start: 8.7, end: 8.83, disable: 0 },
  { word: "after", start: 8.83, end: 9.11, disable: 0 },
  { word: "another", start: 9.11, end: 9.47, disable: 0 },
  { word: "sequential", start: 9.57, end: 10.14, disable: 0 },
  { word: "statement", start: 10.14, end: 10.81, disable: 0 },
  { word: "in", start: 12.47, end: 12.65, disable: 0 },
  { word: "a", start: 12.65, end: 12.86, disable: 0 },
  { word: "process", start: 13.01, end: 13.81, disable: 0 },
  { word: "that", start: 16.62, end: 17.24, disable: 0 },
  { word: "iterates", start: 17.72, end: 18.66, disable: 0 },
  { word: "that", start: 20.78, end: 21.3, disable: 1 },
  { word: "iterates", start: 22.82, end: 23.56, disable: 1 },
  { word: "over", start: 23.59, end: 23.96, disable: 0 },
  { word: "a", start: 23.96, end: 23.99, disable: 0 },
  { word: "number", start: 23.99, end: 24.33, disable: 1 },
  { word: "of", start: 24.33, end: 24.53, disable: 1 },
  { word: "values", start: 24.53, end: 25.14, disable: 1 },
  { word: "over", start: 26.26, end: 26.67, disable: 1 },
  { word: "here", start: 26.67, end: 27.17, disable: 1 },
  { word: "number", start: 28.28, end: 28.89, disable: 0 },
  { word: "of", start: 28.89, end: 29.36, disable: 0 },
  { word: "values", start: 30.39, end: 31.2, disable: 0 },
  { word: "because", start: 31.2, end: 31.54, disable: 0 },
  { word: "it", start: 31.54, end: 31.63, disable: 0 },
  { word: "is", start: 31.63, end: 31.72, disable: 0 },
  { word: "a", start: 31.72, end: 31.79, disable: 0 },
  { word: "loop", start: 31.79, end: 32.06, disable: 0 },
  { word: "that", start: 32.06, end: 32.21, disable: 0 },
  { word: "has", start: 32.21, end: 32.48, disable: 0 },
  { word: "to", start: 32.48, end: 32.85, disable: 0 },
  { word: "rotate", start: 32.99, end: 33.37, disable: 0 },
  { word: "for", start: 33.37, end: 33.51, disable: 0 },
  { word: "n", start: 33.51, end: 33.82, disable: 0 },
  { word: "number", start: 33.82, end: 34.05, disable: 0 },
  { word: "of", start: 34.05, end: 34.15, disable: 0 },
  { word: "values", start: 34.15, end: 34.66, disable: 0 },
  { word: "the", start: 35.24, end: 35.42, disable: 1 },
  { word: "loop", start: 35.42, end: 35.72, disable: 1 },
  { word: "index", start: 35.72, end: 36.08, disable: 1 },
  { word: "does", start: 36.08, end: 36.39, disable: 0 },
  { word: "not", start: 36.39, end: 36.74, disable: 0 },
  { word: "the", start: 38.48, end: 38.7, disable: 0 },
  { word: "loop", start: 38.7, end: 39.09, disable: 0 },
  { word: "index", start: 39.09, end: 39.86, disable: 0 },
  { word: "does", start: 44.49, end: 44.9, disable: 0 },
  { word: "not", start: 44.9, end: 45.15, disable: 0 },
  { word: "have", start: 45.15, end: 45.65, disable: 0 },
  { word: "to", start: 45.65, end: 45.79, disable: 0 },
  { word: "be", start: 45.79, end: 46.18, disable: 0 },
  { word: "declared", start: 48.97, end: 49.95, disable: 0 },
  { word: "and", start: 53.38, end: 53.62, disable: 1 },
  { word: "it", start: 53.62, end: 53.81, disable: 1 },
  { word: "can", start: 53.81, end: 54.08, disable: 1 },
  { word: "be", start: 54.08, end: 54.52, disable: 1 },
  { word: "and", start: 58.28, end: 58.62, disable: 0 },
  { word: "it", start: 58.62, end: 58.87, disable: 0 },
  { word: "can", start: 58.87, end: 59.19, disable: 0 },
  { word: "be", start: 59.19, end: 59.65, disable: 0 },
  { word: "re", start: 60.14, end: 60.71, disable: 0 },
  { word: "assign", start: 61.23, end: 62.09, disable: 0 },
  { word: "and", start: 64.55, end: 64.81, disable: 0 },
  { word: "it", start: 64.81, end: 65.01, disable: 0 },
  { word: "can", start: 65.01, end: 65.25, disable: 0 },
  { word: "be", start: 65.25, end: 65.41, disable: 0 },
  { word: "reassigned", start: 65.41, end: 66.36, disable: 0 },
  { word: "a", start: 67.91, end: 68.06, disable: 0 },
  { word: "value", start: 68.06, end: 68.78, disable: 0 },
  { word: "with", start: 72.59, end: 73.12, disable: 0 },
  { word: "in", start: 73.27, end: 73.51, disable: 0 },
  { word: "the", start: 73.51, end: 73.63, disable: 0 },
  { word: "loop", start: 73.63, end: 74.14, disable: 0 },
  { word: "within", start: 75.79, end: 76.2, disable: 1 },
  { word: "the", start: 76.2, end: 76.55, disable: 1 },
  { word: "loop", start: 77.38, end: 78.16, disable: 1 },
  { word: "it", start: 80.75, end: 80.9, disable: 0 },
  { word: "is", start: 80.9, end: 81.12, disable: 0 },
  { word: "by", start: 81.12, end: 81.41, disable: 0 },
  { word: "default", start: 81.41, end: 82.11, disable: 0 },
  { word: "it", start: 84.33, end: 84.56, disable: 1 },
  { word: "is", start: 84.56, end: 84.96, disable: 1 },
  { word: "by", start: 84.99, end: 85.4, disable: 1 },
  { word: "default", start: 85.4, end: 86.15, disable: 1 },
  { word: "and", start: 90.12, end: 90.3, disable: 0 },
  { word: "integer", start: 90.3, end: 90.91, disable: 0 },
  { word: "so", start: 93.47, end: 93.67, disable: 0 },
  { word: "when", start: 93.67, end: 93.89, disable: 0 },
  { word: "you", start: 93.89, end: 94.0, disable: 0 },
  { word: "are", start: 94.0, end: 94.14, disable: 0 },
  { word: "rotating", start: 94.14, end: 94.77, disable: 0 },
  { word: "the", start: 94.77, end: 94.87, disable: 0 },
  { word: "loop", start: 94.87, end: 95.15, disable: 0 },
  { word: "for", start: 95.15, end: 95.3, disable: 0 },
  { word: "n", start: 95.3, end: 95.44, disable: 0 },
  { word: "number", start: 95.44, end: 95.79, disable: 0 },
  { word: "of", start: 95.86, end: 96.07, disable: 0 },
  { word: "so", start: 96.07, end: 96.15, disable: 0 },
  { word: "the", start: 96.15, end: 96.33, disable: 0 },
  { word: "n", start: 96.33, end: 96.51, disable: 1 },
  { word: "value", start: 96.51, end: 96.81, disable: 0 },
  { word: "should", start: 96.81, end: 97.0, disable: 0 },
  { word: "be", start: 97.0, end: 97.28, disable: 0 },
  { word: "an", start: 97.35, end: 97.47, disable: 0 },
  { word: "integer", start: 97.47, end: 97.87, disable: 0 },
  { word: "that", start: 97.87, end: 98.06, disable: 0 },
  { word: "is", start: 98.06, end: 98.12, disable: 0 },
  { word: "the", start: 98.12, end: 98.22, disable: 0 },
  { word: "meaning", start: 98.22, end: 98.48, disable: 0 },
  { word: "of", start: 98.48, end: 98.58, disable: 0 },
  { word: "this", start: 98.58, end: 98.76, disable: 0 },
  { word: "line", start: 98.76, end: 98.84, disable: 0 },
  { word: "okay", start: 98.84, end: 98.93, disable: 0 },
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
      playPauseBtn.setAttribute("src", "./assets/play.png");
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
  playPauseBtn.setAttribute("src", "/assets/pause.png");
};

videoPlayer.onpause = () => {
  playPauseBtn.setAttribute("src", "/assets/play.png");
};
