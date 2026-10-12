# ============================================================================
#  auto_publicar.py
#  Fica vigiando o 01.py (e outros) e publica automaticamente ao salvar
#  Uso: python auto_publicar.py
#  Para parar: Ctrl+C
# ============================================================================

import os
import sys
import time
import subprocess
import hashlib

BASE_DIR    = os.path.dirname(os.path.abspath(__file__))
PASTA       = BASE_DIR

# Arquivos que serão monitorados
ARQUIVOS_MONITORADOS = [
    '01.py',
    'publicar.py',
    'index.html',
]

# Intervalo de verificação (segundos)
INTERVALO = 5

# ⚠️ Coloque o caminho completo do Python aqui se der erro
PYTHON = sys.executable


def c(texto, cor=''):
    cores = {'verde':'\033[92m','amarelo':'\033[93m','azul':'\033[94m','cinza':'\033[90m'}
    return f'{cores.get(cor,"")}{texto}\033[0m' if os.name != 'nt' else texto


def hash_arquivo(caminho):
    """Retorna o hash do conteúdo do arquivo (ou None se não existir)."""
    if not os.path.exists(caminho):
        return None
    try:
        with open(caminho, 'rb') as f:
            return hashlib.md5(f.read()).hexdigest()
    except Exception:
        return None


def publicar():
    """Roda o publicar.py e mostra saída resumida."""
    print(c('\n🚀 Publicando mudança...', 'verde'))
    r = subprocess.run(
        [PYTHON, os.path.join(BASE_DIR, 'publicar.py')],
        cwd=BASE_DIR,
        capture_output=True, text=True
    )

    # Procura por linhas importantes
    for linha in r.stdout.split('\n'):
        if any(p in linha for p in ['PUBLICADO', '✅', '❌', '⚠️', '→']):
            print(f'   {linha.strip()}')

    if r.returncode != 0:
        print(c('   ❌ Erro na publicação:', 'amarelo'))
        print(r.stderr[:500])


def main():
    os.system('cls' if os.name == 'nt' else 'clear')
    print()
    print('=' * 62)
    print(c('  👁️  Monitor de arquivos — ResolveFácil', 'azul'))
    print('=' * 62)
    print(f'  Monitorando: {", ".join(ARQUIVOS_MONITORADOS)}')
    print(f'  Intervalo  : {INTERVALO}s')
    print(f'  Pasta      : {BASE_DIR}')
    print()
    print(c('  💡 Salve um arquivo → publica automaticamente', 'cinza'))
    print(c('  🛑 CTRL+C para parar', 'cinza'))
    print('=' * 62)
    print()

    # Guarda o hash inicial
    hashes = {}
    for arq in ARQUIVOS_MONITORADOS:
        caminho = os.path.join(PASTA, arq)
        hashes[arq] = hash_arquivo(caminho)

    print(c('  ✅ Monitoramento iniciado. Aguardando mudanças...\n', 'verde'))

    try:
        while True:
            time.sleep(INTERVALO)
            mudou = False
            for arq in ARQUIVOS_MONITORADOS:
                caminho = os.path.join(PASTA, arq)
                novo = hash_arquivo(caminho)
                if novo and novo != hashes[arq]:
                    hashes[arq] = novo
                    print(c(f'\n📝 Mudança detectada: {arq}', 'azul'))
                    mudou = True

            if mudou:
                publicar()
                print(c('\n  👁️  Voltando a monitorar...\n', 'cinza'))

    except KeyboardInterrupt:
        print(c('\n\n👋 Monitor parado.', 'cinza'))


if __name__ == '__main__':
    main()
