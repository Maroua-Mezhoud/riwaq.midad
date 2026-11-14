/* ==========================================================
   رواق مداد | السكربت
   ========================================================== */

/* ---------- إعدادات سهلة التعديل ---------- */
var CONFIG = {
  instagram: "https://www.instagram.com/riwaq.midad/",
  instagramUser: "riwaq.midad",
  whatsapp: "213674026632",   // رقمك بصيغة دولية بدون + مثل 213550000000 (اتركه فارغًا لإخفاء الزر)
  email: ""       // بريدك (اتركه فارغًا لإخفاء الزر)
};

/* ==========================================================
   الأعمال: لإضافة عمل جديد انسخ كتلة { ... } وعدّلها
   cat:    calligraphy (خط عربي) | web (مواقع)
   title:  ar بالعربية و en بالإنجليزية
   script: نوع الخط (للوحات فقط) بالعربية والإنجليزية
   size:   المقاس: "A5" أو "A4" (للوحات، ويُستعمل في التصفية)
   img:    صورة العمل (للوحات)
   logo:   شعار المشروع (لصفحات الهبوط)
   link:   رابط الصفحة، و domain النص الظاهر تحت البطاقة
   صفحات الهبوط تحتاج فقط: cat, title, logo, link, domain
   ========================================================== */

/* ملاحظات تظهر مرة واحدة في بداية كل قسم بدل تكرارها على كل بطاقة */
var GROUPS = {
  calligraphy:{
    title:{ ar:"لوحات الخط العربي", en:"Arabic calligraphy paintings" },
    notes:{
      ar:["مكتوبة بخط اليد بالحبر", "ورق تركي مزخرف"],
      en:["Handwritten in ink", "Ornamented Turkish paper"]
    }
  },
  web:{
    title:{ ar:"صفحات الهبوط والمواقع", en:"Landing pages & websites" },
    notes:{
      ar:[],
      en:[]
    }
  }
};


/* ==========================================================
   المطبوعات والتصاميم (نماذج للعرض بلا أسعار)
   cat:   cards | bookmarks | giveaways | certificates
   mock:  شكل الصورة التوضيحية؛ أو ضعي img:"assets/works/xxx.webp" لصورة حقيقية
   ========================================================== */
var CGROUPS = {
  cards:{
    title:{ ar:"بطاقات الأعمال", en:"Business cards" },
    notes:{ ar:["تصميم ينسجم مع الهوية البصرية", "ملفات مُعدّة للطباعة"], en:["Designed around the brand identity", "Print-ready files"] }
  },
  bookmarks:{
    title:{ ar:"فواصل الكتب", en:"Bookmarks" },
    notes:{ ar:["بالخط العربي أو بتصميم حديث"], en:["Arabic calligraphy or a modern look"] }
  },
  giveaways:{
    title:{ ar:"التوزيعات", en:"Giveaways & favors" },
    notes:{ ar:["للأعراس والمواليد والمناسبات", "الاسم والعبارة بحسب المناسبة"], en:["Weddings, births and occasions", "Name and wording to suit the occasion"] }
  },
  certificates:{
    title:{ ar:"الشهادات", en:"Certificates" },
    notes:{ ar:["للمدارس والنوادي والفعاليات", "بتصميم رسمي أو بخط اليد"], en:["Schools, clubs and events", "Formal design or handwritten"] }
  }
};

var CATALOG = [
  { cat:"cards", mock:"cards",
    title:{ ar:"بطاقة أعمال", en:"Business card" },
    desc:{ ar:"وجهان بتصميم يناسب هوية النشاط.", en:"A two-sided design that suits the brand." } },
  { cat:"cards", mock:"cards",
    title:{ ar:"بطاقة بخط اليد", en:"Hand-lettered card" },
    desc:{ ar:"الاسم أو الشعار بالخط العربي.", en:"A name or logo in Arabic calligraphy." } },

  { cat:"bookmarks", mock:"bookmark",
    title:{ ar:"فواصل مطبوعة", en:"Printed bookmarks" },
    desc:{ ar:"بتصاميم متنوعة تناسب القرّاء.", en:"In varied designs for readers." } },
  { cat:"bookmarks", mock:"bookmark",
    title:{ ar:"فاصل بخط اليد", en:"Hand-lettered bookmark" },
    desc:{ ar:"عبارة أو اسم بالخط العربي.", en:"A phrase or a name in Arabic calligraphy." } },
  { cat:"bookmarks", mock:"bookmark",
    title:{ ar:"طقم فواصل", en:"Bookmark set" },
    desc:{ ar:"خمسة فواصل بتصاميم مختلفة.", en:"Five bookmarks in different designs." } },

  { cat:"giveaways", mock:"giveaway",
    title:{ ar:"بطاقات شكر", en:"Thank-you tags" },
    desc:{ ar:"بتصميم يناسب المناسبة.", en:"Designed to match the occasion." } },
  { cat:"giveaways", mock:"giveaway",
    title:{ ar:"توزيعات بالخط", en:"Hand-lettered favors" },
    desc:{ ar:"اسم المناسبة بخط اليد على كل قطعة.", en:"The occasion's name handwritten on each piece." } },
  { cat:"giveaways", mock:"giveaway",
    title:{ ar:"ملصقات مخصصة", en:"Custom stickers" },
    desc:{ ar:"لتغليف الهدايا والتوزيعات.", en:"For wrapping gifts and favors." } },

  { cat:"certificates", mock:"certificate",
    title:{ ar:"تصميم شهادة", en:"Certificate design" },
    desc:{ ar:"قالب رسمي أنيق.", en:"A formal, elegant template." } },
  { cat:"certificates", mock:"certificate",
    title:{ ar:"شهادة بخط اليد", en:"Handwritten certificate" },
    desc:{ ar:"الاسم مكتوب بالخط العربي.", en:"The name written in Arabic calligraphy." } }
];

var MARQ = {
  ar:["الخط العربي","التصميم الغرافيكي","بطاقات الأعمال","فواصل الكتب","المطبوعات","التوزيعات","الشهادات","صفحات الهبوط"],
  en:["Arabic calligraphy","Graphic design","Business cards","Bookmarks","Print design","Favors","Certificates","Landing pages"]
};

var DIWANI = { ar:"الديواني", en:"Diwani" };
var THULUTH = { ar:"الثلث", en:"Thuluth" };

