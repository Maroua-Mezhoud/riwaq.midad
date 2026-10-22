/* ==========================================================
   رواق مداد | السكربت
   ========================================================== */

/* ---------- إعدادات سهلة التعديل ---------- */
var CONFIG = {
  instagram: "https://www.instagram.com/riwaq.midad/",
  instagramUser: "riwaq.midad",
  whatsapp: "",   // رقمك بصيغة دولية بدون + مثل 213550000000 (اتركه فارغًا لإخفاء الزر)
  email: ""       // بريدك (اتركه فارغًا لإخفاء الزر)
};

/* ==========================================================
   الأعمال: لإضافة عمل جديد انسخ كتلة { ... } وعدّلها
   cat:    calligraphy (خط عربي) | design (تصميم) | web (مواقع)
   title / desc: ar بالعربية و en بالإنجليزية
   script: نوع الخط (للوحات فقط) بالعربية والإنجليزية
   price:  السعر بالأرقام فقط، فيظهر زر الطلب
   img:    صورة العمل (للوحات)
   logo:   شعار المشروع (للمواقع)
   link:   رابط الموقع، و domain النص الظاهر تحت البطاقة
   ========================================================== */

/* ملاحظات تظهر مرة واحدة في بداية كل قسم بدل تكرارها على كل بطاقة */
var GROUPS = {
  calligraphy:{
    title:{ ar:"لوحات الخط العربي", en:"Arabic calligraphy paintings" },
    notes:{
      ar:["مكتوبة بخط اليد بالحبر", "ورق تركي مزخرف", "يمكن كتابة عبارتك حسب الطلب"],
      en:["Handwritten in ink", "Ornamented Turkish paper", "Your own phrase can be written to order"]
    }
  },
  web:{
    title:{ ar:"صفحات الهبوط والمواقع", en:"Landing pages & websites" },
    notes:{
      ar:["لديك عدد غير محدود من الإضافات لمدة 15 يومًا"],
      en:["Unlimited additions for 15 days"]
    }
  }
};


/* ==========================================================
   المطبوعات والتصاميم (الأسعار تقريبية، عدّلها كما تشائين)
   cat:   cards | bookmarks | printing | giveaways | certificates
   mock:  شكل الصورة التوضيحية؛ أو ضعي img:"assets/works/xxx.webp" لصورة حقيقية
   price: بالأرقام فقط    from: true لتظهر كلمة «من»
   unit:  وحدة السعر (للقطعة، لكل 100 بطاقة...)
   ========================================================== */
var CGROUPS = {
  cards:{
    title:{ ar:"بطاقات الأعمال", en:"Business cards" },
    notes:{ ar:["تصميم حسب هويتك", "يصلك ملف جاهز للطباعة"], en:["Designed around your brand", "Delivered print-ready"] }
  },
  bookmarks:{
    title:{ ar:"فواصل الكتب", en:"Bookmarks" },
    notes:{ ar:["بالخط العربي أو بتصميم حديث", "هدية أنيقة للقرّاء"], en:["Arabic calligraphy or a modern look", "An elegant gift for readers"] }
  },
  printing:{
    title:{ ar:"الطباعة", en:"Printing" },
    notes:{ ar:["الأسعار تقريبية وتختلف حسب الكمية ونوع الورق"], en:["Prices are approximate and vary with quantity and paper"] }
  },
  giveaways:{
    title:{ ar:"التوزيعات", en:"Giveaways & favors" },
    notes:{ ar:["للأعراس والمواليد والمناسبات", "الاسم والعبارة حسب طلبك"], en:["Weddings, births and occasions", "Name and wording to your order"] }
  },
  certificates:{
    title:{ ar:"الشهادات", en:"Certificates" },
    notes:{ ar:["للمدارس والنوادي والفعاليات", "بتصميم رسمي أو بخط اليد"], en:["Schools, clubs and events", "Formal design or handwritten"] }
  }
};

