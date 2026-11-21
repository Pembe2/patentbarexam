/* Daily learning path: progressive lessons, local persistence, no mandatory calendar catch-up. */
(function(){
'use strict';
const lessons=window.PATENT_DAILY_LESSONS||[];
if(!lessons.length)return;
const dashboard=document.getElementById('dashboard');
const side=document.querySelector('.nav-wrap');
const main=document.querySelector('.main');
if(!dashboard||!side||!main)return;
const safe=s=>String(s??'').replace(/[&<>"']/g,x=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[x]));
const localDay=()=>{const d=new Date();return [d.getFullYear(),String(d.getMonth()+1).padStart(2,'0'),String(d.getDate()).padStart(2,'0')].join('-')};
function stored(){if(!progress.daily||typeof progress.daily!=='object')progress.daily={completed:{},dismissedDate:'',lastCompletedDate:''};if(!progress.daily.completed||typeof progress.daily.completed!=='object')progress.daily.completed={};return progress.daily}
function nextIndex(){const d=stored();return lessons.findIndex(l=>!d.completed[l.id]);}
function doneCount(){return lessons.filter(l=>!!stored().completed[l.id]).length}
function current(){const i=nextIndex();return i<0?null:lessons[i]}
const banner=document.createElement('div');banner.className='daily-banner';
dashboard.insertBefore(banner,dashboard.querySelector('.grid'));
const button=document.createElement('button');button.className='nav';button.type='button';button.dataset.view='daily';button.innerHTML='<span>☀</span> Daily lessons';side.insertBefore(button,side.children[1]||null);
const view=document.createElement('section');view.id='daily';view.className='view';
view.innerHTML='<div class="eyebrow">Your daily learning path</div><h1>Ten minutes of patent law</h1><p class="sub">One concept at a time. Missing a day never skips a lesson.</p><div id="dailyApp"></div>';
main.insertBefore(view,main.querySelector('.footer'));
button.addEventListener('click',()=>openDaily());
let selected=null,phase=0,questionIndex=0,correctCount=0,answered=false;

const glossary=new Map();
lessons.forEach(lesson=>(lesson.vocabulary||[]).forEach(entry=>{
 const key=entry.term.toLowerCase();if(!glossary.has(key))glossary.set(key,{...entry,firstDay:lesson.day});
}));
function lookupTerm(term){return glossary.get(String(term).toLowerCase())}
function glossaryItem(entry,mini=false){
 return '<div class="daily-vocab-item'+(mini?' daily-vocab-mini':'')+'"><strong>'+safe(entry.term)+'</strong><p>'+safe(entry.meaning)+'</p></div>';
}
function vocabDisplay(l){
 const words=l.vocabulary||[];
 const previous=(l.reviewTerms||[]).map(lookupTerm).filter(Boolean);
 return '<section class="daily-vocabulary"><h3>New words for today</h3>'+
 '<p class="small muted">Learn these first. We’ll use them in the lesson and bring them back later.</p>'+
 '<div class="daily-vocab-grid">'+words.map(word=>glossaryItem(word)).join('')+'</div>'+
 (previous.length?'<details class="daily-vocab-review" open><summary>Quick review of earlier words</summary>'+
 '<div class="daily-vocab-grid">'+previous.map(word=>glossaryItem(word,true)).join('')+'</div></details>':'')+
 '</section>';
}
function quizWords(q){
 const text=(q.q+' '+q.choices.join(' ')).toLowerCase();
 const matched=Array.from(glossary.values()).filter(x=>text.includes(x.term.toLowerCase()));
 const selected=matched.sort((a,b)=>a.firstDay-b.firstDay).slice(0,9);
 return selected.length?'<details class="daily-quiz-glossary"><summary>Unfamiliar wording? Tap for definitions</summary>'+
 '<p class="small muted">These definitions may give you clues. That’s fine for learning practice; timed exam mode hides them.</p>'+
 selected.map(x=>glossaryItem(x,true)).join('')+'</details>':'';
}

function goDaily(){showView('daily');window.scrollTo(0,0)}
function renderBanner(){
 const d=stored(),l=current(),complete=doneCount(),finishedToday=d.lastCompletedDate===localDay();
 if(!l){
  banner.innerHTML='<div class="daily-banner-head"><strong>🎓 Foundations completed!</strong><span>'+lessons.length+' of '+lessons.length+' lessons</span></div><p>You finished the introductory path. You can review any lesson below.</p><button type="button" class="btn" id="dailyGo">Review lessons →</button>';
 }else{
  banner.innerHTML='<div class="daily-banner-head"><strong>☀ '+(finishedToday?'Today’s lesson complete':'Today’s 10-minute lesson')+'</strong><span>Lesson '+l.day+' / '+lessons.length+'</span></div>'+
  '<h2>'+safe(l.title)+'</h2><p>'+safe(l.definition)+'</p><div class="daily-banner-actions"><span class="small">≈ 10 minutes · explanations + 3 questions</span><button class="btn" id="dailyGo">'+(finishedToday?'Keep learning →':'Start today’s lesson →')+'</button>'+
  (!finishedToday&&d.dismissedDate!==localDay()?'<button class="btn ghost" id="dailyLater">Maybe later</button>':'')+'</div>';
  if(d.dismissedDate===localDay()&&!finishedToday)banner.classList.add('daily-dismissed');else banner.classList.remove('daily-dismissed');
 }
 banner.querySelector('#dailyGo').addEventListener('click',()=>openDaily());
 const later=banner.querySelector('#dailyLater');if(later)later.addEventListener('click',()=>{d.dismissedDate=localDay();save();banner.classList.add('daily-dismissed');later.remove();});
}
function teachFormat(s){return safe(s).replace(/\\*\\*(.+?)\\*\\*/g,'<strong>$1</strong>')}
function enriched(l){return (window.PATENT_LESSON_ENRICHMENT||{})[l.day]||null}
function teachingHTML(l){
 const e=enriched(l);
 if(!e)return '<section class="daily-teaching-section"><h3>Understand the rule</h3><p class="daily-def">'+safe(l.definition)+'</p>'+l.plain.map(p=>'<p>'+safe(p)+'</p>').join('')+'</section>';
 return '<section class="daily-teaching-section"><h3>The rule to learn</h3><div class="daily-teaching-rule">'+teachFormat(e.rule)+'</div>'+
 '<h3>What that actually means</h3>'+e.explain.map((p,i)=>'<div class="daily-teaching-paragraph"><span class="daily-teaching-index">'+(i+1)+'</span><p>'+safe(p)+'</p></div>').join('')+'</section>';
}
function exampleHTML(l){
 const e=enriched(l);
 return '<h3>Worked engineering example</h3>'+
 (e?'<p class="small muted">Follow the reasoning in order. The practice questions will use the same concepts.</p><ol class="daily-worked-steps">'+e.worked.map(x=>'<li>'+teachFormat(x)+'</li>').join('')+'</ol>':
 '<p class="daily-def">'+safe(l.example)+'</p>')+
 (e?'<div class="daily-ready-list"><h3>Before the questions, you should know</h3><ul>'+e.before.map(x=>'<li>'+teachFormat(x)+'</li>').join('')+'</ul></div>':'')+
 '<div class="daily-note"><strong>Common exam trap:</strong> '+safe(l.trap)+'</div>'+
 '<p class="small muted">Use the glossary as an optional reminder; essential terms should already have been taught above.</p>';
}
function heading(l,subtitle){
 return '<div class="daily-title"><div class="eyebrow">Lesson '+l.day+' of '+lessons.length+' · '+safe(l.tag)+'</div><h2>'+safe(l.title)+'</h2><p class="small muted">'+safe(subtitle)+'</p></div>';
}
function renderIndex(){
 const roadmap=(window.PATENT_LESSON_ROADMAP||[]).filter(x=>x.day>lessons.length);

 const app=document.getElementById('dailyApp'),d=stored(),l=current();
 const pct=Math.round(doneCount()/lessons.length*100);
 app.innerHTML='<div class="card daily-start"><div class="flex" style="justify-content:space-between"><strong>Your foundation course</strong><span class="pill">'+doneCount()+' / '+lessons.length+' completed</span></div>'+
 '<div class="bar"><div style="width:'+pct+'%"></div></div>'+
 (l?'<h2 style="margin-top:18px">Up next: '+safe(l.title)+'</h2><p>'+safe(l.definition)+'</p><p class="small muted">≈ 10 minutes. Learn the vocabulary and legal rule, work through an engineering example, then answer three questions.</p><button class="btn" id="dailyStart">Start lesson '+l.day+' →</button>':'<h2 style="margin-top:18px">All '+lessons.length+' available lessons completed!</h2><p>Review any lesson below. Your completed lessons remain available.</p>')+'</div>'+
 '<h3 style="margin:23px 0 12px">Your lessons</h3><div class="daily-lesson-list">'+lessons.map(x=>'<button type="button" class="daily-list-item '+(d.completed[x.id]?'complete':'')+'" '+(!d.completed[x.id]&&l&&x.day>l.day?'disabled aria-label="Locked — complete earlier lessons first"':'')+' data-daily-id="'+safe(x.id)+'"><span class="daily-list-number">'+(d.completed[x.id]?'✓':x.day)+'</span><span><strong>'+safe(x.title)+'</strong><small>'+safe(x.tag)+'</small></span><span class="muted">›</span></button>').join('')+'</div>';
 if(l)app.querySelector('#dailyStart').addEventListener('click',()=>start(l.id));
 app.querySelectorAll('[data-daily-id]:not(:disabled)').forEach(x=>x.addEventListener('click',()=>start(x.dataset.dailyId)));
 if(roadmap.length){
  const future=document.createElement('details');
  future.className='daily-future-roadmap';
  future.innerHTML='<summary>Preview the remaining '+roadmap.length+' planned lessons (Days '+roadmap[0].day+'–'+roadmap[roadmap.length-1].day+')</summary>'+
   '<p class="small muted">These lessons are outlined, not yet available for study. Their topics, vocabulary, and MPEP mappings are planned; content and questions will be developed in later batches.</p>'+
   '<div class="daily-lesson-list">'+roadmap.map(x=>
     '<div class="daily-list-item daily-planned-item"><span class="daily-list-number">'+x.day+'</span><span><strong>'+safe(x.title)+'</strong><small>'+safe(x.objective)+'</small></span><span class="daily-plan-pill">Planned</span></div>'
   ).join('')+'</div>';
  app.append(future);
 }
 const unlocked=lessons.filter(x=>d.completed[x.id]||(l&&x.id===l.id));
 const words=unlocked.flatMap(x=>x.vocabulary||[]);
 if(words.length){
  const gl=document.createElement('details');
  gl.className='daily-vocab-review daily-lesson-glossary';
  gl.innerHTML='<summary>My patent-law vocabulary ('+words.length+' words)</summary><p class="small muted">Definitions from lessons you have reached. Review them whenever you like.</p><div class="daily-vocab-grid">'+words.map(x=>glossaryItem(x,true)).join('')+'</div>';
  app.append(gl);
 }
}
function openDaily(){selected=null;goDaily();renderIndex()}
function start(id){selected=lessons.find(l=>l.id===id);if(!selected)return;phase=0;questionIndex=0;correctCount=0;answered=false;goDaily();renderStep()}
function updateBack(btn){btn.addEventListener('click',()=>{if(phase===0){openDaily();return}phase--;if(phase===2){questionIndex=0;correctCount=0;answered=false}renderStep()})}
function renderStep(){
 const l=selected;if(!l)return renderIndex();
 const app=document.getElementById('dailyApp');
 const steps=['Learn','Example','Practice','Recap'];const n=phase;
 const top=heading(l,'About 10–15 minutes · '+steps[n]+' · Step '+(n+1)+' of 4')+
 '<div class="daily-steps">'+steps.map((x,i)=>'<span class="'+(i===n?'active':i<n?'done':'')+'">'+(i+1)+'. '+x+'</span>').join('')+'</div>';
 let content='';
 if(phase===0)content='<div class="daily-reading">'+vocabDisplay(l)+teachingHTML(l)+'<div class="daily-note"><strong>Remember:</strong> '+safe(l.recap)+'</div></div><div class="daily-controls"><button class="btn ghost" id="dailyBack">All lessons</button><button class="btn" id="dailyContinue">See the engineering example →</button></div>';
 if(phase===1)content='<div class="daily-reading">'+exampleHTML(l)+'</div><div class="daily-controls"><button class="btn ghost" id="dailyBack">← Back</button><button class="btn" id="dailyContinue">Try 3 questions →</button></div>';
 if(phase===2)content='<div id="dailyQuestion"></div><div class="daily-controls"><button class="btn ghost" id="dailyBack">← Back</button><button class="btn hidden" id="dailyContinue">Next →</button></div>';
 if(phase===3)content='<div class="daily-reading"><h3>Today’s takeaway</h3><p class="daily-def">'+safe(l.recap)+'</p><div class="daily-note"><strong>Exam trap:</strong> '+safe(l.trap)+'</div><div class="daily-recap-words"><strong>Words to remember:</strong> '+(l.vocabulary||[]).map(x=>safe(x.term)).join(' · ')+'</div><p><strong>Your practice:</strong> '+correctCount+' of '+l.ids.length+' correct. Getting questions wrong is part of learning—those answers were added to your existing review history.</p><p class="small muted">Reference to explore: '+safe(l.refs)+'. Confirm detailed rules and exceptions in the official MPEP.</p><a class="resource" target="_blank" rel="noopener" href="https://www.uspto.gov/web/offices/pac/mpep/index.html">Open USPTO MPEP ↗</a></div><div class="daily-controls"><button class="btn ghost" id="dailyBack">← Back</button><button class="btn" id="dailyFinish">Mark lesson complete ✓</button></div>';
 app.innerHTML='<div class="card daily-work">'+top+content+'</div>';
 updateBack(app.querySelector('#dailyBack'));
 const next=app.querySelector('#dailyContinue');if(next)next.addEventListener('click',()=>{
  if(phase===2){if(!answered)return;questionIndex++;answered=false;if(questionIndex>=l.ids.length)phase=3}else phase++;
  renderStep();
 });
 const finish=app.querySelector('#dailyFinish');if(finish)finish.addEventListener('click',()=>complete());
 if(phase===2)renderQuestion();
 window.scrollTo(0,0);
}
function findQ(id){return questions.find(q=>String(q.id)===String(id))}
function explanation(q,i){
 if(Array.isArray(q.choiceWhy)&&q.choiceWhy[i])return q.choiceWhy[i];
 if(i===q.correct)return q.why;
 const lists=[window.PATENT_FEEDBACK_ORIGINAL,window.PATENT_FEEDBACK_21_45,window.PATENT_FEEDBACK_46_70];
 const a=lists.map(x=>x&&x[String(q.id)]).find(Boolean);
 const pos=q.choices.map((_,j)=>j).filter(j=>j!==q.correct).indexOf(i);
 return a&&a[pos]||'The governing rule supports a different answer. Compare the answer with the explanation below.';
}
function renderQuestion(){
 const l=selected,q=findQ(l.ids[questionIndex]),container=document.getElementById('dailyQuestion');
 if(!q){container.textContent='This question could not be loaded. You can return to the lesson list.';return}
 const letters='ABCDE';
 container.innerHTML='<div class="daily-question-head"><span class="pill">Question '+(questionIndex+1)+' / '+l.ids.length+'</span><span class="small muted">MPEP: '+safe(q.ref)+'</span></div>'+
 '<h3 class="daily-question-text">'+safe(q.q)+'</h3>'+quizWords(q)+'<div class="daily-answer-list">'+q.choices.map((a,i)=>'<button class="choice daily-answer" data-answer="'+i+'"><b>'+letters[i]+'.</b><span>'+safe(a)+'</span></button>').join('')+'</div><div id="dailyFeedback"></div>';
 container.querySelectorAll('[data-answer]').forEach(x=>x.addEventListener('click',()=>submit(Number(x.dataset.answer))));
}
function submit(i){
 if(answered)return;
 const q=findQ(selected.ids[questionIndex]);if(!q)return;
 answered=true;const good=i===q.correct;if(good)correctCount++;
 progress.attempts.push({id:q.id,topic:q.topic,correct:good,date:new Date().toISOString(),source:'daily',lesson:selected.id});
 save();
 const buttons=document.querySelectorAll('#dailyQuestion .daily-answer');
 buttons.forEach((b,index)=>{b.disabled=true;if(index===q.correct)b.classList.add('correct');if(index===i&&!good)b.classList.add('wrong')});
 const f=document.getElementById('dailyFeedback');
 f.className='daily-answer-feedback '+(good?'good':'bad');
 f.innerHTML='<strong>'+(good?'Correct — nice work!':'Not quite — here’s why.')+'</strong>'+
 (!good?'<p><b>Your answer:</b> '+safe(q.choices[i])+'</p><p>'+safe(explanation(q,i))+'</p>':'')+
 '<p><b>Correct answer:</b> '+safe(q.choices[q.correct])+'</p><p>'+safe(q.why)+'</p>'+
 '<div class="daily-other-choices"><strong>Why the other choices are incorrect</strong>'+
 q.choices.map((a,j)=>j===q.correct?'':'<p><b>'+String.fromCharCode(65+j)+'. '+safe(a)+'</b> — '+safe(explanation(q,j))+'</p>').join('')+'</div>'+
 '<div class="daily-note"><b>Key idea:</b> '+safe(selected.recap)+'</div>'+
 '<div class="small muted">Reference: '+safe(q.ref)+'</div>';
 const next=document.getElementById('dailyContinue');
 next.classList.remove('hidden');next.textContent=questionIndex===selected.ids.length-1?'Review today’s takeaway →':'Next question →';
}
function complete(){
 const d=stored();
 if(!d.completed[selected.id]){d.completed[selected.id]={date:new Date().toISOString(),score:correctCount,total:selected.ids.length};d.lastCompletedDate=localDay();save()}
 const title=selected.title;selected=null;renderBanner();renderIndex();
 const note=document.createElement('div');note.className='daily-completed-message';note.textContent='✓ Completed: '+title+'. Great work. Your next lesson is ready whenever you are.';
 document.getElementById('dailyApp').prepend(note);
 window.scrollTo(0,0);
}
// A real welcome dialog, shown once per local day unless the daily lesson is complete.
let modal=null;
function closeDailyPrompt(dismissForToday){
 if(dismissForToday){
  const d=stored();
  d.dismissedDate=localDay();
  save();
 }
 if(modal){modal.remove();modal=null}
 document.body.classList.remove('daily-modal-open');
}
function showDailyPrompt(){
 if(modal)return;
 const d=stored(),next=current();
 if(!next||d.dismissedDate===localDay()||d.lastCompletedDate===localDay())return;
 modal=document.createElement('div');
 modal.className='daily-modal-backdrop';
 modal.setAttribute('role','presentation');
 modal.innerHTML='<div class="daily-modal" role="dialog" aria-modal="true" aria-labelledby="dailyModalTitle" aria-describedby="dailyModalDesc">'+
 '<div class="daily-modal-eyebrow">☀ Your daily patent bar lesson</div>'+
 '<h2 id="dailyModalTitle">Ready for 10 minutes of learning?</h2>'+
 '<p id="dailyModalDesc">Lesson '+next.day+' of '+lessons.length+': <strong>'+safe(next.title)+'</strong></p>'+
 '<p class="daily-modal-summary">'+safe(next.definition)+'</p>'+
 '<div class="daily-modal-actions"><button type="button" id="dailyModalStart" class="btn">Start today’s lesson →</button><button type="button" id="dailyModalLater" class="btn ghost">Maybe later</button></div>'+
 '<p class="small muted">No pressure — you won’t skip a lesson if you miss a day.</p></div>';
 document.body.appendChild(modal);
 document.body.classList.add('daily-modal-open');
 modal.querySelector('#dailyModalStart').addEventListener('click',()=>{const id=next.id;closeDailyPrompt(false);start(id)});
 modal.querySelector('#dailyModalLater').addEventListener('click',()=>closeDailyPrompt(true));
 modal.addEventListener('click',e=>{if(e.target===modal)closeDailyPrompt(true)});
 modal.addEventListener('keydown',e=>{if(e.key==='Escape'){e.preventDefault();closeDailyPrompt(true)}});
 modal.querySelector('#dailyModalStart').focus();
}
window.openDailyLessonReference=function(day){
 const lesson=lessons.find(l=>l.day===Number(day));
 if(!lesson)return openDaily();
 const next=current();
 // Previously completed lessons and the next unlocked lesson can be opened directly.
 if(stored().completed[lesson.id]||(next&&next.id===lesson.id))start(lesson.id);
 else openDaily();
};
const oldShowView=showView;
showView=function(id){oldShowView(id);if(id==='dashboard')renderBanner();};
renderBanner();
showDailyPrompt();
})();
