function log(html){ // html already colored
  const div = document.getElementById('log');
  const linha = document.createElement('div');
  linha.className = 'linha';
  linha.innerHTML = html;
  div.appendChild(linha);
  div.scrollTop = div.scrollHeight;
}