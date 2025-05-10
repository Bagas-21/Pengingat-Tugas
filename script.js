const form = document.getElementById('task-form');
const taskList = document.getElementById('task-list');
const timerDisplay = document.getElementById('timer');
const startBtn = document.getElementById('start-timer');
const motivasiBox = document.getElementById('motivasi');

let tugas = [];
let waktu = 25 * 60; // 25 menit

const motivasi = [
  "Tugasmu gak akan ngerjain diri sendiri 😤",
  "Yakin mau nunda lagi? Dosen nunggu loh 😎",
  "Sedikit demi sedikit, tugas selesai juga 💪",
  "Bro, kamu kuat. Tugas ini kecil!",
];

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const nama = document.getElementById('task-name').value;
  const deadline = document.getElementById('task-deadline').value;
  tugas.push({ nama, deadline });
  tampilkanTugas();
  form.reset();
});

function tampilkanTugas() {
  taskList.innerHTML = '';
  tugas.forEach((tugas, index) => {
    const li = document.createElement('li');
    li.textContent = `${tugas.nama} - Deadline: ${tugas.deadline}`;
    taskList.appendChild(li);
  });
}

startBtn.addEventListener('click', () => {
  let timer = setInterval(() => {
    if (waktu <= 0) {
      clearInterval(timer);
      tampilkanMotivasi();
      waktu = 25 * 60; // reset
      timerDisplay.textContent = "25:00";
    } else {
      waktu--;
      const menit = String(Math.floor(waktu / 60)).padStart(2, '0');
      const detik = String(waktu % 60).padStart(2, '0');
      timerDisplay.textContent = `${menit}:${detik}`;
    }
  }, 1000);
});

function tampilkanMotivasi() {
  const acak = motivasi[Math.floor(Math.random() * motivasi.length)];
  motivasiBox.textContent = acak;
  motivasiBox.classList.remove('hidden');
}
