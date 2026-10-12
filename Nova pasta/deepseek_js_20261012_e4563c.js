async function selecionarArquivos(){
  if (!('showOpenFilePicker' in window)){
    log(c('⚠️  Seu navegador não suporta a File System Access API. Use Chrome ou Edge.','amarelo'));
    return;
  }
  try{
    const handles = await window.showOpenFilePicker({
      multiple: true,
      excludeAcceptAllOption: false,
      types:[{description:'Arquivos monitorados', accept:{'text/plain':['.py','.html','.htm','.js','.css','.txt','.json']}}]
    });
    for (const h of handles){
      const f = await h.getFile();
      const info = { handle:h, nome:f.name, hash:null, tamanho:f.size, modificado:f.lastModified, status:'novo' };
      const hh = await hashArquivo(h);
      if (hh){ info.hash = hh.hash; info.tamanho=hh.tamanho; info.modificado=hh.modificado; info.status='monitorado'; }
      estado.arquivos.set(f.name, info);
      log(c(`📎 Arquivo adicionado: ${f.name}`, 'azul'));
    }
    atualizarUI();
  }catch(e){ /* cancelado */ }
}