var WORKS = [
  {
    cat:"calligraphy",
    title:{ ar:"وظني فيك يا ربي جميل", en:"“My hope in You, my Lord, is beautiful”" },
    script: DIWANI,
    size:"A5",
    img:"assets/works/lawha-4.webp"
  },
  {
    cat:"calligraphy",
    title:{ ar:"لوحة بإطار مزخرف ذهبي وأزرق", en:"Painting with a gold-and-blue ornamental border" },
    script: DIWANI,
    size:"A4",
    img:"assets/works/lawha-1.webp"
  },
  {
    cat:"calligraphy",
    title:{ ar:"وأما بنعمة ربك فحدّث", en:"“And as for the favor of your Lord, proclaim it”" },
    script: DIWANI,
    img:"assets/works/lawha-2.webp"
  },
  {
    cat:"calligraphy",
    title:{ ar:"خديجة", en:"Khadija" },
    script: THULUTH,
    size:"A5",
    img:"assets/works/lawha-3.webp"
  },
  {
    cat:"web",
    title:{ ar:"Rouqi", en:"Rouqi" },
    logo:"assets/works/rouqi-logo.webp",
    link:"https://maroua-mezhoud.github.io/rouqi/",
    domain:"maroua-mezhoud.github.io/rouqi"
  },
  {
    cat:"web",
    title:{ ar:"Sugar Cube", en:"Sugar Cube" },
    logo:"assets/works/sugar-cube-logo.webp",
    link:"https://sugar-cube.netlify.app/",
    domain:"sugar-cube.netlify.app"
  },
  {
    cat:"web",
    title:{ ar:"Tasta Tarz", en:"Tasta Tarz" },
    logo:"assets/works/tasta-tarz-logo.webp",
    link:"https://maroua-mezhoud.github.io/tasta.tarz/",
    domain:"maroua-mezhoud.github.io/tasta.tarz"
  }

];

/* ---------- نصوص الواجهة الديناميكية ---------- */
var UI = {
  ar: {
    all:"الكل", more:"عرض المزيد", cnt:{ calligraphy:"لوحة", web:"صفحة", print:"تصميم" },
    cat:{ calligraphy:"خط عربي", design:"تصميم", web:"موقع" },
    catPlural:{ calligraphy:"خط عربي", design:"تصميم", web:"مواقع" },
    visit:"زيارة الموقع",
    scriptLabel:"نوع الخط: ", sizeLabel:"المقاس: ", cm:"سم", fSize:"المقاس", fScript:"نوع الخط", empty:"لا توجد لوحات بهذه المواصفات حاليًا.", reset:"إزالة التصفية",
    wa:"واتساب", ig:"إنستغرام", mail:"البريد", msgHi:"مرحبًا، أعجبتني أعمالك وأودّ التواصل معك", lbClose:"إغلاق", lbPrev:"السابق", lbNext:"التالي", waFab:"تواصل عبر واتساب"
  },
  en: {
    all:"All", more:"Show more", cnt:{ calligraphy:"paintings", web:"pages", print:"designs" },
    cat:{ calligraphy:"Calligraphy", design:"Design", web:"Website" },
    catPlural:{ calligraphy:"Calligraphy", design:"Design", web:"Websites" },
    visit:"Visit website",
    scriptLabel:"Script: ", sizeLabel:"Size: ", cm:"cm", fSize:"Size", fScript:"Script", empty:"No paintings match these filters right now.", reset:"Clear filters",
    wa:"WhatsApp", ig:"Instagram", mail:"Email", msgHi:"Hello, I like your work and would like to get in touch", lbClose:"Close", lbPrev:"Previous", lbNext:"Next", waFab:"Chat on WhatsApp"
  }
};

/* ==========================================================
   الترجمة: الإنجليزية هنا، أما العربية فتُقرأ من الصفحة نفسها
   ========================================================== */
var EN = {
  title:"Riwaq Midad | Portfolio: Arabic Calligraphy & Design",
  desc:"Riwaq Midad: a portfolio of Arabic calligraphy, graphic design, print design and landing pages.",
  back:"Back", skip:"Skip to content",
  co_t:"About the paintings",
  co_p:"The paintings are written by hand in ink on ornamental paper, in the Diwani and Thuluth scripts. Each one is a single piece that is never repeated.",
  co_l1:"Handwritten in ink on ornamental paper", co_l2:"Verses, poetry, names and dedications", co_l3:"Scripts: Diwani and Thuluth", co_l4:"One unique piece",
  wi_t:"What is a landing page?",
  wi_p1:"A landing page is a single, clean web page that introduces a project or product and leads the visitor to one clear step.",
  wi_p2:"Instead of a large, complicated website, it is a fast page that presents what the project offers clearly, easy to link from an Instagram profile or from ads.",
  wi_l1:"Designed around each project's brand", wi_l2:"Mobile friendly", wi_l3:"Light and dark mode",
  wl_t:"My work", wl_p:"Pages I have built, live online.", hub_eyebrow:"My work", hub_h2:'Browse my <span class="ruq">work</span> and print designs', hub_p:"Pick a section to see everything inside it, neatly in one place.",
  hub_cal_t:"Arabic calligraphy paintings", hub_web_t:"Landing pages", hb_cal:"Handwritten paintings in authentic Arabic scripts.", hb_web:"Pages and sites designed for real projects.",
  cal_h2:'<span class="ruq">Arabic calligraphy</span> paintings', web_h2:'<span class="ruq">Landing</span> pages', hb_open:"Open section",
  hb_services:"Calligraphy, design, print design and websites.", hb_works:"Paintings and websites I have made.", hb_print:"Cards, bookmarks, giveaways and certificates.",
  hb_process:"From idea to finished work.", hb_about:"The story of Riwaq Midad and what I believe in.", hb_contact:"Get in touch.",
  n_services:"Fields", n_print:"Print", n_works:"Works", n_process:"Process", n_about:"About", n_contact:"Contact",
  h1:'Where <span class="ruq">Arabic letters</span> meet design',
  lead:"Handwritten Arabic calligraphy, graphic design, print design and web pages, work that brings tradition and modernity together.",
  cta1:"View works", cta2:"Get in touch",
  chip1:"Arabic calligraphy", chip2:"Graphic design", chip3:"Print design", chip4:"Landing pages",
  k_eyebrow:"Print & stationery",
  k_h2:'Samples of <span class="ruq">print</span> and design',
  k_p:"Cards, bookmarks, favors and certificates, designed with an Arabic touch.",

  s_eyebrow:"Areas of work",
  s_h2:'Fields that blend <span class="ruq">tradition</span> and modernity',
  s_p:"From a hand-lettered painting to a complete web page, every piece is made with attention to detail.",
  sv1_t:"Arabic calligraphy", sv1_p:"Hand-lettered paintings and writing in authentic Arabic scripts.",
  sv1_l1:"Paintings, names and dedications", sv1_l2:"Verses, poetry and phrases", sv1_l3:"Writing for occasion cards",
  sv2_t:"Graphic design", sv2_p:"Visual identities that express a project and introduce it.",
  sv2_l1:"Logos and brand identities", sv2_l2:"Cards, menus and posters", sv2_l3:"Social media designs",
  sv3_t:"Print design", sv3_p:"Carefully designed print pieces on selected paper and materials.",
  sv3_l1:"Paintings and posters", sv3_l2:"Custom cards and gifts", sv3_l3:"Print pieces for projects and events",
  sv4_t:"Landing pages & websites", sv4_p:"Elegant pages that present a project and reach its audience.",
  sv4_l1:"Landing pages for projects", sv4_l2:"Light and dark modes", sv4_l3:"Mobile friendly",

  w_eyebrow:"Portfolio",
  w_h2:'Some of <span class="ruq">my work</span>',

  p_eyebrow:"My process",
  p_h2:'From idea <span class="ruq">to finished work</span>',
  p1_t:"Idea", p1_p:"I start by understanding the idea, the references and the audience.",
  p2_t:"Design", p2_p:"I sketch drafts and choose the script, colours and composition.",
  p3_t:"Execution", p3_p:"I carry the work out in detail and review it stage by stage.",
  p4_t:"Finish", p4_p:"The work comes out finished, digital or printed.",

  a_eyebrow:"About the studio",
  a_h2:'Riwaq <span class="ruq">Midad</span>',
  a_p1:"“Midad” is the ink that letters are written with, and “Riwaq” is a quiet gallery where they are shown. Here Arabic calligraphy meets design, printing and web page making.",
  a_p2:"I believe Arabic letters are beautiful enough to be part of everyday life: on the wall of a home, in a project's brand identity, or on a web page.",
  a_k1:"Arabic calligraphy", a_k2:"Design", a_k3:"Print",

  c_eyebrow:"Contact",
  c_h2:'Get in <span class="ruq">touch</span>',
  c_p:"For collaboration or questions about the work, you can reach me through the channels below.",
  loc:"Bordj Bou Arréridj, Algeria"
};
var ARIA = {
  ar:{ lang:"English", theme:"تبديل الوضع الليلي والنهاري", menu:"القائمة", filters:"تصفية الأعمال" },
  en:{ lang:"العربية", theme:"Toggle light and dark mode", menu:"Menu", filters:"Filter works" }
};