var CATALOG = [
  { cat:"cards", mock:"cards",
    title:{ ar:"تصميم بطاقة أعمال", en:"Business card design" },
    desc:{ ar:"وجهان بتصميم يناسب نشاطك.", en:"A two-sided design that suits your business." },
    price:"1000", unit:{ ar:"للتصميم", en:"per design" } },
  { cat:"cards", mock:"cards",
    title:{ ar:"تصميم وطباعة", en:"Design & print" },
    desc:{ ar:"بطاقاتك مطبوعة وجاهزة للتوزيع.", en:"Your cards printed and ready to hand out." },
    price:"2500", unit:{ ar:"لكل 100 بطاقة", en:"per 100 cards" } },
  { cat:"cards", mock:"cards",
    title:{ ar:"بطاقة بخط اليد", en:"Hand-lettered card" },
    desc:{ ar:"اسمك أو شعارك بالخط العربي.", en:"Your name or logo in Arabic calligraphy." },
    price:"3500", from:true, unit:{ ar:"لكل 100 بطاقة", en:"per 100 cards" } },

  { cat:"bookmarks", mock:"bookmark",
    title:{ ar:"فواصل مطبوعة", en:"Printed bookmarks" },
    desc:{ ar:"بتصميمك أو بتصميم من عندنا.", en:"With your design or one of ours." },
    price:"800", unit:{ ar:"لكل 10 فواصل", en:"per 10 bookmarks" } },
  { cat:"bookmarks", mock:"bookmark",
    title:{ ar:"فاصل بخط اليد", en:"Hand-lettered bookmark" },
    desc:{ ar:"عبارة أو اسم بالخط العربي.", en:"A phrase or a name in Arabic calligraphy." },
    price:"500", unit:{ ar:"للقطعة", en:"each" } },
  { cat:"bookmarks", mock:"bookmark",
    title:{ ar:"طقم هدية", en:"Gift set" },
    desc:{ ar:"خمسة فواصل بتصاميم مختلفة.", en:"Five bookmarks in different designs." },
    price:"1500", unit:{ ar:"للطقم", en:"per set" } },

  { cat:"printing", mock:"print",
    title:{ ar:"طباعة ملونة A4", en:"Colour printing A4" },
    desc:{ ar:"مستندات وصور بجودة عالية.", en:"Documents and photos in high quality." },
    price:"30", unit:{ ar:"للورقة", en:"per sheet" } },
  { cat:"printing", mock:"print",
    title:{ ar:"طباعة ملونة A3", en:"Colour printing A3" },
    desc:{ ar:"للملصقات والعروض والمخططات.", en:"For flyers, presentations and plans." },
    price:"100", unit:{ ar:"للورقة", en:"per sheet" } },
  { cat:"printing", mock:"print",
    title:{ ar:"طباعة لوحة أو بوستر", en:"Poster or painting print" },
    desc:{ ar:"بمقاس A2 على ورق مختار.", en:"A2 size on selected paper." },
    price:"400", unit:{ ar:"للقطعة", en:"each" } },

  { cat:"giveaways", mock:"giveaway",
    title:{ ar:"بطاقات شكر مطبوعة", en:"Printed thank-you tags" },
    desc:{ ar:"بتصميم يناسب مناسبتك.", en:"Designed to match your occasion." },
    price:"2000", unit:{ ar:"لكل 50 قطعة", en:"per 50 pieces" } },
  { cat:"giveaways", mock:"giveaway",
    title:{ ar:"توزيعات بالخط", en:"Hand-lettered favors" },
    desc:{ ar:"اسم المناسبة بخط اليد على كل قطعة.", en:"The occasion's name handwritten on each piece." },
    price:"70", from:true, unit:{ ar:"للقطعة (من 30 قطعة)", en:"each (from 30 pieces)" } },
  { cat:"giveaways", mock:"giveaway",
    title:{ ar:"ملصقات مخصصة", en:"Custom stickers" },
    desc:{ ar:"لتغليف الهدايا والتوزيعات.", en:"For wrapping gifts and favors." },
    price:"1200", unit:{ ar:"لكل 24 ملصقًا", en:"per 24 stickers" } },

  { cat:"certificates", mock:"certificate",
    title:{ ar:"تصميم شهادة", en:"Certificate design" },
    desc:{ ar:"قالب رسمي قابل للتعديل.", en:"A formal, editable template." },
    price:"600", unit:{ ar:"للتصميم", en:"per design" } },
  { cat:"certificates", mock:"certificate",
    title:{ ar:"تصميم وطباعة", en:"Design & print" },
    desc:{ ar:"شهاداتك جاهزة للتسليم.", en:"Your certificates ready to hand out." },
    price:"2500", unit:{ ar:"لكل 20 شهادة", en:"per 20 certificates" } },
  { cat:"certificates", mock:"certificate",
    title:{ ar:"شهادة بخط اليد", en:"Handwritten certificate" },
    desc:{ ar:"الاسم مكتوب بالخط العربي.", en:"The name written in Arabic calligraphy." },
    price:"400", unit:{ ar:"للقطعة", en:"each" } }
];

