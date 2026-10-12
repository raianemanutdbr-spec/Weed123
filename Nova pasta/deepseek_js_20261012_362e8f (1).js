async function verificar(){
  let mudou = false;
  for (const [nome, info] of estado.arquivos){
    const novo = await hashArquivo(info.handle);
    if (novo && novo.hash !== info.hash){
      const antigo = info.hash;
      info.hash = novo.hash; info.tamanho = novo.tamanho; info.modificado = novo.modificado;
      info.status = 'mudou';
      log(c(`\n📝 Mudança detectada: ${nome}`, 'azul'));
      log(c(`   ${(antigo||'—').slice(0,8)} → ${novo.hash.slice(0,8)}`, 'cinza'));
      mudou = true;
    } else if (!novo && info.hash){
      info.status = 'perdido'; ...
    }
  }
  ...
}