var AR = {};          // تُملأ من الصفحة عند التحميل
var LANG = 'ar';

/* ---------- معرض الأعمال ---------- */
var currentFilter = 'all';

/* صيغة العدد: «لوحتان»، «3 لوحات»، «12 لوحة» */
var CNT_AR = { calligraphy:['لوحة','لوحتان','لوحات','لوحة'], web:['صفحة','صفحتان','صفحات','صفحة'], print:['تصميم','تصميمان','تصاميم','تصميمًا'] };
function countText(n, c){
  if(LANG === 'en') return n + ' ' + UI.en.cnt[c];
  var f = CNT_AR[c];
  if(n === 1) return f[0];
  if(n === 2) return f[1];
  return n + ' ' + (n <= 10 ? f[2] : f[3]);
}
var PAGE_SIZE = 9;                       /* عدد الأعمال المعروضة في كل دفعة */
var WSTATE = {
  calligraphy:{ shown:PAGE_SIZE, f:'all', s:'all' },   /* f: نوع الخط، s: المقاس */
  web:{ shown:PAGE_SIZE, f:'all', s:'all' }
};
var SIZES = { A5:"14.8 × 21", A4:"21 × 29.7" };

function buildWorks(){
  var ui = UI[LANG];
  var arrow = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7M17 8V7H8"/></svg>';

  function card(w){
    var title = w.title[LANG];
    var el = document.createElement('article');
    el.className = 'work reveal in';
    el.dataset.cat = w.cat;
    var thumb = w.logo
      ? '<div class="thumb logo"><img src="'+w.logo+'" alt="'+title+'" loading="lazy"></div>'
      : '<div class="thumb art" tabindex="0" role="button" aria-label="'+title+'"><img src="'+w.img+'" alt="'+title+'" loading="lazy"></div>';
    if(w.link){ thumb = '<a class="thumb-link" href="'+w.link+'" target="_blank" rel="noopener" tabindex="-1" aria-hidden="true">'+thumb+'</a>'; }

    var specs = '';
    if(w.script) specs += '<li><span>'+ui.scriptLabel+w.script[LANG]+'</span></li>';
    if(w.size)   specs += '<li><span>'+ui.sizeLabel+'<bdi dir="ltr">'+w.size+'</bdi>'+(SIZES[w.size] ? ' <span class="dim">(<bdi dir="ltr">'+SIZES[w.size]+'</bdi> '+ui.cm+')</span>' : '')+'</span></li>';
    specs = specs ? '<ul class="specs">'+specs+'</ul>' : '';

    var visit = w.link ? '<div class="visit"><a class="go" href="'+w.link+'" target="_blank" rel="noopener">'+ui.visit+' '+arrow+'</a>'+
              (w.domain ? '<div class="domain">'+w.domain+'</div>' : '')+'</div>' : '';
    el.innerHTML = thumb + '<div class="meta"><h3>'+title+'</h3>'+specs+visit+'</div>';
    return el;
  }

  function chips(group, values, current, label){
    var h = '<button class="filter'+(current==='all'?' active':'')+'" data-g="'+group+'" data-v="all" type="button">'+ui.all+'</button>';
    values.forEach(function(v){
      h += '<button class="filter'+(current===v.key?' active':'')+'" data-g="'+group+'" data-v="'+v.key+'" type="button">'+v.label+'</button>';
    });
    return '<div class="fgroup"><span class="flabel">'+label+'</span><div class="fchips">'+h+'</div></div>';
  }

  /* كل فئة لها صفحتها: ملاحظات، تصفية (المقاس ونوع الخط والمتاحة)، شبكة، وزر «عرض المزيد» */
  ['calligraphy','web'].forEach(function(c){
    var st = WSTATE[c];
    var grid = document.getElementById('grid-'+c), bar = document.getElementById('filters-'+c);
    var more = document.getElementById('more-'+c), notesEl = document.getElementById('notes-'+c);
    if(!grid) return;
    var all = WORKS.filter(function(w){ return w.cat === c; });
    var g = GROUPS[c] || {};
    if(notesEl){
      var nh = ((g.notes && g.notes[LANG]) || []).map(function(n){ return '<li>'+n+'</li>'; }).join('');
      notesEl.innerHTML = nh; notesEl.style.display = nh ? '' : 'none';
    }

    /* القيم الموجودة فعلًا في الأعمال */
    var sizes = [], scripts = [];
    all.forEach(function(w){
      if(w.size && !sizes.some(function(v){ return v.key === w.size; })) sizes.push({ key:w.size, label:w.size });
      if(w.script && !scripts.some(function(v){ return v.key === w.script.ar; })) scripts.push({ key:w.script.ar, label:w.script[LANG] });
    });
    sizes.sort(function(a, b){ return parseInt(b.key.slice(1), 10) - parseInt(a.key.slice(1), 10); });   /* A5 قبل A4 */

    var html = '';
    if(sizes.length > 1)   html += chips('s', sizes, st.s, ui.fSize);
    if(scripts.length > 1) html += chips('f', scripts, st.f, ui.fScript);
    bar.hidden = !html;
    bar.innerHTML = html;
    bar.querySelectorAll('.filter').forEach(function(btn){
      btn.addEventListener('click', function(){
        var gr = btn.dataset.g;
        st[gr] = btn.dataset.v;
        st.shown = PAGE_SIZE; buildWorks();
      });
    });

    var list = all.filter(function(w){
      return (st.f === 'all' || (w.script && w.script.ar === st.f)) &&
             (st.s === 'all' || w.size === st.s);
    });

    grid.innerHTML = '';
    if(!list.length){
      grid.innerHTML = '<div class="empty"><p>'+ui.empty+'</p><button class="btn btn-ghost btn-sm" type="button">'+ui.reset+'</button></div>';
      grid.querySelector('button').addEventListener('click', function(){ st.f = 'all'; st.s = 'all'; st.shown = PAGE_SIZE; buildWorks(); });
    } else {
      list.slice(0, st.shown).forEach(function(w){ grid.appendChild(card(w)); });
    }

    var left = list.length - st.shown;
    more.hidden = left <= 0;
    if(left > 0){
      more.textContent = ui.more + ' (' + left + ')';
      more.onclick = function(){ st.shown += PAGE_SIZE; buildWorks(); };
    }
    var cnt = document.getElementById('count-'+c);
    if(cnt) cnt.textContent = countText(all.length, c);
  });

  var pc = document.getElementById('count-print');
  if(pc) pc.textContent = countText(CATALOG.length, 'print');
}


