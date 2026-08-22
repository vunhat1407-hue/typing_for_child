"use strict";

const LESSONS = [
  {
    title: "Ngón trỏ phải",
    subtitle: "Chạm phím đầu tiên",
    tag: "Làm quen",
    description: "Dùng ngón trỏ phải để chạm phím J.",
    keys: ["j"],
    rounds: ["jjj jjj jj", "j jj jjj j", "jj jj jjj"],
    finger: "right-index",
    fingerName: "Ngón trỏ phải",
    fingerTip: "Đặt ngón trỏ phải lên phím J có gờ nhỏ.",
    badge: "🐣",
    badgeName: "Gà con dũng cảm",
  },
  {
    title: "Hai ngón trỏ",
    subtitle: "Tìm hai phím có gờ",
    tag: "2 ngón",
    description: "Hai ngón trỏ cùng làm quen với F và J.",
    keys: ["f", "j"],
    rounds: ["fj fj jf fj", "ff jj fj jf", "fjf jfj ff jj"],
    finger: "mixed-index",
    fingerName: "Hai ngón trỏ",
    fingerTip: "Ngón trỏ trái ở F, ngón trỏ phải ở J.",
    badge: "🐰",
    badgeName: "Thỏ nhanh nhẹn",
  },
  {
    title: "Thêm ngón giữa phải",
    subtitle: "Bộ ba J K F",
    tag: "3 ngón",
    description: "Ngón giữa phải phụ trách phím K.",
    keys: ["f", "j", "k"],
    rounds: ["jk jk fj kf", "jj kk fjk", "kjf fjk jk"],
    finger: "right-middle",
    fingerName: "Ngón giữa phải",
    fingerTip: "Thả lỏng và đặt ngón giữa phải lên K.",
    badge: "🐨",
    badgeName: "Koala bình tĩnh",
  },
  {
    title: "Thêm ngón giữa trái",
    subtitle: "Cân bằng D và K",
    tag: "4 ngón",
    description: "Ngón giữa trái tìm phím D để hai tay cân bằng.",
    keys: ["d", "f", "j", "k"],
    rounds: ["df jk df jk", "dk fj kd jf", "dfd jkj dk fj"],
    finger: "left-middle",
    fingerName: "Ngón giữa trái",
    fingerTip: "Ngón giữa trái nằm nhẹ trên phím D.",
    badge: "🐼",
    badgeName: "Gấu trúc tập trung",
  },
  {
    title: "Ngón áp út phải",
    subtitle: "Gặp gỡ phím L",
    tag: "5 ngón",
    description: "Đánh thức ngón áp út phải với phím L.",
    keys: ["d", "f", "j", "k", "l"],
    rounds: ["jkl jkl df", "lkj fjd kl", "jkl lkj dfd"],
    finger: "right-ring",
    fingerName: "Ngón áp út phải",
    fingerTip: "Đặt ngón áp út phải lên phím L.",
    badge: "🦊",
    badgeName: "Cáo lanh lợi",
  },
  {
    title: "Ngón áp út trái",
    subtitle: "Hàng nhà đủ sáu",
    tag: "6 ngón",
    description: "Ngón áp út trái phụ trách phím S.",
    keys: ["s", "d", "f", "j", "k", "l"],
    rounds: ["sdf jkl sdf", "sl dk fj sk", "sds jlj fd kl"],
    finger: "left-ring",
    fingerName: "Ngón áp út trái",
    fingerTip: "Ngón áp út trái nghỉ trên phím S.",
    badge: "🐯",
    badgeName: "Hổ con kiên trì",
  },
  {
    title: "Ngón út phải",
    subtitle: "Chinh phục dấu chấm phẩy",
    tag: "7 ngón",
    description: "Ngón út phải vươn tới phím dấu chấm phẩy.",
    keys: ["s", "d", "f", "j", "k", "l", ";"],
    rounds: ["jkl; sdf", ";l; jkl sd", "sdf ;lkj ;;"],
    finger: "right-pinky",
    fingerName: "Ngón út phải",
    fingerTip: "Ngón út phải đặt nhẹ lên phím ; bên cạnh L.",
    badge: "🦁",
    badgeName: "Sư tử tự tin",
  },
  {
    title: "Ngón út trái",
    subtitle: "Hoàn thành hàng nhà",
    tag: "8 ngón",
    description: "Ngón út trái tìm phím A — hàng nhà đã đủ rồi!",
    keys: ["a", "s", "d", "f", "j", "k", "l", ";"],
    rounds: ["asdf jkl;", "all; fall;", "a sad lad;"],
    finger: "left-pinky",
    fingerName: "Ngón út trái",
    fingerTip: "Ngón út trái nằm trên A, giữ cổ tay thật mềm.",
    badge: "🐙",
    badgeName: "Bạch tuộc khéo léo",
  },
  {
    title: "Ngón cái phải",
    subtitle: "Khoảng cách diệu kỳ",
    tag: "9 ngón",
    description: "Dùng ngón cái phải tạo khoảng cách giữa các từ.",
    keys: ["a", "s", "d", "f", "j", "k", "l", ";", "space"],
    rounds: ["a lad asks", "dad falls", "all kids ask"],
    finger: "right-thumb",
    fingerName: "Ngón cái phải",
    fingerTip: "Ngón cái phải nhấn giữa thanh Space dài.",
    badge: "🐬",
    badgeName: "Cá heo vui vẻ",
  },
  {
    title: "Đội hình 10 ngón",
    subtitle: "Bay khắp bàn phím",
    tag: "10 ngón",
    description: "Cả mười ngón phối hợp, hai ngón cái thay phiên phím Space.",
    keys: ["a", "s", "d", "f", "j", "k", "l", ";", "space"],
    rounds: ["the quick fox", "type with joy", "ten fingers can fly"],
    finger: "all",
    fingerName: "Cả mười ngón",
    fingerTip: "Hai ngón cái thay phiên Space; các ngón còn lại luôn trở về hàng nhà.",
    badge: "🦄",
    badgeName: "Kỳ lân bàn phím",
  },
];