var MARQ = {
  ar:["الخط العربي","التصميم الغرافيكي","بطاقات الأعمال","فواصل الكتب","الطباعة","التوزيعات","الشهادات","صفحات الهبوط"],
  en:["Arabic calligraphy","Graphic design","Business cards","Bookmarks","Printing","Favors","Certificates","Landing pages"]
};

var DIWANI = { ar:"الديواني", en:"Diwani" };
var THULUTH = { ar:"الثلث", en:"Thuluth" };

var WORKS = [
  {
    cat:"calligraphy",
    title:{ ar:"لوحة بإطار مزخرف ذهبي وأزرق", en:"Painting with a gold-and-blue ornamental border" },
    script: DIWANI,
    price:"3500",
    img:"assets/works/lawha-1.webp"
  },
  {
    cat:"calligraphy",
    title:{ ar:"وأما بنعمة ربك فحدّث", en:"“And as for the favor of your Lord, proclaim it”" },
    script: DIWANI,
    price:"3000",
    img:"assets/works/lawha-2.webp"
  },
  {
    cat:"calligraphy",
    title:{ ar:"خديجة", en:"Khadija" },
    script: THULUTH,
    price:"3500",
    img:"assets/works/lawha-3.webp"
  },
  {
    cat:"web",
    title:{ ar:"Rouqi", en:"Rouqi" },
    desc:{ ar:"صفحة هبوط بتصميم هادئ.", en:"A landing page with a calm, minimal design." },
    price:"6000",
    logo:"assets/works/rouqi-logo.webp",
    link:"https://maroua-mezhoud.github.io/rouqi/",
    domain:"maroua-mezhoud.github.io/rouqi"
  },
  {
    cat:"web",
    title:{ ar:"Sugar Cube", en:"Sugar Cube" },
    desc:{ ar:"صفحة هبوط لمشروع حلويات.", en:"A landing page for a sweets and bakery brand." },
    price:"6000",
    logo:"assets/works/sugar-cube-logo.webp",
    link:"https://sugar-cube.netlify.app/",
    domain:"sugar-cube.netlify.app"
  },
  {
    cat: "web",
    title: {
      ar: "Tasta Tarz",
      en: "Tasta Tarz"
    },
    desc: {
      ar: "موقع إلكتروني من تصميمي.",
      en: "A website designed by me."
    },
    logo: "assets/works/tasta-tarz.webp",
    link: "https://maroua-mezhoud.github.io/tasta.tarz/",
    domain: "maroua-mezhoud.github.io/tasta.tarz"
  }

];

