let totalQuestionCount = 0;
let quizData = [];
let currentIndex = 0;
let score = 0;
let history = [];
let wrongList = [];

// chọn số câu
document.querySelectorAll(".mode").forEach(btn => {
  btn.onclick = () => {
    totalQuestionCount = parseInt(btn.dataset.count);

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

  let isCorrect = false;

  if (index === q.correct) {
    el.classList.add("correct");
    score++;
    isCorrect = true;
  } else {
    el.classList.add("wrong");
    all[q.correct].classList.add("correct");
  }

  // Lưu câu đã làm vào HISTORY
  history.push({
    question: q.question,
    answers: q.answers,
    correct: q.correct,
    chosen: index,
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

  document.getElementById("result-box").innerHTML =
      `<h2>Đi èn!</h2>
       <p>Điểm của mài: <b>${score} / ${totalQuestionCount}</b></p>
       <button id="review-btn">Xem lại các câu</button>`;

  document.getElementById("review-btn").onclick = showReview;
  if (wrongList.length > 0) {
    html += `
      <button id="review-wrong-10">Ôn lại 10 câu sai ngu ngốk</button>
      <button id="review-wrong-all">Ôn lại tất cả câu sai ngu ngốk</button>
    `;
  } else {
    html += `<p>Mài không sai câu nào, hép pi niu dia</p>`;
  }

  document.getElementById("result-box").innerHTML = html;

  if (wrongList.length > 0) {
    document.getElementById("review-wrong-10").onclick = () => startWrongMode(10);
    document.getElementById("review-wrong-all").onclick = () => startWrongMode("all");
  }
}

function showReview() {
  let html = `<h2>Review lại sự ngu ngốk</h2>`;

  history.forEach((item, i) => {
    html += `
      <div class="review-item">
        <p><b>Câu ${i+1}:</b> ${item.question}</p>
        <ul>
          ${item.answers
            .map((ans, idx) => {
              let color = "";
              if (idx === item.correct) color = "style='color:green; font-weight:bold;'";
              if (idx === item.chosen && !item.isCorrect) color = "style='color:red; font-weight:bold;'";
              return `<li ${color}>${ans}</li>`;
            })
            .join("")}
        </ul>
        <p>Kết quả: ${item.isCorrect ? "✔ Đúng" : "✘ Sai"}</p>
      </div>
      <hr>
    `;
  });

  document.getElementById("review-box").innerHTML = html;
}
