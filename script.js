/* ==========================================================
   رواق مداد | السكربت
   ========================================================== */

/* ---------- إعدادات سهلة التعديل ---------- */
var CONFIG = {
  instagram: "https://www.instagram.com/riwaq.midad/",
  instagramUser: "riwaq.midad",
  whatsapp: "213674026632",   // رقمك بصيغة دولية بدون + مثل 213550000000 (اتركه فارغًا لإخفاء الزر)
  email: "riwaq.midad@gmail.com"       // بريدك (اتركه فارغًا لإخفاء الزر)
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
    wa:"واتساب", ig:"إنستغرام", mail:"البريد", msgHi:"مرحبًا، أعجبتني أعمالك وأودّ التواصل معك", lbClose:"إغلاق", lbPrev:"السابق", lbNext:"التالي", waFab:"تواصل عبر واتساب",
    soon:"قريبًا", on:"متصلان", off:"منفصلان", lt:"الحرف", lthen:"ثم"
  },
  en: {
    all:"All", more:"Show more", cnt:{ calligraphy:"paintings", web:"pages", print:"designs" },
    cat:{ calligraphy:"Calligraphy", design:"Design", web:"Website" },
    catPlural:{ calligraphy:"Calligraphy", design:"Design", web:"Websites" },
    visit:"Visit website",
    scriptLabel:"Script: ", sizeLabel:"Size: ", cm:"cm", fSize:"Size", fScript:"Script", empty:"No paintings match these filters right now.", reset:"Clear filters",
    wa:"WhatsApp", ig:"Instagram", mail:"Email", msgHi:"Hello, I like your work and would like to get in touch", lbClose:"Close", lbPrev:"Previous", lbNext:"Next", waFab:"Chat on WhatsApp",
    soon:"Soon", on:"Connected", off:"Separate", lt:"letter", lthen:"then"
  }
};

/* ==========================================================
   الترجمة: الإنجليزية هنا، أما العربية فتُقرأ من الصفحة نفسها
   ========================================================== */