/* ---------- المطبوعات: صور توضيحية مبنية بالـ CSS ---------- */
function mockup(type){
  var L = '<img class="mk-logo" src="assets/wordmark-light.webp" alt="">';
  var D = '<img class="mk-logo" src="assets/wordmark-dark.webp" alt="">';
  var parts = {
    cards:
      '<div class="paper pc c-back">'+D+'<span class="mk-line"></span></div>'+
      '<div class="paper pc c-front">'+L+'<span class="mk-small">RIWAQ MIDAD</span></div>',
    bookmark:
      '<div class="paper bm bm-dark"><i class="hole"></i>'+D+'<span class="mk-diamond"></span></div>'+
      '<div class="paper bm bm-cream"><i class="hole"></i><b class="mk-word">اقرأ</b><span class="mk-diamond"></span></div>'+
      '<div class="paper bm bm-gold"><i class="hole"></i>'+L+'<span class="mk-diamond"></span></div>',
    print:
      '<div class="paper sh sh-3"></div><div class="paper sh sh-2"></div>'+
      '<div class="paper sh sh-1"><i class="bar"></i><i class="ln"></i><span class="dots"><u></u><u></u><u></u><u></u></span></div>',
    giveaway:
      '<div class="paper tag tag-b"><i class="hole"></i><b class="mk-word">بارك الله</b></div>'+
      '<div class="paper tag tag-a"><i class="hole"></i><b class="mk-word">شكرًا لكم</b><span class="mk-diamond"></span></div>'+
      '<div class="sticker">'+D+'</div>',
    certificate:
      '<div class="paper cert"><i class="frame"></i><b class="c-title">شهادة تقدير</b>'+
      '<span class="c-sub">تُمنح هذه الشهادة إلى</span><span class="c-name"></span>'+
      '<span class="seal"><u></u></span></div>'
  };
  return '<div class="thumb mock mock-'+type+'" aria-hidden="true">'+(parts[type]||'')+'</div>';
}

function buildCatalog(animate){
  var root = document.getElementById('catalog-groups');
  var pills = document.getElementById('catalog-pills');
  if(!root) return;
  var ui = UI[LANG];
  var inCls = animate ? '' : ' in';
  root.innerHTML = '';
  var order = ['cards','bookmarks','giveaways','certificates'];
  var pillHtml = '';

  order.forEach(function(c){
    var items = CATALOG.filter(function(w){ return w.cat === c; });
    if(!items.length) return;
    var g = CGROUPS[c];
    pillHtml += '<a class="pill" href="#g-'+c+'">'+g.title[LANG]+'</a>';

    var sec = document.createElement('div');
    sec.className = 'group';
    sec.id = 'g-' + c;
    var notes = g.notes[LANG] || [];
    sec.innerHTML = '<div class="group-head reveal'+inCls+'"><h3>'+g.title[LANG]+'</h3>'+
      (notes.length ? '<ul class="notes">'+notes.map(function(n){ return '<li>'+n+'</li>'; }).join('')+'</ul>' : '')+'</div>';

    var grid = document.createElement('div');
    grid.className = 'group-grid';
    items.forEach(function(w){
      var title = w.title[LANG];
      var el = document.createElement('article');
      el.className = 'work reveal' + inCls;
      var visual = w.img ? '<div class="thumb art"><img src="'+w.img+'" alt="'+title+'" loading="lazy"></div>' : mockup(w.mock);
      el.innerHTML = visual +
        '<div class="meta"><h3>'+title+'</h3><p>'+w.desc[LANG]+'</p></div>';
      grid.appendChild(el);
    });
    sec.appendChild(grid);
    root.appendChild(sec);
  });
  pills.innerHTML = pillHtml;
}

/* ---------- شريط الكلمات المتحرك ---------- */
function buildMarquee(){
  var track = document.getElementById('marquee-track');
  if(!track) return;
  var words = MARQ[LANG], html = '';
  for(var r = 0; r < 4; r++){
    words.forEach(function(w){ html += '<span>'+w+'</span><i></i>'; });
  }
  track.innerHTML = html;
}

/* ---------- أزرار التواصل ---------- */
function buildContact(){
  var box = document.getElementById('contact-buttons');
  var ui = UI[LANG];
  var ig = '<svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".6"/></svg>';
  var wa = '<svg viewBox="0 0 24 24"><path d="M21 12a9 9 0 0 1-13.4 7.8L3 21l1.3-4.4A9 9 0 1 1 21 12z"/><path d="M9 9c0 3 3 6 6 6l1-1.5-2-1-1 .8c-.8-.4-1.6-1.2-2-2l.8-1-1-2z"/></svg>';
  var ml = '<svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>';
  var html = '';
  if(CONFIG.whatsapp) html += '<a class="btn btn-primary" target="_blank" rel="noopener" href="https://wa.me/'+CONFIG.whatsapp+'">'+wa+ui.wa+'</a>';
  html += '<a class="btn '+(CONFIG.whatsapp?'btn-ghost':'btn-primary')+'" target="_blank" rel="noopener" href="'+CONFIG.instagram+'">'+ig+ui.ig+'</a>';
  if(CONFIG.email) html += '<a class="btn btn-ghost" href="mailto:'+CONFIG.email+'">'+ml+ui.mail+'</a>';
  box.innerHTML = html;
}

