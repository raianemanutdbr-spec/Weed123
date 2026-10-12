<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>ResolveFácil — Serviços Online</title>
<style>
  :root{--navy:#0B2447;--navy-700:#123163;--navy-900:#071A33;--green:#16A34A;--green-dark:#128a3e;
  --green-light:#DCFCE7;--ink:#0F172A;--muted:#5B6B85;--line:#E4E9F2;--bg:#F7F9FC;--white:#fff;
  --radius:14px;--shadow:0 6px 24px rgba(11,36,71,.08);--shadow-lg:0 18px 40px rgba(11,36,71,.14)}
  *{box-sizing:border-box;margin:0;padding:0}
  body{font-family:system-ui,-apple-system,'Segoe UI',Roboto,sans-serif;color:var(--ink);background:var(--white);line-height:1.6}
  a{color:inherit;text-decoration:none}
  button{font-family:inherit;cursor:pointer;border:none;background:none}
  .container{max-width:1180px;margin:0 auto;padding:0 20px}
  header{position:sticky;top:0;z-index:100;background:rgba(255,255,255,.95);backdrop-filter:blur(10px);border-bottom:1px solid var(--line)}
  .nav{display:flex;align-items:center;justify-content:space-between;height:72px;gap:20px}
  .logo{display:flex;align-items:center;gap:10px;font-weight:800;font-size:1.2rem;color:var(--navy);cursor:pointer}
  .logo-mark{width:38px;height:38px;border-radius:11px;background:linear-gradient(135deg,var(--navy),var(--navy-700));display:grid;place-items:center;color:#fff;font-weight:800;box-shadow:var(--shadow)}
  .logo span{color:var(--green)}
  .nav-links{display:flex;gap:26px;align-items:center}
  .nav-links a{font-size:.93rem;font-weight:500;color:var(--muted);cursor:pointer}
  .nav-links a:hover{color:var(--navy)}
  .nav-actions{display:flex;gap:10px;align-items:center}
  .user-chip{display:flex;align-items:center;gap:8px;padding:7px 14px;border-radius:999px;background:var(--green-light);color:var(--green-dark);font-weight:600;font-size:.85rem;cursor:pointer}
  .user-chip:hover{background:#bbf7d0}
  .user-avatar{width:26px;height:26px;border-radius:50%;background:var(--green);color:#fff;display:grid;place-items:center;font-weight:800;font-size:.75rem}
  .btn{padding:11px 20px;border-radius:10px;font-weight:600;font-size:.9rem;display:inline-flex;align-items:center;gap:8px;cursor:pointer;transition:.2s}
  .btn-primary{background:var(--navy);color:#fff}
  .btn-primary:hover{background:var(--navy-700)}
  .btn-green{background:var(--green);color:#fff;box-shadow:0 6px 18px rgba(22,163,74,.28)}
  .btn-green:hover{background:var(--green-dark)}
  .btn-outline{border:1.5px solid var(--line);color:var(--navy);background:#fff}
  .btn-outline:hover{border-color:var(--navy);background:var(--bg)}
  .btn-ghost{color:var(--navy)}
  .btn-ghost:hover{background:var(--bg)}
  .menu-toggle{display:none;padding:8px;color:var(--navy)}
  .hero{background:linear-gradient(180deg,#F7F9FC 0%,#fff 100%);padding:70px 0 80px;position:relative;overflow:hidden}
  .hero::before{content:"";position:absolute;top:-160px;right:-160px;width:520px;height:520px;background:radial-gradient(circle,rgba(22,163,74,.10),transparent 70%);border-radius:50%}
  .hero-grid{display:grid;grid-template-columns:1.15fr .85fr;gap:60px;align-items:center;position:relative}
  .badge{display:inline-flex;align-items:center;gap:8px;background:var(--green-light);color:var(--green-dark);padding:7px 14px;border-radius:999px;font-size:.82rem;font-weight:600;margin-bottom:22px}
  .badge::before{content:"";width:7px;height:7px;border-radius:50%;background:var(--green)}
  h1{font-size:3rem;line-height:1.1;color:var(--navy);font-weight:800;margin-bottom:20px;letter-spacing:-.03em}
  h1 em{font-style:normal;color:var(--green)}
  .hero p.lead{font-size:1.12rem;color:var(--muted);max-width:560px;margin-bottom:32px}
  .hero-actions{display:flex;gap:12px;flex-wrap:wrap}
  .hero-card{background:#fff;border:1px solid var(--line);border-radius:20px;padding:26px;box-shadow:var(--shadow-lg)}
  .hero-card h3{font-size:1rem;color:var(--navy);margin-bottom:16px}
  .search-box{position:relative;margin-bottom:16px}
  .search-box input{width:100%;padding:14px 16px 14px 44px;border:1.5px solid var(--line);border-radius:12px;font-size:.95rem;outline:none;font-family:inherit}
  .search-box input:focus{border-color:var(--navy);box-shadow:0 0 0 4px rgba(11,36,71,.08)}
  .search-box svg{position:absolute;left:15px;top:50%;transform:translateY(-50%);color:var(--muted)}
  .cat-quick{display:flex;flex-wrap:wrap;gap:8px}
  .cat-quick button{padding:8px 14px;border-radius:999px;background:var(--bg);font-size:.82rem;color:var(--muted)}
  .cat-quick button:hover{background:var(--navy);color:#fff}
  section{padding:72px 0}
  .section-head{text-align:center;max-width:620px;margin:0 auto 46px}
  .section-head .eyebrow{color:var(--green);font-weight:700;font-size:.82rem;letter-spacing:.08em;text-transform:uppercase;margin-bottom:10px}
  .section-head h2{font-size:2.1rem;color:var(--navy);margin-bottom:12px;font-weight:800}
  .section-head p{color:var(--muted)}
  .grid-services{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:18px}
  .grid-cats{display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:18px}
  .cat-card{background:#fff;border:1px solid var(--line);border-radius:var(--radius);padding:24px;cursor:pointer;transition:.25s}
  .cat-card:hover{transform:translateY(-4px);box-shadow:var(--shadow-lg)}
  .cat-icon{width:48px;height:48px;border-radius:12px;background:var(--green-light);color:var(--green-dark);display:grid;place-items:center;margin-bottom:14px;font-size:1.3rem}
  .cat-card h3{font-size:1rem;color:var(--navy);margin-bottom:6px}
  .cat-card p{font-size:.85rem;color:var(--muted)}
  .cat-card .count{font-size:.75rem;color:var(--green);font-weight:600;margin-top:10px;display:block}
  .svc-card{background:#fff;border:1px solid var(--line);border-radius:var(--radius);padding:22px;cursor:pointer;display:flex;flex-direction:column;transition:.25s}
  .svc-card:hover{transform:translateY(-3px);box-shadow:var(--shadow-lg)}
  .svc-cat{font-size:.72rem;font-weight:700;color:var(--green);text-transform:uppercase;margin-bottom:8px}
  .svc-card h3{font-size:1.02rem;color:var(--navy);margin-bottom:10px;line-height:1.35}
  .svc-card p{font-size:.88rem;color:var(--muted);margin-bottom:16px;flex:1}
  .svc-foot{display:flex;justify-content:space-between;align-items:center;padding-top:14px;border-top:1px solid var(--line)}
  .price{font-weight:700;color:var(--navy);font-size:.95rem}
  .arrow{color:var(--green);font-weight:700}
  .modal-overlay{position:fixed;inset:0;background:rgba(11,36,71,.6);backdrop-filter:blur(4px);z-index:999;display:none;align-items:center;justify-content:center;padding:20px;overflow-y:auto}
  .modal-overlay.open{display:flex}
  .modal-card{background:#fff;border-radius:20px;padding:32px;max-width:520px;width:100%;box-shadow:var(--shadow-lg);position:relative;max-height:92vh;overflow-y:auto}
  .modal-close{position:absolute;top:18px;right:20px;font-size:1.5rem;color:var(--muted);cursor:pointer}
  .modal-card h2{color:var(--navy);font-size:1.4rem;margin-bottom:8px}
  .modal-card p{color:var(--muted);font-size:.9rem;margin-bottom:20px}
  .form-group{margin-bottom:14px}
  .form-group label{display:block;font-size:.85rem;font-weight:600;color:var(--navy);margin-bottom:6px}
  .form-group input,.form-group textarea{width:100%;padding:12px;border:1.5px solid var(--line);border-radius:10px;font-size:.93rem;outline:none;font-family:inherit}
  .form-group input:focus,.form-group textarea:focus{border-color:var(--navy)}
  .switch-link{text-align:center;font-size:.85rem;color:var(--muted);margin-top:14px}
  .switch-link a{color:var(--green);font-weight:600;cursor:pointer}
  .switch-link a:hover{text-decoration:underline}
  .email-aviso{background:#DCFCE7;border:1px solid #A7F3D0;border-radius:10px;padding:14px;color:#065F46;font-size:.87rem;margin-bottom:16px;text-align:center}
  .steps{display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:24px}
  .step{text-align:center}
  .step-num{width:52px;height:52px;border-radius:50%;background:var(--navy);color:#fff;display:grid;place-items:center;font-weight:800;font-size:1.15rem;margin:0 auto 16px}
  .step h3{color:var(--navy);font-size:1rem;margin-bottom:8px}
  .step p{font-size:.88rem;color:var(--muted)}
  .benefits{background:var(--navy);color:#fff;border-radius:24px;padding:56px 40px;margin:0 20px}
  .benefits .section-head h2,.benefits .section-head .eyebrow{color:#fff}
  .benefits .section-head .eyebrow{color:#6EE7A8}
  .benefits .section-head p{color:rgba(255,255,255,.75)}
  .benefit-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));gap:24px;max-width:1180px;margin:0 auto}
  .benefit{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);border-radius:14px;padding:24px}
  .benefit .bi{font-size:1.5rem;margin-bottom:12px}
  .benefit h3{font-size:1rem;margin-bottom:8px}
  .benefit p{font-size:.87rem;color:rgba(255,255,255,.75)}
  .faq{max-width:780px;margin:0 auto}
  .faq-item{border:1px solid var(--line);border-radius:12px;margin-bottom:10px;background:#fff;overflow:hidden}
  .faq-q{width:100%;padding:18px 22px;text-align:left;display:flex;justify-content:space-between;align-items:center;font-weight:600;color:var(--navy);font-size:.98rem;gap:16px}
  .faq-q .plus{color:var(--green);font-size:1.4rem;transition:.3s}
  .faq-item.open .plus{transform:rotate(45deg)}
  .faq-a{max-height:0;overflow:hidden;transition:max-height .3s;color:var(--muted);font-size:.9rem}
  .faq-item.open .faq-a{max-height:340px}
  .faq-a-inner{padding:0 22px 20px}
  .contact-strip{background:var(--bg);border:1px solid var(--line);border-radius:20px;padding:40px;display:flex;justify-content:space-between;align-items:center;gap:28px;flex-wrap:wrap;margin:0 20px}
  .contact-strip h2{color:var(--navy);font-size:1.6rem;margin-bottom:8px}
  .contact-strip p{color:var(--muted)}
  .contact-strip .cta{display:flex;gap:10px;flex-wrap:wrap}
  footer{background:var(--navy-900);color:rgba(255,255,255,.65);padding:56px 0 28px;margin-top:40px;font-size:.88rem}
  .foot-grid{display:grid;grid-template-columns:1.4fr 1fr 1fr 1fr;gap:40px;margin-bottom:40px}
  .foot-brand{display:flex;align-items:center;gap:10px;color:#fff;font-weight:800;font-size:1.1rem;margin-bottom:14px}
  .foot-brand .logo-mark{background:var(--green)}
  footer h4{color:#fff;font-size:.85rem;text-transform:uppercase;margin-bottom:16px}
  footer ul{list-style:none;display:flex;flex-direction:column;gap:10px}
  footer a{cursor:pointer}
  footer a:hover{color:#fff}
  .foot-bottom{border-top:1px solid rgba(255,255,255,.1);padding-top:24px;display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap;font-size:.8rem}
  .disclaimer{background:rgba(255,255,255,.05);border-left:3px solid var(--green);padding:12px 16px;border-radius:8px;font-size:.78rem;margin-bottom:30px}
  .wa-float{position:fixed;bottom:24px;right:24px;z-index:99;width:58px;height:58px;border-radius:50%;background:#25D366;display:grid;place-items:center;box-shadow:0 10px 28px rgba(37,211,102,.45);transition:.25s}
  .wa-float:hover{transform:scale(1.08)}
  .wa-float svg{width:28px;height:28px;fill:#fff}
  .page{padding:44px 0 80px;min-height:60vh}
  .breadcrumb{font-size:.85rem;color:var(--muted);margin-bottom:20px}
  .breadcrumb a{cursor:pointer}
  .filters{display:flex;gap:14px;flex-wrap:wrap;margin-bottom:28px;background:#fff;padding:16px;border-radius:14px;border:1px solid var(--line);box-shadow:var(--shadow)}
  .filters input{flex:1;min-width:220px;padding:12px 16px;border:1.5px solid var(--line);border-radius:10px;font-size:.93rem;outline:none;font-family:inherit}
  .filters select{padding:12px 16px;border:1.5px solid var(--line);border-radius:10px;font-size:.93rem;background:#fff;cursor:pointer;font-family:inherit}
  .result-count{font-size:.85rem;color:var(--muted);margin-bottom:18px}
  .detail{display:grid;grid-template-columns:1.6fr 1fr;gap:40px}
  .detail h1{font-size:2rem;margin-bottom:14px}
  .detail .desc{font-size:1.02rem;color:var(--muted);margin-bottom:26px}
  .detail-block{background:#fff;border:1px solid var(--line);border-radius:14px;padding:24px;margin-bottom:18px}
  .detail-block h3{color:var(--navy);font-size:1rem;margin-bottom:14px}
  .detail-block ul{list-style:none;display:flex;flex-direction:column;gap:10px}
  .detail-block li{font-size:.9rem;color:var(--muted);padding-left:24px;position:relative}
  .detail-block li::before{content:"✓";position:absolute;left:0;color:var(--green);font-weight:800}
  .detail-block li.no::before{content:"✕";color:#dc2626}
  .side-card{background:#fff;border:1px solid var(--line);border-radius:16px;padding:26px;box-shadow:var(--shadow-lg);position:sticky;top:96px}
  .side-card .big-price{font-size:1.9rem;font-weight:800;color:var(--navy);margin-bottom:4px}
  .side-card .big-price small{font-size:.8rem;color:var(--muted);display:block;margin-top:4px;font-weight:500}
  .side-card .meta{font-size:.85rem;color:var(--muted);margin:16px 0;padding:14px 0;border-top:1px solid var(--line);border-bottom:1px solid var(--line);display:flex;flex-direction:column;gap:8px}
  .side-card .meta span{display:flex;justify-content:space-between}
  .side-card .meta strong{color:var(--navy)}
  .side-card .btn{width:100%;justify-content:center;margin-bottom:10px}
  .notice{background:#FEF3C7;border-left:3px solid #F59E0B;padding:12px 16px;border-radius:8px;font-size:.83rem;color:#78350F;margin-bottom:16px}
  .toast{position:fixed;bottom:30px;left:50%;transform:translateX(-50%) translateY(120px);background:var(--navy);color:#fff;padding:14px 24px;border-radius:12px;font-weight:600;font-size:.9rem;box-shadow:var(--shadow-lg);z-index:1000;opacity:0;transition:.35s;max-width:90vw;text-align:center}
  .toast.show{transform:translateX(-50%) translateY(0);opacity:1}
  .toast.success{background:var(--green-dark)}
  .toast.error{background:#dc2626}
  .order-item{background:#fff;border:1px solid var(--line);border-radius:14px;padding:22px;margin-bottom:14px;transition:.25s}
  .order-item:hover{box-shadow:var(--shadow-lg);border-color:transparent}
  .order-head{display:flex;justify-content:space-between;align-items:flex-start;gap:14px;flex-wrap:wrap;margin-bottom:14px}
  .order-head h3{color:var(--navy);font-size:1.05rem;margin-bottom:6px}
  .order-main p{font-size:.88rem;color:var(--muted);margin-bottom:4px}
  .status-pill{display:inline-block;padding:5px 14px;border-radius:999px;font-size:.78rem;font-weight:700}
  .status-Novo{background:#FEF3C7;color:#78350F}
  .status-and{background:#DBEAFE;color:#1E3A8A}
  .status-ok{background:#DCFCE7;color:#166534}
  .status-canc{background:#FEE2E2;color:#991B1B}
  .protocolo-box{background:#EFF6FF;border:1px solid #BFDBFE;border-radius:10px;padding:12px 16px;margin-bottom:16px;font-size:.85rem;color:#1E3A8A}
  .protocolo-box strong{font-family:monospace;font-size:1rem;color:#0B2447;letter-spacing:.5px}
  .anexos-lista{display:flex;flex-direction:column;gap:6px;margin-top:12px}
  .anexo-item{display:flex;justify-content:space-between;align-items:center;gap:10px;background:#F7F9FC;border:1px solid var(--line);border-radius:8px;padding:8px 12px;font-size:.83rem}
  .anexo-item .nome{color:var(--navy);flex:1;word-break:break-all}
  .anexo-item a{color:var(--green);font-weight:600}
  .anexo-item button{color:#dc2626;font-size:.8rem;font-weight:600}
  .upload-zone{border:2px dashed #BFDBFE;background:#EFF6FF;border-radius:10px;padding:16px;text-align:center;cursor:pointer;transition:.2s;margin-top:12px}
  .upload-zone:hover{background:#DBEAFE;border-color:#60A5FA}
  .upload-zone p{font-size:.88rem;color:#1E3A8A;font-weight:600;margin-bottom:4px}
  .upload-zone small{font-size:.75rem;color:#5B6B85}
  .empty-state{text-align:center;padding:60px 20px;background:#fff;border:1px solid var(--line);border-radius:14px}
  .empty-state h3{color:var(--navy);margin-bottom:10px}
  .empty-state p{color:var(--muted);margin-bottom:20px}
  .admin-files{background:#ECFDF5;border:1px solid #A7F3D0;border-radius:10px;padding:14px;margin-top:12px}
  .admin-files h4{color:#065F46;font-size:.88rem;margin-bottom:8px}
  .admin-file-item{display:flex;justify-content:space-between;align-items:center;gap:10px;background:#fff;border:1px solid #A7F3D0;border-radius:8px;padding:10px 14px;font-size:.85rem;margin-bottom:6px}
  .admin-file-item .nome{color:#065F46;flex:1;word-break:break-all;font-weight:600}
  .admin-file-item a{color:#166534;font-weight:700;background:#DCFCE7;padding:5px 12px;border-radius:6px;text-decoration:none;font-size:.8rem}
  .obs-cliente{background:#FEF3C7;border-left:3px solid #F59E0B;border-radius:8px;padding:12px 14px;margin-top:12px;font-size:.88rem;color:#78350F}
  @media (max-width:900px){
    .hero-grid,.detail{grid-template-columns:1fr;gap:36px}
    h1{font-size:2.2rem}
    .foot-grid{grid-template-columns:1fr 1fr}
    .nav-links{display:none}
    .nav-links.open{display:flex;position:absolute;top:72px;left:0;right:0;background:#fff;flex-direction:column;padding:20px;border-bottom:1px solid var(--line);gap:16px}
    .menu-toggle{display:block}
    .nav-actions .btn-ghost{display:none}
    .benefits{padding:40px 24px}
    .side-card{position:static}
  }
  @media (max-width:560px){
    section{padding:52px 0}
    .section-head h2{font-size:1.6rem}
    h1{font-size:1.85rem}
    .foot-grid{grid-template-columns:1fr}
    .contact-strip{padding:28px}
  }
</style>
</head>
<body>

<header>
  <div class="container nav">
    <a class="logo" onclick="go('/')">
      <div class="logo-mark">RF</div>
      Resolve<span>Fácil</span>
    </a>
    <nav class="nav-links" id="navLinks">
      <a onclick="go('/')">Início</a>
      <a onclick="go('/catalogo')">Catálogo</a>
      <a onclick="go('/categorias')">Categorias</a>
      <a onclick="go('/ajuda')">Central de Ajuda</a>
      <a onclick="go('/contato')">Contato</a>
      <a onclick="go('/sobre')">Sobre</a>
    </nav>
    <div class="nav-actions" id="navActions"></div>
    <button class="menu-toggle" onclick="document.getElementById('navLinks').classList.toggle('open')">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
    </button>
  </div>
</header>

<main id="app"></main>

<div class="modal-overlay" id="orderModal" onclick="if(event.target===this)closeModal('orderModal')">
  <div class="modal-card">
    <span class="modal-close" onclick="closeModal('orderModal')">&times;</span>
    <h2 id="modalTitle">Solicitar Serviço</h2>
    <p>Preencha os dados. Entraremos em contato pelo WhatsApp.</p>
    <form onsubmit="enviarPedido(event)">
      <input type="hidden" id="modalServiceInput" name="servico" value="Serviço" />
      <div class="form-group"><label>Nome completo *</label><input type="text" name="nome" required /></div>
      <div class="form-group"><label>E-mail *</label><input type="email" name="email" required /></div>
      <div class="form-group"><label>WhatsApp com DDD *</label><input type="tel" name="whatsapp" required /></div>
      <div class="form-group"><label>O que precisa resolver? *</label><textarea name="descricao" rows="3" required></textarea></div>
      <button type="submit" class="btn btn-green" style="width:100%;justify-content:center;padding:14px" id="submitBtn">Enviar e Chamar no WhatsApp</button>
    </form>
  </div>
</div>

<div class="modal-overlay" id="protocoloModal" onclick="if(event.target===this)closeModal('protocoloModal')">
  <div class="modal-card" style="text-align:center">
    <span class="modal-close" onclick="closeModal('protocoloModal')">&times;</span>
    <div style="font-size:3rem;margin-bottom:10px">✅</div>
    <h2>Pedido registrado!</h2>
    <p>Guarde seu protocolo.</p>
    <div class="protocolo-box" style="text-align:center">
      <div style="font-size:.8rem;margin-bottom:6px">SEU PROTOCOLO</div>
      <strong id="protocoloGerado">—</strong>
    </div>
    <button class="btn btn-primary" style="width:100%;justify-content:center;padding:14px;margin-top:10px" onclick="closeModal('protocoloModal');go('/minha-conta')">Ver meus pedidos</button>
  </div>
</div>

<div class="modal-overlay" id="registerModal" onclick="if(event.target===this)closeModal('registerModal')">
  <div class="modal-card">
    <span class="modal-close" onclick="closeModal('registerModal')">&times;</span>
    <h2>Criar conta</h2>
    <p>Cadastre-se para acompanhar seus pedidos.</p>
    <form onsubmit="registrar(event)">
      <div class="form-group"><label>Nome completo *</label><input type="text" name="nome" required /></div>
      <div class="form-group"><label>E-mail *</label><input type="email" name="email" required /></div>
      <div class="form-group"><label>Senha (mín. 6) *</label><input type="password" name="senha" required minlength="6" /></div>
      <button type="submit" class="btn btn-green" style="width:100%;justify-content:center;padding:14px">Criar conta</button>
      <div class="switch-link">Já tem conta? <a onclick="closeModal('registerModal');openModal('loginModal')">Entrar</a></div>
    </form>
  </div>
</div>

<div class="modal-overlay" id="loginModal" onclick="if(event.target===this)closeModal('loginModal')">
  <div class="modal-card">
    <span class="modal-close" onclick="closeModal('loginModal')">&times;</span>
    <h2>Entrar</h2>
    <p>Acesse sua conta.</p>
    <form onsubmit="entrar(event)">
      <div class="form-group"><label>E-mail *</label><input type="email" name="email" required /></div>
      <div class="form-group"><label>Senha *</label><input type="password" name="senha" required /></div>
      <button type="submit" class="btn btn-green" style="width:100%;justify-content:center;padding:14px">Entrar</button>
      <div class="switch-link" style="margin-top:8px">
        <a onclick="closeModal('loginModal');openModal('esqueciModal')">Esqueci minha senha</a>
      </div>
      <div class="switch-link">Não tem conta? <a onclick="closeModal('loginModal');openModal('registerModal')">Cadastre-se</a></div>
    </form>
  </div>
</div>

<div class="modal-overlay" id="esqueciModal" onclick="if(event.target===this)closeModal('esqueciModal')">
  <div class="modal-card">
    <span class="modal-close" onclick="closeModal('esqueciModal')">&times;</span>
    <h2>Esqueci minha senha</h2>
    <p>Informe seu e-mail para receber um código de redefinição.</p>
    <form onsubmit="pedirCodigo(event)">
      <div class="form-group"><label>E-mail cadastrado *</label><input type="email" name="email" required /></div>
      <button type="submit" class="btn btn-green" style="width:100%;justify-content:center;padding:14px">Enviar código por e-mail</button>
      <div class="switch-link">Lembrou a senha? <a onclick="closeModal('esqueciModal');openModal('loginModal')">Entrar</a></div>
    </form>
  </div>
</div>

<div class="modal-overlay" id="redefinirModal" onclick="if(event.target===this)closeModal('redefinirModal')">
  <div class="modal-card">
    <span class="modal-close" onclick="closeModal('redefinirModal')">&times;</span>
    <h2>Redefinir senha</h2>
    <p>Digite o código que enviamos para seu e-mail.</p>

    <div id="codigoMostrado" style="display:none">
      <div class="protocolo-box" style="text-align:center">
        <div style="font-size:.8rem;color:#78350F">⚠️ MODO DESENVOLVIMENTO</div>
        <div style="font-family:monospace;font-size:2rem;font-weight:800;color:#0B2447;letter-spacing:8px;margin:8px 0" id="codigoGerado">------</div>
        <div style="font-size:.75rem;color:#78350F">Em produção isso viria só por e-mail</div>
      </div>
    </div>

    <form onsubmit="redefinirSenha(event)">
      <input type="hidden" name="email" id="redefinirEmail" />
      <div class="form-group"><label>Código de 6 dígitos *</label><input type="text" name="codigo" required maxlength="6" pattern="[0-9]{6}" placeholder="000000" /></div>
      <div class="form-group"><label>Nova senha (mín. 6) *</label><input type="password" name="nova_senha" required minlength="6" /></div>
      <button type="submit" class="btn btn-green" style="width:100%;justify-content:center;padding:14px">Redefinir senha</button>
    </form>
  </div>
</div>

<div class="modal-overlay" id="alterarSenhaModal" onclick="if(event.target===this)closeModal('alterarSenhaModal')">
  <div class="modal-card">
    <span class="modal-close" onclick="closeModal('alterarSenhaModal')">&times;</span>
    <h2>Alterar minha senha</h2>
    <p>Informe sua senha atual e escolha a nova.</p>
    <form onsubmit="alterarSenha(event)">
      <div class="form-group"><label>Senha atual *</label><input type="password" name="senha_atual" required /></div>
      <div class="form-group"><label>Nova senha (mín. 6) *</label><input type="password" name="nova_senha" required minlength="6" /></div>
      <button type="submit" class="btn btn-green" style="width:100%;justify-content:center;padding:14px">Salvar nova senha</button>
    </form>
  </div>
</div>

<a class="wa-float" id="waFloat" href="#" target="_blank" rel="noopener">
  <svg viewBox="0 0 24 24"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.86 9.86 0 0 0 12.04 2"/></svg>
</a>

<div class="toast" id="toast"></div>

<footer>
  <div class="container">
    <div class="disclaimer">
      <strong>Aviso:</strong> O ResolveFácil é uma plataforma privada de serviços digitais. Não possui vínculo com gov.br, Receita Federal, DETRAN ou qualquer órgão público. Nunca solicitamos senhas gov.br ou bancárias.
    </div>
    <div class="foot-grid">
      <div>
        <div class="foot-brand"><div class="logo-mark">RF</div> ResolveFácil</div>
        <p>Serviços digitais e assistência administrativa pela internet.</p>
      </div>
      <div><h4>Serviços</h4><ul>
        <li><a onclick="go('/catalogo')">Catálogo completo</a></li>
        <li><a onclick="go('/categorias')">Categorias</a></li>
        <li><a onclick="go('/catalogo?cat=govbr')">gov.br</a></li>
        <li><a onclick="go('/catalogo?cat=detran')">DETRAN</a></li>
      </ul></div>
      <div><h4>Institucional</h4><ul>
        <li><a onclick="go('/sobre')">Sobre</a></li>
        <li><a onclick="go('/contato')">Contato</a></li>
        <li><a onclick="go('/ajuda')">Central de ajuda</a></li>
      </ul></div>
      <div><h4>Legal</h4><ul>
        <li><a onclick="go('/privacidade')">Privacidade</a></li>
        <li><a onclick="go('/termos')">Termos de uso</a></li>
        <li><a onclick="go('/reembolso')">Reembolso</a></li>
      </ul></div>
    </div>
    <div class="foot-bottom">
      <span>© <span id="year"></span> ResolveFácil — Todos os direitos reservados.</span>
      <span>Feito no Brasil · Atendimento em português</span>
    </div>
  </div>
</footer>

<script>
const CONFIG = {
  whatsapp: '5581989824226',
  email: 'weedfox2016@gmail.com',
  whatsappMsg: 'Olá! Vim pelo site do ResolveFácil.',
  maxMB: 16
};

const CATEGORIES = [
  { id:'govbr', icon:'🏛️', name:'gov.br', desc:'Acesso, senha, níveis e serviços digitais do governo.' },
  { id:'detran', icon:'🚗', name:'DETRAN', desc:'CNH, veículos, multas e agendamentos.' },
  { id:'ir', icon:'📊', name:'Imposto de Renda', desc:'Documentos e orientação para a declaração.' },
  { id:'documentos', icon:'📄', name:'Documentos', desc:'Currículos, cartas e formatação profissional.' },
  { id:'agendamentos', icon:'📅', name:'Agendamentos', desc:'Orientação para localizar serviços.' },
  { id:'digitais', icon:'💻', name:'Serviços Digitais', desc:'Artes, planilhas, apresentações e sites.' },
  { id:'empresas', icon:'🏢', name:'Para Empresas', desc:'Apoio administrativo remoto.' },
];

const SERVICES = [
  { id:'gov-acesso', cat:'govbr', name:'Ajuda com problemas de acesso à conta gov.br', desc:'Orientação passo a passo para identificar o motivo do erro.', price:0, prazo:'1 dia útil' },
  { id:'gov-senha', cat:'govbr', name:'Orientação para recuperar senha', desc:'Explicação do fluxo oficial de recuperação, sem pedir dados sensíveis.', price:0, prazo:'1 dia útil' },
  { id:'det-veiculo', cat:'detran', name:'Consultar situação de veículos', desc:'Indicamos o caminho oficial para consultar a situação.', price:0, prazo:'1 dia útil' },
  { id:'ir-organizacao', cat:'ir', name:'Organização de documentos para declaração', desc:'Estruturamos a pasta digital com os documentos fornecidos.', price:8900, prazo:'2 a 3 dias úteis' },
  { id:'doc-curriculo', cat:'documentos', name:'Criação de currículos profissionais', desc:'Currículo moderno, revisado e pronto para envio em PDF.', price:4900, prazo:'2 dias úteis' },
  { id:'dig-planilhas', cat:'digitais', name:'Planilhas Excel', desc:'Planilhas com fórmulas, controle e organização.', price:7900, prazo:'3 a 4 dias úteis' },
  { id:'emp-adm', cat:'empresas', name:'Apoio administrativo remoto', desc:'Suporte administrativo pontual ou recorrente.', price:0, prazo:'a combinar' },
];

const $ = (s,el=document) => el.querySelector(s);
const money = c => c > 0 ? 'R$ ' + (c/100).toFixed(2).replace('.', ',') : 'Preço a definir';
const catName = id => (CATEGORIES.find(c=>c.id===id)||{}).name || id;
const catIcon = id => (CATEGORIES.find(c=>c.id===id)||{}).icon || '•';
const esc = s => String(s??'').replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
const waLink = m => `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(m || CONFIG.whatsappMsg)}`;
const nomeBonito = a => a.includes('__') ? a.split('__', 2)[1] : a;

let USUARIO = null;

async function carregarSessao() {
  try {
    const r = await fetch('/api/sessao');
    const d = await r.json();
    USUARIO = d.logado ? d.usuario : null;
  } catch(_) { USUARIO = null; }
  atualizarNav();
}

function atualizarNav() {
  const nav = $('#navActions'); if (!nav) return;
  if (USUARIO) {
    const inicial = USUARIO.nome.trim()[0].toUpperCase();
    nav.innerHTML = `
      <div class="user-chip" onclick="go('/minha-conta')">
        <div class="user-avatar">${inicial}</div>
        ${esc(USUARIO.nome.split(' ')[0])}
      </div>
      <button class="btn btn-ghost" onclick="logout()">Sair</button>`;
  } else {
    nav.innerHTML = `
      <button class="btn btn-ghost" onclick="openModal('loginModal')">Entrar</button>
      <button class="btn btn-primary" onclick="openModal('registerModal')">Criar conta</button>`;
  }
}

function openModal(id) {
  const fixos = ['loginModal','registerModal','protocoloModal','esqueciModal','redefinirModal','alterarSenhaModal'];
  if (fixos.includes(id)) {
    $('#' + id).classList.add('open');
  } else {
    $('#modalTitle').textContent = 'Solicitar: ' + id;
    $('#modalServiceInput').value = id;
    $('#orderModal').classList.add('open');
  }
  document.body.style.overflow = 'hidden';
}
function closeModal(id) {
  $('#' + id).classList.remove('open');
  document.body.style.overflow = '';
}

let toastTimer;
function toast(msg, type='') {
  const t = $('#toast');
  t.textContent = msg;
  t.className = 'toast show ' + type;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.className = 'toast ' + type, 4500);
}

async function registrar(e) {
  e.preventDefault();
  const f = e.target;
  const r = await fetch('/api/registrar', {
    method:'POST', headers:{'Content-Type':'application/json'},
    body: JSON.stringify({ nome:f.nome.value.trim(), email:f.email.value.trim(), senha:f.senha.value })
  });
  const d = await r.json();
  if (d.ok) {
    USUARIO = d.usuario; atualizarNav();
    closeModal('registerModal');
    toast('Bem-vindo(a), ' + USUARIO.nome + '! E-mail de boas-vindas enviado.', 'success');
    render();
  } else toast(d.msg, 'error');
}

async function entrar(e) {
  e.preventDefault();
  const f = e.target;
  const r = await fetch('/api/entrar', {
    method:'POST', headers:{'Content-Type':'application/json'},
    body: JSON.stringify({ email:f.email.value.trim(), senha:f.senha.value })
  });
  const d = await r.json();
  if (d.ok) {
    USUARIO = d.usuario; atualizarNav();
    closeModal('loginModal');
    toast('Olá, ' + USUARIO.nome + '!', 'success');
    render();
  } else toast(d.msg, 'error');
}

async function logout() {
  await fetch('/api/logout', { method:'POST' });
  USUARIO = null; atualizarNav();
  toast('Você saiu.'); go('/');
}

// ---------- RESET ----------
async function pedirCodigo(e) {
  e.preventDefault();
  const f = e.target;
  const email = f.email.value.trim();
  if (!email) return;

  const btn = f.querySelector('button[type=submit]');
  btn.disabled = true; btn.textContent = 'Enviando...';

  const r = await fetch('/api/esqueci-senha', {
    method:'POST', headers:{'Content-Type':'application/json'},
    body: JSON.stringify({ email })
  });
  const d = await r.json();

  btn.disabled = false; btn.textContent = 'Enviar código por e-mail';

  if (d.ok) {
    closeModal('esqueciModal');
    $('#redefinirEmail').value = email;
    if (d.fallback && d.codigo) {
      $('#codigoGerado').textContent = d.codigo;
      $('#codigoMostrado').style.display = 'block';
      toast('⚠️ E-mail não configurado. Use o código na tela.', 'error');
    } else {
      $('#codigoMostrado').style.display = 'none';
      toast('📧 Código enviado! Verifique seu e-mail.', 'success');
    }
    openModal('redefinirModal');
  } else {
    toast(d.msg || 'Erro ao enviar.', 'error');
  }
}

async function redefinirSenha(e) {
  e.preventDefault();
  const f = e.target;
  const r = await fetch('/api/redefinir-senha', {
    method:'POST', headers:{'Content-Type':'application/json'},
    body: JSON.stringify({
      email: $('#redefinirEmail').value,
      codigo: f.codigo.value.trim(),
      nova_senha: f.nova_senha.value
    })
  });
  const d = await r.json();
  if (d.ok) {
    closeModal('redefinirModal');
    toast('✅ Senha redefinida! Faça login.', 'success');
    setTimeout(() => openModal('loginModal'), 500);
  } else toast(d.msg, 'error');
}

async function alterarSenha(e) {
  e.preventDefault();
  const f = e.target;
  const r = await fetch('/api/alterar-senha', {
    method:'POST', headers:{'Content-Type':'application/json'},
    body: JSON.stringify({ senha_atual: f.senha_atual.value, nova_senha: f.nova_senha.value })
  });
  const d = await r.json();
  if (d.ok) {
    closeModal('alterarSenhaModal'); f.reset();
    toast('✅ Senha alterada!', 'success');
  } else toast(d.msg, 'error');
}

async function enviarPedido(e) {
  e.preventDefault();
  const f = e.target;
  const btn = $('#submitBtn');
  const p = {
    nome: f.nome.value.trim(), email: f.email.value.trim(),
    whatsapp: f.whatsapp.value.trim(), servico: f.servico.value,
    descricao: f.descricao.value.trim(),
  };
  if (!p.nome || !p.email || !p.whatsapp || !p.descricao) { toast('Preencha tudo.', 'error'); return; }
  btn.disabled = true; btn.textContent = 'Enviando...';

  let protocolo = null;
  try {
    const r = await fetch('/api/pedido', {
      method:'POST', headers:{'Content-Type':'application/json'},
      body: JSON.stringify(p)
    });
    const d = await r.json();
    if (d.ok) protocolo = d.protocolo;
  } catch(_){}

  const msg = `Olá! Meu nome é ${p.nome}.\nProtocolo: *${protocolo || '?'}*\nServiço: *${p.servico}*\nE-mail: ${p.email}\nWhatsApp: ${p.whatsapp}\nObs: ${p.descricao}`;
  window.open(`https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank');

  f.reset(); btn.disabled = false; btn.textContent = 'Enviar e Chamar no WhatsApp';
  closeModal('orderModal');
  if (protocolo) {
    $('#protocoloGerado').textContent = protocolo;
    setTimeout(() => openModal('protocoloModal'), 200);
    toast('Pedido registrado!', 'success');
  }
}

function escolherArquivo(protocolo) {
  const inp = document.createElement('input');
  inp.type = 'file';
  inp.accept = '.png,.jpg,.jpeg,.gif,.webp,.pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.txt,.csv,.zip,.rar,.7z';
  inp.onchange = () => { if (inp.files[0]) enviarArquivo(protocolo, inp.files[0]); };
  inp.click();
}
async function enviarArquivo(protocolo, arquivo) {
  if (arquivo.size > CONFIG.maxMB * 1024 * 1024) { toast(`Máx ${CONFIG.maxMB}MB`, 'error'); return; }
  toast('Enviando...');
  const fd = new FormData(); fd.append('arquivo', arquivo);
  try {
    const r = await fetch('/api/anexar/' + protocolo, { method:'POST', body: fd });
    const d = await r.json();
    if (d.ok) { toast('✅ Enviado!', 'success'); carregarMeusPedidos(); }
    else toast(d.msg || 'Erro.', 'error');
  } catch(e) { toast('Erro de conexão.', 'error'); }
}
async function removerAnexo(protocolo, nome) {
  if (!confirm('Remover?')) return;
  const r = await fetch('/api/remover-anexo', {
    method:'POST', headers:{'Content-Type':'application/json'},
    body: JSON.stringify({ protocolo, nome, tipo:'cliente' })
  });
  const d = await r.json();
  if (d.ok) { toast('Removido.', 'success'); carregarMeusPedidos(); }
}

function parseHash() {
  const h = location.hash.replace(/^#/, '') || '/';
  const [path, q] = h.split('?');
  return { path: path || '/', params: new URLSearchParams(q || '') };
}
function go(p) { location.hash = '#' + p; window.scrollTo({ top: 0 }); }

function svcCard(s) {
  return `<div class="svc-card" onclick="go('/servico/${s.id}')">
    <div class="svc-cat">${catIcon(s.cat)} ${catName(s.cat)}</div>
    <h3>${esc(s.name)}</h3><p>${esc(s.desc)}</p>
    <div class="svc-foot"><div class="price">${money(s.price)}</div><span class="arrow">Ver →</span></div>
  </div>`;
}

function faqHtml() {
  const FAQS = [
    { q:'Como funciona?', a:'Faça o pedido, receba um protocolo e envie arquivos. O admin anexa o comprovante quando terminar.' },
    { q:'Como recebo o código de redefinição?', a:'Enviamos para seu e-mail cadastrado. Confira também a caixa de spam.' },
    { q:'Esqueci minha senha, e agora?', a:'Clique em "Esqueci minha senha" na tela de login e siga as instruções.' },
    { q:'Vocês pedem minha senha?', a:'NUNCA. Não pedimos senha do gov.br, banco ou códigos.' },
    { q:'Posso enviar prints?', a:'Sim! Aceitamos imagens, PDFs, Office e ZIP (até 16MB cada).' },
  ];
  return FAQS.map((f,i) => `
    <div class="faq-item" id="faq-${i}">
      <button type="button" class="faq-q" onclick="document.getElementById('faq-${i}').classList.toggle('open')">
        ${f.q}<span class="plus">+</span></button>
      <div class="faq-a"><div class="faq-a-inner">${f.a}</div></div>
    </div>`).join('');
}

function pageHome() {
  return `
  <section class="hero">
    <div class="container hero-grid">
      <div>
        <div class="badge">Plataforma privada · Atendimento humano</div>
        <h1>Resolva suas necessidades <em>sem sair de casa</em>.</h1>
        <p class="lead">Serviços digitais para gov.br, DETRAN, Imposto de Renda, documentos, agendamentos e apoio a empresas.</p>
        <div class="hero-actions">
          <button class="btn btn-green" onclick="go('/catalogo')">Encontrar serviços</button>
          ${USUARIO
            ? '<button class="btn btn-outline" onclick="go(\'/minha-conta\')">Meus pedidos</button>'
            : '<button class="btn btn-outline" onclick="openModal(\'registerModal\')">Criar conta grátis</button>'}
        </div>
      </div>
      <div class="hero-card">
        <h3>O que você precisa resolver hoje?</h3>
        <div class="search-box">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>
          <input id="homeSearch" type="text" placeholder="Ex.: recuperar senha gov.br..." onkeydown="if(event.key==='Enter')homeSearch()" />
        </div>
        <div class="cat-quick">
          ${CATEGORIES.slice(0,6).map(c => `<button onclick="go('/catalogo?cat=${c.id}')">${c.icon} ${c.name}</button>`).join('')}
        </div>
      </div>
    </div>
  </section>
  <section style="background:var(--bg)">
    <div class="container">
      <div class="section-head"><div class="eyebrow">Destaques</div><h2>Serviços em destaque</h2></div>
      <div class="grid-services">${SERVICES.map(svcCard).join('')}</div>
    </div>
  </section>
  <section>
    <div class="container">
      <div class="section-head"><div class="eyebrow">Como funciona</div><h2>Em 4 passos simples</h2></div>
      <div class="steps">
        <div class="step"><div class="step-num">1</div><h3>Escolha o serviço</h3><p>Navegue pelo catálogo.</p></div>
        <div class="step"><div class="step-num">2</div><h3>Faça o pedido</h3><p>Receba um protocolo único.</p></div>
        <div class="step"><div class="step-num">3</div><h3>Envie arquivos</h3><p>Anexe prints e documentos.</p></div>
        <div class="step"><div class="step-num">4</div><h3>Receba por e-mail</h3><p>Comprovante e status chegam na sua caixa.</p></div>
      </div>
    </div>
  </section>
  <section>
    <div class="benefits">
      <div class="section-head"><div class="eyebrow">Por que escolher</div><h2>Atendimento que resolve</h2><p>Segurança, transparência e suporte humano.</p></div>
      <div class="benefit-grid">
        <div class="benefit"><div class="bi">🔒</div><h3>Segurança total</h3><p>Nunca pedimos senhas gov.br ou bancárias.</p></div>
        <div class="benefit"><div class="bi">📧</div><h3>Códigos por e-mail</h3><p>Redefinição de senha com verificação segura.</p></div>
        <div class="benefit"><div class="bi">📎</div><h3>Envie e receba arquivos</h3><p>Prints, PDFs e comprovantes com um clique.</p></div>
        <div class="benefit"><div class="bi">🔢</div><h3>Protocolo único</h3><p>Cada pedido tem seu número para acompanhar.</p></div>
      </div>
    </div>
  </section>
  <section>
    <div class="container">
      <div class="section-head"><div class="eyebrow">Dúvidas</div><h2>Perguntas frequentes</h2></div>
      <div class="faq">${faqHtml()}</div>
    </div>
  </section>
  <section>
    <div class="contact-strip">
      <div><h2>Pronto para resolver?</h2><p>Fale conosco pelo WhatsApp — resposta em minutos.</p></div>
      <div class="cta">
        <a class="btn btn-green" href="${waLink()}" target="_blank" rel="noopener">Abrir WhatsApp</a>
        <button class="btn btn-outline" onclick="openModal('Atendimento Direto')">Preencher formulário</button>
      </div>
    </div>
  </section>`;
}

function pageCatalog(initialCat='') {
  setTimeout(() => {
    const sel = $('#catFilter');
    if (sel && initialCat) sel.value = initialCat;
    filterCatalog();
  }, 0);
  return `<div class="container page">
    <div class="breadcrumb"><a onclick="go('/')">Início</a> · Catálogo</div>
    <div class="section-head" style="margin-bottom:30px"><div class="eyebrow">Catálogo</div><h2>Todos os serviços</h2></div>
    <div class="filters">
      <input id="catSearch" type="text" placeholder="Buscar serviço..." oninput="filterCatalog()" />
      <select id="catFilter" onchange="filterCatalog()">
        <option value="">Todas as categorias</option>
        ${CATEGORIES.map(c => `<option value="${c.id}">${c.icon} ${c.name}</option>`).join('')}
      </select>
    </div>
    <div class="result-count" id="resultCount"></div>
    <div class="grid-services" id="catalogGrid"></div>
  </div>`;
}

function filterCatalog() {
  const q = ($('#catSearch')?.value || '').toLowerCase().trim();
  const cat = $('#catFilter')?.value || '';
  const filtered = SERVICES.filter(s => {
    const okQ = !q || s.name.toLowerCase().includes(q) || s.desc.toLowerCase().includes(q);
    const okC = !cat || s.cat === cat;
    return okQ && okC;
  });
  const grid = $('#catalogGrid'); if (!grid) return;
  $('#resultCount').textContent = `${filtered.length} serviço(s) encontrado(s)`;
  grid.innerHTML = filtered.length ? filtered.map(svcCard).join('') :
    '<p style="color:var(--muted);grid-column:1/-1;text-align:center;padding:40px">Nenhum serviço encontrado.</p>';
}

function homeSearch() {
  const q = ($('#homeSearch')?.value || '').trim(); if (!q) return;
  go('/catalogo');
  setTimeout(() => { const e = $('#catSearch'); if (e) { e.value = q; filterCatalog(); } }, 60);
}

function pageService(id) {
  const s = SERVICES.find(x => x.id === id); if (!s) return page404();
  const safe = s.name.replace(/'/g, "\\'");
  return `<div class="container page">
    <div class="breadcrumb"><a onclick="go('/')">Início</a> · <a onclick="go('/catalogo')">Catálogo</a> · ${catName(s.cat)}</div>
    <div class="detail">
      <div>
        <h1>${esc(s.name)}</h1>
        <p class="desc">${esc(s.desc)}</p>
        <div class="notice">⚠️ Nunca solicitamos senhas gov.br ou bancárias.</div>
        <div class="detail-block"><h3>O que está incluso</h3><ul>
          <li>Protocolo único para acompanhar</li>
          <li>Envio de arquivos (prints, PDFs, docs)</li>
          <li>Comprovante do serviço prestado</li>
          <li>Avisos por e-mail</li>
        </ul></div>
        <div class="detail-block"><h3>O que NÃO fazemos</h3><ul>
          <li class="no">Não solicitamos senhas sensíveis</li>
          <li class="no">Não realizamos serviços ilegais</li>
          <li class="no">Não temos vínculo com órgãos públicos</li>
        </ul></div>
      </div>
      <div>
        <div class="side-card">
          <div class="big-price">${money(s.price)}${s.price > 0 ? '<small>valor do serviço</small>' : ''}</div>
          <div class="meta">
            <span>Categoria <strong>${catName(s.cat)}</strong></span>
            <span>Prazo <strong>${s.prazo}</strong></span>
            <span>Atendimento <strong>WhatsApp + E-mail</strong></span>
          </div>
          <button class="btn btn-green" onclick="openModal('${safe}')">Contratar agora</button>
          <a class="btn btn-outline" href="${waLink('Dúvida sobre: ' + s.name)}" target="_blank" rel="noopener">Falar no WhatsApp</a>
        </div>
      </div>
    </div>
  </div>`;
}

function pageCategories() {
  return `<div class="container page">
    <div class="breadcrumb"><a onclick="go('/')">Início</a> · Categorias</div>
    <div class="section-head"><div class="eyebrow">Categorias</div><h2>Navegue por categoria</h2></div>
    <div class="grid-cats">
      ${CATEGORIES.map(c => {
        const n = SERVICES.filter(s => s.cat === c.id).length;
        return `<div class="cat-card" onclick="go('/catalogo?cat=${c.id}')">
          <div class="cat-icon">${c.icon}</div><h3>${c.name}</h3><p>${c.desc}</p>
          <span class="count">${n} serviço(s)</span></div>`;
      }).join('')}
    </div>
  </div>`;
}

function pageHelp() {
  return `<div class="container page">
    <div class="breadcrumb"><a onclick="go('/')">Início</a> · Central de Ajuda</div>
    <div class="section-head"><div class="eyebrow">Ajuda</div><h2>Perguntas frequentes</h2></div>
    <div class="faq">${faqHtml()}</div>
    <div style="text-align:center;margin-top:30px">
      <a class="btn btn-green" href="${waLink()}" target="_blank" rel="noopener">Falar no WhatsApp</a>
    </div>
  </div>`;
}

function pageContact() {
  return `<div class="container page">
    <div class="breadcrumb"><a onclick="go('/')">Início</a> · Contato</div>
    <div class="section-head"><div class="eyebrow">Contato</div><h2>Fale com a gente</h2></div>
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:24px;max-width:900px;margin:0 auto">
      <div class="detail-block"><h3>📱 WhatsApp</h3>
        <p style="color:var(--muted);font-size:.92rem;margin-bottom:14px">Resposta em minutos.</p>
        <a class="btn btn-green" href="${waLink()}" target="_blank" rel="noopener">Abrir WhatsApp</a></div>
      <div class="detail-block"><h3>✉️ E-mail</h3>
        <p style="color:var(--muted);font-size:.92rem;margin-bottom:14px;word-break:break-all">${CONFIG.email}</p>
        <a class="btn btn-outline" href="mailto:${CONFIG.email}">Enviar e-mail</a></div>
    </div>
  </div>`;
}

function pageAbout() {
  return `<div class="container page">
    <div class="breadcrumb"><a onclick="go('/')">Início</a> · Sobre</div>
    <div class="section-head"><div class="eyebrow">Sobre</div><h2>Quem somos</h2></div>
    <div style="max-width:760px;margin:0 auto;color:var(--muted);line-height:1.8">
      <p style="margin-bottom:16px">O <strong style="color:var(--navy)">ResolveFácil</strong> é uma plataforma privada de serviços digitais.</p>
      <p style="margin-bottom:16px">Não temos vínculo com gov.br, Receita Federal, DETRAN ou qualquer entidade governamental.</p>
      <ul style="list-style:none;display:flex;flex-direction:column;gap:10px">
        <li>✓ Transparência total</li><li>✓ Nunca solicitamos senhas</li>
        <li>✓ Atendimento humano</li><li>✓ Avisos por e-mail</li>
      </ul>
    </div>
  </div>`;
}

function pageLegal(tipo) {
  const t = { privacidade:'Política de Privacidade', termos:'Termos de Uso', reembolso:'Cancelamento e Reembolso' };
  const b = {
    privacidade:`<p>Coletamos apenas os dados necessários. Nunca solicitamos senhas gov.br ou bancárias.</p><p>Exclusão de dados: <strong>${CONFIG.email}</strong>.</p>`,
    termos:`<p>Serviço de assistência administrativa privada. Não realizamos atividades ilegais.</p>`,
    reembolso:`<p>Cancelamento antes da execução: reembolso integral. Após início: cobrança proporcional.</p>`
  };
  return `<div class="container page">
    <div class="breadcrumb"><a onclick="go('/')">Início</a> · ${t[tipo]}</div>
    <div class="section-head"><h2>${t[tipo]}</h2></div>
    <div style="max-width:760px;margin:0 auto;color:var(--muted);line-height:1.8">${b[tipo]}</div>
  </div>`;
}

function pageMinhaConta() {
  if (!USUARIO) {
    setTimeout(() => openModal('loginModal'), 50);
    return `<div class="container page">
      <div class="empty-state">
        <h3>Você precisa entrar</h3>
        <p>Faça login ou crie uma conta.</p>
        <button class="btn btn-green" onclick="openModal('loginModal')">Entrar</button>
        <button class="btn btn-outline" onclick="openModal('registerModal')" style="margin-left:8px">Criar conta</button>
      </div>
    </div>`;
  }
  setTimeout(carregarMeusPedidos, 50);
  return `<div class="container page">
    <div class="breadcrumb"><a onclick="go('/')">Início</a> · Minha conta</div>
    <div class="section-head" style="text-align:left;max-width:100%;margin-bottom:24px">
      <div class="eyebrow">Minha conta</div>
      <h2>Olá, ${esc(USUARIO.nome)}!</h2>
      <p>${esc(USUARIO.email)}</p>
    </div>
    <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;margin-bottom:20px">
      <h3 style="color:var(--navy)">Meus pedidos</h3>
      <div>
        <button class="btn btn-outline" onclick="go('/catalogo')">+ Novo pedido</button>
        <button class="btn btn-ghost" onclick="openModal('alterarSenhaModal')">🔑 Alterar senha</button>
        <button class="btn btn-ghost" onclick="logout()">Sair</button>
      </div>
    </div>
    <div id="meusPedidos"><div class="empty-state"><p>Carregando...</p></div></div>
  </div>`;
}

async function carregarMeusPedidos() {
  const box = $('#meusPedidos'); if (!box) return;
  try {
    const r = await fetch('/api/meus-pedidos');
    const d = await r.json();
    if (!d.ok) { box.innerHTML = '<div class="empty-state"><p>Erro.</p></div>'; return; }
    if (!d.pedidos.length) {
      box.innerHTML = `<div class="empty-state">
        <h3>📭 Nenhum pedido ainda</h3>
        <p>Você ainda não solicitou nenhum serviço.</p>
        <button class="btn btn-green" onclick="go('/catalogo')">Ver serviços</button>
      </div>`;
      return;
    }
    box.innerHTML = d.pedidos.map(p => {
      const st = p.Status || 'Novo';
      const stClass = st === 'Novo' ? 'status-Novo'
                    : st === 'Em andamento' ? 'status-and'
                    : st === 'Concluído' ? 'status-ok' : 'status-canc';
      const protocolo = p.Protocolo || '—';
      const anexos = p.Anexos || { cliente: [], admin: [] };
      const anexosClienteHtml = anexos.cliente.length
        ? anexos.cliente.map(a => `
            <div class="anexo-item">
              <span class="nome">📎 ${esc(nomeBonito(a))}</span>
              <a href="/api/baixar/${protocolo}/cliente/${encodeURIComponent(a)}" target="_blank">Baixar</a>
              <button onclick="removerAnexo('${protocolo}','${a}')">Remover</button>
            </div>`).join('')
        : '<div style="font-size:.8rem;color:#94A3B8;font-style:italic;padding:4px 0">Nenhum arquivo enviado por você ainda.</div>';
      const anexosAdminHtml = anexos.admin.length
        ? `<div class="admin-files">
             <h4>✅ Comprovantes do serviço (enviados pela equipe)</h4>
             ${anexos.admin.map(a => `
               <div class="admin-file-item">
                 <span class="nome">📄 ${esc(nomeBonito(a))}</span>
                 <a href="/api/baixar/${protocolo}/admin/${encodeURIComponent(a)}" target="_blank">⬇️ Baixar</a>
               </div>`).join('')}
           </div>`
        : '';
      const obsHtml = p['Obs. Admin']
        ? `<div class="obs-cliente"><strong>💬 Recado da equipe:</strong> ${esc(p['Obs. Admin'])}</div>`
        : '';
      return `<div class="order-item">
        <div class="order-head">
          <div class="order-main">
            <h3>${esc(p['Serviço'] || 'Serviço')}</h3>
            <p><strong>Protocolo:</strong> <span style="font-family:monospace;color:#0B2447">${protocolo}</span></p>
            <p><strong>Data:</strong> ${esc(p.Data || '')}</p>
            <p><strong>Descrição:</strong> ${esc(p['Descrição'] || '')}</p>
            ${p['Concluído em'] ? `<p><strong>Concluído em:</strong> ${esc(p['Concluído em'])}</p>` : ''}
          </div>
          <div style="text-align:right">
            <span class="status-pill ${stClass}">${esc(st)}</span>
          </div>
        </div>
        ${obsHtml}
        ${anexosAdminHtml}
        <div style="border-top:1px solid var(--line);padding-top:14px;margin-top:14px">
          <strong style="font-size:.88rem;color:var(--navy)">📎 Meus arquivos enviados (${anexos.cliente.length}):</strong>
          <div class="anexos-lista">${anexosClienteHtml}</div>
          <div class="upload-zone" onclick="escolherArquivo('${protocolo}')">
            <p>➕ Clique para enviar um arquivo à equipe</p>
            <small>Prints, PDFs, documentos — até ${CONFIG.maxMB}MB</small>
          </div>
        </div>
      </div>`;
    }).join('');
  } catch(e) { box.innerHTML = '<div class="empty-state"><p>Erro de conexão.</p></div>'; }
}

function page404() {
  return `<div class="container page" style="text-align:center">
    <h1 style="color:var(--navy)">Página não encontrada</h1>
    <p style="color:var(--muted);margin-bottom:20px">O caminho não existe.</p>
    <button class="btn btn-primary" onclick="go('/')">Voltar ao início</button>
  </div>`;
}

function render() {
  const { path, params } = parseHash();
  const app = $('#app');
  let html;
  if (path === '/' || path === '') html = pageHome();
  else if (path === '/catalogo') html = pageCatalog(params.get('cat') || '');
  else if (path === '/categorias') html = pageCategories();
  else if (path === '/ajuda') html = pageHelp();
  else if (path === '/contato') html = pageContact();
  else if (path === '/sobre') html = pageAbout();
  else if (path === '/privacidade') html = pageLegal('privacidade');
  else if (path === '/termos') html = pageLegal('termos');
  else if (path === '/reembolso') html = pageLegal('reembolso');
  else if (path === '/minha-conta') html = pageMinhaConta();
  else if (path.startsWith('/servico/')) html = pageService(path.split('/')[2]);
  else html = page404();
  app.innerHTML = html;
  $('#navLinks')?.classList.remove('open');
}

window.addEventListener('hashchange', render);
window.addEventListener('DOMContentLoaded', async () => {
  $('#year').textContent = new Date().getFullYear();
  $('#waFloat').href = waLink();
  await carregarSessao();
  if (!location.hash) location.hash = '#/';
  render();
});
</script>
</body>
</html>
