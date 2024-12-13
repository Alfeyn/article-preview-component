const btn = document.getElementById('btn');
const shareCard = document.getElementById('shareCard');


btn.addEventListener('click', () => {
    btn.classList.add('active')
    shareCard.classList.add('active')
})

document.addEventListener("click", (event) => {
    if (!btn.contains(event.target) && !shareCard.contains(event.target)) {
        btn.classList.remove('active')
        shareCard.classList.remove('active')
    }
  });