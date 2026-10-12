async function selecionarArquivos() {
  if (!window.showOpenFilePicker) { alert(...) ; return; }
  const handles = await window.showOpenFilePicker({ multiple: true, types: [{description:'Arquivos monitorados', accept:{'text/plain':['.py','.html','.txt','.css','.js']}}] });
  for (const h of handles) {
    const f = await h.getFile();
    // verify name is in list
  }
}