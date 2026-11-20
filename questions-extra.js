/* Patent Bar question bank extension: IDs PB-0021 through PB-0070. Source: USPTO MPEP 9th ed., Rev. 01.2024. */
const additionalQuestions=[
  {
    "id": "PB-0021",
    "topic": "roadmap",
    "q": "An applicant receives a restriction requirement identifying two independent inventions. What is the applicant generally asked to do?",
    "choices": [
      "Elect an invention for examination",
      "Pay every future maintenance fee",
      "Convert the application into a design application",
      "File a notice of appeal immediately"
    ],
    "correct": 0,
    "why": "A restriction requirement generally requires election of an invention for examination; traversal may be appropriate.",
    "ref": "MPEP 803; 818"
  },
  {
    "id": "PB-0022",
    "topic": "roadmap",
    "q": "Which patent type generally protects a new, original, ornamental design for an article of manufacture?",
    "choices": [
      "Utility patent",
      "Plant patent",
      "Design patent",
      "Reissue patent only"
    ],
    "correct": 2,
    "why": "Design patents protect qualifying ornamental designs rather than the functional invention as such.",
    "ref": "MPEP 1502; 35 U.S.C. § 171"
  },
  {
    "id": "PB-0023",
    "topic": "roadmap",
    "q": "What is the usual role of the specification in a patent application?",
    "choices": [
      "Replace the claims with marketing material",
      "Describe the invention and how it is made and used as required by law",
      "Set the USPTO exam schedule",
      "Guarantee that all claims will be allowed"
    ],
    "correct": 1,
    "why": "The specification provides disclosure supporting the claims and fulfilling statutory requirements.",
    "ref": "MPEP 608.01; 2161"
  },
  {
    "id": "PB-0024",
    "topic": "roadmap",
    "q": "What is the purpose of a patent application's abstract?",
    "choices": [
      "To define the claim boundaries instead of the claims",
      "To provide a concise technical summary of the disclosure",
      "To establish a priority date automatically",
      "To serve as the inventor oath"
    ],
    "correct": 1,
    "why": "The abstract is a brief technical disclosure, not a replacement for claims.",
    "ref": "MPEP 608.01(b)"
  },
  {
    "id": "PB-0025",
    "topic": "roadmap",
    "q": "A utility patent is issued. Which document ordinarily identifies what the patent owner may exclude others from doing?",
    "choices": [
      "The allowed claims",
      "The examiner's search notes alone",
      "The application's receipt",
      "The assignment cover sheet"
    ],
    "correct": 0,
    "why": "The issued claims determine the patent's scope, interpreted in the appropriate legal context.",
    "ref": "MPEP 2111; 35 U.S.C. § 154"
  },
  {
    "id": "PB-0026",
    "topic": "subject",
    "q": "A claim is directed solely to a mathematical formula in the abstract, without additional practical application. What concern is most directly implicated?",
    "choices": [
      "Patent-eligibility judicial exception",
      "Inventorship correction only",
      "Patent term adjustment",
      "Foreign filing license"
    ],
    "correct": 0,
    "why": "Abstract ideas, including mathematical concepts, can raise a judicial-exception issue under § 101.",
    "ref": "MPEP 2106"
  },
  {
    "id": "PB-0027",
    "topic": "subject",
    "q": "A claim recites a judicial exception integrated into a practical application. Under the USPTO eligibility framework, which conclusion is generally appropriate?",
    "choices": [
      "It is necessarily anticipated",
      "It is not directed to the exception at eligibility Step 2A",
      "It must be a design claim",
      "It is exempt from written description"
    ],
    "correct": 1,
    "why": "Integration into a practical application can satisfy eligibility analysis at Step 2A, Prong Two.",
    "ref": "MPEP 2106.04(d)"
  },
  {
    "id": "PB-0028",
    "topic": "subject",
    "q": "Which is the strongest reason that a newly discovered naturally occurring mineral, claimed merely as it exists in nature, can face § 101 issues?",
    "choices": [
      "It has no title",
      "It is a product of nature",
      "It was not illustrated in color",
      "It cannot be described in words"
    ],
    "correct": 1,
    "why": "Products of nature may fall within judicial exceptions to patent eligibility.",
    "ref": "MPEP 2105; 2106"
  },
  {
    "id": "PB-0029",
    "topic": "subject",
    "q": "Which claim is most clearly drawn to a statutory process rather than a mere statement of a goal?",
    "choices": [
      "A sequence of specified industrial treatment steps",
      "The desire for better fuel economy",
      "A business reputation",
      "The abstract concept of efficiency without implementation"
    ],
    "correct": 0,
    "why": "A specified series of acts can fall within the statutory process category; eligibility still requires further analysis.",
    "ref": "MPEP 2106.03"
  },
  {
    "id": "PB-0030",
    "topic": "subject",
    "q": "Which issue is distinct from the § 101 patent-eligibility inquiry?",
    "choices": [
      "Whether a claim is directed to a judicial exception",
      "Whether an exception is integrated into a practical application",
      "Whether the claimed invention was obvious over prior art",
      "Whether a claim is within a statutory category"
    ],
    "correct": 2,
    "why": "Obviousness is assessed under § 103, separately from eligibility under § 101.",
    "ref": "MPEP 2106; 2141"
  },
  {
    "id": "PB-0031",
    "topic": "novelty",
    "q": "When a reference does not expressly mention a feature, when can it nevertheless anticipate?",
    "choices": [
      "When the missing feature is necessarily present in what the reference discloses",
      "Whenever the examiner thinks it would be useful",
      "Only after a patent issues",
      "Whenever another unrelated reference mentions it"
    ],
    "correct": 0,
    "why": "Inherency requires that the limitation necessarily be present, not merely probably present.",
    "ref": "MPEP 2112; 2131"
  },
  {
    "id": "PB-0032",
    "topic": "novelty",
    "q": "Under AIA § 102(a)(1), which event can potentially be prior art if it occurs before the effective filing date?",
    "choices": [
      "A public use of the claimed invention",
      "A private thought never disclosed",
      "An internal examiner discussion after filing",
      "A future marketing plan"
    ],
    "correct": 0,
    "why": "Pre-filing public use can fall under § 102(a)(1), subject to statutory exceptions.",
    "ref": "MPEP 2152.02(c)"
  },
  {
    "id": "PB-0033",
    "topic": "novelty",
    "q": "Under the AIA inventor-originated disclosure grace-period exception, what period is generally central?",
    "choices": [
      "One month before examination",
      "One year or less before the effective filing date",
      "Five years after patent issue",
      "Twenty years after filing"
    ],
    "correct": 1,
    "why": "Certain inventor-originated disclosures within one year of the effective filing date may be excepted under § 102(b)(1).",
    "ref": "MPEP 2153.01"
  },
  {
    "id": "PB-0034",
    "topic": "novelty",
    "q": "For an AIA § 102(a)(2) U.S. patent document, which date can matter for its prior-art effect?",
    "choices": [
      "Only the issue fee payment date",
      "Its effectively filed date for the disclosed subject matter",
      "Only the date the examiner read it",
      "Only the maintenance fee due date"
    ],
    "correct": 1,
    "why": "Section 102(d) addresses effective filing dates for specified U.S. patent documents as prior art.",
    "ref": "MPEP 2154"
  },
  {
    "id": "PB-0035",
    "topic": "novelty",
    "q": "A reference merely suggests that a missing claim feature might occur. Is that enough to establish inherency?",
    "choices": [
      "Yes, possibility is always sufficient",
      "Yes, but only for chemical claims",
      "No, mere possibility or probability is insufficient",
      "No, because inherency never applies"
    ],
    "correct": 2,
    "why": "An inherent feature must necessarily result from the disclosed subject matter.",
    "ref": "MPEP 2112"
  },
  {
    "id": "PB-0036",
    "topic": "obvious",
    "q": "Which Supreme Court case emphasizes a flexible, common-sense approach to obviousness?",
    "choices": [
      "KSR International Co. v. Teleflex Inc.",
      "Alice Corp. v. CLS Bank International",
      "Diamond v. Chakrabarty",
      "Graham v. John Deere is unrelated to obviousness"
    ],
    "correct": 0,
    "why": "KSR explains flexible analysis of whether a claimed combination would have been obvious.",
    "ref": "MPEP 2141; 2143"
  },
  {
    "id": "PB-0037",
    "topic": "obvious",
    "q": "Under the Graham framework, which is a factual inquiry in an obviousness analysis?",
    "choices": [
      "The weather on the filing date",
      "The differences between the prior art and the claims",
      "The applicant's preferred patent attorney",
      "Whether the inventor used colored drawings"
    ],
    "correct": 1,
    "why": "Comparing prior art with claimed subject matter is a Graham factual inquiry.",
    "ref": "MPEP 2141"
  },
  {
    "id": "PB-0038",
    "topic": "obvious",
    "q": "A rejection combines references. What should an examiner generally articulate?",
    "choices": [
      "A reasoned explanation supporting the combination and obviousness conclusion",
      "Only that the references are old",
      "Only the number of cited pages",
      "That no person of skill exists"
    ],
    "correct": 0,
    "why": "A prima facie obviousness rejection calls for articulated reasoning with rational underpinning.",
    "ref": "MPEP 2143"
  },
  {
    "id": "PB-0039",
    "topic": "obvious",
    "q": "When can evidence that the prior art taught away be relevant?",
    "choices": [
      "It may weigh against a proposed obviousness combination",
      "It automatically proves novelty",
      "It is forbidden as evidence",
      "It always requires a design patent"
    ],
    "correct": 0,
    "why": "Teaching away can undermine the asserted rationale to modify or combine references.",
    "ref": "MPEP 2145"
  },
  {
    "id": "PB-0040",
    "topic": "obvious",
    "q": "Why can unexpected results matter when assessing § 103?",
    "choices": [
      "They can support nonobviousness when shown with adequate evidence and nexus",
      "They establish ownership of the patent",
      "They replace the need for claims",
      "They extend every patent term"
    ],
    "correct": 0,
    "why": "Unexpected results can be persuasive objective evidence when appropriately established.",
    "ref": "MPEP 716.02"
  },
  {
    "id": "PB-0041",
    "topic": "disclosure",
    "q": "A claim introduces a technical feature not supported by the application as originally filed. What concern arises?",
    "choices": [
      "New matter",
      "Excess maintenance fees",
      "Lack of a trademark specimen",
      "Compulsory license"
    ],
    "correct": 0,
    "why": "Amendments may not introduce new matter beyond the original disclosure.",
    "ref": "MPEP 608.04; 2163"
  },
  {
    "id": "PB-0042",
    "topic": "disclosure",
    "q": "What does the enablement requirement generally ask about the application disclosure?",
    "choices": [
      "Whether a skilled person can make and use the full scope of the claimed invention without undue experimentation",
      "Whether the patent is commercially profitable",
      "Whether an inventor has a website",
      "Whether a drawing uses a particular font"
    ],
    "correct": 0,
    "why": "Enablement concerns whether the disclosure teaches a skilled person to make and use the claimed invention without undue experimentation.",
    "ref": "MPEP 2164"
  },
  {
    "id": "PB-0043",
    "topic": "disclosure",
    "q": "For a means-plus-function limitation under § 112(f), what is generally used to construe the limitation?",
    "choices": [
      "Any conceivable structure anywhere",
      "The corresponding disclosed structure, material, or acts and equivalents",
      "The abstract alone",
      "Only the title of the patent"
    ],
    "correct": 1,
    "why": "Section 112(f) generally ties such limitations to disclosed corresponding structure, material, or acts and equivalents.",
    "ref": "MPEP 2181"
  },
  {
    "id": "PB-0044",
    "topic": "disclosure",
    "q": "Which defect most directly involves an unclear claim boundary rather than insufficient teaching of how to practice the invention?",
    "choices": [
      "Indefiniteness under § 112(b)",
      "Lack of enablement under § 112(a)",
      "Failure to pay an issue fee",
      "A missing PCT international search"
    ],
    "correct": 0,
    "why": "Indefiniteness concerns whether claims distinctly define their scope.",
    "ref": "MPEP 2173"
  },
  {
    "id": "PB-0045",
    "topic": "disclosure",
    "q": "A patent application says a machine performs a function but lacks enough disclosure showing the inventor possessed the claimed solution. Which requirement may be at issue?",
    "choices": [
      "Written description",
      "Maintenance fee timing",
      "Patent term extension",
      "Foreign publication language"
    ],
    "correct": 0,
    "why": "Written description requires the disclosure to reasonably convey possession of the claimed invention.",
    "ref": "MPEP 2163"
  },
  {
    "id": "PB-0046",
    "topic": "filing",
    "q": "A U.S. nonprovisional application claims benefit of a provisional application. What is the general filing interval for the nonprovisional?",
    "choices": [
      "Within 12 months of the provisional filing date, subject to applicable relief provisions",
      "Within 36 months of every provisional filing",
      "Before the inventor turns 18",
      "Only after the provisional is examined"
    ],
    "correct": 0,
    "why": "The ordinary interval for claiming provisional benefit is 12 months, with limited restoration mechanisms in certain cases.",
    "ref": "MPEP 201.04(b); 35 U.S.C. § 119(e)"
  },
  {
    "id": "PB-0047",
    "topic": "filing",
    "q": "A continuation application generally contains which type of disclosure relative to its parent?",
    "choices": [
      "New matter beyond the parent as a requirement",
      "No new matter and claims to subject matter disclosed in the parent",
      "Only an abstract with no specification",
      "A required foreign patent"
    ],
    "correct": 1,
    "why": "A continuation relies on the earlier application disclosure without adding new matter.",
    "ref": "MPEP 201.07"
  },
  {
    "id": "PB-0048",
    "topic": "filing",
    "q": "What distinguishes a continuation-in-part (CIP) from an ordinary continuation?",
    "choices": [
      "A CIP may add new disclosure",
      "A CIP cannot contain claims",
      "A CIP must be a design patent",
      "A CIP is filed only after patent expiry"
    ],
    "correct": 0,
    "why": "A CIP includes some subject matter not disclosed in the earlier application; entitlement to earlier dates is assessed claim by claim.",
    "ref": "MPEP 201.08"
  },
  {
    "id": "PB-0049",
    "topic": "filing",
    "q": "Under U.S. practice, which item is used to identify the actual inventors?",
    "choices": [
      "An inventor's oath or declaration (or applicable substitute statement)",
      "A marketing brochure",
      "An assignment receipt alone",
      "A patent classification number"
    ],
    "correct": 0,
    "why": "Inventor identification and required oath/declaration procedures are addressed in § 115 and implementing rules.",
    "ref": "MPEP 602.01"
  },
  {
    "id": "PB-0050",
    "topic": "filing",
    "q": "What is the purpose of a foreign filing license in U.S. patent practice?",
    "choices": [
      "To authorize certain foreign filings of inventions made in the United States when required",
      "To grant rights in all countries",
      "To pay PCT national-stage fees automatically",
      "To replace inventorship"
    ],
    "correct": 0,
    "why": "Foreign filing license provisions may restrict filing abroad for inventions made in the United States.",
    "ref": "MPEP 140; 35 U.S.C. § 184"
  },
  {
    "id": "PB-0051",
    "topic": "responses",
    "q": "An examiner objects to the specification's formatting rather than rejecting the claims on prior art. Which distinction is most relevant?",
    "choices": [
      "Objection versus rejection",
      "Utility versus plant only",
      "Appeal versus reissue only",
      "Inventor versus assignee"
    ],
    "correct": 0,
    "why": "Objections often concern form or procedure, while rejections address substantive patentability.",
    "ref": "MPEP 706; 714"
  },
  {
    "id": "PB-0052",
    "topic": "responses",
    "q": "What is usually required of a reply to a substantive Office action?",
    "choices": [
      "A bona fide attempt to advance prosecution and address the grounds raised",
      "Only a thank-you message",
      "A new invention unrelated to the claims",
      "Payment of all future maintenance fees"
    ],
    "correct": 0,
    "why": "A proper reply generally must respond to outstanding rejections and objections under the applicable rules.",
    "ref": "MPEP 714.02; 37 CFR 1.111"
  },
  {
    "id": "PB-0053",
    "topic": "responses",
    "q": "Which action may an applicant take when disagreeing with an examiner's interpretation of a cited reference?",
    "choices": [
      "Present specific arguments explaining the factual or legal error",
      "Delete the entire specification automatically",
      "Demand immediate issuance without response",
      "File a trademark opposition"
    ],
    "correct": 0,
    "why": "Applicants may traverse a rejection with reasoned arguments and, where appropriate, amendments.",
    "ref": "MPEP 714.02"
  },
  {
    "id": "PB-0054",
    "topic": "responses",
    "q": "After a final rejection, does entering an amendment as a matter of right always occur?",
    "choices": [
      "Yes, any amendment must be entered",
      "No, entry of after-final amendments is limited by applicable rules",
      "Yes, if the amendment is handwritten",
      "Only if the application is international"
    ],
    "correct": 1,
    "why": "Amendments after final rejection are not entered as of right under ordinary practice.",
    "ref": "MPEP 714.12; 37 CFR 1.116"
  },
  {
    "id": "PB-0055",
    "topic": "responses",
    "q": "When an applicant wants to discuss a claim rejection directly with the examiner, what procedural option may help?",
    "choices": [
      "Examiner interview",
      "Ex parte reexamination of an unissued application",
      "Maintenance fee petition",
      "Automatic patent issuance"
    ],
    "correct": 0,
    "why": "An examiner interview can clarify issues and potentially advance prosecution, subject to interview practice rules.",
    "ref": "MPEP 713"
  },
  {
    "id": "PB-0056",
    "topic": "appeal",
    "q": "Before filing an ex parte appeal, which prerequisite generally applies?",
    "choices": [
      "A claim has been twice rejected (subject to rules governing appeal)",
      "A patent must already be expired",
      "All maintenance fees are paid",
      "The applicant must be a corporation"
    ],
    "correct": 0,
    "why": "Appeal under § 134(a) is generally available after a claim has been twice rejected.",
    "ref": "MPEP 1204; 35 U.S.C. § 134(a)"
  },
  {
    "id": "PB-0057",
    "topic": "appeal",
    "q": "Which document normally presents an applicant's substantive arguments on appeal?",
    "choices": [
      "Appeal brief",
      "Certificate of correction",
      "Patent issue notification",
      "International preliminary report"
    ],
    "correct": 0,
    "why": "An appeal brief lays out the appellant's contentions in compliance with the governing rules.",
    "ref": "MPEP 1205"
  },
  {
    "id": "PB-0058",
    "topic": "appeal",
    "q": "In an ex parte appeal, what can an examiner's answer provide?",
    "choices": [
      "The examiner's response defending the rejections on appeal",
      "A new patent number automatically",
      "Automatic abandonment of every claim",
      "An unconditional grant"
    ],
    "correct": 0,
    "why": "The examiner's answer responds to the appeal arguments and addresses the grounds of rejection.",
    "ref": "MPEP 1207"
  },
  {
    "id": "PB-0059",
    "topic": "appeal",
    "q": "What is the general function of a rehearing request after a PTAB appeal decision?",
    "choices": [
      "Ask the Board to reconsider points believed misapprehended or overlooked",
      "Start an international PCT application",
      "Change a utility application to a trademark",
      "Pay an annual royalty"
    ],
    "correct": 0,
    "why": "A request for rehearing points out matters the Board allegedly misapprehended or overlooked.",
    "ref": "MPEP 1214; 37 CFR 41.52"
  },
  {
    "id": "PB-0060",
    "topic": "appeal",
    "q": "If the Board reverses all rejections on appeal, which statement is most accurate?",
    "choices": [
      "Issuance can still depend on remaining formalities or other proper prosecution steps",
      "The applicant must always file a brand-new patent application",
      "The Board itself collects trademark taxes",
      "The PCT automatically grants a patent"
    ],
    "correct": 0,
    "why": "A favorable Board decision does not eliminate all potential remaining application requirements.",
    "ref": "MPEP 1214"
  },
  {
    "id": "PB-0061",
    "topic": "pct",
    "q": "What is an international search report (ISR) in PCT practice?",
    "choices": [
      "A report identifying relevant prior art for an international application",
      "A worldwide patent grant",
      "A national maintenance fee receipt",
      "A U.S. appeal brief"
    ],
    "correct": 0,
    "why": "The ISR identifies documents relevant to international search for claimed inventions.",
    "ref": "MPEP 1843"
  },
  {
    "id": "PB-0062",
    "topic": "pct",
    "q": "What is the usual general deadline for U.S. national stage entry under 35 U.S.C. § 371, measured from the priority date?",
    "choices": [
      "30 months, subject to applicable requirements and exceptions",
      "3 months in all cases",
      "5 years from publication",
      "20 years after first filing"
    ],
    "correct": 0,
    "why": "For U.S. national stage entry, 30 months from the priority date is the general relevant period.",
    "ref": "MPEP 1893.01; 35 U.S.C. § 371"
  },
  {
    "id": "PB-0063",
    "topic": "pct",
    "q": "What does the PCT international publication normally accomplish?",
    "choices": [
      "Makes the international application publicly available under PCT procedures",
      "Grants enforceable patent rights in every state",
      "Replaces all national phase requirements",
      "Corrects inventorship automatically"
    ],
    "correct": 0,
    "why": "International publication makes application information publicly accessible; grants remain national or regional.",
    "ref": "MPEP 1857"
  },
  {
    "id": "PB-0064",
    "topic": "pct",
    "q": "Which organization administers the PCT international system?",
    "choices": [
      "World Intellectual Property Organization (WIPO)",
      "Federal Reserve",
      "U.S. Copyright Office alone",
      "International Trade Commission alone"
    ],
    "correct": 0,
    "why": "WIPO administers the PCT system through its International Bureau.",
    "ref": "MPEP 1800"
  },
  {
    "id": "PB-0065",
    "topic": "pct",
    "q": "Which PCT mechanism offers an optional further international preliminary examination?",
    "choices": [
      "Chapter II demand",
      "U.S. maintenance fee petition",
      "Design patent reissue",
      "Certificate of mailing"
    ],
    "correct": 0,
    "why": "PCT Chapter II provides optional international preliminary examination through a demand.",
    "ref": "MPEP 1860"
  },
  {
    "id": "PB-0066",
    "topic": "postgrant",
    "q": "At approximately which anniversaries of grant are U.S. utility patent maintenance fees generally due?",
    "choices": [
      "3.5, 7.5, and 11.5 years",
      "Every six months",
      "Only after 20 years",
      "2, 4, and 6 months"
    ],
    "correct": 0,
    "why": "Ordinary utility patent maintenance fees are due at 3.5, 7.5 and 11.5 years, with governing payment windows and grace periods.",
    "ref": "MPEP 2504"
  },
  {
    "id": "PB-0067",
    "topic": "postgrant",
    "q": "Which patent challenge is generally limited to specified patents and grounds based on patents or printed publications under §§ 102 and 103?",
    "choices": [
      "Inter partes review (IPR)",
      "Provisional application",
      "Design patent application",
      "Patent term adjustment request"
    ],
    "correct": 0,
    "why": "IPR has a narrower statutory grounds scope than PGR and is administered through PTAB proceedings.",
    "ref": "MPEP 2600; 35 U.S.C. § 311(b)"
  },
  {
    "id": "PB-0068",
    "topic": "postgrant",
    "q": "What is the primary purpose of a certificate of correction for an issued patent?",
    "choices": [
      "Correct certain mistakes subject to statutory requirements",
      "Add entirely new matter without review",
      "Start a brand-new PCT application",
      "Renew a patent indefinitely"
    ],
    "correct": 0,
    "why": "Certificates of correction address qualifying errors in issued patents within statutory limits.",
    "ref": "MPEP 1480"
  },
  {
    "id": "PB-0069",
    "topic": "postgrant",
    "q": "Which post-issuance application mechanism may allow a patentee to correct an error that makes a patent wholly or partly inoperative or invalid?",
    "choices": [
      "Reissue",
      "Provisional filing",
      "Notice of appeal in original application",
      "International search report"
    ],
    "correct": 0,
    "why": "Reissue may correct qualifying defects without adding new matter, subject to governing limits.",
    "ref": "MPEP 1401; 35 U.S.C. § 251"
  },
  {
    "id": "PB-0070",
    "topic": "postgrant",
    "q": "Which duty generally requires patent prosecution participants to disclose material information known to them to the USPTO?",
    "choices": [
      "Duty of disclosure, candor, and good faith",
      "Duty to file worldwide patents",
      "Duty to register every trademark",
      "Duty to guarantee commercial success"
    ],
    "correct": 0,
    "why": "37 CFR 1.56 sets out the duty of candor and disclosure for individuals involved in prosecution.",
    "ref": "MPEP 2001"
  }
];
(function(){
 const norm=s=>s.toLowerCase().replace(/[^a-z0-9]/g,'');
 const ids=new Set(questions.map(q=>String(q.id)));
 const prompts=new Set(questions.map(q=>norm(q.q)));
 for(const q of additionalQuestions){
   if(ids.has(String(q.id))||prompts.has(norm(q.q))){console.error('Duplicate question skipped:',q.id,q.q);continue;}
   questions.push(q);ids.add(String(q.id));prompts.add(norm(q.q));
 }
})();
