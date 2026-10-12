function atualizarUI(){
  const cont = document.getElementById('arquivos');
  cont.innerHTML = '';
  if (estado.arquivos.size === 0){ cont.innerHTML = '<div class="vazio">Nenhum arquivo monitorado...</div>'; }
  for (const [nome, info] of estado.arquivos){ ... }
}