function c(texto, cor=''){
  const cores = {verde:'#5ee65e', amarelo:'#ffd75f', azul:'#6f9dff', cinza:'#7b8794'};
  const corCss = cores[cor] || 'inherit';
  return `<span style="color:${corCss}">${escapar(texto)}</span>`;
}