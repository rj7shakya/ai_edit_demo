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

const videoUrl = "../videos/dl1.mp4";
videoPlayer.src = videoUrl;
videoPlayer.controls = false;

let videoDuration = 0;
const transcript = [
  { word: "okay", start: 0.28, end: 0.48, disable: 0 },
  { word: "so", start: 0.48, end: 0.63, disable: 0 },
  { word: "let's", start: 0.63, end: 0.86, disable: 0 },
  { word: "start", start: 0.86, end: 1.12, disable: 0 },
  { word: "with", start: 1.12, end: 1.23, disable: 0 },
  { word: "the", start: 1.23, end: 1.3, disable: 0 },
  { word: "session", start: 1.3, end: 1.74, disable: 0 },
  { word: "now", start: 1.74, end: 1.95, disable: 0 },
  { word: "the", start: 1.95, end: 2.01, disable: 0 },
  { word: "actual", start: 2.01, end: 2.27, disable: 0 },
  { word: "session", start: 2.27, end: 2.69, disable: 0 },
  { word: "so", start: 2.69, end: 2.96, disable: 0 },
  { word: "this", start: 2.96, end: 3.16, disable: 0 },
  { word: "is", start: 3.16, end: 3.32, disable: 0 },
  { word: "the", start: 3.32, end: 3.43, disable: 0 },
  { word: "introductory", start: 3.43, end: 3.96, disable: 0 },
  { word: "part", start: 3.96, end: 4.25, disable: 0 },
  { word: "again", start: 4.25, end: 4.65, disable: 0 },
  { word: "okay", start: 5.14, end: 5.7, disable: 0 },
  { word: "so", start: 5.96, end: 6.23, disable: 0 },
  { word: "what", start: 6.23, end: 6.51, disable: 0 },
  { word: "we", start: 6.51, end: 6.7, disable: 0 },
  { word: "are", start: 6.7, end: 6.78, disable: 0 },
  { word: "going", start: 6.78, end: 6.97, disable: 0 },
  { word: "to", start: 6.97, end: 7.06, disable: 0 },
  { word: "cover", start: 7.06, end: 7.29, disable: 0 },
  { word: "today", start: 7.29, end: 7.63, disable: 0 },
  { word: "is", start: 7.63, end: 7.83, disable: 0 },
  { word: "like", start: 7.83, end: 8.08, disable: 0 },
  { word: "what", start: 8.75, end: 9.1, disable: 0 },
  { word: "is", start: 9.1, end: 9.24, disable: 0 },
  { word: "deep", start: 9.24, end: 9.42, disable: 0 },
  { word: "learning", start: 9.42, end: 9.67, disable: 0 },
  { word: "why", start: 9.67, end: 9.83, disable: 0 },
  { word: "it", start: 9.83, end: 9.91, disable: 0 },
  { word: "is", start: 9.91, end: 10.03, disable: 0 },
  { word: "important", start: 10.03, end: 10.62, disable: 0 },
  { word: "where", start: 10.62, end: 10.8, disable: 0 },
  { word: "it", start: 10.8, end: 11.02, disable: 0 },
  { word: "can", start: 11.02, end: 11.2, disable: 0 },
  { word: "be", start: 11.2, end: 11.27, disable: 0 },
  { word: "applied", start: 11.27, end: 11.72, disable: 0 },
  { word: "why", start: 11.75, end: 12.02, disable: 0 },
  { word: "you", start: 12.02, end: 12.17, disable: 0 },
  { word: "are", start: 12.17, end: 12.24, disable: 0 },
  { word: "even", start: 12.24, end: 12.5, disable: 0 },
  { word: "studying", start: 12.5, end: 12.88, disable: 0 },
  { word: "deep", start: 12.88, end: 13.07, disable: 0 },
  { word: "learning", start: 13.07, end: 13.5, disable: 0 },
  { word: "how", start: 13.77, end: 14.05, disable: 0 },
  { word: "it", start: 14.05, end: 14.13, disable: 0 },
  { word: "is", start: 14.13, end: 14.25, disable: 0 },
  { word: "different", start: 14.25, end: 14.6, disable: 0 },
  { word: "from", start: 14.6, end: 14.79, disable: 0 },
  { word: "machine", start: 14.79, end: 15.05, disable: 0 },
  { word: "learning", start: 15.05, end: 15.46, disable: 0 },
  { word: "then", start: 16.04, end: 16.25, disable: 0 },
  { word: "we", start: 16.25, end: 16.34, disable: 0 },
  { word: "will", start: 16.34, end: 16.47, disable: 0 },
  { word: "be", start: 16.47, end: 16.53, disable: 0 },
  { word: "talking", start: 16.53, end: 16.84, disable: 0 },
  { word: "about", start: 16.84, end: 17.11, disable: 0 },
  { word: "what", start: 17.11, end: 17.27, disable: 0 },
  { word: "is", start: 17.27, end: 17.38, disable: 0 },
  { word: "artificial", start: 17.38, end: 17.87, disable: 0 },
  { word: "neural", start: 17.87, end: 18.11, disable: 0 },
  { word: "network", start: 18.11, end: 18.48, disable: 0 },
  { word: "water", start: 18.48, end: 18.69, disable: 1 },
  { word: "biological", start: 18.69, end: 19.34, disable: 1 },
  { word: "neural", start: 19.34, end: 19.55, disable: 1 },
  { word: "networks", start: 19.55, end: 20.03, disable: 1 },
  { word: "how", start: 20.39, end: 20.63, disable: 0 },
  { word: "they", start: 20.63, end: 20.75, disable: 0 },
  { word: "are", start: 20.75, end: 20.85, disable: 0 },
  { word: "different", start: 20.85, end: 21.36, disable: 0 },
  { word: "how", start: 21.68, end: 21.76, disable: 0 },
  { word: "we", start: 21.76, end: 21.87, disable: 0 },
  { word: "have", start: 21.87, end: 22.57, disable: 0 },
  { word: "drawn", start: 22.57, end: 22.82, disable: 0 },
  { word: "inspiration", start: 22.82, end: 23.27, disable: 0 },
  { word: "from", start: 23.27, end: 23.44, disable: 0 },
  { word: "biological", start: 23.44, end: 23.91, disable: 0 },
  { word: "neural", start: 23.91, end: 24.09, disable: 0 },
  { word: "network", start: 24.09, end: 24.53, disable: 0 },
  { word: "then", start: 25.08, end: 25.26, disable: 0 },
  { word: "we'll", start: 25.26, end: 25.39, disable: 0 },
  { word: "be", start: 25.39, end: 25.48, disable: 0 },
  { word: "talking", start: 25.48, end: 25.82, disable: 0 },
  { word: "about", start: 25.82, end: 26.12, disable: 0 },
  { word: "what", start: 26.12, end: 26.27, disable: 0 },
  { word: "are", start: 26.27, end: 26.32, disable: 0 },
  { word: "the", start: 26.32, end: 26.43, disable: 0 },
  { word: "sensory", start: 26.43, end: 26.86, disable: 0 },
  { word: "reason", start: 26.86, end: 27.29, disable: 0 },
  { word: "just", start: 27.29, end: 27.52, disable: 0 },
  { word: "an", start: 27.52, end: 27.68, disable: 0 },
  { word: "overview", start: 27.68, end: 28.13, disable: 0 },
  { word: "about", start: 28.13, end: 28.45, disable: 0 },
  { word: "what", start: 28.45, end: 28.65, disable: 0 },
  { word: "is", start: 28.65, end: 28.76, disable: 0 },
  { word: "cerebral", start: 28.76, end: 29.15, disable: 1 },
  { word: "cortex", start: 29.15, end: 29.6, disable: 1 },
  { word: "and", start: 29.6, end: 29.72, disable: 1 },
  { word: "how", start: 29.72, end: 29.97, disable: 1 },
  { word: "it", start: 29.97, end: 30.06, disable: 1 },
  { word: "is", start: 30.06, end: 30.31, disable: 1 },
  { word: "of", start: 31.03, end: 31.46, disable: 1 },
  { word: "sensory", start: 38.64, end: 39.0, disable: 1 },
  { word: "reasons", start: 39.0, end: 39.32, disable: 1 },
  { word: "to", start: 39.32, end: 39.57, disable: 1 },
  { word: "cerebral", start: 39.57, end: 40.02, disable: 0 },
  { word: "cortex", start: 40.02, end: 40.49, disable: 0 },
  { word: "and", start: 40.49, end: 40.61, disable: 0 },
  { word: "all", start: 40.61, end: 40.78, disable: 0 },
  { word: "these", start: 40.78, end: 40.95, disable: 0 },
  { word: "things", start: 40.95, end: 41.18, disable: 0 },
  { word: "so", start: 41.18, end: 41.52, disable: 0 },
  { word: "we", start: 41.52, end: 41.64, disable: 0 },
  { word: "will", start: 41.64, end: 41.76, disable: 0 },
  { word: "be", start: 41.76, end: 41.83, disable: 0 },
  { word: "talking", start: 41.83, end: 42.1, disable: 0 },
  { word: "about", start: 42.1, end: 42.33, disable: 0 },
  { word: "what", start: 42.33, end: 42.52, disable: 0 },
  { word: "is", start: 42.52, end: 42.62, disable: 0 },
  { word: "the", start: 42.62, end: 42.95, disable: 0 },
  { word: "what", start: 43.54, end: 44.48, disable: 0 },
  { word: "are", start: 44.48, end: 44.56, disable: 0 },
  { word: "the", start: 44.56, end: 44.65, disable: 0 },
  { word: "active", start: 44.65, end: 44.94, disable: 0 },
  { word: "regions", start: 44.94, end: 45.26, disable: 0 },
  { word: "in", start: 45.26, end: 45.35, disable: 0 },
  { word: "the", start: 45.35, end: 45.42, disable: 0 },
  { word: "brain", start: 45.42, end: 45.84, disable: 0 },
  { word: "which", start: 46.06, end: 46.22, disable: 0 },
  { word: "is", start: 46.22, end: 46.33, disable: 0 },
  { word: "helpful", start: 46.33, end: 46.9, disable: 0 },
  { word: "and", start: 47.62, end: 48.14, disable: 0 },
  { word: "next", start: 48.14, end: 48.42, disable: 0 },
  { word: "we", start: 48.42, end: 48.52, disable: 0 },
  { word: "will", start: 48.52, end: 48.67, disable: 0 },
  { word: "be", start: 48.67, end: 48.73, disable: 0 },
  { word: "talking", start: 48.73, end: 49.04, disable: 0 },
  { word: "about", start: 49.04, end: 49.36, disable: 0 },
  { word: "ok", start: 50.25, end: 50.49, disable: 0 },
  { word: "what", start: 50.49, end: 50.73, disable: 0 },
  { word: "are", start: 50.73, end: 50.76, disable: 0 },
  { word: "the", start: 50.76, end: 50.88, disable: 1 },
  { word: "unit", start: 50.88, end: 51.23, disable: 1 },
  { word: "unit", start: 51.23, end: 51.38, disable: 0 },
  { word: "of", start: 51.41, end: 51.49, disable: 0 },
  { word: "a", start: 51.49, end: 51.71, disable: 0 },
  { word: "biological", start: 51.74, end: 53.09, disable: 0 },
  { word: "neuron", start: 53.09, end: 53.44, disable: 0 },
  { word: "neural", start: 53.57, end: 53.84, disable: 0 },
  { word: "network", start: 53.84, end: 54.19, disable: 0 },
  { word: "so", start: 54.84, end: 54.95, disable: 0 },
  { word: "we", start: 54.95, end: 55.02, disable: 0 },
  { word: "will", start: 55.02, end: 55.15, disable: 0 },
  { word: "be", start: 55.15, end: 55.22, disable: 0 },
  { word: "talking", start: 55.22, end: 55.51, disable: 0 },
  { word: "about", start: 55.51, end: 55.76, disable: 0 },
  { word: "that", start: 55.76, end: 56.01, disable: 0 },
  { word: "what", start: 56.22, end: 56.57, disable: 0 },
  { word: "is", start: 57.01, end: 57.14, disable: 0 },
  { word: "the", start: 57.14, end: 57.22, disable: 0 },
  { word: "unit", start: 57.22, end: 57.59, disable: 0 },
  { word: "of", start: 57.59, end: 57.75, disable: 0 },
  { word: "a", start: 57.75, end: 57.79, disable: 0 },
  { word: "biological", start: 57.79, end: 58.27, disable: 0 },
  { word: "neuron", start: 58.27, end: 58.71, disable: 0 },
  { word: "we", start: 58.87, end: 58.95, disable: 0 },
  { word: "will", start: 58.95, end: 59.13, disable: 0 },
  { word: "be", start: 59.13, end: 59.41, disable: 0 },
  { word: "talking", start: 59.41, end: 59.68, disable: 0 },
  { word: "about", start: 59.68, end: 59.78, disable: 0 },
  { word: "one", start: 59.78, end: 60.07, disable: 0 },
  { word: "neuron", start: 60.07, end: 60.31, disable: 0 },
  { word: "also", start: 60.31, end: 60.71, disable: 0 },
  { word: "then", start: 61.53, end: 62.0, disable: 0 },
  { word: "what", start: 62.0, end: 62.24, disable: 0 },
  { word: "were", start: 62.24, end: 62.42, disable: 0 },
  { word: "the", start: 62.42, end: 62.72, disable: 0 },
  { word: "which", start: 63.04, end: 63.23, disable: 1 },
  { word: "was", start: 63.23, end: 63.39, disable: 1 },
  { word: "the", start: 63.39, end: 63.48, disable: 1 },
  { word: "first", start: 63.48, end: 63.92, disable: 0 },
  { word: "artificial", start: 63.92, end: 64.46, disable: 0 },
  { word: "neuron", start: 64.46, end: 64.89, disable: 0 },
  { word: "okay", start: 65.6, end: 65.99, disable: 0 },
  { word: "and", start: 66.31, end: 66.55, disable: 0 },
  { word: "then", start: 66.55, end: 66.8, disable: 0 },
  { word: "we", start: 66.8, end: 66.89, disable: 0 },
  { word: "will", start: 66.89, end: 67.01, disable: 0 },
  { word: "be", start: 67.01, end: 67.08, disable: 1 },
  { word: "talking", start: 67.08, end: 67.39, disable: 1 },
  { word: "about", start: 67.39, end: 67.65, disable: 1 },
  { word: "what", start: 67.65, end: 67.81, disable: 1 },
  { word: "is", start: 67.81, end: 68.0, disable: 1 },
  { word: "perceptron", start: 68.0, end: 68.65, disable: 1 },
  { word: "after", start: 69.49, end: 69.78, disable: 1 },
  { word: "that", start: 69.78, end: 69.97, disable: 1 },
  { word: "we", start: 69.97, end: 70.06, disable: 1 },
  { word: "will", start: 70.06, end: 70.15, disable: 1 },
  { word: "we'll", start: 70.15, end: 70.27, disable: 1 },
  { word: "be", start: 70.27, end: 70.31, disable: 0 },
  { word: "talking", start: 70.31, end: 70.54, disable: 0 },
  { word: "about", start: 70.54, end: 70.75, disable: 0 },
  { word: "one", start: 70.75, end: 70.94, disable: 0 },
  { word: "implementation", start: 70.94, end: 71.62, disable: 0 },
  { word: "also", start: 71.62, end: 71.97, disable: 0 },
  { word: "about", start: 71.97, end: 72.21, disable: 0 },
  { word: "the", start: 72.21, end: 72.29, disable: 0 },
  { word: "perceptron", start: 72.29, end: 72.58, disable: 0 },
  { word: "it", start: 75.1, end: 75.26, disable: 0 },
  { word: "will", start: 75.26, end: 75.39, disable: 0 },
  { word: "be", start: 75.39, end: 75.49, disable: 0 },
  { word: "available", start: 75.49, end: 75.97, disable: 0 },
  { word: "do", start: 75.97, end: 76.08, disable: 0 },
  { word: "not", start: 76.08, end: 76.27, disable: 0 },
  { word: "worry", start: 76.27, end: 76.45, disable: 0 },
  { word: "about", start: 76.45, end: 76.7, disable: 0 },
  { word: "guys", start: 76.7, end: 77.0, disable: 0 },
  { word: "this", start: 77.2, end: 77.65, disable: 0 },
  { word: "material", start: 77.65, end: 78.01, disable: 0 },
  { word: "will", start: 78.01, end: 78.16, disable: 0 },
  { word: "be", start: 78.16, end: 78.29, disable: 0 },
  { word: "available", start: 78.29, end: 78.7, disable: 0 },
  { word: "inside", start: 78.7, end: 79.07, disable: 0 },
  { word: "your", start: 79.07, end: 79.61, disable: 0 },
  { word: "dashboard", start: 79.61, end: 80.09, disable: 0 },
  { word: "so", start: 80.09, end: 80.28, disable: 0 },
  { word: "not", start: 80.28, end: 80.48, disable: 0 },
  { word: "a", start: 80.48, end: 80.51, disable: 0 },
  { word: "problem", start: 80.51, end: 80.84, disable: 0 },
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