/* ---------- نصوص الواجهة الديناميكية ---------- */
var UI = {
  ar: {
    all:"الكل",
    cat:{ calligraphy:"خط عربي", design:"تصميم", web:"موقع" },
    catPlural:{ calligraphy:"خط عربي", design:"تصميم", web:"مواقع" },
    order:"اطلب اللوحة", orderWeb:"اطلب موقعًا مماثلًا", visit:"زيارة الموقع", currency:"دج",
    scriptLabel:"نوع الخط: ", orderItem:"اطلب الآن", msgItem:"مرحبًا، أريد طلب: ", from:"من",
    msg:"مرحبًا، أريد طلب: ", msgWeb:"مرحبًا، أريد طلب موقع مماثل لـ: ",
    wa:"واتساب", ig:"إنستغرام", mail:"البريد"
  },
  en: {
    all:"All",
    cat:{ calligraphy:"Calligraphy", design:"Design", web:"Website" },
    catPlural:{ calligraphy:"Calligraphy", design:"Design", web:"Websites" },
    order:"Order this piece", orderWeb:"Order a similar site", visit:"Visit website", currency:"DZD",
    scriptLabel:"Script: ", orderItem:"Order now", msgItem:"Hello, I would like to order: ", from:"From",
    msg:"Hello, I would like to order: ", msgWeb:"Hello, I would like a website similar to: ",
    wa:"WhatsApp", ig:"Instagram", mail:"Email"
  }
};

/* ==========================================================
   الترجمة: الإنجليزية هنا، أما العربية فتُقرأ من الصفحة نفسها
   ========================================================== */
var EN = {
  title:"Riwaq Midad | Arabic Calligraphy, Design & Printing",
  desc:"Riwaq Midad: Arabic calligraphy, graphic design, printing and landing pages. Order a custom piece with a handmade touch and an elegant identity.",
  n_services:"Services", n_print:"Print", n_works:"Works", n_process:"Process", n_about:"About", n_contact:"Contact", n_order:"Order now",
  h1:'Where <span class="ruq">Arabic letters</span> meet design',
  lead:"Handwritten Arabic calligraphy, design, printing and web pages, made with care to carry your name and taste.",
  cta1:"Start your project", cta2:"View works",
  chip1:"Arabic calligraphy", chip2:"Graphic design", chip3:"Printing", chip4:"Landing pages",
  k_eyebrow:"Print & stationery",
  k_h2:'Everything you need for <span class="ruq">print</span> and design',
  k_p:"Business cards, bookmarks, printing, favors and certificates, designed with an Arabic touch.",

  s_eyebrow:"What we offer",
  s_h2:'Services that blend <span class="ruq">tradition</span> and modernity',
  s_p:"From a hand-lettered painting to a complete web page, every piece is made with attention to detail.",
  sv1_t:"Arabic calligraphy", sv1_p:"Hand-lettered paintings and writing in authentic Arabic scripts.",
  sv1_l1:"Paintings, names and dedications", sv1_l2:"Verses, poetry and phrases", sv1_l3:"Writing for occasion cards",
  sv2_t:"Graphic design", sv2_p:"A visual identity that looks like your project and speaks for it.",
  sv2_l1:"Logos and brand identities", sv2_l2:"Cards, menus and posters", sv2_l3:"Social media designs",
  sv3_t:"Printing", sv3_p:"High-quality printing on carefully chosen paper and materials.",
  sv3_l1:"Printing paintings and posters", sv3_l2:"Custom cards and gifts", sv3_l3:"Prints for small businesses",
  sv4_t:"Landing pages & websites", sv4_p:"An elegant page that presents your product and reaches your customers.",
  sv4_l1:"A landing page for your project", sv4_l2:"Light and dark modes", sv4_l3:"Mobile friendly",

  w_eyebrow:"Portfolio",
  w_h2:'Some of <span class="ruq">what we\'ve made</span>',

  p_eyebrow:"How we work",
  p_h2:'Four <span class="ruq">simple</span> steps',
  p1_t:"Contact", p1_p:"Tell us your idea and what you need through Instagram or WhatsApp.",
  p2_t:"Agree", p2_p:"We settle the details, timing and price before we begin.",
  p3_t:"Create", p3_p:"We work on your order and show you the stages to hear your feedback.",
  p4_t:"Deliver", p4_p:"Your piece arrives ready, digital or printed.",

  a_eyebrow:"About the studio",
  a_h2:'Riwaq <span class="ruq">Midad</span>',
  a_p1:"“Midad” is the ink that letters are written with, and “Riwaq” is a quiet gallery where they are shown. Here Arabic calligraphy meets design, printing and web page making.",
  a_p2:"I believe Arabic letters are beautiful enough to be part of your daily life: on the wall of your home, in your brand identity, or on your web page.",
  a_k1:"Arabic calligraphy", a_k2:"Design", a_k3:"Printing",

  c_eyebrow:"Get in touch",
  c_h2:'Let\'s write <span class="ruq">your story</span> in letters',
  c_p:"Have an idea or an order? Message us and we will reply as soon as possible.",
  loc:"Bordj Bou Arréridj, Algeria"
};
var ARIA = {
  ar:{ lang:"English", theme:"تبديل الوضع الليلي والنهاري", menu:"القائمة", filters:"تصفية الأعمال" },
  en:{ lang:"العربية", theme:"Toggle light and dark mode", menu:"Menu", filters:"Filter works" }
};

