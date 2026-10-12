async function main(){
  if (estado.arquivos.size === 0){ log(c('⚠️  Selecione pelo menos um arquivo primeiro.','amarelo')); return; }
  // permissões
  for (const [nome, info] of estado.arquivos){
    const p = await info.handle.queryPermission({mode:'read'});
    if (p !== 'granted'){
      const r = await info.handle.requestPermission({mode:'read'});
      if (r !== 'granted'){ log(c(`⚠️  Sem permissão para ${nome}`,'amarelo')); }
    }
  }
  estado.rodando = true;
  estado.inicio = new Date();
  ...
  estado.timer = setInterval(verificar, INTERVALO*1000);
}