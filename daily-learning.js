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
function goDaily(){showView('daily');window.scrollTo(0,0)}
function renderBanner(){
 const d=stored(),l=current(),complete=doneCount(),finishedToday=d.lastCompletedDate===localDay();
 if(!l){
  banner.innerHTML='<div class="daily-banner-head"><strong>🎓 Foundations completed!</strong><span>15 of 15 lessons</span></div><p>You finished the introductory path. You can review any lesson below.</p><button type="button" class="btn" id="dailyGo">Review lessons →</button>';
 }else{
  banner.innerHTML='<div class="daily-banner-head"><strong>☀ '+(finishedToday?'Today’s lesson complete':'Today’s 10-minute lesson')+'</strong><span>Lesson '+l.day+' / '+lessons.length+'</span></div>'+
  '<h2>'+safe(l.title)+'</h2><p>'+safe(l.definition)+'</p><div class="daily-banner-actions"><span class="small">≈ 10 minutes · explanations + 3 questions</span><button class="btn" id="dailyGo">'+(finishedToday?'Keep learning →':'Start today’s lesson →')+'</button>'+
  (!finishedToday&&d.dismissedDate!==localDay()?'<button class="btn ghost" id="dailyLater">Maybe later</button>':'')+'</div>';
  if(d.dismissedDate===localDay()&&!finishedToday)banner.classList.add('daily-dismissed');else banner.classList.remove('daily-dismissed');
 }
 banner.querySelector('#dailyGo').addEventListener('click',()=>openDaily());
 const later=banner.querySelector('#dailyLater');if(later)later.addEventListener('click',()=>{d.dismissedDate=localDay();save();banner.classList.add('daily-dismissed');later.remove();});
}
function heading(l,subtitle){
 return '<div class="daily-title"><div class="eyebrow">Lesson '+l.day+' of '+lessons.length+' · '+safe(l.tag)+'</div><h2>'+safe(l.title)+'</h2><p class="small muted">'+safe(subtitle)+'</p></div>';
}
function renderIndex(){
 const app=document.getElementById('dailyApp'),d=stored(),l=current();
 const pct=Math.round(doneCount()/lessons.length*100);
 app.innerHTML='<div class="card daily-start"><div class="flex" style="justify-content:space-between"><strong>Your foundation course</strong><span class="pill">'+doneCount()+' / '+lessons.length+' completed</span></div>'+
 '<div class="bar"><div style="width:'+pct+'%"></div></div>'+
 (l?'<h2 style="margin-top:18px">Up next: '+safe(l.title)+'</h2><p>'+safe(l.definition)+'</p><p class="small muted">≈ 10 minutes. Read, see a practical example, answer three questions and recap.</p><button class="btn" id="dailyStart">Start lesson '+l.day+' →</button>':'<h2 style="margin-top:18px">All 15 lessons completed!</h2><p>Review any lesson below. Your completed lessons remain available.</p>')+'</div>'+
 '<h3 style="margin:23px 0 12px">Your lessons</h3><div class="daily-lesson-list">'+lessons.map(x=>'<button type="button" class="daily-list-item '+(d.completed[x.id]?'complete':'')+'" '+(!d.completed[x.id]&&l&&x.day>l.day?'disabled aria-label="Locked — complete earlier lessons first"':'')+' data-daily-id="'+safe(x.id)+'"><span class="daily-list-number">'+(d.completed[x.id]?'✓':x.day)+'</span><span><strong>'+safe(x.title)+'</strong><small>'+safe(x.tag)+'</small></span><span class="muted">›</span></button>').join('')+'</div>';
 if(l)app.querySelector('#dailyStart').addEventListener('click',()=>start(l.id));
 app.querySelectorAll('[data-daily-id]:not(:disabled)').forEach(x=>x.addEventListener('click',()=>start(x.dataset.dailyId)));
}
function openDaily(){selected=null;goDaily();renderIndex()}
function start(id){selected=lessons.find(l=>l.id===id);if(!selected)return;phase=0;questionIndex=0;correctCount=0;answered=false;goDaily();renderStep()}
function updateBack(btn){btn.addEventListener('click',()=>{if(phase===0){openDaily();return}phase--;if(phase===2){questionIndex=0;correctCount=0;answered=false}renderStep()})}
function renderStep(){
 const l=selected;if(!l)return renderIndex();
 const app=document.getElementById('dailyApp');
 const steps=['Learn','Example','Practice','Recap'];const n=phase;
 const top=heading(l,'About 10 minutes · '+steps[n]+' · Step '+(n+1)+' of 4')+
 '<div class="daily-steps">'+steps.map((x,i)=>'<span class="'+(i===n?'active':i<n?'done':'')+'">'+(i+1)+'. '+x+'</span>').join('')+'</div>';
 let content='';
 if(phase===0)content='<div class="daily-reading"><div class="daily-term">Legal vocabulary: <strong>'+safe(l.term)+'</strong></div><p class="daily-def">'+safe(l.definition)+'</p>'+l.plain.map((p)=>'<p>'+safe(p)+'</p>').join('')+'<div class="daily-note"><strong>Remember:</strong> '+safe(l.recap)+'</div></div><div class="daily-controls"><button class="btn ghost" id="dailyBack">All lessons</button><button class="btn" id="dailyContinue">See the engineering example →</button></div>';
 if(phase===1)content='<div class="daily-reading"><h3>Engineering example</h3><p class="daily-def">'+safe(l.example)+'</p><div class="daily-note"><strong>Common exam trap:</strong> '+safe(l.trap)+'</div><p>Now apply the idea to three questions. When you answer, you’ll see why each choice is right or wrong, plus an explanation.</p></div><div class="daily-controls"><button class="btn ghost" id="dailyBack">← Back</button><button class="btn" id="dailyContinue">Try 3 questions →</button></div>';
 if(phase===2)content='<div id="dailyQuestion"></div><div class="daily-controls"><button class="btn ghost" id="dailyBack">← Back</button><button class="btn hidden" id="dailyContinue">Next →</button></div>';
 if(phase===3)content='<div class="daily-reading"><h3>Today’s takeaway</h3><p class="daily-def">'+safe(l.recap)+'</p><div class="daily-note"><strong>Exam trap:</strong> '+safe(l.trap)+'</div><p><strong>Your practice:</strong> '+correctCount+' of '+l.ids.length+' correct. Getting questions wrong is part of learning—those answers were added to your existing review history.</p><p class="small muted">Reference to explore: '+safe(l.refs)+'. Confirm detailed rules and exceptions in the official MPEP.</p><a class="resource" target="_blank" rel="noopener" href="https://www.uspto.gov/web/offices/pac/mpep/index.html">Open USPTO MPEP ↗</a></div><div class="daily-controls"><button class="btn ghost" id="dailyBack">← Back</button><button class="btn" id="dailyFinish">Mark lesson complete ✓</button></div>';
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
 '<h3 class="daily-question-text">'+safe(q.q)+'</h3><div class="daily-answer-list">'+q.choices.map((a,i)=>'<button class="choice daily-answer" data-answer="'+i+'"><b>'+letters[i]+'.</b><span>'+safe(a)+'</span></button>').join('')+'</div><div id="dailyFeedback"></div>';
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
const oldShowView=showView;
showView=function(id){oldShowView(id);if(id==='dashboard')renderBanner();};
renderBanner();
})();
