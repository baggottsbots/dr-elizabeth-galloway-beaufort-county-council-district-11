function openDonate(e) { if(e) e.preventDefault(); document.getElementById('donateOverlay').classList.add('open'); }
  function closeDonate() { document.getElementById('donateOverlay').classList.remove('open'); }
  document.getElementById('donateOverlay').addEventListener('click', function(e) { if (e.target === this) closeDonate(); });

  function toggleMenu() { document.getElementById('navLinks').classList.toggle('open'); }
  document.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', () => document.getElementById('navLinks').classList.remove('open')));
  const obs = new IntersectionObserver(entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } }), { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
  function handleSubmit(e) { e.preventDefault(); const m = document.getElementById('formSuccess'); m.style.display = 'block'; e.target.reset(); setTimeout(() => m.style.display = 'none', 6000); }

  function closePopup() { document.getElementById('popupOverlay').classList.remove('open'); }
  function handlePopupSubmit(e) { e.preventDefault(); document.getElementById('popupSuccess').style.display = 'block'; e.target.querySelectorAll('input,button[type=submit]').forEach(el => el.style.display = 'none'); setTimeout(closePopup, 3000); }
  document.getElementById('popupOverlay').addEventListener('click', function(e) { if (e.target === this) closePopup(); });
  if (!sessionStorage.getItem('popupDismissed')) {
    setTimeout(() => {
      document.getElementById('popupOverlay').classList.add('open');
      sessionStorage.setItem('popupDismissed', '1');
    }, 6000);
  }

  function updateCountdown() {
    const target = new Date('2026-06-09T07:00:00-04:00').getTime();
    const now = Date.now();
    const diff = target - now;
    if (diff <= 0) {
      document.getElementById('cd-days').textContent = '00';
      document.getElementById('cd-hrs').textContent  = '00';
      document.getElementById('cd-min').textContent  = '00';
      document.getElementById('cd-sec').textContent  = '00';
      return;
    }
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000)  / 60000);
    const s = Math.floor((diff % 60000)    / 1000);
    document.getElementById('cd-days').textContent = String(d).padStart(2,'0');
    document.getElementById('cd-hrs').textContent  = String(h).padStart(2,'0');
    document.getElementById('cd-min').textContent  = String(m).padStart(2,'0');
    document.getElementById('cd-sec').textContent  = String(s).padStart(2,'0');
  }
  updateCountdown();
  setInterval(updateCountdown, 1000);