/* Smart practice v1: uses existing saved attempts, keeping backups compatible. */
(function(){
'use strict';
function allStats(){
  const map=new Map();
  for(const a of (Array.isArray(progress.attempts)?progress.attempts:[])){
    const id=String(a.id);
    if(!map.has(id))map.set(id,{attempts:0,correct:0,streak:0,lastWrong:false,lastDate:''});
    const s=map.get(id);
    s.attempts++;if(a.correct){s.correct++;s.streak++;s.lastWrong=false}else{s.streak=0;s.lastWrong=true}
    s.lastDate=a.date||'';
  }
  return map;
}
function stage(s){
  if(!s||!s.attempts)return 'unseen';
  if(s.streak>=3)return 'mastered';
  return s.lastWrong||s.correct<s.attempts?'review':'learning';
}
function totals(){
  const stats=allStats();const result={unseen:0,review:0,learning:0,mastered:0,total:questions.length};
  for(const q of questions)result[stage(stats.get(String(q.id)))]++;
  return result;
}
function escapeText(x){return String(x).replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]))}
function statusLabel(st){return {unseen:'New',review:'Needs review',learning:'Learning',mastered:'Mastered'}[st]}
function renderStudyStats(){
  const t=totals(), root=document.getElementById('smartSummary');
  if(root){
    root.innerHTML='<div class="smart-kpis">'+[
      ['Unseen',t.unseen],['Needs review',t.review],['Learning',t.learning],['Mastered',t.mastered]
    ].map(([label,n])=>'<div class="smart-kpi"><strong>'+n+'</strong><span>'+label+'</span></div>').join('')+'</div>'+
    '<div class="bar" aria-label="Question mastery"><div style="width:'+(100*t.mastered/Math.max(1,t.total))+'%"></div></div>'+
    '<p class="small muted">Mastery requires 3 consecutive correct answers on the same question. Incorrect answers reset its streak. This measures practice familiarity, not exam readiness.</p>'+
    '<div class="toolbar"><button class="btn" type="button" onclick="startSmartSession(\'review\')">Review mistakes ('+t.review+')</button>'+
    '<button class="btn secondary" type="button" onclick="startSmartSession(\'unseen\')">Try unseen ('+t.unseen+')</button></div>';
  }
  const mode=document.getElementById('practiceMode');
  if(mode){
    const count=Number(document.getElementById('quizCount').value)||10;
    const topic=document.getElementById('quizTopic').value||'all';
    const stats=allStats();
    const available=questions.filter(q=>(topic==='all'||q.topic===topic)&&
      (mode.value==='all'||(mode.value==='unseen'&&stage(stats.get(String(q.id)))==='unseen')||
      (mode.value==='review'&&stage(stats.get(String(q.id)))==='review')||
      (mode.value==='learning'&&stage(stats.get(String(q.id)))==='learning')||
      (mode.value==='mastered'&&stage(stats.get(String(q.id)))==='mastered')));
    const el=document.getElementById('practiceAvailability');
    if(el)el.textContent=available.length+' matching questions available • '+Math.min(count,available.length)+' in this session';
  }
}
function renderHistory(){
 const container=document.getElementById('smartHistory');if(!container)return;
 const stats=allStats();
 const rows=questions.map(q=>({q,s:stats.get(String(q.id))})).filter(x=>x.s&&x.s.attempts).sort((a,b)=>(b.s.lastDate||'').localeCompare(a.s.lastDate||'')).slice(0,12);
 container.innerHTML=rows.length?rows.map(({q,s})=>{
   let st=stage(s);
   return '<div class="smart-history-row"><span class="smart-status '+st+'">'+statusLabel(st)+'</span>'+
   '<span class="smart-history-text">'+escapeText(q.q)+'</span><span class="small muted">'+s.correct+'/'+s.attempts+' correct</span></div>';
 }).join(''):'<p class="small muted">Your recent question history will appear here once you answer a question.</p>';
}
function refresh(){renderStudyStats();renderHistory()}
window.startSmartSession=function(mode){
 showView('practice');
 document.getElementById('quizTopic').value='all';
 document.getElementById('practiceMode').value=mode;
 document.getElementById('quizCount').value='10';
 renderStudyStats();
 startQuiz('all',10);
};
const originalStart=startQuiz;
startQuiz=function(topic,count){
 const topicEl=document.getElementById('quizTopic'),countEl=document.getElementById('quizCount');
 topic=topic||topicEl.value||'all';count=Number(count||countEl.value||10);
 const mode=document.getElementById('practiceMode').value;
 const stats=allStats();
 let pool=questions.filter(q=>topic==='all'||q.topic===topic);
 if(mode==='unseen')pool=pool.filter(q=>stage(stats.get(String(q.id)))==='unseen');
 if(mode==='review')pool=pool.filter(q=>stage(stats.get(String(q.id)))==='review');
 if(mode==='learning')pool=pool.filter(q=>stage(stats.get(String(q.id)))==='learning');
 if(mode==='mastered')pool=pool.filter(q=>stage(stats.get(String(q.id)))==='mastered');
 pool=pool.map(q=>({q,r:Math.random()}));
 const rank={review:0,unseen:1,learning:2,mastered:3};
 pool.sort((a,b)=>mode==='all'?rank[stage(stats.get(String(a.q.id)))]-rank[stage(stats.get(String(b.q.id)))]||a.r-b.r:a.r-b.r);
 quiz=pool.slice(0,Math.min(count,pool.length)).map(x=>x.q);
 qi=0;score=0;answered=false;
 if(!quiz.length){
  showView('practice');showQuizSetup();
  const notice=document.getElementById('practiceEmpty');
  notice.textContent='No questions in this category right now. Try a different study mode or topic.';
  notice.classList.remove('hidden');refresh();return;
 }
 document.getElementById('practiceEmpty').classList.add('hidden');
 showView('practice');document.getElementById('quizSetup').classList.add('hidden');
 document.getElementById('quizResults').classList.add('hidden');
 document.getElementById('quizGame').classList.remove('hidden');
 renderQuestion();
};
const originalRender=renderQuestion;
renderQuestion=function(){
 originalRender();
 const q=quiz[qi],s=allStats().get(String(q.id));
 const b=document.getElementById('smartQuestionStatus');
 b.textContent='Question '+String(q.id)+' • '+statusLabel(stage(s))+(s?' • '+s.attempts+' previous attempt'+(s.attempts===1?'':'s'):'');
};
const originalAnswer=answerQ;
answerQ=function(index){
 if(answered)return;
 originalAnswer(index);
 const q=quiz[qi],st=stage(allStats().get(String(q.id)));
 const node=document.getElementById('smartAfterAnswer');
 if(node){node.textContent='Study status: '+statusLabel(st)+(st==='mastered'?' (3 correct in a row)':'');node.classList.remove('hidden')}
 refresh();
};
const originalNext=nextQuestion;
nextQuestion=function(){const node=document.getElementById('smartAfterAnswer');if(node)node.classList.add('hidden');originalNext();refresh()};
const originalShowSetup=showQuizSetup;
showQuizSetup=function(){originalShowSetup();refresh()};
const originalImport=importData;
importData=function(event){originalImport(event);setTimeout(refresh,250)};
const originalSave=save;
save=function(){originalSave();refresh()};
const setup=document.getElementById('quizSetup');
const modeLabel=document.createElement('label');
modeLabel.textContent='Study mode ';
modeLabel.innerHTML='<span>Study mode</span> <select id="practiceMode" class="select">'+
  '<option value="all">Smart mix (mistakes first)</option>'+
  '<option value="unseen">Unseen only</option>'+
  '<option value="review">Needs review</option>'+
  '<option value="learning">Learning</option>'+
  '<option value="mastered">Mastered review</option></select>';
const setupToolbar=setup.querySelector('.toolbar');
setupToolbar.insertBefore(modeLabel,setupToolbar.firstChild);
const helper=document.createElement('p');helper.id='practiceAvailability';helper.className='small muted';
setupToolbar.after(helper);
const empty=document.createElement('p');empty.id='practiceEmpty';empty.className='warning hidden';setup.append(empty);
const pill=document.createElement('div');pill.id='smartQuestionStatus';pill.className='small muted';document.getElementById('qTopic').before(pill);
const after=document.createElement('div');after.id='smartAfterAnswer';after.className='small focus hidden';document.getElementById('qFeedback').after(after);
const dashboard=document.querySelector('#dashboard .grid');
dashboard.insertAdjacentHTML('afterend','<div class="card smart-panel" style="margin-top:16px"><h2>Your question mastery</h2><div id="smartSummary"></div><h3 style="margin-top:18px">Recent question history</h3><div id="smartHistory"></div></div>');
for(const id of ['practiceMode','quizTopic','quizCount'])document.getElementById(id).addEventListener('change',renderStudyStats);
const oldShow=showView;
showView=function(id){oldShow(id);if(id==='dashboard'||id==='practice')refresh()};
refresh();
})();
