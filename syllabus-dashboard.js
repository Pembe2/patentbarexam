/* Curriculum coverage dashboard, linked to existing content. No fabricated exam weights. */
(function(){
'use strict';
const syllabus=window.PATENT_SYLLABUS;
if(!syllabus||!Array.isArray(syllabus.items))return;
const lessons=window.PATENT_DAILY_LESSONS||[];
const existingQuestions=typeof questions!=='undefined'?questions:[];
const main=document.querySelector('.main');
const nav=document.querySelector('.nav-wrap');
if(!main||!nav)return;
const escapeHTML=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const view=document.createElement('section');view.className='view';view.id='syllabus';
view.innerHTML='<div class="eyebrow">USPTO source-material coverage</div><h1>Master Syllabus</h1>'+
'<p class="sub">Every major chapter and official source mapped into learnable topics. See exactly what we have built and what still needs work.</p>'+
'<div id="syllabusApp"></div>';
const footer=main.querySelector('.footer');if(footer)main.insertBefore(view,footer);else main.appendChild(view);
const menu=document.createElement('button');menu.className='nav';menu.type='button';menu.dataset.view='syllabus';menu.innerHTML='<span>▤</span>Master syllabus';
const libraryBtn=Array.from(nav.querySelectorAll('.nav')).find(b=>b.dataset.view==='learn');
if(libraryBtn)libraryBtn.after(menu);else nav.appendChild(menu);
let search='',filter='all',source='all';
const chapterName=c=>c.startsWith('OTHER-')?({ 'OTHER-PTAB':'Trial Practice Guide','OTHER-REP':'Representation Rules','OTHER-PPH':'Global/IP5 PPH'}[c]||c):'MPEP '+c;
function lessonFor(day){return lessons.find(l=>l.day===day)}
function questionFor(id){return existingQuestions.find(q=>String(q.id)===String(id))}
function audit(item){
 const ls=item.lessonDays.map(lessonFor).filter(Boolean);
 const qs=item.questionIds.map(questionFor).filter(Boolean);
 const reference=!!item.referenceTopic;
 // Listed sources and broad reference chapters are only pointers; neither proves exam readiness.
 return {lessons:ls,questions:qs,reference,planned:item.plannedDays||[],
  state:ls.length?'introduced':(item.plannedDays||[]).length?'planned':(qs.length||reference)?'partial':'missing'};
}
function levels(){
 const counts={introduced:0,planned:0,partial:0,missing:0};
 syllabus.items.forEach(item=>counts[audit(item).state]++);
 return counts;
}
function statusLabel(state){return state==='introduced'?'Daily lesson exists':state==='planned'?'Planned, not published':state==='partial'?'Intro/question only':'Not yet developed'}
function topicText(item){return [item.title,item.chapter,item.chapterTitle,item.reference,item.referenceTopic||''].join(' ').toLowerCase()}
function results(){
 const list=syllabus.items.filter(item=>{
  const auditResult=audit(item);
  return (filter==='all'||auditResult.state===filter)
   &&(source==='all'||item.chapter===source)
   &&(!search||topicText(item).includes(search));
 });
 return list;
}
function linkHTML(item,a){
 const parts=[];
 a.lessons.forEach(l=>parts.push('<button type="button" class="syllabus-link" data-lesson="'+l.day+'">Daily lesson '+l.day+': '+escapeHTML(l.title)+'</button>'));
 if(a.planned.length)parts.push('<span class="small muted">Planned lessons (not available yet): Days '+escapeHTML(a.planned.join(', '))+'</span>');
 if(item.referenceTopic)parts.push('<button type="button" class="syllabus-link" data-topic="'+escapeHTML(item.referenceTopic)+'">Reference Library: '+escapeHTML(item.referenceTopic)+'</button>');
 if(a.questions.length)parts.push('<span class="small muted">Draft question IDs: '+escapeHTML(a.questions.map(x=>String(x.id)).join(', '))+' (not individually source-verified)</span>');
 return parts.length?'<div class="syllabus-links">'+parts.join('')+'</div>':'<p class="small muted">No dedicated lessons, reference topic, or mapped practice questions yet.</p>';
}
function rowHTML(item){
 const a=audit(item);
 const priority=item.priority===1?'Core development priority':item.priority===2?'Secondary coverage':'Specialized / legacy';
 return '<details class="syllabus-item" data-syllabus="'+escapeHTML(item.id)+'"><summary>'+
 '<span class="syllabus-item-title"><strong>'+escapeHTML(item.title)+'</strong><small>'+escapeHTML(item.reference)+'</small></span>'+
 '<span class="syllabus-status '+a.state+'">'+statusLabel(a.state)+'</span></summary>'+
 '<div class="syllabus-expanded"><div class="small muted">'+priority+'</div>'+
 '<p><strong>Content audit:</strong> '+a.lessons.length+' linked daily lesson'+(a.lessons.length===1?'':'s')+
 '; '+a.questions.length+' mapped draft question'+(a.questions.length===1?'':'s')+
 '; '+(a.reference?'broad library topic exists':'no dedicated library topic')+'.</p>'+
 linkHTML(item,a)+
 '<p class="small muted">Mapped content is introductory. We have not certified this objective as fully covered or exam-ready.</p></div></details>';
}
function render(){
 const app=document.getElementById('syllabusApp');
 if(!app)return;
 const c=levels();
 const options=Array.from(new Map(syllabus.items.map(x=>[x.chapter,[x.chapter,x.chapterTitle]])).values());
 const selected=results();
 const grouped=new Map();
 selected.forEach(item=>{if(!grouped.has(item.chapter))grouped.set(item.chapter,[]);grouped.get(item.chapter).push(item)});
 app.innerHTML='<div class="syllabus-disclaimer">This is a <strong>curriculum inventory</strong>, not an official USPTO exam blueprint or predicted topic weighting. Even a linked lesson is only introductory coverage. All existing practice questions require individual legal quality review.</div>'+
 '<div class="syllabus-metrics">'+
 '<div><strong>'+syllabus.items.length+'</strong><span>Mapped learning objectives</span></div>'+
 '<div><strong>'+c.introduced+'</strong><span>Daily lesson introduced</span></div>'+ 
 '<div><strong>'+c.planned+'</strong><span>Future lesson planned</span></div>'+ 
 '<div><strong>'+c.partial+'</strong><span>Reference / question only</span></div>'+
 '<div><strong>'+c.missing+'</strong><span>Not yet developed</span></div></div>'+
 '<div class="syllabus-controls"><label for="syllabusSearch">Find a requirement</label>'+
 '<input id="syllabusSearch" type="search" placeholder="Try: assignments, priority, deadlines, PCT…" value="'+escapeHTML(search)+'" autocomplete="off">'+
 '<div class="syllabus-filter-buttons">'+[
 ['all','All'],['missing','Not developed'],['planned','Future lesson planned'],['partial','Intro/question only'],['introduced','Daily lesson']
 ].map(([k,v])=>'<button type="button" class="btn secondary syllabus-filter '+(filter===k?'selected':'')+'" data-filter="'+k+'">'+v+'</button>').join('')+'</div>'+
 '<label for="syllabusSource">Source chapter</label><select id="syllabusSource"><option value="all">All 29 MPEP chapters + 3 other sources</option>'+
 options.map(([code,name])=>'<option value="'+escapeHTML(code)+'"'+(source===code?' selected':'')+'>'+escapeHTML(chapterName(code)+' — '+name)+'</option>').join('')+'</select>'+
 '<p class="small muted">'+selected.length+' objectives match your filters.</p></div>'+
 '<div class="syllabus-chapters">'+Array.from(grouped.entries()).map(([chapter,items])=>
 '<section class="syllabus-chapter"><div class="syllabus-chapter-heading"><h2>'+escapeHTML(chapterName(chapter))+'</h2><span>'+escapeHTML(items[0].chapterTitle)+'</span><small>'+items.length+' objectives</small></div>'+
 items.map(rowHTML).join('')+'</section>').join('')+
 (selected.length?'':'<div class="card">No objectives match those filters. Try resetting the search.</div>')+'</div>'+
 '<div class="card syllabus-sources"><h2>Official examination sources</h2><p class="small muted">Source list checked '+escapeHTML(syllabus.metadata.verified)+'. The USPTO can revise its material list; verify it before exam day.</p>'+
 syllabus.official.map(x=>'<p><a href="'+escapeHTML(x.url)+'" target="_blank" rel="noopener noreferrer">'+escapeHTML(x.title)+' ↗</a><small>'+escapeHTML(x.scope)+'</small></p>').join('')+
 '<p><a href="'+escapeHTML(syllabus.metadata.officialSourceList)+'" target="_blank" rel="noopener noreferrer">USPTO official examination source list ↗</a></p></div>';
 const searchInput=app.querySelector('#syllabusSearch');
 searchInput.addEventListener('input',e=>{
  const position=e.target.selectionStart;search=e.target.value.toLowerCase().trim();
  render();const next=document.getElementById('syllabusSearch');next.focus();
  if(position!==null)next.setSelectionRange(Math.min(position,next.value.length),Math.min(position,next.value.length));
 });
 app.querySelector('#syllabusSource').addEventListener('change',e=>{source=e.target.value;render()});
 app.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>{filter=b.dataset.filter;render()}));
 app.querySelectorAll('[data-lesson]').forEach(b=>b.addEventListener('click',()=>{
  if(typeof window.openDailyLessonReference==='function')window.openDailyLessonReference(Number(b.dataset.lesson));
 }));
 app.querySelectorAll('[data-topic]').forEach(b=>b.addEventListener('click',()=>{
  if(typeof window.openLibraryTopic==='function')window.openLibraryTopic(b.dataset.topic);
 }));
}
menu.addEventListener('click',()=>{showView('syllabus');render()});
const oldShow=showView;
showView=function(id){oldShow(id);if(id==='syllabus')render()};
render();
})();