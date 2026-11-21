/* Answer-driven learning panels. Original explanatory content; verify source citations in MPEP. */
(function(){
'use strict';
const guides={"roadmap":{"title":"From application to issued patent","rule":"A patent application requests examination; it does not itself grant exclusionary rights. Claims, disclosure, examination, allowance, and issuance each serve different legal functions.","context":"A typical utility application has a specification, claims, and necessary drawings. The examiner assesses statutory requirements and issues Office actions; the applicant can respond. If claims are allowed, fees and formalities generally remain before grant.","trap":"Do not treat the abstract as the legal boundary of the invention, a notice of allowance as an issued patent, or a restriction requirement as a rejection of every claim.","example":"If the specification describes ten possible versions of a device but an issued claim recites only a particular configuration, claim scope—not the abstract's broad summary—is the starting point for infringement analysis."},"subject":{"title":"Section 101 and patent eligibility","rule":"First ask whether a claim falls within a statutory category (process, machine, manufacture, or composition of matter). Then apply the USPTO's judicial-exception analysis to the claimed invention as a whole.","context":"Judicial exceptions include abstract ideas, laws of nature, and natural phenomena/products of nature. An exception integrated into a practical application may satisfy eligibility analysis. Eligibility is separate from novelty, obviousness, and adequate disclosure.","trap":"Do not conclude that a useful or eligible invention is automatically novel or nonobvious. Conversely, finding a mathematical concept in a claim does not end the analysis without examining the claim as a whole.","example":"A claim to a mathematical relationship alone differs from a claim that uses the relationship as part of a concrete industrial process; the latter still must meet §§ 102, 103 and 112."},"novelty":{"title":"Novelty, anticipation, and prior art","rule":"Anticipation generally requires one qualifying prior-art reference to disclose every limitation of a claim, either expressly or inherently. AIA prior-art status also depends on dates, disclosure type, and statutory exceptions.","context":"Section 102(a)(1) can cover pre-filing public disclosures, public use, sales, or other availability to the public. Section 102(a)(2) addresses certain earlier effectively filed U.S. patent documents. AIA exceptions, including certain inventor-originated disclosures, may apply.","trap":"Do not combine two separate references to supply limitations for an anticipation rejection—that typically belongs in a § 103 analysis. Inherency requires necessity, not something that merely might occur.","example":"If a claim needs A+B+C but a single reference shows only A+B, that reference does not anticipate unless C is necessarily present. Another reference teaching C may lead to an obviousness question instead."},"obvious":{"title":"Obviousness under § 103","rule":"Obviousness asks whether the claimed invention as a whole would have been obvious to a person of ordinary skill in the art before the effective filing date, considering the available prior art.","context":"The Graham factual inquiries include the scope/content of prior art, differences from the claims, level of ordinary skill, and relevant objective evidence. Under KSR, reasoning for combining known teachings is flexible, but still must have a supported rationale.","trap":"A rejection cannot simply assert 'the references can be combined' without adequate reasoning. Evidence such as teaching away or unexpected results may matter, but evidence must be relevant to the claimed invention.","example":"Two known components may be obvious to combine if a skilled person had a supported reason and predictable results; an unexpected technical result can change the assessment."},"disclosure":{"title":"Written description, enablement, and claim clarity","rule":"Section 112(a) includes written description and enablement; § 112(b) requires claims to distinctly define the invention. These requirements answer different questions.","context":"Written description asks whether the originally filed disclosure conveys possession of the claimed invention. Enablement asks whether a skilled person can make and use the full claimed scope without undue experimentation. Definiteness assesses whether claim boundaries are reasonably clear.","trap":"Adding unsupported claim language may introduce new matter. A claim may be well understood but not enabled, or enabled but indefinite; do not collapse these into one test.","example":"A broad genus claim may fail enablement if the disclosure teaches only a narrow example and the rest requires undue experimentation, even though the words of the claim are clear."},"filing":{"title":"Filing types, priority, and inventorship","rule":"Identify the application type, parent/child relationships, and the effective filing date of each claimed invention before assessing its prosecution consequences.","context":"A provisional is a distinct filing and normally must be followed by a timely nonprovisional application (or other appropriate filing) to pursue rights. Ordinary continuations do not add new matter; a continuation-in-part can add disclosure, whose new claims may have later effective dates.","trap":"Do not assume every claim in a continuation-in-part gets the earliest family filing date. A benefit claim depends on both procedural compliance and support for the specific claimed subject matter.","example":"If an early filing describes a bolt but a later CIP first describes a special coating, a claim requiring that coating generally cannot rely on the earlier filing for that newly added subject matter."},"responses":{"title":"Office actions and applicant responses","rule":"Nonfinal and final actions permit different procedures. A meaningful reply must address rejections and objections under the governing rules, often within set response periods.","context":"Applicants may amend claims, present arguments, or arrange examiner interviews. After a final action, amendment entry is restricted; depending on the case an RCE, appeal, or other procedural route may be available.","trap":"Do not assume that 'final' means no further option, or that any amendment after final must be entered. Distinguish an objection to form from a substantive rejection.","example":"When an examiner rejects a claim under § 103, a reply should engage the identified prior art and rationale; merely restating the claim without addressing the reasoning generally will not advance the issue."},"appeal":{"title":"Appeals and petitions","rule":"An ex parte appeal challenges eligible examiner rejections before the Patent Trial and Appeal Board. Petitions typically address different procedural matters.","context":"A claim generally must have been twice rejected for appeal under 35 U.S.C. § 134(a). Appeals involve prescribed documents, fees, and deadlines, including a notice and brief. The Board may affirm, reverse, or otherwise act under the applicable rules.","trap":"Do not use a petition as a substitute for an appeal on the merits of a claim rejection, or assume a favorable Board outcome eliminates all outstanding formal requirements.","example":"If the dispute is whether a cited reference actually teaches a claim limitation, appeal may be the substantive route; a disagreement over certain procedural handling may be petitionable instead."},"pct":{"title":"PCT international filing and national stage","rule":"The Patent Cooperation Treaty coordinates international patent application procedures but does not grant a single enforceable worldwide patent.","context":"The international phase can include an international search report, publication, and optionally international preliminary examination. National or regional offices decide whether patents issue. U.S. national-stage entry is generally tied to a 30-month priority-date period under § 371, subject to applicable details.","trap":"Do not confuse international publication with grant, or assume one PCT filing avoids national phase requirements and local costs.","example":"A PCT application can preserve the opportunity to seek protection in several countries, but each relevant national or regional system still handles substantive grant."},"postgrant":{"title":"After issuance: correcting and challenging patents","rule":"Reissue, certificates of correction, ex parte reexamination, IPR, PGR, and maintenance fees are distinct mechanisms with different legal purposes and prerequisites.","context":"Reissue can address certain patent defects under § 251 without new matter. A certificate of correction is limited to qualifying mistakes. IPR generally involves specified prior-art grounds based on patents or printed publications; other post-grant procedures have different limits.","trap":"Do not confuse maintenance fees with an examination or review procedure. Utility patent maintenance fees are ordinarily due at 3.5, 7.5, and 11.5 years from grant, subject to payment windows and rules.","example":"An issued patent containing a qualifying clerical mistake may be eligible for correction; a patent challenged for obviousness based on printed publications raises a different set of possible procedures."}};
const targetedRules=[[/restriction requirement/i,"A restriction requirement concerns distinct inventions within one application. The applicant ordinarily elects an invention for examination; traversal may be appropriate."],
[/ornamental design|design patent/i,"Design patents generally protect appearance of an article, not its useful functional features. Utility and design protection can address different aspects of the same product."],
[/abstract/i,"An abstract summarizes the technical disclosure; it is not a replacement for claims, which set the legal scope."],
[/mathematical|judicial exception|practical application/i,"Eligibility has multiple steps. Identifying an exception is not the same as finding the entire claim ineligible; integration into a practical application matters."],
[/naturally occurring|product of nature/i,"A discovery as it exists in nature may fall within a judicial exception; claim wording and any additional limitations matter."],
[/inherent|inherency/i,"Inherency is a strict test: the missing feature must necessarily follow from the disclosed prior-art subject matter, not merely be likely."],
[/grace.period|inventor.originated/i,"Under AIA § 102(b)(1), certain qualifying inventor-originated disclosures made one year or less before the effective filing date are excluded as § 102(a)(1) prior art; specific conditions still matter."],
[/102\\(a\\)\\(2\\)|effectively filed/i,"Earlier effectively filed U.S. patent documents can be § 102(a)(2) prior art even if published later. Analyze the statutory effective filing date and exceptions."],
[/KSR|Graham|rationale|teaching away|unexpected results/i,"For obviousness, identify the claimed differences, the ordinary-skilled person's perspective, a supported reason for modification/combination, and any objective evidence."],
[/enablement|full scope|undue experimentation/i,"Enablement is evaluated across the full claim scope; insufficient guidance or excessive experimentation can defeat even a clearly written claim."],
[/written description|possession|new matter/i,"Written description tests possession in the originally filed disclosure. An amendment cannot cure a missing original disclosure by introducing new matter."],
[/112\\(f\\)|means.plus.function/i,"Section 112(f) may limit functional claim language to corresponding structure, material, or acts disclosed in the specification and statutory equivalents."],
[/provisional|12 months/i,"Benefit of a provisional filing date requires a timely, proper benefit claim and adequate original disclosure for the claimed subject matter; filing alone is not automatic patent protection."],
[/continuation.in.part|\\bCIP\\b/i,"New subject matter in a CIP cannot automatically inherit the original parent's effective filing date; analyze claim support element by element."],
[/continuation application/i,"An ordinary continuation uses the parent disclosure without new matter and may pursue different claims to disclosed subject matter."],
[/foreign filing license/i,"For inventions made in the United States, a foreign filing license may be required before filing abroad, and statutory conditions govern."],
[/final office action|final rejection|after.final/i,"A final rejection constrains entry of amendments but does not eliminate all options. Consider rules for after-final replies, continued examination, and appeal."],
[/RCE|continued examination/i,"An RCE requests further prosecution in an eligible application under applicable rules, generally with required submission and fee."],
[/examiner interview/i,"An examiner interview is a prosecution tool for clarifying issues, not a substitute for completing any required written reply."],
[/twice rejected|appeal brief|examiner.s answer|rehearing|board reverses/i,"An appeal tests eligible examiner rejections. The specific filing stage—notice, brief, examiner's answer, or Board action—determines the next procedural step."],
[/national stage|30 months|371/i,"U.S. PCT national-stage requirements usually revolve around 30 months from the priority date; verify the applicable documents, fees, and deadline rules."],
[/international search report|international publication|international preliminary|Chapter II/i,"PCT international search, publication, and optional preliminary examination occur before national grant decisions and do not themselves issue enforceable patents."],
[/maintenance fees|anniversaries/i,"Utility patent maintenance fees ordinarily fall due at 3.5, 7.5, and 11.5 years after grant, with separate payment windows and exceptions."],
[/inter partes review|\\bIPR\\b/i,"IPR is a PTAB challenge with restricted grounds generally tied to patents and printed publications under §§ 102 and 103, unlike broader post-grant review."],
[/reissue|certificate of correction/i,"A certificate of correction targets limited qualifying errors; reissue is a separate process for certain defects affecting the patent's validity or operability."],
[/duty of disclosure|candor/i,"Individuals involved in prosecution have a duty of candor and good faith, including disclosure of information material to patentability under 37 CFR 1.56."]];
const guideURL='https://www.uspto.gov/web/offices/pac/mpep/index.html';
function el(name,cls,text){
 const node=document.createElement(name);if(cls)node.className=cls;
 if(text!==undefined)node.textContent=text;return node;
}
function paragraph(target,label,value){
 const p=el('p','lesson-paragraph');
 const strong=el('strong','',label+' ');
 p.append(strong,document.createTextNode(value));target.append(p);
}
function getChoiceRationale(q,index){
 if(index===q.correct)return q.why;
 const sources=[window.PATENT_FEEDBACK_ORIGINAL,window.PATENT_FEEDBACK_21_45,window.PATENT_FEEDBACK_46_70];
 const list=sources.reduce((found,source)=>found||(source&&source[String(q.id)]),null);
 if(!list)return 'Compare this option with the specific patent-law rule explained below.';
 const wrongIndex=Array.from({length:q.choices.length},(_,i)=>i).filter(i=>i!==q.correct).indexOf(index);
 return list[wrongIndex]||'Compare this option with the specific patent-law rule explained below.';
}
function choicesBreakdown(q,selected){
 const section=el('div','choice-breakdown');
 section.append(el('h4','','Why each option is right or wrong'));
 q.choices.forEach((choice,i)=>{
  const item=el('div','choice-rationale'+(i===q.correct?' is-right':'')+(i===selected?' is-chosen':''));
  const label=el('strong','',String.fromCharCode(65+i)+'. '+choice+(i===q.correct?' — Correct answer':i===selected?' — Your answer':''));
  const reason=el('p','',getChoiceRationale(q,i));
  item.append(label,reason);section.append(item);
 });
 return section;
}
function plainEnglishPanel(q){
 const library=window.PATENT_PLAIN_LESSONS;
 if(!library)return null;
 const info=(library.byId&&library.byId[String(q.id)])||(library.topic&&library.topic[q.topic]);
 if(!info)return null;
 const section=el('section','plain-english-panel');
 section.append(el('h4','','In plain English: '+info.term));
 paragraph(section,'What that means:',info.meaning);
 paragraph(section,'Engineering example:',info.example);
 paragraph(section,'Exam takeaway:',info.tip);
 if(info.ref)section.append(el('p','small muted','See also: '+info.ref));
 return section;
}
function makeLesson(q,selected,wasCorrect){
 const info=guides[q.topic]||guides.roadmap;
 const container=el('div','deep-lesson');
 container.append(el('h3','',info.title));
 if(!wasCorrect){
  paragraph(container,'You chose:',q.choices[selected]);
  paragraph(container,'Correct answer:',q.choices[q.correct]);
  paragraph(container,'Why your answer does not fit:', getChoiceRationale(q,selected));
 } else {
  paragraph(container,'Why the correct answer works:',q.why);
 }
 const plain=plainEnglishPanel(q);if(plain)container.append(plain);
 container.append(choicesBreakdown(q,selected));
 const matches=targetedRules.filter(([re])=>re.test(q.q));
 if(matches.length){
  paragraph(container,'This question’s key distinction:',matches[0][1]);
 }
 paragraph(container,'The governing principle:',info.rule);
 paragraph(container,'Build your understanding:',info.context);
 paragraph(container,'Example:',info.example);
 paragraph(container,'Common exam trap:',info.trap);
 const source=el('p','small muted','Study reference: '+q.ref+'. Check the precise section and exceptions in the official MPEP.');
 container.append(source);
 const link=el('a','btn secondary','Open official MPEP ↗');
 link.href=guideURL;link.target='_blank';link.rel='noopener noreferrer';container.append(link);
 return container;
}
const original=answerQ;
answerQ=function(index){
 if(answered)return;
 const q=quiz[qi],correct=index===q.correct;
 original(index);
 const feedback=document.getElementById('qFeedback');
 if(!feedback||!q)return;
 const panel=el('div','learning-panel');
 const title=el('div','learning-intro',correct?'Good work — reinforce the rule':'Learning from this mistake');
 panel.append(title);
 const lesson=makeLesson(q,index,correct);
 if(correct){
  const button=el('button','btn secondary learn-toggle','Learn more about this topic ↓');
  button.type='button';button.setAttribute('aria-expanded','false');
  button.addEventListener('click',()=>{
   const isHidden=lesson.hidden;lesson.hidden=!isHidden;
   button.textContent=isHidden?'Hide detailed explanation ↑':'Learn more about this topic ↓';
   button.setAttribute('aria-expanded',String(isHidden));
  });
  lesson.hidden=true;panel.append(button,lesson);
 }else{
  panel.append(lesson);
 }
 feedback.append(panel);
};
})();