var EN = {
  title:"Riwaq Midad | Learn Arabic Calligraphy",
  desc:"Riwaq Midad: Arabic calligraphy lessons, practice sheets and visual guides, from the first letter to mastering the hand, alongside handwritten paintings.",
  pwa_btn:"Get the Riwaq Midad app", pwa_t:"Install the app", pwa_ok:"Got it",
  pwa_ios:"On iPhone and iPad: open the site in <b>Safari</b>, tap the <b>Share</b> button (the square with an up arrow), then choose <b>\"Add to Home Screen\"</b>.",
  pwa_and:"Open the browser menu <b>⋮</b>, then choose <b>\"Install app\"</b> or <b>\"Add to Home screen\"</b>.",
  pwa_app:"You are browsing inside another app (such as Instagram). Tap <b>⋮</b> or <b>⋯</b> and choose <b>\"Open in browser\"</b>, then tap the download button again.",
  cr_pre:"Concept, Design, Educational Materials, Development Direction & Website Management:", cr_name:"Maroua Mezhoud", back:"Back", skip:"Skip to content",
  co_t:"About the paintings",
  co_p:"The paintings are written by hand in ink on ornamental paper, in the Diwani and Thuluth scripts. Each one is a single piece that is never repeated.",
  co_l1:"Handwritten in ink on ornamental paper", co_l2:"Verses, poetry, names and dedications", co_l3:"Scripts: Diwani and Thuluth", co_l4:"One unique piece",
  wi_t:"What is a landing page?",
  wi_p1:"A landing page is a single, clean web page that introduces a project or product and leads the visitor to one clear step.",
  wi_p2:"Instead of a large, complicated website, it is a fast page that presents what the project offers clearly, easy to link from an Instagram profile or from ads.",
  wi_l1:"Designed around each project's brand", wi_l2:"Mobile friendly", wi_l3:"Light and dark mode",
  wl_t:"My work", wl_p:"Pages I have built, live online.", hub_eyebrow:"My work", hub_h2:'Browse my <span class="ruq">work</span> and print designs', hub_p:"Pick a section to see everything inside it, neatly in one place.",
  hub_cal_t:"Arabic calligraphy paintings", hub_web_t:"Landing pages", hb_cal:"Handwritten paintings in authentic Arabic scripts.", hb_web:"Pages and sites designed for real projects.",
  cal_h2:'<span class="ruq">My paintings</span> gallery', web_h2:'<span class="ruq">Websites</span>', cal_e:"My work", web_e:"What I built", n_cal:"Paintings gallery", n_web:"Websites", hb_open:"Open section",
  hb_services:"Calligraphy, design, print design and websites.", hb_works:"Paintings and websites I have made.", hb_print:"Cards, bookmarks, giveaways and certificates.",
  hb_process:"From idea to finished work.", hb_about:"The story of Riwaq Midad and what I believe in.", hb_contact:"Get in touch.",
  n_services:"Fields", n_print:"Print", n_works:"Works", n_process:"Process", n_about:"About", n_contact:"Contact",
  h1:'A journey into the beauty of <span class="ruq">Arabic letters</span>',
  tag:"From the first letter, to mastering the hand.",
  lead:"Arabic calligraphy lessons, visual guides and hands-on practice, to discover the beauty of the letters and learn how to write them.",
  cta1:"Start learning",
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
  a_p1:"“Midad” is the ink that letters are written with, and “Riwaq” is a quiet gallery where they are shown.",
  a_p2:"Here, we open the doors of Arabic calligraphy to anyone who wishes to learn it, accompanying the letters from their very first steps to the beauty of their construction and mastery. A space for knowledge and practice, where lessons meet visual explanations, and where Arabic calligraphy can be discovered in both Arabic and English.",
  a_p3:"The Riwaq also hosts calligraphic works and artistic experiments, celebrating the beauty of the Arabic letter and its endless creative possibilities.",
  a_p4:"Welcome to Riwaq Midad, where the letter begins its journey.",
  a_k1:"Arabic calligraphy", a_k2:"Design", a_k3:"Print",

  c_eyebrow:"Contact",
  c_h2:'Get in <span class="ruq">touch</span>',
  c_p:"For collaboration or questions about the work, you can reach me through the channels below.",
  loc:"Bordj Bou Arréridj, Algeria",
  n_learn:"Learn calligraphy",
  ab_btn:"About Riwaq Midad",
  lr_eyebrow:"Learn Arabic calligraphy",
  lr_h2:"Choose a <span class=\"ruq\">letter</span> to begin",
  lr_p:"We start with Alif, Baa and Hah, and the other letters will be added over time.",
  pdf_dl:"Download the file (PDF)",
  pdf_open:"Open in a new tab",
  lg_on:"Connected",
  src_1_t:"Single Alif model", src_1_p:"The reference image: the shape of Alif, its five-dot measure and stroke direction.",
  src_2_t:"Coloured Alif with dots", src_2_p:"A coloured version of the letter with the measuring dots.",
  src_3_t:"Grey Alif with dots", src_3_p:"The letter and measuring dots on a transparent background, ready for the practice sheet.",
  src_4_t:"Alif alone", src_4_p:"The letter alone on a transparent background between the two guide lines.",
  src_5_t:"Original sheet (PDF)", src_5_p:"The original scanned version of the page.",
  src_6_t:"Open design file (AF)", src_6_p:"The editable Affinity file, for developing the design.",
  b_src_1_t:"Single Baa model", b_src_1_p:"The reference image: the shape of Baa, its dot measure, stroke direction and baseline.",
  b_src_2_t:"Coloured Baa", b_src_2_p:"A coloured version of the letter with the stroke direction and baseline.",
  b_src_3_t:"Grey Baa with dots", b_src_3_p:"The letter, measuring dots and frame lines in grey, ready for the practice sheet.",
  b_src_4_t:"Baa alone", b_src_4_p:"The letter alone in grey on the baseline.",
  b_src_5_t:"Original sheet (PDF)", b_src_5_p:"The original scanned version of the page.",
  b_src_6_t:"Open design file (AF)", b_src_6_p:"The editable Affinity file, for developing the Baa design.",
  h_src_1_t:"Single Hah model", h_src_1_p:"The reference image: the shape of Hah, its dot measure, stroke direction and baseline.",
  h_src_2_t:"Coloured Hah", h_src_2_p:"A coloured version of the letter with the measuring dots and stroke direction, on a transparent background.",
  h_src_3_t:"Grey Hah with dots", h_src_3_p:"The letter and measuring dots in grey on a transparent background, ready for the practice sheet.",
  h_src_4_t:"Hah alone", h_src_4_p:"The letter alone in grey on a transparent background.",
  h_src_5_t:"Original sheet (PDF)", h_src_5_p:"The original scanned version of the page.",
  h_src_6_t:"Open design file (AF)", h_src_6_p:"The editable Affinity file, for developing the Hah design.",
  src_h:"Source files", src_p:"Copies of the files used to draw the letter, to keep safe and for anyone who wants to develop the design.", src_dl:"Download",
  lg_off:"Separate",
  l_alif:"Letter Alif",
  l_alif_e:"Letter Alif",
  l_alif_h:"Letter <span class=\"ruq\">Alif</span>",
  l_alif_p:"Choose what you want to learn.",
  l_alif_s_t:"Single Alif",
  l_alif_s_e:"Learn Arabic calligraphy",
  l_alif_s_h:"<span class=\"ruq\">Single Alif</span>",
  l_alif_f_t:"Source files",
  l_alif_f_e:"Learn Arabic calligraphy",
  l_alif_f_h:"<span class=\"ruq\">Source</span> files",
  l_alif_f_p:"Copies of the files used to draw the letter, to keep or to develop the design.",
  l_alif_l_t:"Connections of Alif",
  l_alif_l_e:"Learn Arabic calligraphy",
  l_alif_l_h:"Connections of <span class=\"ruq\">Alif</span>",
  l_alif_l_p:"How Alif connects with every other letter.",
  l_baa:"Letter Baa",
  l_baa_e:"Letter Baa",
  l_baa_h:"Letter <span class=\"ruq\">Baa</span>",
  l_baa_p:"Choose what you want to learn.",
  l_baa_s_t:"Single Baa",
  l_baa_s_e:"Learn Arabic calligraphy",
  l_baa_s_h:"<span class=\"ruq\">Single Baa</span>",
  l_baa_l_t:"Connections of Baa",
  l_baa_l_e:"Learn Arabic calligraphy",
  l_baa_l_h:"Connections of <span class=\"ruq\">Baa</span>",
  l_baa_l_p:"How the letter connects with every other letter.",
  l_hah:"Letter Hah",
  l_hah_e:"Letter Hah",
  l_hah_h:"Letter <span class=\"ruq\">Hah</span>",
  l_hah_p:"Choose what you want to learn.",
  l_hah_s_t:"Single Hah",
  l_hah_s_e:"Learn Arabic calligraphy",
  l_hah_s_h:"<span class=\"ruq\">Single Hah</span>",
  l_hah_s_p:"A practice sheet for writing the letter on its own, with the stroke direction and rows to trace.",
  l_hah_l_t:"Connections of Hah",
  l_hah_l_e:"Learn Arabic calligraphy",
  l_hah_l_h:"Connections of <span class=\"ruq\">Hah</span>",
  l_hah_l_p:"How the letter connects with every other letter.",
  s_hah_p:"The sheet shows the shape of Hah, its measure and stroke direction, then rows to trace. Download it, print it and practise with your pen.",
  rule_hah:"Hah connects to the letter after it, and the letter before it joins to it if that letter connects forward. The six letters (ا د ذ ر ز و) never connect to what follows them.",
  l_alif_s_p:"A practice sheet for writing the letter on its own, with the stroke direction and rows to trace.",
  pen_c_t:"Get to know the pen",
  pen_c_p:"An introductory lesson before the letters: the parts of the calligraphy pen and their names.",
  pen_n:"The pen",
  pen_e:"Learn Arabic calligraphy",
  pen_h:"Get to know <span class=\"ruq\">the pen</span>",
  pen_p:"Before writing your first letter, get to know your pen and the parts of its tip, since every script is made with it.",
  pen_alt:"Parts of the calligraphy pen tip",
  pen_p1:"Outer tip", pen_p2:"The cut", pen_p3:"Inner tip",
  pen_d1:"The upper corner of the slanted tip.",
  pen_d2:"A slanted cut at the tip of the pen; its width sets the thickness of the line.",
  pen_d3:"The lower corner of the slanted tip.",
  core_b:"A fundamental",
  grip_c_t:"Holding the pen", grip_c_p:"A fundamental: how to hold the calligraphy pen before you write a single letter.",
  grip_n:"Pen grip", grip_e:"Learn Arabic calligraphy",
  grip_h:"How to <span class=\"ruq\">hold the pen</span>",
  grip_p:"Before the letters and the practice sheets, learn how to hold the pen. It is the first step in calligraphy, and everything after it is built on it.",
  grip_note:"<strong>Holding the pen is a fundamental of learning Arabic calligraphy</strong> that should never be skipped. Many students start on the letters without knowing how to hold the pen, so their hands tire and their lines shake. Master the grip first and the letters become easier.",
  g1_t:"The three fingers", g1_p:"The pen is held with three fingers: the thumb and index finger press it gently from the sides, and the middle finger supports it from underneath. The ring and little fingers stay relaxed.",
  g2_t:"Where to hold it", g2_p:"Hold the pen close to its tip, about three centimetres from the nib. Too far and you lose control; too close and your fingers hide the nib from your eyes.",
  g3_t:"Grip strength", g3_p:"Keep it steady and light. Squeeze hard and your hand tires and the line shakes; hold too loosely and the pen slips. Feel that you are guiding the pen, not crushing it.",
  g4_t:"Keep the nib angle steady", g4_p:"The cut stays flat on the paper across its full width, and you do not rotate the pen between your fingers while writing, since changing the angle changes the thickness of the line. Remember from the <a class=\"inl\" href=\"#learn-pen\">pen lesson</a> that the width of the cut sets the thickness.",
  g5_t:"Hand movement", g5_p:"Do not press on the paper. Let the pen glide with a calm movement of the wrist and hand, and let the ink flow from the nib on its own.",
  g6_t:"Common mistakes", g6_p:"Gripping the pen too tightly, holding it too far from the tip, rotating it while writing, pressing on the paper, and bending the wrist sharply. If your hand tires quickly, check your grip.",
  grip_tip:"Warm up before every session: hold the pen and draw straight lines on a sheet for a few minutes, then move on to the letters.",
  grip_next:"Start with the letters",
  pen_next:"Continue to the basics", grip_next_dot:"Next lesson: the dot",
  bs_c_t:"The basics", bs_c_p:"Two lessons before the letters: holding the pen, then the dot.", bs_n:"The basics",
  bs_h2:"The <span class=\"ruq\">basics</span>", bs_p:"Two steps before the letters: how to hold the pen, then how to make the dot.",
  grip_c_p2:"How to hold the calligraphy pen before you write a single letter.",
  dot_c_t:"The dot", dot_c_p:"The unit of measure in calligraphy: how to make it, and how letters are measured by it.",
  dot_n:"The dot", dot_e:"Learn Arabic calligraphy",
  dot_h:"Get to know <span class=\"ruq\">the dot</span>",
  dot_p:"The dot is the first mark you make with the pen, and the measure on which every letter is built.",
  dot_alt:"The dot: a rhombus as wide as the cut", dot_w:"Width of the cut",
  dt1_t:"What is the dot?", dt1_p:"It is the mark the cut leaves when placed on the paper across its full width, and it appears as a rhombus, a tilted square.",
  dt2_t:"The unit of measure", dt2_p:"The dot is as wide as the cut itself, and it is used to measure a letter's height, length and width. That is why it is called the measure of the script.",
  dt3_t:"How to make it", dt3_p:"Keep your grip steady, place the cut on the paper across its full width, press lightly, then lift the pen without dragging it.",
  dt4_t:"What to watch", dt4_p:"Even sides, dots of equal size, and a row that sits straight on the baseline.",
  dt5_t:"Practice", dt5_p:"Fill a line with equal dots one after another, then compare their sizes and the gaps between them, and try again.",
  dt6_t:"Common mistakes", dt6_p:"Pressing too hard so the dot widens, rotating the pen so it distorts, and lifting while dragging so it grows a tail.",
  dot_tip:"Master the dot first, since every letter after it is measured by it.",
  l_baa_s_p:"A practice sheet for writing the letter on its own, with the stroke direction and rows to trace.",
  s_alif_p:"The sheet shows the shape of Alif, its measure and stroke direction, then rows to trace. Download it, print it and practise with your pen.",
  s_baa_p:"The sheet shows the shape of Baa, its measure and stroke direction, then rows to trace. Download it, print it and practise with your pen.",
  rule_alif:"Alif does not connect to the letter after it; it connects only to the letter before it. So every letter that follows it stays separate, and the letter before it joins to it if that letter connects forward.",
  rule_baa:"Baa connects to the letter after it, and the letter before it joins to it if that letter connects forward. The six letters (ا د ذ ر ز و) never connect to what follows them."
};
var ARIA = {
  ar:{ lang:"English", theme:"تبديل الوضع الليلي والنهاري", menu:"القائمة", filters:"تصفية الأعمال" },
  en:{ lang:"العربية", theme:"Toggle light and dark mode", menu:"Menu", filters:"Filter works" }
};

