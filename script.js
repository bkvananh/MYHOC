let totalQuestionCount = 0;
let quizData = [];
let currentIndex = 0;
let score = 0;
let history = [];
let wrongList = [];


document.querySelectorAll(".mode").forEach(btn => {
  btn.onclick = () => {
    totalQuestionCount = parseInt(btn.dataset.count);
    wrongList = [];
    history = [];
    currentIndex = 0;
    score = 0;

    quizData = QUESTIONS.sort(() => 0.5 - Math.random()).slice(0, totalQuestionCount);

    document.getElementById("mode-box").style.display = "none";
    document.getElementById("quiz-box").style.display = "block";
    document.getElementById("next-btn").style.display = "inline-block";

    loadQuestion();
  };
});

function loadQuestion() {
  const q = quizData[currentIndex];
  const box = document.getElementById("quiz-box");

  box.innerHTML = `
    <h2>Câu ${currentIndex + 1}/${totalQuestionCount}</h2>
    <p>${q.question}</p>
  `;

  q.answers.forEach((ans, i) => {
    const div = document.createElement("div");
    div.className = "answer";
    div.innerText = ans;
    div.onclick = () => checkAnswer(i, div);
    box.appendChild(div);
  });
}

function checkAnswer(index, el) {
  const q = quizData[currentIndex];
  const all = document.querySelectorAll(".answer");

  all.forEach(a => a.style.pointerEvents = "none");

  const correctSet = new Set(q.correct);
  let isCorrect = correctSet.has(index);

  if (isCorrect) {
    el.classList.add("correct");
    score++;
  } else {
    el.classList.add("wrong");
  }

  // Highlight tất cả đáp án đúng
  q.correct.forEach(i => {
    all[i].classList.add("correct");
  });

  history.push({
    question: q.question,
    answers: q.answers,
    correct: q.correct,
    chosen: [index],
    isCorrect: isCorrect
  });

  if (!isCorrect) {
    wrongList.push({
      question: q.question,
      answers: q.answers,
      correct: q.correct
    });
  }
}



document.getElementById("next-btn").onclick = () => {
  const answers = document.querySelectorAll(".answer");
  const q = quizData[currentIndex];

  // kiểm tra xem đã chọn đáp án chưa
  let hasChosen = Array.from(answers).some(a => 
    a.classList.contains("correct") || a.classList.contains("wrong")
  );

  // nếu chưa chọn → tính sai
  if (!hasChosen) {
    history.push({
      question: q.question,
      answers: q.answers,
      correct: q.correct,
      chosen: -1,
      isCorrect: false
    });

    wrongList.push({
      question: q.question,
      answers: q.answers,
      correct: q.correct
    });
  }

  currentIndex++;

  if (currentIndex < totalQuestionCount) {
    loadQuestion();
  } else {
    showResult();
  }
};


function showResult() {
  document.getElementById("quiz-box").innerHTML = "";
  document.getElementById("next-btn").style.display = "none";

  let html = `
    <h2>Kết thúc bài thi!</h2>
    <p>Điểm của bạn: <b>${score} / ${totalQuestionCount}</b></p>
    
    <button id="review-btn">Rì view sự ngungok của chính mình</button>
  `;

  // Nếu có câu sai → hiện thêm nút ôn sai
  if (wrongList.length > 0) {
    html += `
      <button id="review-wrong-all">Ôn lại tất cả câu ngungok</button>
    `;
  } else {
    html += `<p>Mài không sai câu nào, hép pi niu dia</p>`;
  }

  document.getElementById("result-box").innerHTML = html;

  // Gán sự kiện
  document.getElementById("review-btn").onclick = showReview;

  if (wrongList.length > 0) {
    document.getElementById("review-wrong-all").onclick = () => startWrongMode("all");
  }
}

function showReview() {
  let html = `
    <h2>Review bài làm</h2>
    <button id="filter-wrong">Chỉ xem câu sai</button>
    <button id="filter-all">Xem tất cả</button>
    ${renderReviewList(history)}
  `;

  document.getElementById("review-box").innerHTML = html;

  document.getElementById("filter-wrong").onclick = () => {
    const wrongOnly = history.filter(h => !h.isCorrect);
    document.getElementById("review-box").innerHTML = `
      <h2>Chỉ xem câu sai</h2>
      ${renderReviewList(wrongOnly)}
      <button id="filter-all-2">Xem tất cả</button>
    `;
    document.getElementById("filter-all-2").onclick = showReview;
  };

  document.getElementById("filter-all").onclick = showReview;
}

function startWrongMode(count) {
  // Lấy danh sách câu sai ban đầu
  let baseWrong = [...wrongList];

  // Reset để bắt đầu một bài ôn mới
  wrongList = [];
  history = [];
  score = 0;
  currentIndex = 0;

  // Lọc số câu cần ôn
  if (count !== "all") {
    baseWrong = baseWrong.sort(() => 0.5 - Math.random()).slice(0, count);
  }

  // Gán data câu hỏi để ôn
  quizData = baseWrong;
  totalQuestionCount = quizData.length;

  document.getElementById("result-box").innerHTML = "";
  document.getElementById("quiz-box").style.display = "block";
  document.getElementById("next-btn").style.display = "inline-block";

  loadQuestion();
}

function renderReviewList(list) {
  let html = "";
  list.forEach((item, i) => {
    html += `
      <div class="review-item">
        <p><b>Câu ${i+1}:</b> ${item.question}</p>
        <ul>
          ${item.answers
            .map((ans, idx) => {
              let color = "";
              if (item.correct.includes(idx)) color = "style='color:green; font-weight:bold;'";
              if (item.chosen.includes(idx) && !item.correct.includes(idx))
                color = "style='color:red; font-weight:bold;'";
              return `<li ${color}>${ans}</li>`;
            })
            .join("")}
        </ul>
        <p>Kết quả: ${item.isCorrect ? "✔ Đúng" : "✘ Sai"}</p>
      </div>
      <hr>
    `;
  });
  return html;
}