const GAME_CONFIGS = {
  cloud: {
    title: "Săn mây chữ",
    kicker: "TRÒ CHƠI 01 · NHẸ NHÀNG",
    icon: "☁",
    overlayIcon: "☁",
    introTitle: "Săn những đám mây chữ",
    introMessage: "Gõ ký tự trên mây trước khi chúng bay khỏi bầu trời nhé!",
    howTo: "Nhìn ký tự trên mây rồi gõ đúng phím đó.",
    duration: 35,
    spawnEvery: 1150,
    targetDuration: 7200,
    points: 10,
  },
  balloon: {
    title: "Bóng bay tí hon",
    kicker: "TRÒ CHƠI 02 · NHANH TAY",
    icon: "●",
    overlayIcon: "🎈",
    introTitle: "Chọc bóng bằng bàn phím",
    introMessage: "Mỗi quả bóng mang một ký tự. Gõ đúng trước khi bóng bay lên trời!",
    howTo: "Tìm quả bóng có ký tự rồi gõ thật nhanh để làm bóng nổ.",
    duration: 35,
    spawnEvery: 900,
    targetDuration: 6500,
    points: 12,
  },
  dino: {
    title: "Khủng long về đích",
    kicker: "TRÒ CHƠI 03 · PHIÊU LƯU",
    icon: "◆",
    overlayIcon: "🦕",
    introTitle: "Giúp Khủng Long Xanh về đích",
    introMessage: "Mỗi phím đúng là một bước chạy. Gõ hết dãy ký tự trước khi hết giờ!",
    howTo: "Gõ ký tự đang sáng để khủng long chạy thêm một bước.",
    duration: 45,
    sequenceLength: 24,
    points: 10,
  },
};

const GAME_POOLS = {
  letters: "abcdefghijklmnopqrstuvwxyz".split(""),
  mixed: "abcdefghijklmnopqrstuvwxyz0123456789".split(""),
};

const BALLOON_COLORS = ["#ff7fab", "#8d79ea", "#ff9a78", "#5dc8bc", "#f2bd4e", "#6ea5ed"];

const KEYBOARD_ROWS = [
  [
    ["`", "left-pinky"], ["1", "left-pinky"], ["2", "left-ring"], ["3", "left-middle"], ["4", "left-index"], ["5", "left-index"],
    ["6", "right-index"], ["7", "right-index"], ["8", "right-middle"], ["9", "right-ring"], ["0", "right-pinky"], ["-", "right-pinky"], ["=", "right-pinky"], ["⌫", "right-pinky", "wide"],
  ],
  [
    ["Tab", "left-pinky", "wide"], ["q", "left-pinky"], ["w", "left-ring"], ["e", "left-middle"], ["r", "left-index"], ["t", "left-index"],
    ["y", "right-index"], ["u", "right-index"], ["i", "right-middle"], ["o", "right-ring"], ["p", "right-pinky"], ["[", "right-pinky"], ["]", "right-pinky"], ["\\", "right-pinky"],
  ],
  [
    ["Caps", "left-pinky", "extra-wide"], ["a", "left-pinky"], ["s", "left-ring"], ["d", "left-middle"], ["f", "left-index"],
    ["g", "left-index"], ["h", "right-index"], ["j", "right-index"], ["k", "right-middle"], ["l", "right-ring"], [";", "right-pinky"], ["'", "right-pinky"], ["Enter", "right-pinky", "extra-wide"],
  ],
  [
    ["Shift", "left-pinky", "extra-wide"], ["z", "left-pinky"], ["x", "left-ring"], ["c", "left-middle"], ["v", "left-index"], ["b", "left-index"],
    ["n", "right-index"], ["m", "right-index"], [",", "right-middle"], [".", "right-ring"], ["/", "right-pinky"], ["Shift", "right-pinky", "extra-wide"],
  ],
  [["Space", "right-thumb", "space"]],
];

const FINGER_NAMES = {
  "left-pinky": "Ngón út trái",
  "left-ring": "Ngón áp út trái",
  "left-middle": "Ngón giữa trái",
  "left-index": "Ngón trỏ trái",
  "left-thumb": "Ngón cái trái",
  "right-thumb": "Ngón cái phải",
  "right-index": "Ngón trỏ phải",
  "right-middle": "Ngón giữa phải",
  "right-ring": "Ngón áp út phải",
  "right-pinky": "Ngón út phải",
};

const FINGER_COLORS = {
  "left-pinky": "#f58aa9",
  "left-ring": "#f5ac67",
  "left-middle": "#f4d35e",
  "left-index": "#67c99a",
  "left-thumb": "#84bbf4",
  "right-thumb": "#84bbf4",
  "right-index": "#63c9c6",
  "right-middle": "#8ea7f6",
  "right-ring": "#aa8ae8",
  "right-pinky": "#de8fd8",
};

const KEY_TO_FINGER = {};
KEYBOARD_ROWS.flat().forEach(([key, finger]) => {
  const normalized = key === "Space" ? " " : key.toLowerCase();
  KEY_TO_FINGER[normalized] = finger;
});

const defaultProgress = {
  unlocked: 1,
  completed: [],
  stars: 0,
  dailyRounds: 0,
  dailyDate: new Date().toDateString(),
  sound: true,
  lessonStars: {},
  gameScores: { cloud: 0, balloon: 0, dino: 0 },
  gamePlays: 0,
};

let progress = loadProgress();
let activeLesson = Math.min(Math.max(progress.unlocked - 1, 0), LESSONS.length - 1);
let currentRound = 0;
let charIndex = 0;
let correctKeys = 0;
let wrongKeys = 0;
let streak = 0;
let bestStreak = 0;
let startedAt = null;
let roundFinished = false;
let audioContext = null;
let toastTimer = null;
let gameFeedbackTimer = null;

const gameState = {
  type: "cloud",
  difficulty: "journey",
  running: false,
  finishing: false,
  score: 0,
  combo: 0,
  lives: 3,
  timeLeft: GAME_CONFIGS.cloud.duration,
  hits: 0,
  targetId: 0,
  sequence: [],
  sequenceIndex: 0,
  spawnTimer: null,
  clockTimer: null,
};

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

const elements = {
  lessonGrid: $("#lesson-grid"),
  badgeGrid: $("#badge-grid"),
  practiceText: $("#practice-text"),
  keyboard: $("#keyboard"),
  typeZone: $("#type-zone"),
  mobileInput: $("#mobile-input"),
  celebration: $("#celebration"),
  gameStage: $("#game-stage"),
  gameTargetLayer: $("#game-target-layer"),
  gameOverlay: $("#game-overlay"),
  gameMobileInput: $("#game-mobile-input"),
};

function loadProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem("may-go-phim-progress"));
    const merged = { ...defaultProgress, ...saved };
    merged.gameScores = { ...defaultProgress.gameScores, ...(saved?.gameScores || {}) };
    if (merged.dailyDate !== new Date().toDateString()) {
      merged.dailyDate = new Date().toDateString();
      merged.dailyRounds = 0;
    }
    return merged;
  } catch {
    return { ...defaultProgress };
  }
}

function saveProgress() {
  localStorage.setItem("may-go-phim-progress", JSON.stringify(progress));
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderLessons() {
  elements.lessonGrid.innerHTML = LESSONS.map((lesson, index) => {
    const isComplete = progress.completed.includes(index);
    const isUnlocked = index < progress.unlocked;
    const isCurrent = isUnlocked && index === Math.min(progress.unlocked - 1, LESSONS.length - 1) && !isComplete;
    const earnedStars = progress.lessonStars[index] || 0;
    const classes = ["lesson-card", isComplete ? "complete" : "", isCurrent ? "current" : "", !isUnlocked ? "locked" : ""].filter(Boolean).join(" ");
    const visibleKeys = lesson.keys.slice(0, 4);
    const keyMarkup = visibleKeys.map(key => `<kbd>${key === "space" ? "⎵" : escapeHtml(key.toUpperCase())}</kbd>`).join("");
    const extra = lesson.keys.length > 4 ? `<kbd>+${lesson.keys.length - 4}</kbd>` : "";
    const stars = [0, 1, 2].map(star => `<span class="${star < earnedStars ? "earned" : ""}">★</span>`).join("");
    return `
      <button class="${classes}" type="button" data-lesson="${index}" ${!isUnlocked ? 'aria-disabled="true"' : ""}>
        <span class="lesson-number"><span>${String(index + 1).padStart(2, "0")}</span><span class="lesson-status">${isComplete ? "✓" : isUnlocked ? "→" : "⌾"}</span></span>
        <h3>${escapeHtml(lesson.title)}</h3>
        <p>${escapeHtml(lesson.subtitle)}</p>
        <span class="lesson-meta"><span class="lesson-keys">${keyMarkup}${extra}</span><span class="lesson-stars">${stars}</span></span>
      </button>`;
  }).join("");

  $$(".lesson-card", elements.lessonGrid).forEach(card => {
    card.addEventListener("click", () => {
      const index = Number(card.dataset.lesson);
      if (index >= progress.unlocked) {
        showToast("Hoàn thành chặng trước để mở khóa nhé! 🔒");
        playTone("wrong");
        return;
      }
      startLesson(index);
    });
  });
}

function renderBadges() {
  elements.badgeGrid.innerHTML = LESSONS.map((lesson, index) => {
    const unlocked = progress.completed.includes(index);
    return `
      <article class="badge-card ${unlocked ? "unlocked" : ""}">
        <div class="badge-art" aria-hidden="true">${lesson.badge}</div>
        <h3>${escapeHtml(lesson.badgeName)}</h3>
        <p>${unlocked ? `Hoàn thành chặng ${index + 1}: ${escapeHtml(lesson.title)}.` : `Hoàn thành chặng ${index + 1} để kết bạn.`}</p>
        <span class="badge-status">${unlocked ? "ĐÃ SƯU TẦM" : "CHƯA MỞ KHÓA"}</span>
      </article>`;
  }).join("");
}

function renderKeyboard() {
  elements.keyboard.innerHTML = KEYBOARD_ROWS.map(row => `
    <div class="keyboard-row">
      ${row.map(([key, finger, width = ""]) => {
        const keyValue = key === "Space" ? " " : key.toLowerCase();
        const homeBump = key === "f" || key === "j" ? '<span class="home-bump"></span>' : "";
        return `<div class="key ${width}" data-key="${escapeHtml(keyValue)}" data-finger="${finger}">${escapeHtml(key.toUpperCase())}${homeBump}</div>`;
      }).join("")}
    </div>`).join("");
}

function startLesson(index) {
  if (index >= progress.unlocked) return;
  activeLesson = index;
  currentRound = 0;
  resetRound();
  showView("practice");
  updatePracticeHeader();
  setTimeout(focusTypingArea, 80);
}

function updatePracticeHeader() {
  const lesson = LESSONS[activeLesson];
  $("#practice-stage-label").textContent = `Chặng ${activeLesson + 1} / ${LESSONS.length}`;
  $("#practice-tag").textContent = lesson.tag;
  $("#practice-title").textContent = lesson.title;
  $("#practice-description").textContent = lesson.description;
  $("#finger-name").textContent = lesson.fingerName;
  $("#finger-tip").textContent = lesson.fingerTip;
  $("#prev-lesson").disabled = activeLesson === 0;
  $("#next-lesson").disabled = activeLesson >= progress.unlocked - 1 || activeLesson === LESSONS.length - 1;
}

function resetRound() {
  charIndex = 0;
  correctKeys = 0;
  wrongKeys = 0;
  streak = 0;
  bestStreak = 0;
  startedAt = null;
  roundFinished = false;
  elements.typeZone.classList.remove("wrong");
  elements.mobileInput.value = "";
  $("#round-number").textContent = `${currentRound + 1} / ${LESSONS[activeLesson].rounds.length}`;
  $("#wpm-value").textContent = "0";
  $("#accuracy-value").textContent = "100";
  $("#streak-value").textContent = "0";
  $("#type-progress-bar").style.width = "0%";
  $("#mission-accuracy").classList.remove("complete");
  $("#mission-streak").classList.remove("complete");
  $("#mission-finish").classList.remove("complete");
  renderPracticeText();
  updateTargetGuides();
}

function renderPracticeText() {
  const text = LESSONS[activeLesson].rounds[currentRound];
  elements.practiceText.innerHTML = [...text].map((char, index) => {
    const classes = ["practice-char", char === " " ? "space-char" : "", index < charIndex ? "done" : "", index === charIndex ? "active" : ""].filter(Boolean).join(" ");
    return `<span class="${classes}" data-char-index="${index}">${char === " " ? "" : escapeHtml(char)}</span>`;
  }).join("");
}

function getCurrentText() {
  return LESSONS[activeLesson].rounds[currentRound];
}

function normalizedKey(event) {
  if (event.key === "Spacebar") return " ";
  if (event.key.length === 1) return event.key.toLowerCase();
  return event.key;
}

function handleKeyInput(key) {
  if (!$("#practice-view").classList.contains("active") || roundFinished) return;
  const expected = getCurrentText()[charIndex];
  if (!expected) return;

  if (!startedAt) startedAt = Date.now();
  const normalized = key === "Space" ? " " : key.toLowerCase();
  const pressedKey = findKeyElement(normalized);
  if (pressedKey) {
    pressedKey.classList.add(normalized === expected ? "pressed" : "wrong-key");
    setTimeout(() => pressedKey.classList.remove("pressed", "wrong-key"), 140);
  }

  if (normalized === expected) {
    correctKeys += 1;
    streak += 1;
    bestStreak = Math.max(bestStreak, streak);
    charIndex += 1;
    playTone("correct");
    updateStats();

    if (charIndex >= getCurrentText().length) {
      renderPracticeText();
      finishRound();
      return;
    }
    renderPracticeText();
    updateTargetGuides();
  } else {
    wrongKeys += 1;
    streak = 0;
    playTone("wrong");
    const activeChar = $(".practice-char.active", elements.practiceText);
    if (activeChar) {
      activeChar.classList.add("error");
      setTimeout(() => activeChar.classList.remove("error"), 260);
    }
    elements.typeZone.classList.remove("wrong");
    void elements.typeZone.offsetWidth;
    elements.typeZone.classList.add("wrong");
    setTimeout(() => elements.typeZone.classList.remove("wrong"), 260);
    updateStats();
  }
}

function updateStats() {
  const total = correctKeys + wrongKeys;
  const accuracy = total ? Math.round((correctKeys / total) * 100) : 100;
  const minutes = startedAt ? Math.max((Date.now() - startedAt) / 60000, 1 / 60) : 0;
  const wpm = minutes ? Math.round(correctKeys / 5 / minutes) : 0;
  $("#wpm-value").textContent = Math.min(wpm, 999);
  $("#accuracy-value").textContent = accuracy;
  $("#streak-value").textContent = streak;
  $("#type-progress-bar").style.width = `${(charIndex / getCurrentText().length) * 100}%`;
  $("#mission-accuracy").classList.toggle("complete", accuracy >= 85 && total >= 5);
  $("#mission-streak").classList.toggle("complete", bestStreak >= 8);
}

function updateTargetGuides() {
  $$(".key", elements.keyboard).forEach(key => key.classList.remove("target"));
  $$(".palm i").forEach(finger => {
    finger.classList.remove("active");
    finger.style.removeProperty("--finger-color");
  });

  const expected = getCurrentText()[charIndex];
  if (expected === undefined) return;
  const keyElement = findKeyElement(expected);
  if (keyElement) keyElement.classList.add("target");
  const finger = getTargetFinger(expected);
  const fingerElement = $(`.palm i[data-finger="${finger}"]`);
  if (fingerElement) {
    fingerElement.classList.add("active");
    fingerElement.style.setProperty("--finger-color", FINGER_COLORS[finger]);
  }
  $("#finger-dot").style.background = FINGER_COLORS[finger];
  $("#finger-name").textContent = FINGER_NAMES[finger];
}

function getTargetFinger(expected) {
  if (expected === " " && activeLesson === LESSONS.length - 1) {
    const previousSpaces = [...getCurrentText().slice(0, charIndex)].filter(char => char === " ").length;
    return previousSpaces % 2 === 0 ? "left-thumb" : "right-thumb";
  }
  return KEY_TO_FINGER[expected] || "right-index";
}

function findKeyElement(key) {
  return $$(".key", elements.keyboard).find(element => element.dataset.key === key);
}

function finishRound() {
  roundFinished = true;
  const total = correctKeys + wrongKeys;
  const accuracy = total ? Math.round((correctKeys / total) * 100) : 100;
  const minutes = Math.max((Date.now() - startedAt) / 60000, 1 / 60);
  const wpm = Math.min(Math.round(correctKeys / 5 / minutes), 999);
  const starsEarned = accuracy >= 95 ? 3 : accuracy >= 85 ? 2 : 1;

  const reachedDailyGoal = progress.dailyRounds === 2;
  const awardedStars = starsEarned + (reachedDailyGoal ? 1 : 0);
  progress.stars += awardedStars;
  progress.dailyRounds = Math.min(progress.dailyRounds + 1, 3);
  progress.lessonStars[activeLesson] = Math.max(progress.lessonStars[activeLesson] || 0, starsEarned);
  saveProgress();
  updateGlobalProgress();

  $("#result-accuracy").textContent = `${accuracy}%`;
  $("#result-wpm").textContent = wpm;
  $("#result-stars").textContent = `+${awardedStars}`;
  $("#celebration-title").textContent = currentRound === 2 ? "Bé đã hoàn thành cả chặng!" : "Bé đã hoàn thành một lượt!";
  $("#celebration-message").textContent = reachedDailyGoal
    ? "Bé đã đạt mục tiêu hôm nay và nhận thêm một ngôi sao thưởng!"
    : accuracy >= 95
      ? "Đôi tay thật khéo! Miu tặng bé những ngôi sao lấp lánh."
      : "Bé đang tiến bộ rồi! Chậm mà chính xác là giỏi nhất nhé.";
  $("#continue-button").firstChild.textContent = currentRound === 2 ? "Về hành trình " : "Luyện lượt tiếp theo ";

  if (currentRound === 2) completeLesson();
  createConfetti();
  elements.celebration.hidden = false;
  playTone("win");
  $("#continue-button").focus();
}

function completeLesson() {
  if (!progress.completed.includes(activeLesson)) progress.completed.push(activeLesson);
  progress.unlocked = Math.min(Math.max(progress.unlocked, activeLesson + 2), LESSONS.length);
  saveProgress();
  renderLessons();
  renderBadges();
  updateGlobalProgress();
  $("#mission-finish").classList.add("complete");
}

function continueAfterRound() {
  elements.celebration.hidden = true;
  if (currentRound < LESSONS[activeLesson].rounds.length - 1) {
    currentRound += 1;
    resetRound();
    focusTypingArea();
  } else {
    showView("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function createConfetti() {
  const colors = ["#7559e8", "#ff7fab", "#ffc857", "#4fc79a", "#8ea7f6"];
  $(".confetti").innerHTML = Array.from({ length: 55 }, (_, index) => {
    const left = (index * 37) % 100;
    const color = colors[index % colors.length];
    const delay = `${-(index % 17) / 10}s`;
    const duration = `${2.7 + (index % 8) / 5}s`;
    const drift = `${((index * 13) % 120) - 60}px`;
    return `<i class="confetti-piece" style="left:${left}%;background:${color};--fall-delay:${delay};--fall-duration:${duration};--drift:${drift}"></i>`;
  }).join("");
}

function getGamePool() {
  if (gameState.difficulty === "letters") return GAME_POOLS.letters;
  if (gameState.difficulty === "mixed") return GAME_POOLS.mixed;
  if (progress.completed.includes(LESSONS.length - 1)) return GAME_POOLS.letters;

  const unlockedKeys = LESSONS
    .slice(0, progress.unlocked)
    .flatMap(lesson => lesson.keys)
    .filter(key => key.length === 1);
  return [...new Set(unlockedKeys.length ? unlockedKeys : ["j"] )];
}

function randomGameCharacter() {
  const pool = getGamePool();
  let character = pool[Math.floor(Math.random() * pool.length)];
  if (pool.length > 1 && character === gameState.lastCharacter) {
    character = pool[(pool.indexOf(character) + 1 + Math.floor(Math.random() * (pool.length - 1))) % pool.length];
  }
  gameState.lastCharacter = character;
  return character;
}

function updateGameFingerGuide(character, state = "active") {
  const coach = $("#game-finger-coach");
  const keyElement = $("#game-target-key");
  const nameElement = $("#game-finger-name");
  const hintElement = $("#game-finger-hint");
  coach.classList.toggle("waiting", state === "waiting");
  coach.classList.toggle("complete", state === "complete");

  $$('[data-game-finger]').forEach(fingerElement => {
    fingerElement.classList.remove("active");
    fingerElement.style.removeProperty("--game-finger-color");
  });

  if (!character) {
    keyElement.textContent = state === "complete" ? "★" : "…";
    nameElement.textContent = state === "complete" ? "Đôi tay thật tuyệt!" : "Chờ ký tự tiếp theo";
    hintElement.textContent = state === "complete"
      ? "Cả hai bàn tay đã phối hợp rất giỏi"
      : "Giữ tay ở hàng nhà và nhìn vào sân chơi nhé";
    return;
  }

  const normalized = character.toLowerCase();
  const finger = KEY_TO_FINGER[normalized] || "right-index";
  const fingerName = FINGER_NAMES[finger];
  const fingerElement = $(`[data-game-finger="${finger}"]`);
  keyElement.textContent = normalized.toUpperCase();
  nameElement.textContent = fingerName;
  hintElement.textContent = `Dùng ${fingerName.toLowerCase()} để gõ phím ${normalized.toUpperCase()}`;
  if (fingerElement) {
    fingerElement.classList.add("active");
    fingerElement.style.setProperty("--game-finger-color", FINGER_COLORS[finger]);
  }
}

function updateGameFingerFromTarget() {
  if (gameState.type === "dino") {
    const character = gameState.sequence[gameState.sequenceIndex];
    updateGameFingerGuide(character, character ? "active" : "complete");
    return;
  }
  const target = $$(".game-target", elements.gameTargetLayer)
    .find(item => item.dataset.resolved !== "true");
  updateGameFingerGuide(target?.dataset.char, target ? "active" : "waiting");
}

function selectGame(type) {
  if (!GAME_CONFIGS[type]) return;
  cancelGame();
  gameState.type = type;
  const config = GAME_CONFIGS[type];

  $$(".game-choice").forEach(choice => choice.classList.toggle("active", choice.dataset.game === type));
  elements.gameStage.dataset.game = type;
  $("#active-game-icon").textContent = config.icon;
  $("#active-game-kicker").textContent = config.kicker;
  $("#active-game-title").textContent = config.title;
  $("#game-howto-text").innerHTML = `<strong>Cách chơi:</strong> ${config.howTo}`;
  prepareGameOverlay();
  resetGameStats();
  updateGameFingerGuide(getGamePool()[0] || "j");
}

function prepareGameOverlay() {
  const config = GAME_CONFIGS[gameState.type];
  elements.gameOverlay.classList.remove("hidden");
  $("#overlay-mascot").textContent = config.overlayIcon;
  $("#game-overlay-kicker").textContent = "SẴN SÀNG CHƯA?";
  $("#game-overlay-title").textContent = config.introTitle;
  $("#game-overlay-message").textContent = config.introMessage;
  $("#game-result-row").hidden = true;
  $("#game-start-button").firstChild.textContent = "Bắt đầu chơi ";
  $("#game-stop-button").disabled = true;
  elements.gameTargetLayer.innerHTML = "";
  $("#dino-prompt").innerHTML = "";
  const dino = $("#running-dino");
  dino.style.left = "0%";
  dino.classList.remove("running", "stumble", "finish");
}

function resetGameStats() {
  gameState.score = 0;
  gameState.combo = 0;
  gameState.lives = 3;
  gameState.hits = 0;
  gameState.sequence = [];
  gameState.sequenceIndex = 0;
  gameState.timeLeft = GAME_CONFIGS[gameState.type].duration;
  updateGameStats();
}

function startGame() {
  clearGameTimers();
  resetGameStats();
  gameState.running = true;
  gameState.finishing = false;
  gameState.lastCharacter = "";
  elements.gameTargetLayer.innerHTML = "";
  elements.gameOverlay.classList.add("hidden");
  $("#game-stop-button").disabled = false;
  $$(".game-choice, .game-difficulty button").forEach(control => { control.disabled = true; });

  if (gameState.type === "dino") {
    gameState.sequence = Array.from({ length: GAME_CONFIGS.dino.sequenceLength }, randomGameCharacter);
    gameState.sequenceIndex = 0;
    renderDinoPrompt();
    const dino = $("#running-dino");
    dino.style.left = "0%";
    dino.classList.add("running");
  } else {
    spawnGameTarget();
    gameState.spawnTimer = window.setInterval(spawnGameTarget, GAME_CONFIGS[gameState.type].spawnEvery);
  }

  gameState.clockTimer = window.setInterval(() => {
    gameState.timeLeft -= 1;
    updateGameStats();
    if (gameState.timeLeft <= 0) endGame("time");
  }, 1000);

  focusGameArea();
  playTone("correct");
}

function clearGameTimers() {
  window.clearInterval(gameState.spawnTimer);
  window.clearInterval(gameState.clockTimer);
  gameState.spawnTimer = null;
  gameState.clockTimer = null;
}

function cancelGame() {
  clearGameTimers();
  gameState.running = false;
  gameState.finishing = false;
  if (elements.gameTargetLayer) elements.gameTargetLayer.innerHTML = "";
  $$(".game-choice, .game-difficulty button").forEach(control => { control.disabled = false; });
  const dino = $("#running-dino");
  if (dino) dino.classList.remove("running", "stumble", "finish");
}

function spawnGameTarget() {
  if (!gameState.running || gameState.type === "dino") return;
  if (elements.gameTargetLayer.children.length >= 7) return;

  const character = randomGameCharacter();
  const target = document.createElement("div");
  const isCloud = gameState.type === "cloud";
  const primaryAnimation = isCloud ? "cloud-cross" : "balloon-rise";
  const randomizedDuration = Math.round(GAME_CONFIGS[gameState.type].targetDuration * (0.86 + Math.random() * 0.3));
  target.className = `game-target ${isCloud ? "cloud-target" : "balloon-target"}`;
  target.dataset.char = character;
  target.dataset.targetId = String(++gameState.targetId);
  target.style.setProperty("--target-duration", `${randomizedDuration}ms`);
  target.style.setProperty(isCloud ? "--target-y" : "--target-x", `${10 + Math.random() * (isCloud ? 53 : 76)}%`);
  if (!isCloud) target.style.setProperty("--balloon-color", BALLOON_COLORS[gameState.targetId % BALLOON_COLORS.length]);
  target.style.setProperty("--finger-color", FINGER_COLORS[KEY_TO_FINGER[character] || "right-index"]);
  target.setAttribute("aria-label", `Phím ${character.toUpperCase()}`);

  const letter = document.createElement("span");
  letter.className = "target-letter";
  letter.textContent = character;
  target.append(letter);
  target.addEventListener("animationend", event => {
    if (event.animationName === primaryAnimation && target.dataset.resolved !== "true") missGameTarget(target);
  });
  elements.gameTargetLayer.append(target);
  updateGameFingerFromTarget();
}

function handleGameKey(rawKey) {
  if (!gameState.running || gameState.finishing) return;
  const key = rawKey.toLowerCase();
  if (!/^[a-z0-9;]$/.test(key)) return;

  if (gameState.type === "dino") {
    handleDinoKey(key);
    return;
  }

  const target = $$(".game-target", elements.gameTargetLayer)
    .find(item => item.dataset.char === key && item.dataset.resolved !== "true");
  if (target) catchGameTarget(target);
  else loseGameLife("Sai phím rồi!");
}

function catchGameTarget(target) {
  if (target.dataset.resolved === "true") return;
  target.dataset.resolved = "true";
  const gained = GAME_CONFIGS[gameState.type].points + Math.min(gameState.combo, 5) * 2;
  gameState.score += gained;
  gameState.combo += 1;
  gameState.hits += 1;
  target.classList.add("caught");
  updateGameFingerFromTarget();
  window.setTimeout(() => target.remove(), 290);
  updateGameStats();
  showGameFeedback(`+${gained}`);
  playTone("correct");
}

function missGameTarget(target) {
  if (!gameState.running || target.dataset.resolved === "true") return;
  target.dataset.resolved = "true";
  target.classList.add("missed");
  updateGameFingerFromTarget();
  window.setTimeout(() => target.remove(), 260);
  loseGameLife(gameState.type === "cloud" ? "Mây bay mất rồi!" : "Bóng bay mất rồi!");
}

function handleDinoKey(key) {
  const expected = gameState.sequence[gameState.sequenceIndex];
  if (key === expected) {
    const gained = GAME_CONFIGS.dino.points + Math.min(gameState.combo, 5) * 2;
    gameState.score += gained;
    gameState.combo += 1;
    gameState.hits += 1;
    gameState.sequenceIndex += 1;
    const dino = $("#running-dino");
    dino.style.left = `${Math.min(84, (gameState.sequenceIndex / gameState.sequence.length) * 84)}%`;
    renderDinoPrompt();
    updateGameStats();
    showGameFeedback(`+${gained}`);
    playTone("correct");

    if (gameState.sequenceIndex >= gameState.sequence.length) {
      gameState.score += gameState.timeLeft * 2;
      gameState.finishing = true;
      gameState.running = false;
      clearGameTimers();
      updateGameStats();
      dino.classList.remove("running");
      dino.classList.add("finish");
      window.setTimeout(() => endGame("win"), 650);
    }
  } else {
    const dino = $("#running-dino");
    dino.classList.remove("stumble");
    void dino.offsetWidth;
    dino.classList.add("stumble");
    loseGameLife("Khủng long vấp nhẹ!");
  }
}

function renderDinoPrompt() {
  const prompt = $("#dino-prompt");
  if (!gameState.sequence.length) {
    prompt.innerHTML = "";
    updateGameFingerGuide(null, "waiting");
    return;
  }
  const visibleCount = 10;
  const start = Math.max(0, Math.min(gameState.sequenceIndex - 2, gameState.sequence.length - visibleCount));
  prompt.innerHTML = gameState.sequence.slice(start, start + visibleCount).map((character, offset) => {
    const index = start + offset;
    const classes = ["dino-char", index < gameState.sequenceIndex ? "done" : "", index === gameState.sequenceIndex ? "active" : ""].filter(Boolean).join(" ");
    return `<span class="${classes}">${escapeHtml(character)}</span>`;
  }).join("");
  updateGameFingerFromTarget();
}

function loseGameLife(message) {
  if (!gameState.running || gameState.finishing) return;
  gameState.lives = Math.max(0, gameState.lives - 1);
  gameState.combo = 0;
  updateGameStats();
  showGameFeedback(message, true);
  playTone("wrong");
  elements.gameStage.classList.remove("oops");
  void elements.gameStage.offsetWidth;
  elements.gameStage.classList.add("oops");
  window.setTimeout(() => elements.gameStage.classList.remove("oops"), 300);
  if (gameState.lives === 0) {
    gameState.finishing = true;
    clearGameTimers();
    window.setTimeout(() => endGame("lives"), 260);
  }
}

function showGameFeedback(message, wrong = false) {
  const feedback = $("#game-feedback");
  feedback.textContent = message;
  feedback.className = `game-feedback${wrong ? " wrong-feedback" : ""}`;
  void feedback.offsetWidth;
  feedback.classList.add("show");
  window.clearTimeout(gameFeedbackTimer);
  gameFeedbackTimer = window.setTimeout(() => feedback.classList.remove("show"), 570);
}

function updateGameStats() {
  $("#game-score").textContent = gameState.score;
  $("#game-combo").textContent = gameState.combo;
  $("#game-time").textContent = gameState.timeLeft;
  $("#game-lives").innerHTML = [0, 1, 2]
    .map(index => `<span class="${index < gameState.lives ? "" : "lost"}">♥</span>`)
    .join(" ");
  $("#game-lives").setAttribute("aria-label", `${gameState.lives} cơ hội`);
}

function calculateGameStars(reason) {
  if (reason === "stopped" || gameState.score === 0) return 0;
  if (gameState.type === "dino") {
    if (reason === "win" && gameState.lives === 3 && gameState.timeLeft >= 10) return 3;
    if (reason === "win") return 2;
    return gameState.hits >= 10 ? 1 : 0;
  }
  if (gameState.hits >= 15) return 3;
  if (gameState.hits >= 8) return 2;
  if (gameState.hits >= 3) return 1;
  return 0;
}

function endGame(reason) {
  if (!gameState.running && !gameState.finishing) return;
  clearGameTimers();
  gameState.running = false;
  gameState.finishing = false;
  $$(".game-target", elements.gameTargetLayer).forEach(target => {
    target.dataset.resolved = "true";
    target.remove();
  });
  $("#running-dino").classList.remove("running");
  $("#game-stop-button").disabled = true;
  $$(".game-choice, .game-difficulty button").forEach(control => { control.disabled = false; });

  const previousBest = progress.gameScores[gameState.type] || 0;
  const newRecord = reason !== "stopped" && gameState.score > previousBest;
  const earnedStars = calculateGameStars(reason);
  if (reason !== "stopped") {
    progress.gameScores[gameState.type] = Math.max(previousBest, gameState.score);
    progress.gamePlays = (progress.gamePlays || 0) + 1;
    progress.stars += earnedStars;
    saveProgress();
    updateGlobalProgress();
    renderGameRecords();
  }

  const wonDino = gameState.type === "dino" && reason === "win";
  const finishedTimer = gameState.type !== "dino" && reason === "time";
  const titles = {
    stopped: "Mình nghỉ một chút nhé",
    lives: "Suýt nữa thì được rồi!",
    time: gameState.type === "dino" ? "Hết giờ mất rồi!" : "Hết giờ — giỏi quá!",
    win: "Khủng long về đích rồi!",
  };
  const messages = reason === "stopped"
    ? "Khi sẵn sàng, bé bấm Chơi lại để tiếp tục cuộc phiêu lưu."
    : newRecord
      ? "Kỷ lục mới! Đôi tay của bé nhanh hơn lần trước rồi đấy."
      : wonDino || finishedTimer
        ? "Bé đã hoàn thành thử thách. Miu rất tự hào!"
        : "Thử lại một lần nữa, bé sẽ tiến xa hơn ngay thôi.";

  $("#overlay-mascot").textContent = newRecord ? "🏆" : reason === "lives" ? "🌱" : GAME_CONFIGS[gameState.type].overlayIcon;
  $("#game-overlay-kicker").textContent = newRecord ? "KỶ LỤC MỚI!" : earnedStars ? "BÉ NHẬN ĐƯỢC SAO" : "CỐ LÊN NÀO!";
  $("#game-overlay-title").textContent = titles[reason] || "Hoàn thành lượt chơi!";
  $("#game-overlay-message").textContent = messages;
  $("#game-final-score").textContent = gameState.score;
  $("#game-final-best").textContent = Math.max(previousBest, gameState.score);
  $("#game-final-stars").textContent = `+${earnedStars}`;
  $("#game-result-row").hidden = false;
  $("#game-start-button").firstChild.textContent = "Chơi lại ";
  elements.gameOverlay.classList.remove("hidden");
  updateGameFingerGuide(
    null,
    reason === "win" || (gameState.type !== "dino" && reason === "time") ? "complete" : "waiting",
  );
  if (earnedStars) {
    playTone("win");
    showToast(`Bé nhận được ${earnedStars} ngôi sao từ trò chơi! ⭐`);
  }
}

function stopCurrentGame() {
  if (gameState.running) endGame("stopped");
}

function renderGameRecords() {
  $$('[data-record]').forEach(element => {
    element.textContent = progress.gameScores[element.dataset.record] || 0;
  });
}

function focusGameArea() {
  if (window.matchMedia("(pointer: coarse)").matches) {
    elements.gameMobileInput.focus({ preventScroll: true });
  } else {
    elements.gameStage.focus({ preventScroll: true });
  }
}

function updateGlobalProgress() {
  const completedCount = progress.completed.length;
  const percent = (completedCount / LESSONS.length) * 100;
  $("#star-count").textContent = progress.stars;
  $("#collection-stars").textContent = progress.stars;
  $("#journey-label").textContent = `${completedCount}/${LESSONS.length} chặng`;
  $("#journey-progress-bar").style.width = `${percent}%`;
  $("#daily-count").textContent = `${progress.dailyRounds}/3`;
  const circumference = 100.6;
  $(".goal-ring-value").style.strokeDashoffset = circumference - circumference * (progress.dailyRounds / 3);
  $("#sound-toggle").setAttribute("aria-pressed", String(progress.sound));
}

function showView(viewName) {
  if (viewName !== "game" && (gameState.running || gameState.finishing)) cancelGame();
  $$(".view").forEach(view => view.classList.toggle("active", view.id === `${viewName}-view`));
  $$(".nav-item").forEach(button => {
    const active = button.dataset.view === viewName;
    button.classList.toggle("active", active);
    if (active) button.setAttribute("aria-current", "page");
    else button.removeAttribute("aria-current");
  });
  $(".sidebar").classList.remove("open");
  $(".mobile-menu").setAttribute("aria-expanded", "false");
  if (viewName === "practice") {
    updatePracticeHeader();
    updateTargetGuides();
  }
  if (viewName === "game") {
    selectGame(gameState.type);
    renderGameRecords();
  }
  if (viewName === "achievements") renderBadges();
}

function focusTypingArea() {
  if (window.matchMedia("(pointer: coarse)").matches) {
    elements.mobileInput.focus({ preventScroll: true });
  } else {
    elements.typeZone.focus({ preventScroll: true });
  }
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
}

function playTone(type) {
  if (!progress.sound) return;
  try {
    audioContext ||= new (window.AudioContext || window.webkitAudioContext)();
    const now = audioContext.currentTime;
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    oscillator.connect(gain);
    gain.connect(audioContext.destination);
    oscillator.type = type === "wrong" ? "sawtooth" : "sine";
    oscillator.frequency.setValueAtTime(type === "correct" ? 520 : type === "wrong" ? 155 : 620, now);
    if (type === "win") oscillator.frequency.exponentialRampToValueAtTime(980, now + 0.28);
    gain.gain.setValueAtTime(type === "wrong" ? 0.025 : 0.04, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + (type === "win" ? 0.38 : 0.1));
    oscillator.start(now);
    oscillator.stop(now + (type === "win" ? 0.4 : 0.12));
  } catch {
    // Sound is a bonus; typing should continue if Web Audio is unavailable.
  }
}

function rotateCoachTip() {
  const tips = [
    ["Ngồi thật thoải mái", "Lưng thẳng nhẹ, vai thả lỏng và giữ hai cổ tay không tì xuống bàn."],
    ["Nhìn màn hình nhé", "Cảm nhận gờ nhỏ trên F và J để đôi tay tự tìm đường về hàng nhà."],
    ["Chính xác trước, nhanh sau", "Gõ chậm nhưng đúng sẽ giúp đôi tay nhớ phím nhanh hơn rất nhiều."],
  ];
  const next = (Number($(".coach-dots .active")?.dataset.index || 0) + 1) % tips.length;
  $("#coach-title").textContent = tips[next][0];
  $("#coach-message").textContent = tips[next][1];
  $$(".coach-dots span").forEach((dot, index) => {
    dot.dataset.index = index;
    dot.classList.toggle("active", index === next);
  });
}

function bindEvents() {
  $(".brand").addEventListener("click", event => {
    event.preventDefault();
    showView("home");
  });

  $$(".nav-item").forEach(button => button.addEventListener("click", () => {
    if (button.dataset.view === "practice") startLesson(Math.min(progress.unlocked - 1, LESSONS.length - 1));
    else showView(button.dataset.view);
  }));

  $("#hero-start").addEventListener("click", () => startLesson(Math.min(progress.unlocked - 1, LESSONS.length - 1)));
  $("#back-home").addEventListener("click", () => showView("home"));
  $("#prev-lesson").addEventListener("click", () => startLesson(activeLesson - 1));
  $("#next-lesson").addEventListener("click", () => startLesson(activeLesson + 1));
  $("#restart-button").addEventListener("click", () => {
    resetRound();
    focusTypingArea();
    showToast("Bắt đầu lại thật bình tĩnh nhé! 🌱");
  });

  document.addEventListener("keydown", event => {
    if (!$("#practice-view").classList.contains("active") || elements.celebration.hidden === false) return;
    if (event.ctrlKey || event.metaKey || event.altKey || event.key === "Tab" || event.key === "Escape") return;
    if (event.key === "Backspace") {
      event.preventDefault();
      return;
    }
    if (event.key.length === 1 || event.key === "Spacebar") {
      event.preventDefault();
      handleKeyInput(normalizedKey(event));
    }
  });

  elements.typeZone.addEventListener("click", focusTypingArea);
  elements.mobileInput.addEventListener("input", event => {
    const value = event.target.value;
    if (value) handleKeyInput(value.slice(-1));
    event.target.value = "";
  });

  $$(".game-choice").forEach(choice => {
    choice.addEventListener("click", () => selectGame(choice.dataset.game));
  });

  $$(".game-difficulty button").forEach(button => {
    button.addEventListener("click", () => {
      if (gameState.running) return;
      gameState.difficulty = button.dataset.difficulty;
      $$(".game-difficulty button").forEach(option => option.classList.toggle("active", option === button));
      const messages = {
        journey: "Game sẽ dùng những phím bé đã mở khóa trong hành trình.",
        letters: "Tất cả chữ cái A đến Z đã sẵn sàng!",
        mixed: "Thử thách mới: chữ cái và cả chữ số!",
      };
      updateGameFingerGuide(getGamePool()[0] || "j");
      showToast(messages[gameState.difficulty]);
    });
  });

  $("#game-start-button").addEventListener("click", startGame);
  $("#game-stop-button").addEventListener("click", stopCurrentGame);
  elements.gameStage.addEventListener("click", () => {
    if (gameState.running) focusGameArea();
  });
  elements.gameMobileInput.addEventListener("input", event => {
    const value = event.target.value;
    if (value) handleGameKey(value.slice(-1));
    event.target.value = "";
  });

  document.addEventListener("keydown", event => {
    if (!$("#game-view").classList.contains("active") || !gameState.running) return;
    if (event.key === "Escape") {
      event.preventDefault();
      stopCurrentGame();
      return;
    }
    if (event.ctrlKey || event.metaKey || event.altKey || event.key === "Tab") return;
    if (event.key.length === 1) {
      event.preventDefault();
      handleGameKey(event.key);
    }
  });

  $("#continue-button").addEventListener("click", continueAfterRound);
  $("#celebration-close").addEventListener("click", continueAfterRound);
  elements.celebration.addEventListener("click", event => {
    if (event.target === elements.celebration) continueAfterRound();
  });

  $("#sound-toggle").addEventListener("click", () => {
    progress.sound = !progress.sound;
    saveProgress();
    updateGlobalProgress();
    if (progress.sound) playTone("correct");
  });

  $(".profile-button").addEventListener("click", () => {
    showToast("Bé chăm chỉ đã sưu tầm được " + progress.stars + " ngôi sao! ⭐");
  });

  $(".mobile-menu").addEventListener("click", () => {
    const sidebar = $(".sidebar");
    const open = sidebar.classList.toggle("open");
    $(".mobile-menu").setAttribute("aria-expanded", String(open));
  });

  document.addEventListener("click", event => {
    const sidebar = $(".sidebar");
    if (window.innerWidth <= 900 && sidebar.classList.contains("open") && !sidebar.contains(event.target) && !$(".mobile-menu").contains(event.target)) {
      sidebar.classList.remove("open");
      $(".mobile-menu").setAttribute("aria-expanded", "false");
    }
  });

  setInterval(rotateCoachTip, 6500);
}

function init() {
  renderKeyboard();
  renderLessons();
  renderBadges();
  renderGameRecords();
  updateGlobalProgress();
  updatePracticeHeader();
  resetRound();
  selectGame("cloud");
  bindEvents();
}

init();
