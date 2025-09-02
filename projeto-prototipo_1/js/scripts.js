window.addEventListener('load', () => {
  const columns = document.querySelectorAll('.im-col');

  columns.forEach(col => {
    // duplicar conteúdo
    const originals = Array.from(col.children);
    originals.forEach(node => col.appendChild(node.cloneNode(true)));

    let pos = 0;
    const duration = Number(col.dataset.duration) || 12; // segundos
    const speed = 1 / duration; // pixels por frame (ajuste fino)

    // calcular altura da parte original
    const gap = parseFloat(getComputedStyle(col).rowGap || 0);
    const originalHeight = originals.reduce((sum, el) => sum + el.getBoundingClientRect().height, 0) + gap * (originals.length - 1);

    function animate() {
      pos += speed;
      if (pos >= originalHeight) pos = 0; // reinicia quando passar da altura original
      col.style.transform = `translateY(-${pos}px)`;
      requestAnimationFrame(animate);
    }

    animate();
  });
});
