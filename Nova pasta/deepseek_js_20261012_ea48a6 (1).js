async function publicar(){
  const t0 = performance.now();
  log(c('\n🚀 Publicando mudança...','verde'));
  const linhas = [];
  let erro = null;
  const url = document.getElementById('webhook').value.trim();

  if (url){
    try{
      const resp = await fetch(url,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({...})});
      if (!resp.ok) throw new Error(`HTTP ${resp.status} ${resp.statusText}`);
      linhas.push(`→ POST ${url}`);
      linhas.push(`✅ PUBLICADO — HTTP ${resp.status}`);
    }catch(e){
      erro = String(e.message||e);
      linhas.push(`→ POST ${url}`);
      linhas.push(`❌ Falha ao publicar: ${erro}`);
    }
  } else {
    // simulação
    for (const [texto, delay] of etapas){ await sleep(delay); linhas.push(texto); }
  }
  ...
}