/* ============================================================
   qubit :: station engine  (industrial rack)
   Renders the homepage (module units) and the project pages from
   window.PROJECTS. Bilingual IT/EN. You normally only edit
   projects.js — not this file.
   ============================================================ */
(function(){
  "use strict";

  /* status -> [unit__stat class, label, led class] */
  var STAT = { online:['online','ONLINE','led--online'],
               standby:['standby','STANDBY','led--standby'],
               wip:['wip','WIP','led--wip'] };

  var LANG = (function(){ try{ return localStorage.getItem('qlang')||'it'; }catch(e){ return 'it'; } })();
  var CURRENT = null;

  var UI = {
    it:{ modules:'Moduli', instruments:'Strumento', system:'Sistema', theory:'Teoria e storia',
      presents:'n_c_c_n presenta', heroTitle:'Il suono di un qubit',
      biblio:'Bibliografia', bibliod:'i lavori a cui ci siamo ispirati',
      biblioIntro:'I lavori di musica quantistica a cui questa stazione si ispira.', eyebrow:'Sonificazione quantistica dal vivo',
      lede:'Strumenti quantistici <b>veri</b>. Un qubit sta in <b class="q">sovrapposizione</b>, cioè non è né 0 né 1; quando lo misuri <b class="qx">collassa</b> a caso, con probabilità fissate dalla regola di Born. Più qubit possono legarsi tra loro per <b class="q">entanglement</b>. Non è casualità qualunque, ma meccanica quantistica resa suono.',
      manifesto:'Sovrapposizione, misura ed entanglement, nel linguaggio del <b>Quantum Picturalism</b> (ZX-calculus) e della musica quantistica. I riferimenti sono in bibliografia.',
      principleK:'Principio quantistico',
      about:'about / colophon', aboutd:'crediti, riferimenti, pipeline',
      back:'← stazione', standbyNote:'in preparazione',
      sib:'stazione gemella', foot:'QuantumJazzStation' },
    en:{ modules:'Modules', instruments:'Instrument', system:'System', theory:'Theory and history',
      presents:'n_c_c_n presents', heroTitle:'The sound of a qubit',
      biblio:'Bibliography', bibliod:'the works that inspired us',
      biblioIntro:'The quantum-music works this station draws on.', eyebrow:'Live quantum sonification',
      lede:'<b>Genuine</b> quantum instruments. A qubit sits in <b class="q">superposition</b>, so it is neither 0 nor 1; when you measure it, it <b class="qx">collapses</b> at random, with probabilities set by the Born rule. Several qubits can bind together through <b class="q">entanglement</b>. This is not just any randomness, but quantum mechanics turned into sound.',
      manifesto:'Superposition, measurement and entanglement, in the language of <b>Quantum Picturalism</b> (ZX-calculus) and quantum music. The references are in the bibliography.',
      principleK:'Quantum principle',
      about:'about / colophon', aboutd:'credits, references, pipeline',
      back:'← station', standbyNote:'in preparation',
      sib:'sibling station', foot:'QuantumJazzStation' }
  };
  function T(k){ return (UI[LANG]&&UI[LANG][k]!=null)?UI[LANG][k]:UI.it[k]; }
  function field(o,name){ if(LANG==='en' && o[name+'_en']!=null) return o[name+'_en']; return o[name]||''; }
  function esc(s){ return String(s).replace(/[&<>]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;'}[c];}); }
  function paras(s){ return String(s).split(/\n\n+/).map(function(p){ return '<p>'+esc(p.trim())+'</p>'; }).join(''); }
  function pad(n){ return (n<10?'0':'')+n; }

  function rerender(){ if(!CURRENT) return;
    if(CURRENT.mode==='home') renderHome(CURRENT.mount);
    else if(CURRENT.mode==='biblio') renderBiblio(CURRENT.mount);
    else renderProject(CURRENT.id, CURRENT.mount); }
  function setLang(l){ LANG=l; try{ localStorage.setItem('qlang',l); }catch(e){} document.documentElement.lang=l; rerender(); }

  function screws(){ return '<span class="screw tl"></span><span class="screw tr"></span>'+
    '<span class="screw bl"></span><span class="screw br"></span>'; }

  function brandDot(){
    return '<svg class="dot" viewBox="0 0 32 32" fill="none" aria-hidden="true">'+
      '<circle cx="16" cy="16" r="14" stroke="#3a3f47" stroke-width="1.2"/>'+
      '<ellipse cx="16" cy="16" rx="14" ry="5" stroke="#2b2f36" stroke-width="1.1"/>'+
      '<line x1="16" y1="16" x2="24" y2="7" stroke="#5cc6ff" stroke-width="2" stroke-linecap="round"/>'+
      '<circle cx="24" cy="7" r="2.6" fill="#5cc6ff"/></svg>';
  }

  /* decorative Bloch sphere(s) for a unit; variant: 'solo' | 'band' */
  function cardViz(variant){
    function sphere(cx,cy,r,ang,col){
      var vx=cx+r*0.72*Math.cos(ang), vy=cy-r*0.72*Math.sin(ang)*0.9-r*0.2;
      return '<circle cx="'+cx+'" cy="'+cy+'" r="'+r+'" fill="rgba(120,130,150,.05)" stroke="rgba(255,255,255,.13)"/>'+
        '<ellipse cx="'+cx+'" cy="'+cy+'" rx="'+r+'" ry="'+(r*0.34)+'" stroke="rgba(255,255,255,.11)" fill="none"/>'+
        '<line x1="'+cx+'" y1="'+cy+'" x2="'+vx.toFixed(1)+'" y2="'+vy.toFixed(1)+'" stroke="'+col+'" stroke-width="2" stroke-linecap="round"/>'+
        '<circle cx="'+vx.toFixed(1)+'" cy="'+vy.toFixed(1)+'" r="3.2" fill="'+col+'"/>';
    }
    if(variant==='band'){
      var s='<svg viewBox="0 0 130 118">';
      var cols=['#5cc6ff','#46d17f','#ffb000','#ff5a4f'];
      var pos=[[34,42],[92,40],[40,86],[96,84]];
      s+='<g stroke="rgba(255,176,0,.35)" stroke-width="1" stroke-dasharray="3 3">';
      s+='<line x1="34" y1="42" x2="92" y2="40"/><line x1="40" y1="86" x2="96" y2="84"/>'+
         '<line x1="34" y1="42" x2="40" y2="86"/><line x1="92" y1="40" x2="96" y2="84"/></g>';
      for(var i=0;i<4;i++){ s+=sphere(pos[i][0],pos[i][1],20,0.6+i*1.3,cols[i]); }
      s+='</svg>'; return s;
    }
    return '<svg viewBox="0 0 130 118">'+sphere(65,60,44,0.9,'#5cc6ff')+'</svg>';
  }

  function qtags(arr){
    return (arr||[]).map(function(t){
      var c='qchip';
      if(t.indexOf('x:')===0){ c+=' x'; t=t.slice(2); }
      else if(t.indexOf('hz:')===0){ c+=' hz'; t=t.slice(3); }
      return '<span class="'+c+'">'+esc(t)+'</span>';
    }).join('');
  }

  function bibList(){
    return (window.BIBLIO||[]).map(function(b){
      return '<li><span class="bib__a">'+esc(b.authors)+'</span>, '+
        '<a href="'+esc(b.url)+'" target="_blank" rel="noopener">'+esc(b.title)+'</a>. '+
        '<span class="bib__w">'+esc(b.where)+' ('+b.year+').</span></li>';
    }).join('');
  }

  function langBtn(){ return '<button class="langbtn" id="qlang">'+(LANG==='it'?'EN':'IT')+'</button>'; }
  function wireLang(){ var b=document.getElementById('qlang'); if(b) b.addEventListener('click', function(){ setLang(LANG==='it'?'en':'it'); }); }

  /* ============================================================ HOME */
  function renderHome(mount){
    var P = window.PROJECTS || [];
    CURRENT={mode:'home',mount:mount}; document.documentElement.lang=LANG;
    var units = P.map(function(p,k){
      var s=STAT[p.status]||STAT.standby;
      var href = p.status==='standby' ? null : (p.id+'/');
      var inner = screws()+
        '<div class="unit__top"><span class="led '+s[2]+'"></span>'+
          '<span class="unit__id">UNIT '+pad(k+1)+'</span>'+
          '<span class="unit__stat '+s[0]+'">'+s[1]+'</span></div>'+
        '<div class="unit__viz">'+cardViz(p.viz||'solo')+'</div>'+
        '<h3 class="unit__name">'+esc(p.title)+'</h3>'+
        '<p class="unit__desc">'+esc(field(p,'subtitle'))+'</p>'+
        '<div class="unit__tags">'+qtags(field(p,'qtags'))+'</div>';
      return href ? '<a class="unit" href="'+href+'">'+inner+'</a>'
                  : '<div class="unit is-standby">'+inner+'</div>';
    }).join('');

    mount.innerHTML =
      '<div class="wrap">'+
        '<div class="topbar"><span class="brand">'+brandDot()+
          '<span>QuSound <small>QuantumJazzStation</small></span></span>'+
          '<span class="sp"></span>'+langBtn()+'</div>'+
        '<header class="hero">'+
          '<div class="hero__plate engrave">MODEL Q·1<br>REV 2026 · S/N ψ-0001</div>'+
          '<p class="presents"><a href="https://canjioh.github.io/n_c_c_n/" target="_blank" rel="noopener">'+T('presents')+'</a></p>'+
          '<p class="eyebrow">'+T('eyebrow')+'</p>'+
          '<h1 class="engrave">'+T('heroTitle')+'</h1>'+
          '<p class="lede">'+T('lede')+'</p>'+
        '</header>'+
        '<div class="hazard"></div>'+
        '<div class="manifesto"><b>◇</b><span>'+T('manifesto')+'</span></div>'+
        '<div class="sec-label">'+T('modules')+'</div>'+
        '<div class="rack">'+units+'</div>'+
        '<div class="sec-label">'+T('system')+'</div>'+
        '<div class="sysrow">'+
          '<a href="about.html">◦ '+T('about')+', <span style="color:var(--faint)">'+T('aboutd')+'</span></a>'+
          '<a href="bibliography.html">◦ '+T('biblio')+', <span style="color:var(--faint)">'+T('bibliod')+'</span></a>'+
        '</div>'+
        '<footer class="foot"><span>qubit · '+T('foot')+'</span><span class="sp"></span>'+
          '<span>'+T('sib')+': <a href="https://canjioh.github.io/n_c_c_n/" target="_blank" rel="noopener">n_c_c_n</a></span></footer>'+
      '</div>';
    wireLang();
  }

  /* ============================================================ PROJECT */
  function renderProject(id, mount){
    var P = window.PROJECTS || [];
    CURRENT={mode:'project',id:id,mount:mount}; document.documentElement.lang=LANG;
    var p=null; for(var i=0;i<P.length;i++){ if(P[i].id===id){ p=P[i]; break; } }
    if(!p){
      mount.innerHTML='<div class="wrap"><div class="doc"><a class="backlink" href="../">'+T('back')+'</a>'+
        '<h1>404</h1><p class="prose">module "'+esc(id)+'" not in catalog.</p></div></div>';
      return;
    }
    var sims=(p.sims||[]);
    var launch = sims.length ? sims.map(function(sm){
      var off = sm.status!=='online';
      return '<a class="launch__btn'+(off?' is-off':'')+'" href="'+esc(sm.file)+'">'+
        '<span class="launch__play">▶</span>'+
        '<span class="launch__t"><b>'+esc(field(sm,'title'))+'</b>'+
        '<span>'+esc(field(sm,'desc'))+'</span></span></a>';
    }).join('') : '<p class="prose">'+T('standbyNote')+'.</p>';

    var principle = field(p,'principle');
    var pr = principle ? '<div class="qcallout"><span class="qcallout__k">'+T('principleK')+'</span>'+
      '<span class="qcallout__t">'+principle+'</span></div>' : '';

    mount.innerHTML =
      '<div class="wrap">'+
        '<div class="topbar"><a class="brand" href="../" style="color:inherit">'+brandDot()+
          '<span>QuSound <small>/ '+esc(id)+'</small></span></a>'+
          '<span class="sp"></span>'+langBtn()+'</div>'+
        '<div class="doc">'+
          '<a class="backlink" href="../">'+T('back')+'</a>'+
          '<h1 class="engrave">'+esc(p.title)+'</h1>'+
          '<p class="sub">'+esc(field(p,'subtitle'))+'</p>'+
          (field(p,'credit')?'<p class="credit">— '+esc(field(p,'credit'))+'</p>':'')+
          pr+
          (field(p,'abstract')?'<div class="prose lead">'+paras(field(p,'abstract'))+'</div>':'')+
          '<div class="h2">'+T('instruments')+'</div>'+
          '<div class="launch">'+launch+'</div>'+
          (field(p,'math')?'<div class="h2">'+T('theory')+'</div><div class="prose">'+paras(field(p,'math'))+'</div>':'')+
          '<footer class="foot"><span><a href="../">'+T('back')+'</a></span></footer>'+
        '</div>'+
      '</div>';
    wireLang();
  }

  /* ============================================================ BIBLIOGRAPHY */
  function renderBiblio(mount){
    CURRENT={mode:'biblio',mount:mount}; document.documentElement.lang=LANG;
    mount.innerHTML =
      '<div class="wrap">'+
        '<div class="topbar"><a class="brand" href="./" style="color:inherit">'+brandDot()+
          '<span>QuSound <small>/ '+esc(T('biblio').toLowerCase())+'</small></span></a>'+
          '<span class="sp"></span>'+langBtn()+'</div>'+
        '<div class="doc">'+
          '<a class="backlink" href="./">'+T('back')+'</a>'+
          '<h1 class="engrave">'+T('biblio')+'</h1>'+
          '<p class="sub">'+esc(T('biblioIntro'))+'</p>'+
          '<ol class="biblio" style="margin-top:20px">'+bibList()+'</ol>'+
          '<footer class="foot"><span><a href="./">'+T('back')+'</a></span></footer>'+
        '</div>'+
      '</div>';
    wireLang();
  }

  window.Site = { renderHome:renderHome, renderProject:renderProject, renderBiblio:renderBiblio };
})();