/* ---------- قسم تعلّم الخط: الحروف واتصالاتها ---------- */
var LETTERS = [
  {c:'ا',ar:'ألف',en:'Alif',k:'alif'},{c:'ب',ar:'باء',en:'Baa',k:'baa'},{c:'ح',ar:'حاء',en:'Hah',k:'hah'},
  {c:'د',ar:'دال',en:'Dal'},{c:'ر',ar:'راء',en:'Raa'},{c:'س',ar:'سين',en:'Seen'},
  {c:'ص',ar:'صاد',en:'Saad'},{c:'ط',ar:'طاء',en:'Tah'},{c:'ع',ar:'عين',en:'Ayn'},
  {c:'ف',ar:'فاء',en:'Faa'},{c:'ق',ar:'قاف',en:'Qaf'},{c:'ك',ar:'كاف',en:'Kaf'},
  {c:'ل',ar:'لام',en:'Lam'},{c:'م',ar:'ميم',en:'Meem'},{c:'ن',ar:'نون',en:'Noon'},
  {c:'ه',ar:'هاء',en:'Heh'},{c:'و',ar:'واو',en:'Waw'},{c:'ي',ar:'ياء',en:'Yaa'}
];
var NO_JOIN = 'ادرو';          /* حروف لا تتصل بما بعدها */
var BASE_NAME = { alif:{ ar:'الألف', en:'Alif' }, baa:{ ar:'الباء', en:'Baa' }, hah:{ ar:'الحاء', en:'Hah' } };