/* ---------- تبديل اللغة (عربي / English) ---------- */
(function(){
  var root = document.documentElement;
  var langBtn = document.getElementById('lang-toggle');
  var themeBtn = document.getElementById('theme-toggle');
  var menuBtn = document.getElementById('menu-btn');
  var metaDesc = document.getElementById('meta-desc');
  var nodes = document.querySelectorAll('[data-i18n]');

  /* حفظ النص العربي الأصلي */
  nodes.forEach(function(el){ AR[el.dataset.i18n] = el.innerHTML; });
  AR.title = document.title;
  AR.desc = metaDesc.getAttribute('content');

  function setLang(l, save){
    LANG = l;
    var dict = (l === 'en') ? EN : AR;
    root.lang = l;
    root.dir = (l === 'en') ? 'ltr' : 'rtl';
    nodes.forEach(function(el){
      var v = dict[el.dataset.i18n];
      if(v !== undefined) el.innerHTML = v;
    });
    document.title = dict.title;
    metaDesc.setAttribute('content', dict.desc);
    langBtn.textContent = (l === 'en') ? 'ع' : 'EN';
    langBtn.setAttribute('aria-label', ARIA[l].lang);
    langBtn.setAttribute('title', ARIA[l].lang);
    themeBtn.setAttribute('aria-label', ARIA[l].theme);
    menuBtn.setAttribute('aria-label', ARIA[l].menu);
    buildWorks(false);
    buildCatalog(false);
    buildMarquee();
    buildContact(); buildFab();
    if(save){ try{ localStorage.setItem('midad-lang', l); }catch(e){} }
  }

  langBtn.addEventListener('click', function(){ setLang(LANG === 'ar' ? 'en' : 'ar', true); });

  var saved = null;
  try{ saved = localStorage.getItem('midad-lang'); }catch(e){}
  if(saved === 'en'){ setLang('en', false); }
  else { buildWorks(true); buildCatalog(true); buildMarquee(); buildContact(); buildFab(); }
})();

/* ---------- الوضع الفاتح / الداكن (مع انتقال دائري) ---------- */
var REDUCED = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
(function(){
  var root = document.documentElement;
  var meta = document.getElementById('theme-color');
  function sync(){ meta.setAttribute('content', root.getAttribute('data-theme') === 'dark' ? '#15110e' : '#f4ecda'); }
  sync();
  var btn = document.getElementById('theme-toggle');
  btn.addEventListener('click', function(){
    var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    function apply(){
      root.setAttribute('data-theme', next);
      try{ localStorage.setItem('midad-theme', next); }catch(e){}
      sync();
    }
    if(document.startViewTransition && !REDUCED){
      var r = btn.getBoundingClientRect();
      root.style.setProperty('--vx', (r.left + r.width / 2) + 'px');
      root.style.setProperty('--vy', (r.top + r.height / 2) + 'px');
      document.startViewTransition(apply);
    } else { apply(); }
  });
})();

/* ---------- قائمة الجوال ---------- */
(function(){
  var btn = document.getElementById('menu-btn'), links = document.getElementById('links');
  btn.addEventListener('click', function(){
    var open = links.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
  });
  links.querySelectorAll('a').forEach(function(a){
    a.addEventListener('click', function(){ links.classList.remove('open'); btn.setAttribute('aria-expanded','false'); });
  });
})();

