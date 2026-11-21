/* Reference library: searchable topic explanations and vocabulary, linked to daily learning. */
(function(){
'use strict';
const lessons=window.PATENT_DAILY_LESSONS||[];
const guides=(window.PATENT_PLAIN_LESSONS&&window.PATENT_PLAIN_LESSONS.topic)||{};
const root=document.getElementById('learn');
const list=document.getElementById('moduleList');
const detail=document.getElementById('lessonPanel');
if(!root||!list||!detail)return;
const esc=s=>String(s??'').replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;','\'':'&#39;'}[ch]));
const vocabulary=[];
const termSeen=new Set();
lessons.forEach(lesson=>(lesson.vocabulary||[]).forEach(v=>{
 const key=v.term.toLowerCase();
 if(!termSeen.has(key)){vocabulary.push({...v,day:lesson.day});termSeen.add(key);}
}));
const related={
 roadmap:[1,3,4,5],subject:[6,7],novelty:[8,9,10],obvious:[11,12,13],
 disclosure:[3,4,14],filing:[8,10,15],responses:[5],appeal:[5],
 pct:[],postgrant:[]
};
let query='',scope='all';
const clean=s=>String(s||'').toLowerCase().trim();
function topicMatch(m,q){
 const g=guides[m.id]||{};
 const linked=(related[m.id]||[]).map(n=>lessons.find(l=>l.day===n)).filter(Boolean);
 const terms=linked.flatMap(l=>l.vocabulary||[]);
 return clean([m.title,m.desc,m.chap,m.ref,m.key,...m.lesson,g.term,g.meaning,g.example,g.tip,
 ...terms.flatMap(t=>[t.term,t.meaning])].join(' ')).includes(q);
}
function status(l){
 const data=progress.daily&&progress.daily.completed||{};
 const completed=!!data[l.id];
 const next=lessons.find(x=>!data[x.id]);
 return completed?'Completed':next&&next.id===l.id?'Available':'Coming later';
}
function relatedHTML(m){
 const items=(related[m.id]||[]).map(day=>lessons.find(l=>l.day===day)).filter(Boolean);
 if(!items.length)return '<p class="small muted">Related daily lessons will be added as the course expands.</p>';
 return '<div class="library-lesson-links">'+items.map(l=>'<button class="library-lesson-link" type="button" data-lesson="'+l.day+'"><span><strong>Day '+l.day+': '+esc(l.title)+'</strong><small>'+esc(l.tag)+'</small></span><span class="pill">'+status(l)+'</span></button>').join('')+'</div>'+
 '<p class="small muted">Completed and currently unlocked lessons open directly. Future lessons stay in sequence.</p>';
}
function searchResults(){
 const q=clean(query);
 const topics=modules.filter(m=>topicMatch(m,q));
 const terms=vocabulary.filter(v=>clean(v.term+' '+v.meaning).includes(q));
 list.innerHTML='<div class="library-results-title"><strong>Reference topics ('+topics.length+')</strong></div>'+
 (scope==='terms'?'':topics.map(m=>'<article class="module library-topic"><div class="module-top"><span class="chapter">'+esc(m.chap)+'</span><span class="pill">'+(progress.completed[m.id]?'✓ Reviewed':'Reference')+'</span></div><h3>'+esc(m.title)+'</h3><p>'+esc(m.desc)+'</p><div class="module-foot"><span class="small muted">MPEP '+esc(m.ref)+'</span><button class="btn secondary" type="button" data-topic="'+esc(m.id)+'">Explore topic →</button></div></article>').join(''))+
 (scope!=='terms'&&!topics.length?'<p class="empty">No matching reference topics.</p>':'')+
 '<div class="library-results-title library-glossary-heading"><strong>Patent law glossary ('+terms.length+')</strong><span class="small muted">From your daily lessons</span></div>'+
 (scope==='topics'?'':terms.map(v=>'<div class="library-term"><strong>'+esc(v.term)+'</strong><p>'+esc(v.meaning)+'</p><button type="button" class="library-term-lesson" data-lesson="'+v.day+'">Introduced in lesson '+v.day+' →</button></div>').join(''))+
 (scope!=='topics'&&!terms.length?'<p class="empty">No matching vocabulary terms.</p>':'');
 list.querySelectorAll('[data-topic]').forEach(b=>b.addEventListener('click',()=>openLibraryTopic(b.dataset.topic)));
 list.querySelectorAll('[data-lesson]').forEach(b=>b.addEventListener('click',()=>window.openDailyLessonReference&&window.openDailyLessonReference(Number(b.dataset.lesson))));
}
function initLibrary(){
 const header=root.querySelector('.eyebrow');
 header.textContent='Patent law reference';
 const title=root.querySelector('h1');
 title.textContent='Reference Library';
 const subtitle=root.querySelector('.sub');
 subtitle.textContent='Look up a rule, decode legal vocabulary, and revisit engineering examples. For a structured course, use Daily Lessons.';
 const controls=document.createElement('div');
 controls.className='library-controls';
 controls.innerHTML='<label for="librarySearch" class="small"><strong>Search patent-law concepts</strong></label><input type="search" id="librarySearch" class="notes library-search" placeholder="Try: claims, teaching away, prior art, provisional…" autocomplete="off" aria-label="Search reference library">'+
 '<div class="library-filter-row"><button class="btn secondary library-filter selected" data-scope="all" type="button">All</button><button class="btn secondary library-filter" data-scope="topics" type="button">Topics</button><button class="btn secondary library-filter" data-scope="terms" type="button">Definitions</button></div>'+
 '<p class="small muted">The 10 topics summarize core concepts; the glossary contains '+vocabulary.length+' explanations. Always consult the official MPEP for detailed rules and exceptions.</p>';
 root.insertBefore(controls,list);
 controls.querySelector('#librarySearch').addEventListener('input',e=>{query=e.target.value;searchResults()});
 controls.querySelectorAll('[data-scope]').forEach(btn=>btn.addEventListener('click',()=>{
  scope=btn.dataset.scope;
  controls.querySelectorAll('[data-scope]').forEach(x=>x.classList.toggle('selected',x===btn));
  searchResults();
 }));
}
window.openLibraryTopic=function(id){
 const m=modules.find(x=>x.id===id);
 if(!m)return;
 showView('learn');
 const g=guides[m.id]||{};
 detail.classList.remove('hidden');
 detail.innerHTML='<div class="flex" style="justify-content:space-between"><span class="tag">'+esc(m.chap)+'</span><button class="btn ghost" type="button" id="libraryClose">Close ×</button></div>'+
 '<h2 class="library-detail-title">'+esc(m.title)+'</h2>'+
 (g.term?'<div class="library-plain"><h3>In plain English: '+esc(g.term)+'</h3><p>'+esc(g.meaning)+'</p><h3>Engineering example</h3><p>'+esc(g.example)+'</p><p><strong>Exam takeaway:</strong> '+esc(g.tip)+'</p></div>':'')+
 '<h3>Core rules</h3>'+m.lesson.map(p=>'<p>'+esc(p)+'</p>').join('')+
 '<div class="callout"><strong>Remember:</strong> '+esc(m.key)+'</div>'+
 '<p class="small muted">MPEP starting point: '+esc(m.ref)+'. Confirm current requirements and exceptions against the official material.</p>'+
 '<a class="resource" href="https://www.uspto.gov/web/offices/pac/mpep/index.html" target="_blank" rel="noopener noreferrer">Official USPTO MPEP ↗</a>'+
 '<h3>Related daily lessons</h3>'+relatedHTML(m)+
 '<div class="toolbar"><button class="btn secondary" type="button" id="libraryPractice">Practice this topic →</button><button class="btn ghost" type="button" id="libraryReviewed">'+(progress.completed[m.id]?'✓ Reviewed':'Mark reference reviewed ✓')+'</button></div>';
 detail.querySelector('#libraryClose').addEventListener('click',()=>{detail.classList.add('hidden');document.getElementById('librarySearch').focus()});
 detail.querySelector('#libraryPractice').addEventListener('click',()=>startQuiz(m.id,5));
 detail.querySelector('#libraryReviewed').addEventListener('click',()=>{
  progress.completed[m.id]=true;save();updateMetrics();searchResults();window.openLibraryTopic(m.id);
 });
 detail.querySelectorAll('[data-lesson]').forEach(b=>b.addEventListener('click',()=>window.openDailyLessonReference&&window.openDailyLessonReference(Number(b.dataset.lesson))));
 detail.scrollIntoView({behavior:'smooth',block:'start'});
};
const oldShow=showView;
showView=function(id){oldShow(id);if(id==='learn')searchResults()};
const oldRender=renderModules;
renderModules=function(){oldRender();searchResults()};
openLesson=function(index){const m=modules[index];if(m)window.openLibraryTopic(m.id)};
initLibrary();
searchResults();
})();