function buildLearn(){
  var ui = UI[LANG];
  var g = document.getElementById('learn-grid');
  if(g){
    g.innerHTML = LETTERS.map(function(l){
      var nm = LANG === 'en' ? l.en : l.ar;
      return l.k
        ? '<a class="letter-tile" href="#learn-'+l.k+'"><b>'+l.c+'</b><span>'+nm+'</span></a>'
        : '<div class="letter-tile soon" aria-disabled="true"><b>'+l.c+'</b><span>'+nm+'</span><em>'+ui.soon+'</em></div>';
    }).join('');
  }
  function pair(a, b, joined){
    return joined ? '<span class="pr on">'+a+b+'</span>' : '<span class="pr off"><span>'+a+'</span><span>'+b+'</span></span>';
  }
  Object.keys(BASE_NAME).forEach(function(k){
    var box = document.getElementById('conn-'+k); if(!box) return;
    var base = LETTERS.filter(function(l){ return l.k === k; })[0];
    var bn = BASE_NAME[k][LANG === 'en' ? 'en' : 'ar'];
    var html = '';
    LETTERS.forEach(function(l){
      if(k === 'alif' && l.k === 'alif') return;
      var j1 = NO_JOIN.indexOf(base.c) < 0, j2 = NO_JOIN.indexOf(l.c) < 0;
      var l1 = bn + ' ' + ui.lthen + ' ' + ui.lt, l2 = ui.lt + ' ' + ui.lthen + ' ' + bn;
      html += '<article class="conn reveal in"><div class="cn-head"><b>'+l.c+'</b><span>'+(LANG === 'en' ? l.en : l.ar)+'</span></div>'+
        '<div class="cn-row"><small>'+l1+'</small>'+pair(base.c, l.c, j1)+'<em class="'+(j1?'on':'off')+'">'+(j1?ui.on:ui.off)+'</em></div>'+
        '<div class="cn-row"><small>'+l2+'</small>'+pair(l.c, base.c, j2)+'<em class="'+(j2?'on':'off')+'">'+(j2?ui.on:ui.off)+'</em></div></article>';
    });
    box.innerHTML = html;
  });
}

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
    splitHero();
    document.title = dict.title;
    metaDesc.setAttribute('content', dict.desc);
    langBtn.textContent = (l === 'en') ? 'ع' : 'EN';
    langBtn.setAttribute('aria-label', ARIA[l].lang);
    langBtn.setAttribute('title', ARIA[l].lang);
    themeBtn.setAttribute('aria-label', ARIA[l].theme);
    menuBtn.setAttribute('aria-label', ARIA[l].menu);
    buildWorks(false);
    buildLearn();
    buildContact(); buildFab();
    if(save){ try{ localStorage.setItem('midad-lang', l); }catch(e){} }
  }

  langBtn.addEventListener('click', function(){ setLang(LANG === 'ar' ? 'en' : 'ar', true); });

  var saved = null;
  try{ saved = localStorage.getItem('midad-lang'); }catch(e){}
  if(saved === 'en'){ setLang('en', false); }
  else { buildWorks(true); buildLearn(); buildContact(); buildFab(); }
  splitHero();
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

