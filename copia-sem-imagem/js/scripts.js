function setupInfiniteColumns() {
  document.querySelectorAll('.im-col').forEach(col => {
    // limpar clones antigos se houver
    col.querySelectorAll('.clone').forEach(c => c.remove());

    // clonar filhos
    const originals = Array.from(col.children);
    originals.forEach(node => {
      const clone = node.cloneNode(true);
      clone.classList.add('clone');
      col.appendChild(clone);
    });

    // calcular altura da lista original
    const styles = getComputedStyle(col);
    const gap = parseFloat(styles.rowGap || 0);
    const originalHeight =
      originals.reduce((sum, el) => sum + el.getBoundingClientRect().height, 0)
      + gap * (originals.length - 1);

    // aplicar variáveis CSS
    col.style.setProperty('--scroll-distance', `${originalHeight}px`);
    const duration = Number(col.dataset.duration) || 12;
    col.style.setProperty('--duration', `${duration}s`);
  });
}

window.addEventListener('load', setupInfiniteColumns);
window.addEventListener('resize', setupInfiniteColumns);
