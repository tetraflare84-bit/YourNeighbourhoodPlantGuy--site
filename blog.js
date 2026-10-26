/* Shared blog behaviour: mobile nav, theme-song widget, falling leaves. */
function toggleMobileNav() {
  const menu = document.getElementById('navMenu');
  if (menu) menu.classList.toggle('open');
}

const audio = document.getElementById('themeAudio');
const playIcon = document.getElementById('playIcon');
const disc = document.getElementById('vinylDisc');

function toggleThemeSong() {
  if (audio.paused) {
    audio.play().then(() => {
      playIcon.className = 'fa-solid fa-pause';
      disc.classList.add('playing');
    }).catch(() => {});
  } else {
    audio.pause();
    playIcon.className = 'fa-solid fa-play';
    disc.classList.remove('playing');
  }
}

function adjustVolume(v) { audio.volume = parseFloat(v); }

(function initFallingLeaves() {
  const canvas = document.getElementById('leafCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let leaves = [];

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  class Leaf {
    constructor() { this.reset(); }
    reset() {
      this.x = Math.random() * canvas.width;
      this.y = -20;
      this.size = Math.random() * 12 + 8;
      this.speedY = Math.random() * 1.2 + 0.6;
      this.speedX = Math.sin(Math.random() * Math.PI) * 0.8 - 0.4;
      this.rotation = Math.random() * 360;
      this.rotSpeed = (Math.random() - 0.5) * 2;
      this.color = Math.random() > 0.4 ? 'rgba(82, 183, 136, 0.35)' : 'rgba(251, 133, 0, 0.3)';
    }
    update() {
      this.y += this.speedY;
      this.x += this.speedX + Math.sin(this.y * 0.015);
      this.rotation += this.rotSpeed;
      if (this.y > canvas.height + 20) this.reset();
    }
    draw() {
      ctx.save();
      ctx.translate(this.x, this.y);
      ctx.rotate((this.rotation * Math.PI) / 180);
      ctx.fillStyle = this.color;
      ctx.beginPath();
      ctx.moveTo(0, -this.size);
      ctx.quadraticCurveTo(this.size * 0.8, 0, 0, this.size);
      ctx.quadraticCurveTo(-this.size * 0.8, 0, 0, -this.size);
      ctx.fill();
      ctx.restore();
    }
  }

  for (let i = 0; i < 22; i++) leaves.push(new Leaf());

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    leaves.forEach(l => {
      l.update();
      l.draw();
    });
    requestAnimationFrame(animate);
  }
  animate();
})();