/* ---------- العبارة: تُكتب كلمةً كلمة من اليمين إلى اليسار عند أول تمرير ---------- */
function splitWords(el, idx){
  if(el.querySelector('.w')) return idx + el.querySelectorAll('.w').length;
  (function walk(node){
    Array.prototype.slice.call(node.childNodes).forEach(function(n){
      if(n.nodeType === 3){
        var frag = document.createDocumentFragment();
        n.nodeValue.split(/(\s+)/).forEach(function(p){
          if(!p) return;
          if(/^\s+$/.test(p)){ frag.appendChild(document.createTextNode(p)); return; }
          var w = document.createElement('span'); w.className = 'w';
          w.style.setProperty('--i', idx++); w.textContent = p; frag.appendChild(w);
        });
        node.replaceChild(frag, n);
      } else if(n.nodeType === 1){ walk(n); }
    });
  })(el);
  return idx;
}
function splitHero(){
  var hero = document.querySelector('.hero'); if(!hero) return;
  var idx = 0;
  [hero.querySelector('h1'), hero.querySelector('.hero-tag')].forEach(function(el){ if(el) idx = splitWords(el, idx); });
  hero.style.setProperty('--after', (idx * .24 + .6).toFixed(2) + 's');
  var ch = document.querySelector('.contact h2'); if(ch) splitWords(ch, 0);
}

