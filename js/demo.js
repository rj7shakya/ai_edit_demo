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

// const videoUrl = "../videos/js.mp4";
// videoPlayer.src = videoUrl;
videoPlayer.controls = false;

let videoDuration = 0;
const transcript = [
  { word: "this", start: 1.64, end: 1.73, disable: 1 },
  { word: "is", start: 1.73, end: 1.79, disable: 1 },
  { word: "the", start: 3.89, end: 4.27, disable: 1 },
  { word: "only", start: 9.86, end: 9.98, disable: 1 },
  { word: "website", start: 9.98, end: 11.24, disable: 1 },
  { word: "that", start: 11.24, end: 11.46, disable: 1 },
  { word: "you", start: 11.46, end: 11.77, disable: 1 },
  { word: "will", start: 11.77, end: 11.86, disable: 1 },
  { word: "this", start: 12.58, end: 12.91, disable: 0 },
  { word: "is", start: 12.91, end: 13.12, disable: 0 },
  { word: "the", start: 13.12, end: 13.22, disable: 0 },
  { word: "only", start: 13.22, end: 13.48, disable: 0 },
  { word: "website", start: 13.48, end: 13.92, disable: 0 },
  { word: "that", start: 13.92, end: 14.16, disable: 0 },
  { word: "you", start: 14.16, end: 14.35, disable: 0 },
  { word: "will", start: 14.35, end: 14.55, disable: 0 },
  { word: "need", start: 14.55, end: 14.84, disable: 0 },
  { word: "for", start: 14.84, end: 15.06, disable: 1 },
  { word: "your", start: 15.06, end: 15.21, disable: 1 },
  { word: "front", start: 15.21, end: 15.6, disable: 1 },
  { word: "this", start: 17.71, end: 17.96, disable: 1 },
  { word: "is", start: 17.96, end: 18.14, disable: 1 },
  { word: "the", start: 18.14, end: 18.26, disable: 1 },
  { word: "only", start: 18.26, end: 18.65, disable: 1 },
  { word: "this", start: 19.35, end: 19.65, disable: 1 },
  { word: "is", start: 19.65, end: 19.85, disable: 1 },
  { word: "the", start: 19.85, end: 19.98, disable: 1 },
  { word: "only", start: 19.98, end: 20.25, disable: 1 },
  { word: "website", start: 20.25, end: 20.68, disable: 1 },
  { word: "you", start: 20.68, end: 20.85, disable: 1 },
  { word: "will", start: 20.85, end: 21.02, disable: 1 },
  { word: "need", start: 21.02, end: 21.42, disable: 1 },
  { word: "this", start: 24.35, end: 24.69, disable: 1 },
  { word: "is", start: 24.69, end: 24.9, disable: 1 },
  { word: "the", start: 24.9, end: 25.02, disable: 1 },
  { word: "only", start: 25.02, end: 25.28, disable: 1 },
  { word: "website", start: 25.28, end: 25.75, disable: 1 },
  { word: "you", start: 25.75, end: 26.1, disable: 1 },
  { word: "need", start: 26.1, end: 26.41, disable: 1 },
  { word: "to", start: 26.41, end: 26.51, disable: 1 },
  { word: "generate", start: 26.51, end: 27.09, disable: 1 },
  { word: "this", start: 28.2, end: 28.54, disable: 1 },
  { word: "is", start: 28.54, end: 28.75, disable: 1 },
  { word: "the", start: 28.75, end: 28.88, disable: 1 },
  { word: "only", start: 28.88, end: 29.15, disable: 1 },
  { word: "website", start: 29.15, end: 29.61, disable: 1 },
  { word: "you", start: 29.61, end: 29.89, disable: 1 },
  { word: "need", start: 29.89, end: 30.17, disable: 1 },
  { word: "to", start: 30.17, end: 30.27, disable: 0 },
  { word: "generate", start: 30.27, end: 30.78, disable: 0 },
  { word: "json", start: 30.78, end: 31.08, disable: 0 },
  { word: "data", start: 31.08, end: 31.35, disable: 0 },
  { word: "for", start: 31.35, end: 31.55, disable: 0 },
  { word: "your", start: 31.55, end: 31.72, disable: 0 },
  { word: "project", start: 31.72, end: 32.27, disable: 0 },
  { word: "welcome", start: 34.05, end: 34.36, disable: 1 },
  { word: "to", start: 34.36, end: 34.42, disable: 1 },
  { word: "day", start: 34.42, end: 34.56, disable: 1 },
  { word: "36", start: 34.56, end: 35.09, disable: 1 },
  { word: "welcome", start: 35.87, end: 36.21, disable: 0 },
  { word: "to", start: 36.21, end: 36.28, disable: 0 },
  { word: "day", start: 36.28, end: 36.43, disable: 0 },
  { word: "36", start: 36.43, end: 36.99, disable: 0 },
  { word: "of", start: 36.99, end: 37.18, disable: 0 },
  { word: "learning", start: 37.18, end: 37.54, disable: 0 },
  { word: "best", start: 37.54, end: 37.78, disable: 0 },
  { word: "coding", start: 37.78, end: 38.15, disable: 0 },
  { word: "tools", start: 38.15, end: 38.61, disable: 0 },
  { word: "while", start: 42.68, end: 42.78, disable: 1 },
  { word: "working", start: 45.03, end: 45.65, disable: 1 },
  { word: "on", start: 45.65, end: 45.81, disable: 1 },
  { word: "front", start: 45.81, end: 46.12, disable: 1 },
  { word: "end", start: 46.12, end: 46.28, disable: 1 },
  { word: "project", start: 46.28, end: 46.69, disable: 1 },
  { word: "you", start: 46.69, end: 47.07, disable: 1 },
  { word: "will", start: 47.07, end: 47.31, disable: 1 },
  { word: "while", start: 49.75, end: 49.94, disable: 1 },
  { word: "working", start: 49.94, end: 50.32, disable: 1 },
  { word: "on", start: 50.32, end: 50.49, disable: 1 },
  { word: "front", start: 50.49, end: 50.84, disable: 1 },
  { word: "end", start: 50.84, end: 50.99, disable: 1 },
  { word: "project", start: 50.99, end: 51.34, disable: 1 },
  { word: "you", start: 51.34, end: 51.67, disable: 1 },
  { word: "will", start: 51.67, end: 51.84, disable: 1 },
  { word: "be", start: 51.84, end: 51.99, disable: 1 },
  { word: "constantly", start: 51.99, end: 52.62, disable: 1 },
  { word: "needing", start: 52.62, end: 53.09, disable: 1 },
  { word: "mocktail", start: 53.09, end: 53.63, disable: 1 },
  { word: "you", start: 55.38, end: 55.65, disable: 1 },
  { word: "will", start: 55.65, end: 55.85, disable: 1 },
  { word: "be", start: 55.85, end: 55.97, disable: 1 },
  { word: "constantly", start: 55.97, end: 56.58, disable: 1 },
  { word: "needing", start: 56.58, end: 57.21, disable: 1 },
  { word: "while", start: 64.64, end: 64.85, disable: 1 },
  { word: "working", start: 64.85, end: 65.21, disable: 1 },
  { word: "on", start: 65.21, end: 65.39, disable: 1 },
  { word: "front", start: 65.39, end: 65.69, disable: 1 },
  { word: "end", start: 65.69, end: 65.88, disable: 1 },
  { word: "while", start: 65.88, end: 66.16, disable: 1 },
  { word: "working", start: 67.02, end: 67.68, disable: 1 },
  { word: "on", start: 68.46, end: 69.2, disable: 1 },
  { word: "front", start: 69.2, end: 69.51, disable: 1 },
  { word: "end", start: 69.51, end: 69.69, disable: 1 },
  { word: "project", start: 69.69, end: 70.12, disable: 1 },
  { word: "you", start: 70.12, end: 70.48, disable: 1 },
  { word: "will", start: 70.48, end: 70.68, disable: 1 },
  { word: "constantly", start: 70.68, end: 71.34, disable: 1 },
  { word: "need", start: 71.34, end: 71.66, disable: 1 },
  { word: "json", start: 71.66, end: 72.27, disable: 1 },
  { word: "data", start: 72.27, end: 72.67, disable: 1 },
  { word: "while", start: 75.94, end: 76.13, disable: 1 },
  { word: "working", start: 76.13, end: 76.5, disable: 1 },
  { word: "on", start: 76.5, end: 76.69, disable: 1 },
  { word: "front", start: 76.69, end: 77.02, disable: 1 },
  { word: "end", start: 77.02, end: 77.22, disable: 1 },
  { word: "project", start: 77.22, end: 77.63, disable: 1 },
  { word: "you", start: 77.63, end: 77.92, disable: 1 },
  { word: "will", start: 77.92, end: 78.18, disable: 1 },
  { word: "constantly", start: 78.18, end: 78.81, disable: 1 },
  { word: "need", start: 78.81, end: 79.12, disable: 1 },
  { word: "json", start: 79.12, end: 79.66, disable: 1 },
  { word: "data", start: 79.66, end: 79.97, disable: 1 },
  { word: "for", start: 79.97, end: 80.19, disable: 1 },
  { word: "testing", start: 80.19, end: 80.71, disable: 1 },
  { word: "the", start: 80.71, end: 80.81, disable: 1 },
  { word: "mock", start: 80.81, end: 81.2, disable: 1 },
  { word: "while", start: 83.17, end: 83.33, disable: 1 },
  { word: "working", start: 83.33, end: 83.71, disable: 1 },
  { word: "on", start: 83.71, end: 83.91, disable: 1 },
  { word: "front", start: 83.91, end: 84.23, disable: 1 },
  { word: "while", start: 84.73, end: 84.92, disable: 1 },
  { word: "working", start: 84.92, end: 85.28, disable: 1 },
  { word: "on", start: 85.28, end: 85.46, disable: 1 },
  { word: "front", start: 85.46, end: 85.76, disable: 1 },
  { word: "end", start: 85.76, end: 85.96, disable: 1 },
  { word: "project", start: 85.96, end: 86.41, disable: 1 },
  { word: "while", start: 87.17, end: 87.37, disable: 0 },
  { word: "working", start: 87.37, end: 87.74, disable: 0 },
  { word: "on", start: 87.74, end: 87.93, disable: 0 },
  { word: "front", start: 87.93, end: 88.22, disable: 0 },
  { word: "end", start: 88.22, end: 88.42, disable: 0 },
  { word: "project", start: 88.42, end: 88.89, disable: 0 },
  { word: "you", start: 88.89, end: 89.2, disable: 0 },
  { word: "will", start: 89.2, end: 89.41, disable: 0 },
  { word: "constantly", start: 89.41, end: 90.02, disable: 0 },
  { word: "need", start: 90.02, end: 90.32, disable: 0 },
  { word: "mock", start: 90.32, end: 90.69, disable: 0 },
  { word: "json", start: 90.69, end: 91.1, disable: 0 },
  { word: "data", start: 91.1, end: 91.41, disable: 0 },
  { word: "to", start: 91.41, end: 91.56, disable: 0 },
  { word: "test", start: 91.56, end: 91.92, disable: 0 },
  { word: "the", start: 91.92, end: 92.0, disable: 0 },
  { word: "uis", start: 92.0, end: 92.05, disable: 0 },
  { word: "manually", start: 92.05, end: 92.48, disable: 1 },
  { word: "create", start: 98.56, end: 99.14, disable: 1 },
  { word: "manually", start: 99.8, end: 100.24, disable: 0 },
  { word: "creating", start: 100.24, end: 100.62, disable: 0 },
  { word: "json", start: 101.94, end: 103.27, disable: 0 },
  { word: "data", start: 103.27, end: 103.61, disable: 0 },
  { word: "can", start: 103.61, end: 103.9, disable: 0 },
  { word: "be", start: 103.9, end: 103.99, disable: 0 },
  { word: "time", start: 103.99, end: 104.34, disable: 0 },
  { word: "consuming", start: 104.34, end: 104.95, disable: 0 },
  { word: "instead", start: 104.98, end: 105.42, disable: 0 },
  { word: "you", start: 105.42, end: 105.6, disable: 0 },
  { word: "can", start: 105.6, end: 105.78, disable: 0 },
  { word: "use", start: 105.78, end: 106.02, disable: 0 },
  { word: "this", start: 106.02, end: 106.32, disable: 0 },
  { word: "website", start: 106.32, end: 106.9, disable: 0 },
  { word: "here", start: 109.56, end: 109.78, disable: 0 },
  { word: "you", start: 109.78, end: 110.02, disable: 0 },
  { word: "can", start: 110.02, end: 110.2, disable: 0 },
  { word: "enter", start: 110.2, end: 110.54, disable: 0 },
  { word: "a", start: 110.54, end: 110.61, disable: 0 },
  { word: "simple", start: 110.61, end: 111.05, disable: 0 },
  { word: "text", start: 111.05, end: 111.42, disable: 0 },
  { word: "prompt", start: 111.42, end: 111.95, disable: 0 },
  { word: "and", start: 114.08, end: 114.35, disable: 0 },
  { word: "turn", start: 114.35, end: 114.59, disable: 0 },
  { word: "it", start: 114.59, end: 114.74, disable: 0 },
  { word: "into", start: 114.74, end: 115.16, disable: 0 },
  { word: "a", start: 115.16, end: 115.38, disable: 0 },
  { word: "json", start: 115.38, end: 115.83, disable: 0 },
  { word: "data", start: 115.83, end: 116.24, disable: 0 },
  { word: "then", start: 118.01, end: 118.31, disable: 1 },
  { word: "it", start: 118.31, end: 118.53, disable: 1 },
  { word: "will", start: 118.53, end: 118.79, disable: 1 },
  { word: "then", start: 119.23, end: 119.5, disable: 0 },
  { word: "it", start: 119.5, end: 119.7, disable: 0 },
  { word: "will", start: 119.7, end: 119.85, disable: 0 },
  { word: "generate", start: 119.85, end: 120.26, disable: 0 },
  { word: "a", start: 120.26, end: 120.36, disable: 0 },
  { word: "json", start: 120.36, end: 120.73, disable: 0 },
  { word: "data", start: 120.73, end: 121.02, disable: 0 },
  { word: "for", start: 121.02, end: 121.26, disable: 0 },
  { word: "you", start: 121.26, end: 121.65, disable: 0 },
  { word: "and", start: 121.69, end: 121.91, disable: 0 },
  { word: "you", start: 121.91, end: 122.08, disable: 0 },
  { word: "can", start: 122.08, end: 122.26, disable: 0 },
  { word: "use", start: 122.26, end: 122.59, disable: 0 },
  { word: "this", start: 122.59, end: 122.82, disable: 0 },
  { word: "in", start: 122.82, end: 122.99, disable: 0 },
  { word: "your", start: 122.99, end: 123.17, disable: 0 },
  { word: "project", start: 123.17, end: 123.75, disable: 0 },
  { word: "this", start: 125.64, end: 125.83, disable: 0 },
  { word: "website's", start: 125.83, end: 126.27, disable: 0 },
  { word: "name", start: 126.27, end: 126.48, disable: 0 },
  { word: "is", start: 126.48, end: 126.76, disable: 0 },
  { word: "jason", start: 126.76, end: 127.14, disable: 1 },
  { word: "data", start: 127.14, end: 127.62, disable: 1 },
  { word: "this", start: 128.23, end: 128.42, disable: 1 },
  { word: "website's", start: 128.42, end: 128.83, disable: 1 },
  { word: "name", start: 128.83, end: 129.06, disable: 1 },
  { word: "is", start: 129.06, end: 129.39, disable: 1 },
  { word: "jasondataai", start: 129.39, end: 130.7, disable: 0 },
  { word: "com", start: 130.7, end: 131.01, disable: 0 },
  { word: "do", start: 131.13, end: 131.35, disable: 0 },
  { word: "give", start: 131.35, end: 131.56, disable: 0 },
  { word: "it", start: 131.56, end: 131.64, disable: 0 },
  { word: "a", start: 131.64, end: 131.71, disable: 0 },
  { word: "try", start: 131.71, end: 132.0, disable: 0 },
  { word: "it", start: 132.0, end: 132.14, disable: 0 },
  { word: "is", start: 132.14, end: 132.3, disable: 0 },
  { word: "a", start: 132.3, end: 132.36, disable: 0 },
  { word: "very", start: 132.36, end: 132.68, disable: 0 },
  { word: "useful", start: 132.68, end: 133.17, disable: 0 },
  { word: "website", start: 133.17, end: 133.79, disable: 0 },
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
      playPauseBtn.setAttribute("src", "https://i.ibb.co/Qf2xxYt/play.png");
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
  playPauseBtn.setAttribute("src", "https://i.ibb.co/ChKD45p/pause.png");
};

videoPlayer.onpause = () => {
  playPauseBtn.setAttribute("src", "https://i.ibb.co/Qf2xxYt/play.png");
};