var AR = {};          // تُملأ من الصفحة عند التحميل
var LANG = 'ar';

function priceFmt(p){ return String(p).replace(/\B(?=(\d{3})+(?!\d))/g, ','); }

/* ---------- معرض الأعمال ---------- */
var currentFilter = 'all';

function buildWorks(animate){
  var grid = document.getElementById('works-grid');
  var bar = document.getElementById('filters');
  var ui = UI[LANG];
  var arrow = '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7M17 8V7H8"/></svg>';
  var inCls = animate ? '' : ' in';
  grid.innerHTML = '';

  function orderLink(w){
    var name = w.title[LANG];
    var msg = (w.cat === 'web' ? ui.msgWeb : ui.msg) + name;
    if(CONFIG.whatsapp){
      return 'https://wa.me/' + CONFIG.whatsapp + '?text=' + encodeURIComponent(msg);
    }
    return 'https://ig.me/m/' + CONFIG.instagramUser;
  }

  function card(w){
    var title = w.title[LANG], desc = w.desc && w.desc[LANG];
    var el = document.createElement('article');
    el.className = 'work reveal' + inCls;
    el.dataset.cat = w.cat;

    var thumb = w.logo
      ? '<div class="thumb logo"><img src="'+w.logo+'" alt="'+title+'" loading="lazy"></div>'
      : '<div class="thumb art"><img src="'+w.img+'" alt="'+title+'" loading="lazy"></div>';
    if(w.link){
      thumb = '<a class="thumb-link" href="'+w.link+'" target="_blank" rel="noopener" tabindex="-1" aria-hidden="true">'+thumb+'</a>';
    }

    var script = w.script ? '<ul class="specs"><li>'+ui.scriptLabel+w.script[LANG]+'</li></ul>' : '';

    var visit = '';
    if(w.link){
      visit = '<div class="visit"><a class="go" href="'+w.link+'" target="_blank" rel="noopener">'+ui.visit+' '+arrow+'</a>'+
              (w.domain ? '<div class="domain">'+w.domain+'</div>' : '')+'</div>';
    }

    var buy = '';
    if(w.price){
      buy = '<div class="buy"><div class="price">'+priceFmt(w.price)+'<small>'+ui.currency+'</small></div>'+
            '<a class="btn btn-primary btn-sm" target="_blank" rel="noopener" href="'+orderLink(w)+'">'+(w.cat === 'web' ? ui.orderWeb : ui.order)+'</a></div>';
    }

    el.innerHTML = thumb +
      '<div class="meta"><small>'+ui.cat[w.cat]+'</small><h3>'+title+'</h3>'+
      (desc ? '<p>'+desc+'</p>' : '') + script + visit + buy + '</div>';
    return el;
  }

  /* الأعمال تُجمع في أقسام، لكل قسم عنوانه وملاحظاته ومسافة تفصله عن غيره */
  var cats = [];
  WORKS.forEach(function(w){ if(cats.indexOf(w.cat) === -1) cats.push(w.cat); });

  cats.forEach(function(c){
    var g = GROUPS[c] || {};
    var sec = document.createElement('div');
    sec.className = 'group';
    sec.dataset.cat = c;
    if(currentFilter !== 'all' && currentFilter !== c) sec.classList.add('hide');

    var head = document.createElement('div');
    head.className = 'group-head reveal' + inCls;
    var notes = (g.notes && g.notes[LANG]) ? g.notes[LANG] : [];
    head.innerHTML = '<h3>' + (g.title ? g.title[LANG] : ui.catPlural[c]) + '</h3>' +
      (notes.length ? '<ul class="notes">' + notes.map(function(n){ return '<li>'+n+'</li>'; }).join('') + '</ul>' : '');
    sec.appendChild(head);

    var cards = document.createElement('div');
    cards.className = 'group-grid';
    WORKS.forEach(function(w){ if(w.cat === c) cards.appendChild(card(w)); });
    sec.appendChild(cards);
    grid.appendChild(sec);
  });

  /* أزرار التصفية تُبنى من الأقسام الموجودة فعلًا */
  bar.setAttribute('aria-label', ARIA[LANG].filters);
  if(cats.length < 2){
    bar.hidden = true;
    return;
  }
  bar.hidden = false;
  var html = '<button class="filter'+(currentFilter==='all'?' active':'')+'" data-f="all" type="button">'+ui.all+'</button>';
  cats.forEach(function(c){
    html += '<button class="filter'+(currentFilter===c?' active':'')+'" data-f="'+c+'" type="button">'+ui.catPlural[c]+'</button>';
  });
  bar.innerHTML = html;
  bar.querySelectorAll('.filter').forEach(function(btn){
    btn.addEventListener('click', function(){
      currentFilter = btn.dataset.f;
      bar.querySelectorAll('.filter').forEach(function(b){ b.classList.toggle('active', b === btn); });
      grid.querySelectorAll('.group').forEach(function(sec){
        sec.classList.toggle('hide', currentFilter !== 'all' && sec.dataset.cat !== currentFilter);
      });
    });
  });
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
  var order = ['cards','bookmarks','printing','giveaways','certificates'];
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
      var msg = ui.msgItem + g.title[LANG] + ' / ' + title;
      var href = CONFIG.whatsapp
        ? 'https://wa.me/' + CONFIG.whatsapp + '?text=' + encodeURIComponent(msg)
        : 'https://ig.me/m/' + CONFIG.instagramUser;
      var el = document.createElement('article');
      el.className = 'work reveal' + inCls;
      var visual = w.img ? '<div class="thumb art"><img src="'+w.img+'" alt="'+title+'" loading="lazy"></div>' : mockup(w.mock);
      el.innerHTML = visual +
        '<div class="meta"><h3>'+title+'</h3><p>'+w.desc[LANG]+'</p>'+
        '<div class="buy"><div class="price-wrap"><div class="price">'+(w.from ? '<span class="from">'+ui.from+'</span>' : '')+priceFmt(w.price)+'<small>'+ui.currency+'</small></div>'+
        '<div class="unit">'+w.unit[LANG]+'</div></div>'+
        '<a class="btn btn-primary btn-sm" target="_blank" rel="noopener" href="'+href+'">'+ui.orderItem+'</a></div></div>';
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
    buildContact();
    if(save){ try{ localStorage.setItem('midad-lang', l); }catch(e){} }
  }

  langBtn.addEventListener('click', function(){ setLang(LANG === 'ar' ? 'en' : 'ar', true); });

  var saved = null;
  try{ saved = localStorage.getItem('midad-lang'); }catch(e){}
  if(saved === 'en'){ setLang('en', false); }
  else { buildWorks(true); buildCatalog(true); buildMarquee(); buildContact(); }
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
