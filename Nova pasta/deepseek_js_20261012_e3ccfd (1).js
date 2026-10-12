const ARQUIVOS_PADRAO = ['01.py','publicar.py','index.html'];
let INTERVALO = 5;
const PYTHON = 'python (simulado no navegador)';

const estado = {
  rodando: false,
  timer: null,
  arquivos: new Map(), // nome -> {handle, hash, size, mtime, status}
  publicacoes: 0,
  ultimaPublicacao: null,
  inicio: null,
};