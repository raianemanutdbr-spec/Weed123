  if (mudou){
    atualizarUI();
    await publicar();
    log(c('\n  👁️  Voltando a monitorar...\n','cinza'));
  }