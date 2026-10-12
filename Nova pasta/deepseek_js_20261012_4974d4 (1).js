function c(texto, cor=''){
  const cores = {verde:'var(--verde)', amarelo:'var(--amarelo)', azul:'var(--azul)', cinza:'var(--cinza)'};
  return {texto, cor: cores[cor] || ''};
}