/* ---------- ظهور تدريجي مع تتابع ---------- */
(function(){
  /* تأخير متتابع لعناصر كل مجموعة */
  [['.hero .reveal', .11], ['.services .card', .09], ['.steps .step', .12],
   ['.group-grid', .1], ['.skills span', .06], ['.chips .chip', .07]].forEach(function(g){
    var sel = g[0], gap = g[1];
    if(sel === '.group-grid'){
      document.querySelectorAll(sel).forEach(function(grid){
        grid.querySelectorAll('.reveal').forEach(function(el, i){ el.style.setProperty('--d', (i * gap) + 's'); });
      });
    } else {
      document.querySelectorAll(sel).forEach(function(el, i){ el.style.setProperty('--d', (i * gap) + 's'); });
    }
  });

  var items = document.querySelectorAll('.reveal');
  if(REDUCED || !('IntersectionObserver' in window)){ items.forEach(function(i){ i.classList.add('in'); }); return; }
  var io = new IntersectionObserver(function(entries){
    entries.forEach(function(e){ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold:.12, rootMargin:'0px 0px -6% 0px' });
  items.forEach(function(i){ io.observe(i); });
})();

/* ---------- شريط التقدم + ظل الرأس ---------- */
(function(){
  var bar = document.getElementById('progress');
  var nav = document.querySelector('.nav');
  var ticking = false;
  function update(){
    var h = document.documentElement.scrollHeight - window.innerHeight;
    var p = h > 0 ? Math.min(1, window.scrollY / h) : 0;
    bar.style.transform = 'scaleX(' + p + ')';
    nav.classList.toggle('scrolled', window.scrollY > 20);
    ticking = false;
  }
  window.addEventListener('scroll', function(){ if(!ticking){ ticking = true; requestAnimationFrame(update); } }, { passive:true });
  window.addEventListener('resize', update);
  update();
})();

/* ---------- إمالة البطاقات ثلاثية الأبعاد مع المؤشر ---------- */
(function(){
  if(REDUCED || !window.matchMedia || !matchMedia('(hover:hover) and (pointer:fine)').matches) return;
  var cur = null;
  function reset(el){ if(!el) return; el.classList.remove('tilting'); el.style.setProperty('--rx','0deg'); el.style.setProperty('--ry','0deg'); }
  document.addEventListener('pointermove', function(e){
    var el = e.target.closest ? e.target.closest('.work, .card') : null;
    if(cur && cur !== el) reset(cur);
    cur = el;
    if(!el) return;
    var r = el.getBoundingClientRect();
    var x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
    el.classList.add('tilting');
    el.style.setProperty('--ry', (x * 7).toFixed(2) + 'deg');
    el.style.setProperty('--rx', (-y * 7).toFixed(2) + 'deg');
  }, { passive:true });
  document.addEventListener('pointerleave', function(){ reset(cur); cur = null; });
})();

/* ---------- تموّج عند الضغط على الأزرار ---------- */
document.addEventListener('click', function(e){
  var b = e.target.closest ? e.target.closest('.btn') : null;
  if(!b || REDUCED) return;
  var r = b.getBoundingClientRect(), d = Math.max(r.width, r.height) * 2;
  var s = document.createElement('span');
  s.className = 'ripple';
  s.style.width = s.style.height = d + 'px';
  s.style.left = (e.clientX - r.left - d / 2) + 'px';
  s.style.top = (e.clientY - r.top - d / 2) + 'px';
  b.appendChild(s);
  setTimeout(function(){ s.remove(); }, 700);
});

document.getElementById('year').textContent = new Date().getFullYear();


/* ---------- المعارض والمطبوعات كصفحات مستقلة (تنقّل بالرابط #) ---------- */
(function(){
  var pages = document.querySelectorAll('.page');
  var navLinks = document.querySelectorAll('#links a');
  var first = true, userMoved = false;
  ['wheel','touchstart','keydown'].forEach(function(ev){ window.addEventListener(ev, function(){ userMoved = true; }, { passive:true, once:true }); });
  function route(){
    var id = decodeURIComponent((location.hash || '').slice(1));
    var sub = null;
    if(id.indexOf('g-') === 0){ sub = id; id = 'print'; }
    var target = null;
    pages.forEach(function(p){ var on = p.id === id; p.classList.toggle('active', on); if(on) target = p; });
    document.body.classList.toggle('in-page', !!target);
    navLinks.forEach(function(a){ a.classList.toggle('current', !!target && a.getAttribute('href') === '#' + id); });
    var ddb = document.getElementById('dd-btn'); if(ddb) ddb.classList.toggle('current', !!target);
    var el = sub ? document.getElementById(sub) : (!target && id && id !== 'top' ? document.getElementById(id) : null);
    if(el){ el.scrollIntoView({ behavior: first ? 'auto' : 'smooth', block:'start' }); }
    else { window.scrollTo({ top:0, behavior:'instant' }); }
    first = false;
  }
  /* بعد تحميل الصور والخطوط يتغير ارتفاع الصفحة: نعيد الانتقال إلى القسم المطلوب إن لم يتحرك الزائر */
  function settle(){
    var id = decodeURIComponent((location.hash || '').slice(1));
    var el = id && id !== 'top' && !document.body.classList.contains('in-page') ? document.getElementById(id) : null;
    if(el && !userMoved) el.scrollIntoView({ behavior:'auto', block:'start' });
  }
  window.addEventListener('load', settle);
  if(document.fonts && document.fonts.ready) document.fonts.ready.then(settle);
  window.addEventListener('hashchange', route);
  route();
})();


/* ---------- الشريط العلوي: القائمة المنسدلة، التمييز، ظهور الشعار الصغير ---------- */
(function(){
  var nav = document.querySelector('.nav'), logo = document.querySelector('.hero-logo');
  var dd = document.getElementById('dd'), ddb = document.getElementById('dd-btn');
  var links = document.querySelectorAll('#links a');
  var ids = ['services','showcase','process','about','contact'];
  var endY = 0, navH = 68;

  /* القائمة المنسدلة */
  function closeDD(){ dd.classList.remove('open'); ddb.setAttribute('aria-expanded','false'); }
  ddb.addEventListener('click', function(e){
    e.stopPropagation();
    var o = dd.classList.toggle('open'); ddb.setAttribute('aria-expanded', o);
  });
  document.addEventListener('click', function(e){ if(!dd.contains(e.target)) closeDD(); });
  document.addEventListener('keydown', function(e){ if(e.key === 'Escape') closeDD(); });
  dd.querySelectorAll('a').forEach(function(a){ a.addEventListener('click', closeDD); });

  function pageTop(el){ var t = 0; while(el){ t += el.offsetTop; el = el.offsetParent; } return t; }   /* لا تتأثر بالتحويلات */
  function measure(){ navH = nav.offsetHeight; endY = Math.max(120, pageTop(logo) + logo.offsetHeight * .8 - navH); }

  function update(){
    var inPage = document.body.classList.contains('in-page');
    var y = window.scrollY;
    var p = inPage ? 1 : Math.min(1, Math.max(0, y / endY));
    /* الشعار الكبير يصغر ويخفت، والصغير يظهر في الشريط */
    if(!REDUCED) logo.style.setProperty('--sp', inPage ? 0 : p.toFixed(3));
    var bp = Math.min(1, Math.max(0, (p - .62) / .38));
    nav.style.setProperty('--bp', bp.toFixed(3));
    nav.classList.toggle('brand-off', bp < .5);
    nav.classList.toggle('at-top', !inPage && y < 12);
    if(inPage) return;
    /* تمييز القسم الحالي أثناء التمرير */
    var active = null, line = navH + 90;
    ids.forEach(function(id){ var el = document.getElementById(id); if(el && el.getBoundingClientRect().top <= line) active = id; });
    links.forEach(function(a){ a.classList.toggle('current', active !== null && a.getAttribute('href') === '#' + active); });
    ddb.classList.toggle('current', active === 'showcase');
  }
  var tick = false;
  window.addEventListener('scroll', function(){ if(!tick){ tick = true; requestAnimationFrame(function(){ update(); tick = false; }); } }, { passive:true });
  window.addEventListener('resize', function(){ measure(); update(); });
  window.addEventListener('hashchange', function(){ setTimeout(function(){ measure(); update(); }, 0); });
  window.addEventListener('load', function(){ measure(); update(); });
  measure(); update();
})();

/* ---------- الشعار: ميل خفيف ووهج يتبعان المؤشر (الحاسوب فقط) ---------- */
(function(){
  if(REDUCED || !window.matchMedia || !matchMedia('(hover:hover) and (pointer:fine)').matches) return;
  var hero = document.querySelector('.hero'), logo = hero && hero.querySelector('.hero-logo');
  if(!logo) return;
  hero.addEventListener('pointermove', function(e){
    var r = hero.getBoundingClientRect();
    var x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
    hero.style.setProperty('--gx', (x * 100).toFixed(1) + '%');
    hero.style.setProperty('--gy', (y * 100).toFixed(1) + '%');
    logo.style.transform = 'perspective(1000px) rotateY(' + ((x - .5) * 9).toFixed(2) + 'deg) rotateX(' + (-(y - .5) * 7).toFixed(2) + 'deg)';
  }, { passive:true });
  hero.addEventListener('pointerleave', function(){
    logo.style.transform = '';
    hero.style.removeProperty('--gx'); hero.style.removeProperty('--gy');
  });
})();


/* نص الواجهة يظهر بعد انتهاء كتابة الشعار */
(function(){
  document.querySelectorAll('.hero .reveal').forEach(function(el, i){ el.style.setProperty('--d', (2.2 + i * .12).toFixed(2) + 's'); });
})();


/* ==========================================================
   زر واتساب العائم + رابط «انتقل إلى المحتوى»
   ========================================================== */
function buildFab(){
  var ui = UI[LANG], el = document.getElementById('fab-wa');
  if(!CONFIG.whatsapp){ if(el) el.remove(); return; }
  if(!el){
    el = document.createElement('a'); el.id = 'fab-wa'; el.className = 'fab-wa'; el.target = '_blank'; el.rel = 'noopener';
    el.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 0 0-8.5 15.2L2 22l4.9-1.4A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-2.9.8.8-2.8-.2-.3A8.2 8.2 0 1 1 12 20.200zm4.500-6.100c-.2-.1-1.500-.7-1.700-.8s-.4-.1-.6.100-.7.8-.8 1-.3.200-.5.100a6.700 6.700 0 0 1-3.300-2.900c-.3-.4.300-.4.700-1.300.1-.2 0-.3 0-.5l-.8-1.900c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 2.800 2.800 0 0 0-.9 2 4.800 4.800 0 0 0 1 2.600 10.800 10.800 0 0 0 4.100 3.600c1.500.6 2.200.7 3 .6a2.600 2.600 0 0 0 1.700-1.200 2.100 2.100 0 0 0 .1-1.200c-.1-.1-.2-.2-.5-.3z"/></svg>';
    document.body.appendChild(el);
    var c = document.getElementById('contact');
    if('IntersectionObserver' in window && c){
      new IntersectionObserver(function(en){ el.classList.toggle('away', en[0].isIntersecting && !document.body.classList.contains('in-page')); }, { threshold:.35 }).observe(c);
    }
  }
  el.href = 'https://wa.me/' + CONFIG.whatsapp + '?text=' + encodeURIComponent(ui.msgHi);
  el.setAttribute('aria-label', ui.waFab);
}
document.getElementById('skip').addEventListener('click', function(e){
  e.preventDefault();
  var t = document.querySelector('.page.active') || document.getElementById('services');
  if(!t) return;
  t.setAttribute('tabindex','-1'); t.focus(); t.scrollIntoView({ block:'start' });
});

/* ==========================================================
   عارض اللوحات: تكبير لرؤية تفاصيل الخط، تنقل، سحب، لوحة المفاتيح
   ========================================================== */
(function(){
  var lb = document.createElement('div');
  lb.className = 'lb'; lb.setAttribute('role','dialog'); lb.setAttribute('aria-modal','true');
  lb.innerHTML = '<button class="lb-x" type="button"></button><button class="lb-nav lb-prev" type="button"></button><button class="lb-nav lb-next" type="button"></button>' +
                 '<div class="lb-stage"><img alt=""></div><div class="lb-cap"><strong></strong><span></span></div>';
  document.body.appendChild(lb);
  var stage = lb.querySelector('.lb-stage'), img = stage.querySelector('img'), cap = lb.querySelector('.lb-cap');
  var bx = lb.querySelector('.lb-x'), bp = lb.querySelector('.lb-prev'), bn = lb.querySelector('.lb-next');
  var items = [], idx = 0, opener = null, isOpen = false;

  function rtl(){ return document.documentElement.dir === 'rtl'; }
  function labels(){ var ui = UI[LANG]; bx.setAttribute('aria-label', ui.lbClose); bp.setAttribute('aria-label', ui.lbPrev); bn.setAttribute('aria-label', ui.lbNext); }
  function show(i){
    idx = (i + items.length) % items.length;
    var it = items[idx];
    lb.classList.remove('zoomed'); stage.scrollTop = 0; stage.scrollLeft = 0;
    img.src = it.src; img.alt = it.title;
    cap.firstChild.textContent = it.title; cap.lastChild.textContent = it.meta;
    lb.setAttribute('aria-label', it.title);
    var many = items.length > 1; bp.hidden = bn.hidden = !many;
    if(many){ var n = new Image(); n.src = items[(idx + 1) % items.length].src; }
  }
  function open(card, from){
    items = [].slice.call(card.parentNode.querySelectorAll('.work')).map(function(w){
      var t = w.querySelector('.thumb.art img');
      return t ? { src:t.getAttribute('src'), title:w.querySelector('h3').textContent,
        meta:[].slice.call(w.querySelectorAll('.specs li')).map(function(li){ return li.textContent.replace(/\s*\(.*?\)/,'').replace(/\s+/g,' ').trim(); }).join('  ·  '), el:w } : null;
    }).filter(Boolean);
    var i = 0; items.forEach(function(it, k){ if(it.el === card) i = k; });
    opener = from; labels(); show(i);
    lb.classList.add('open'); document.body.classList.add('lb-open'); isOpen = true; bx.focus();
  }
  function close(){
    if(!isOpen) return;
    lb.classList.remove('open', 'zoomed'); document.body.classList.remove('lb-open'); isOpen = false;
    if(opener) opener.focus();
  }
  function step(d){ show(idx + d); }

  document.addEventListener('click', function(e){
    var t = e.target.closest && e.target.closest('#grid-calligraphy .thumb.art');
    if(t) open(t.closest('.work'), t);
  });
  document.addEventListener('keydown', function(e){
    var t = e.target.closest && e.target.closest('#grid-calligraphy .thumb.art');
    if(!isOpen && t && (e.key === 'Enter' || e.key === ' ')){ e.preventDefault(); open(t.closest('.work'), t); return; }
    if(!isOpen) return;
    if(e.key === 'Escape') close();
    else if(e.key === 'ArrowLeft') step(rtl() ? 1 : -1);
    else if(e.key === 'ArrowRight') step(rtl() ? -1 : 1);
    else if(e.key === 'Tab'){
      var f = [bx, bp, bn].filter(function(b){ return !b.hidden; }), k = f.indexOf(document.activeElement);
      e.preventDefault(); f[(k + (e.shiftKey ? -1 : 1) + f.length) % f.length].focus();
    }
  });
  bx.addEventListener('click', close);
  bp.addEventListener('click', function(){ step(-1); });
  bn.addEventListener('click', function(){ step(1); });
  stage.addEventListener('click', function(e){
    if(e.target !== img){ close(); return; }
    var r = img.getBoundingClientRect(), fx = (e.clientX - r.left) / r.width, fy = (e.clientY - r.top) / r.height;
    if(lb.classList.toggle('zoomed')){
      var ir = img.getBoundingClientRect(), sr = stage.getBoundingClientRect();
      stage.scrollLeft += (ir.left + ir.width * fx) - (sr.left + sr.width / 2);
      stage.scrollTop  += (ir.top + ir.height * fy) - (sr.top + sr.height / 2);
    }
  });
  var sx = 0, sy = 0;
  stage.addEventListener('touchstart', function(e){ sx = e.touches[0].clientX; sy = e.touches[0].clientY; }, { passive:true });
  stage.addEventListener('touchend', function(e){
    if(lb.classList.contains('zoomed')) return;
    var dx = e.changedTouches[0].clientX - sx, dy = e.changedTouches[0].clientY - sy;
    if(Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy) * 1.5) step((rtl() ? dx > 0 : dx < 0) ? 1 : -1);
  }, { passive:true });
})();

/* ==========================================================
   مشروع مميز: Physics Club (محاكاة لورنز حية خلف اللوحة)
   ========================================================== */
(function(){
  var box = document.getElementById('featured');
  if(!box) return;
  var SITE = "https://maroua-mezhoud.github.io/physics-club/", DOMAIN = "maroua-mezhoud.github.io/physics-club";
  var T = {
    ar:{ tag:"مشروع مميز", sub:"نادي الفيزياء · جامعة محمد البشير الإبراهيمي، برج بوعريريج",
         text:"موقع علمي تفاعلي صمّمناه وبرمجناه لنادي الفيزياء. يجمع الفيزياء بالبرمجة، وفيه محاكاة حية تعمل داخل المتصفح: نظام لورنز المضطرب، ومدارات كواكب تطلقها بإصبعك.",
         chips:["محاكاة فيزيائية حية","تفاعل بالسحب واللمس","برمجة مخصّصة"], cta:"زيارة الموقع" },
    en:{ tag:"Featured project", sub:"Physics Club · University of Mohamed El Bachir El Ibrahimi, Bordj Bou Arreridj",
         text:"An interactive science website we designed and coded for the university physics club. It blends physics with programming, with live simulations running in the browser: the chaotic Lorenz system and planetary orbits you launch with your finger.",
         chips:["Live physics simulations","Drag and touch interaction","Custom code"], cta:"Visit the site" }
  };
  var arrow = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 17L17 7M17 8V7H8"/></svg>';
  box.innerHTML =
    '<article class="ft" aria-labelledby="ft-title"><canvas class="ft-canvas" aria-hidden="true"></canvas>' +
    '<div class="ft-body"><span class="ft-tag" data-k="tag"></span><h3 class="ft-title" id="ft-title">Physics Club</h3>' +
    '<p class="ft-sub" data-k="sub"></p><p class="ft-text" data-k="text"></p><ul class="ft-chips"></ul>' +
    '<a class="ft-cta" href="'+SITE+'" target="_blank" rel="noopener"><span data-k="cta"></span>'+arrow+'</a>' +
    '<div class="ft-domain">'+DOMAIN+'</div></div>' +
    '<a class="ft-visual" href="'+SITE+'" target="_blank" rel="noopener" tabindex="-1" aria-hidden="true"><img src="assets/works/physics-club-logo-dark.webp" alt="" loading="lazy"></a></article>';

  function render(){
    var t = T[LANG] || T.ar;
    box.querySelectorAll('[data-k]').forEach(function(e){ e.textContent = t[e.dataset.k]; });
    box.querySelector('.ft-chips').innerHTML = t.chips.map(function(c){ return '<li>'+c+'</li>'; }).join('');
  }
  var prev = buildFab;                                   /* تُستدعى عند تبديل اللغة */
  buildFab = function(){ prev(); render(); };
  render();

  /* محاكاة لورنز: مساران يبدآن بفرق ضئيل جدًا (أثر الفراشة) */
  var cv = box.querySelector('.ft-canvas'), ctx = cv.getContext('2d'), W = 0, H = 0, raf = 0;
  var A = { x:.1, y:0, z:0 }, B = { x:.1008, y:0, z:0 };
  function f(s){ return [10 * (s.y - s.x), s.x * (28 - s.z) - s.y, s.x * s.y - (8 / 3) * s.z]; }
  function rk4(s, h){
    var k1 = f(s), a = { x:s.x + h/2*k1[0], y:s.y + h/2*k1[1], z:s.z + h/2*k1[2] },
        k2 = f(a), b = { x:s.x + h/2*k2[0], y:s.y + h/2*k2[1], z:s.z + h/2*k2[2] },
        k3 = f(b), c = { x:s.x + h*k3[0],   y:s.y + h*k3[1],   z:s.z + h*k3[2] }, k4 = f(c);
    s.x += h/6 * (k1[0] + 2*k2[0] + 2*k3[0] + k4[0]);
    s.y += h/6 * (k1[1] + 2*k2[1] + 2*k3[1] + k4[1]);
    s.z += h/6 * (k1[2] + 2*k2[2] + 2*k3[2] + k4[2]);
  }
  function pt(s){
    var wide = W > 720, rtl = document.documentElement.dir === 'rtl', k = wide ? H / 62 : W / 50;
    return [(wide ? (rtl ? W * .27 : W * .73) : W / 2) + s.x * k, H * .52 - (s.z - 25) * k];
  }
  function seg(s, col){
    var p = pt(s); rk4(s, .007); var q = pt(s);
    ctx.strokeStyle = col; ctx.beginPath(); ctx.moveTo(p[0], p[1]); ctx.lineTo(q[0], q[1]); ctx.stroke();
  }
  function size(){
    var r = box.getBoundingClientRect(), d = Math.min(2, window.devicePixelRatio || 1);
    W = r.width; H = r.height; cv.width = W * d; cv.height = H * d; ctx.setTransform(d, 0, 0, d, 0, 0); ctx.lineWidth = 1.7; ctx.lineCap = 'round';
  }
  function frame(){
    ctx.globalCompositeOperation = 'destination-out'; ctx.fillStyle = 'rgba(0,0,0,.045)'; ctx.fillRect(0, 0, W, H);
    ctx.globalCompositeOperation = 'source-over';
    for(var i = 0; i < 7; i++){ seg(A, 'rgba(56,189,248,1)'); seg(B, 'rgba(192,132,252,1)'); }
    raf = requestAnimationFrame(frame);
  }
  function stop(){ cancelAnimationFrame(raf); raf = 0; }
  size();
  window.addEventListener('resize', size);
  if(REDUCED){ for(var i = 0; i < 4500; i++){ seg(A, 'rgba(56,189,248,.55)'); seg(B, 'rgba(192,132,252,.5)'); } return; }
  if('IntersectionObserver' in window){
    new IntersectionObserver(function(en){ if(en[0].isIntersecting){ if(!raf) frame(); } else stop(); }, { threshold:.05 }).observe(box);
  } else { frame(); }
})();