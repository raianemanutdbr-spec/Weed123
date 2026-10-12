async function hashArquivo(handle){
  if (!handle) return null;
  try {
    const file = await handle.getFile();
    const buf = await file.arrayBuffer();
    return {hash: md5(buf), tamanho: file.size, modificado: file.lastModified};
  } catch(e){
    return null;
  }
}