/* ---------- ظهور تدريجي مع تتابع ---------- */
(function(){
  /* تأخير متتابع لعناصر كل مجموعة */
  [['.hero .reveal', .11], ['.services .card', .09], ['.steps .step', .12],
   ['.group-grid', .1], ['.skills span', .06]].forEach(function(g){
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
    var navId = id.indexOf('learn-') === 0 && target ? 'learn' : id;
    navLinks.forEach(function(a){ a.classList.toggle('current', !!target && a.getAttribute('href') === '#' + navId); });
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
  var links = document.querySelectorAll('#links a');
  var ids = ['contact'];
  var endY = 0, navH = 68;

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



/* بدء كتابة العبارة عند أول تمرير بسيط من الصفحة الرئيسية */
(function(){
  var hero = document.querySelector('.hero'); if(!hero) return;
  var done = false;
  function go(){
    if(done) return; done = true; hero.classList.add('spoken');
    window.removeEventListener('scroll', check); window.removeEventListener('hashchange', later);
  }
  function check(){
    if(hero.getClientRects().length && (window.scrollY || document.documentElement.scrollTop) > 24) go();
  }
  function later(){ setTimeout(check, 120); }
  if(REDUCED){ go(); return; }
  window.addEventListener('scroll', check, { passive:true });
  window.addEventListener('hashchange', later);
  window.addEventListener('load', later);
  var cue = hero.querySelector('.hero-cue');
  if(cue) cue.addEventListener('click', function(){
    var h1 = hero.querySelector('h1'), nav = document.querySelector('.nav');
    var y = h1.getBoundingClientRect().top + window.scrollY - (nav ? nav.offsetHeight : 68) - 40;
    window.scrollTo({ top: Math.max(y, 60), behavior:'smooth' });
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
  var t = document.querySelector('.page.active') || document.querySelector('.hero h1');
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


/* ==========================================================
   توقيع الصانعة: ورود وقلوب ونجوم عند التقريب، وانفجار كبير عند الضغط
   ========================================================== */
(function(){
  var link = document.getElementById('credit-link');
  if(!link) return;
  var TARGET = link.href;
  var GLYPHS = ['🌹','🌸','💖','⭐','💗','🌷','✨','💕','🌺','🎀','💝','🌟'];
  var sprites = null, cv = null, ctx = null, W = 0, H = 0, dpr = 1;
  var P = [], running = false, last = 0, hovering = false, busy = false;
  var tBurst = -1, hoverAcc = 0, rainAcc = 0;

  function rnd(a, b){ return a + Math.random() * (b - a); }

  function setup(){
    if(cv) return;
    sprites = GLYPHS.map(function(g){
      var c = document.createElement('canvas'); c.width = c.height = 96;
      var x = c.getContext('2d');
      x.font = '70px "Apple Color Emoji","Segoe UI Emoji","Noto Color Emoji",sans-serif';
      x.textAlign = 'center'; x.textBaseline = 'middle';
      x.fillText(g, 48, 54);
      return c;
    });
    cv = document.createElement('canvas');
    cv.setAttribute('aria-hidden', 'true');
    cv.style.cssText = 'position:fixed;inset:0;width:100vw;height:100vh;pointer-events:none;z-index:500;display:none';
    document.body.appendChild(cv);
    ctx = cv.getContext('2d');
    size();
    window.addEventListener('resize', size);
  }
  function size(){
    if(!cv) return;
    dpr = Math.min(2, window.devicePixelRatio || 1);
    W = window.innerWidth; H = window.innerHeight;
    cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function add(x, y, vx, vy, s, life, g, drag){
    P.push({ x:x, y:y, vx:vx, vy:vy, s:s, life:life, age:0, g:g || 0, drag:drag || 0,
             r:rnd(-.6, .6), vr:rnd(-2.2, 2.2), sp:sprites[(Math.random() * sprites.length) | 0] });
  }

  function start(){
    if(running) return;
    setup(); cv.style.display = 'block'; running = true; last = performance.now();
    requestAnimationFrame(loop);
  }

  function emitHover(dt){
    hoverAcc += dt;
    while(hoverAcc > .045){
      hoverAcc -= .045;
      var r = link.getBoundingClientRect();
      add(rnd(r.left, r.right), rnd(r.top, r.bottom) - 4, rnd(-40, 40), rnd(-170, -70), rnd(18, 34), rnd(1.2, 2), -30, .2);
    }
  }

  function glowAlpha(tb){
    if(tb < 0) return 0;
    if(tb < .5) return tb / .5 * .55;
    if(tb < 2.4) return .55;
    return Math.max(0, .55 * (1 - (tb - 2.4) / 1.2));
  }

  function loop(now){
    var dt = Math.min(.033, (now - last) / 1000); last = now;
    ctx.clearRect(0, 0, W, H);
    var tb = tBurst < 0 ? -1 : (now - tBurst) / 1000;

    if(hovering && !busy) emitHover(dt);
    if(tb >= .4 && tb < 2.2){          /* مطر من الورود يملأ الصفحة */
      rainAcc += dt;
      while(rainAcc > .012){ rainAcc -= .012;
        add(rnd(0, W), rnd(-40, H), rnd(-60, 60), rnd(-120, 160), rnd(30, 90), rnd(1.2, 2.2), 40, .3); }
    }
    if(tb >= .3 && !P.waveB){ P.waveB = 1; wave(260, 700, 1900); }
    if(tb >= .75 && !P.waveC){ P.waveC = 1; wave(300, 400, 2200); }

    var ga = glowAlpha(tb);
    if(ga > 0){
      var cx = W / 2, cy = H / 2, R = Math.hypot(W, H) / 1.6;
      var gr = ctx.createRadialGradient(cx, cy, 0, cx, cy, R);
      gr.addColorStop(0, 'rgba(255,214,232,' + ga + ')');
      gr.addColorStop(.55, 'rgba(255,140,190,' + (ga * .75) + ')');
      gr.addColorStop(1, 'rgba(255,100,170,' + (ga * .5) + ')');
      ctx.fillStyle = gr; ctx.fillRect(0, 0, W, H);
    }

    for(var i = P.length - 1; i >= 0; i--){
      var p = P[i];
      p.age += dt;
      if(p.age >= p.life){ P.splice(i, 1); continue; }
      var k = Math.exp(-p.drag * dt);
      p.vx *= k; p.vy = p.vy * k + p.g * dt;
      p.x += p.vx * dt; p.y += p.vy * dt; p.r += p.vr * dt;
      var pop = Math.min(1, p.age / .22), fade = Math.min(1, (p.life - p.age) / .5);
      var sz = p.s * (pop * (2 - pop));
      ctx.save();
      ctx.globalAlpha = Math.max(0, fade);
      ctx.translate(p.x, p.y); ctx.rotate(p.r);
      ctx.drawImage(p.sp, -sz / 2, -sz / 2, sz, sz);
      ctx.restore();
    }

    if(P.length || hovering || (tb >= 0 && tb < 4)){ requestAnimationFrame(loop); }
    else { running = false; cv.style.display = 'none'; }
  }

  function wave(n, vmin, vmax){
    var r = link.getBoundingClientRect(), cx = r.left + r.width / 2, cy = r.top + r.height / 2;
    for(var i = 0; i < n; i++){
      var a = Math.random() * Math.PI * 2, v = rnd(vmin, vmax);
      add(cx, cy, Math.cos(a) * v, Math.sin(a) * v, rnd(26, 96), rnd(2.4, 3.6), 140, .85);
    }
  }

  function burst(){
    busy = true; start();
    tBurst = performance.now();
    wave(560, 250, 1700);
  }

  if(!REDUCED){
    link.addEventListener('pointerenter', function(){ hovering = true; start(); });
    link.addEventListener('pointerleave', function(){ hovering = false; });
    link.addEventListener('focus', function(){ hovering = true; start(); });
    link.addEventListener('blur', function(){ hovering = false; });
    link.addEventListener('click', function(e){
      if(e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
      e.preventDefault();
      if(busy) return;
      burst();
      setTimeout(function(){ window.location.href = TARGET; }, 3800);
    });
    window.addEventListener('pageshow', function(){
      busy = false; hovering = false; tBurst = -1; P.length = 0; P.waveB = P.waveC = 0;
      if(cv){ cv.style.display = 'none'; }
    });
  }
})();
