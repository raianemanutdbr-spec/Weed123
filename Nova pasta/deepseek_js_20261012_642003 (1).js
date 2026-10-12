async function publicar(){
  log(c('\n🚀 Publicando mudança...','verde'));
  const saida = await simularPublicarPy();
  // filtra linhas importantes
  for (const linha of saida){
    if (['PUBLICADO','✅','❌','⚠️','→'].some(p=>linha.includes(p))) log('   '+linha);
  }
  if (erro) { log(c('   ❌ Erro na publicação:','amarelo')); log(erro) }
}