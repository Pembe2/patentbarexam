/* Structured instruction for all 30 available daily lessons. */
window.PATENT_LESSON_ENRICHMENT={
  "1": {
    "rule": "A U.S. utility patent is a limited right to exclude others from making, using, offering to sell, selling, or importing what its claims cover. It is not a general permission to manufacture a product.",
    "explain": [
      "Imagine engineering a locking coupling. An invention is the technical solution; a patent application is the request for a legal right; an issued patent is the granted right after examination. Those three things are not interchangeable.",
      "The United States Patent and Trademark Office (USPTO) reviews the application. It compares the claims—numbered statements of what protection is sought—with the technical disclosure and legal requirements. The claims, not a brochure or the product name, define the requested boundaries.",
      "Even a granted patent does not guarantee that the owner can freely sell the product. An older patent owned by somebody else could cover a feature of the product. The patent primarily lets its owner exclude others from activities covered by its valid claims.",
      "At the end of successful examination, the USPTO may send a notice of allowance. That is an important milestone but not the same as issuance. An issue fee and remaining steps generally follow."
    ],
    "worked": [
      "Invent an adjustable pipe coupling and write a claim requiring a threaded collar and a spring-loaded locking pin.",
      "A competing coupling with those claimed features may fall within the claim. Whether a real product infringes depends on claim construction and the facts.",
      "A different coupling without a required claim feature may fall outside that particular claim. You must read the actual claim to determine this.",
      "The abstract might describe the coupling broadly, but the abstract does not replace the claims. An issue fee is a post-allowance step, not what creates patentability."
    ],
    "before": [
      "Claim = the sentence defining boundaries, not the summary.",
      "Patent application = request; issued patent = grant.",
      "Notice of allowance precedes issuance; issue fee commonly follows.",
      "Scope comes from the claims, including all required limitations."
    ]
  },
  "2": {
    "rule": "U.S. patents are commonly grouped into utility, design, and plant patents. The category depends on the type of subject matter being claimed.",
    "explain": [
      "A utility patent can protect a qualifying new and useful process, machine, manufacture, composition of matter, or improvement. A mechanical latch, a manufacturing method, and a useful chemical formulation are common utility-style examples.",
      "A design patent protects the ornamental design of an article of manufacture: how the article looks, not the useful mechanical principle by itself. Its drawings are especially important to defining the claimed appearance.",
      "A plant patent concerns a distinct, new qualifying variety of plant that is asexually reproduced. It has different specialized requirements; you don't need to master those details yet.",
      "An invention can raise more than one kind of patent question. A new power drill might have a patentable clutch mechanism and also a patentable ornamental exterior design. These are different aspects of the same product.",
      "Reissue is not a fourth kind of original patent application. It is a specialized way to correct certain problems with an issued patent."
    ],
    "worked": [
      "A cordless drill uses a novel clutch that reduces torque spikes. Ask what the improvement *does*: utility patent analysis.",
      "The drill housing has a distinctive ornamental contour. Ask what its appearance *looks like*: design patent analysis.",
      "A merely attractive appearance does not necessarily protect the new clutch's operating principle; and a utility claim to the clutch does not automatically protect every decorative housing.",
      "A patent-eligibility question might mention statutory categories. Remember: **process**, **machine**, **manufacture**, and **composition of matter** are the four types expressly named in 35 U.S.C. § 101."
    ],
    "before": [
      "Utility = qualifying function, structure, composition, or process.",
      "Design = qualifying ornamental appearance of an article.",
      "Plant = qualifying distinct asexually reproduced plant.",
      "§ 101 expressly lists process, machine, manufacture, composition of matter."
    ]
  },
  "3": {
    "rule": "Claims define the requested legal boundaries; the specification describes and supports the invention; prior art is qualifying earlier evidence used to test patentability.",
    "explain": [
      "Think of a patent application as an engineering design package with three different jobs. The **specification** is the detailed written technical description of what the inventor made and how it works. The **claims** are the numbered legal statements defining exactly what the inventor wants to protect. The **abstract** is a short technical summary to help readers quickly understand the general subject.",
      "A claim contains **limitations**: required features or conditions. An **independent claim** stands on its own. A **dependent claim** refers to an earlier claim and adds another limitation; it therefore narrows what is covered relative to the claim from which it depends.",
      "**Prior art** is qualifying earlier information or activity, such as an earlier patent or publicly available technical document, that can be considered against the claims. It is broader than 'old patents' and it need not have been known to the inventor. Not every old document automatically qualifies; dates and legal exceptions matter, and we'll study those later.",
      "**Anticipation**, a type of novelty problem under **35 U.S.C. § 102**, generally means that one qualifying prior-art reference discloses every limitation in a claim, expressly or inherently. If no single reference discloses all limitations, anticipation may fail—even though a separate obviousness question can remain.",
      "The specification and abstract help a reader understand the technical disclosure, but neither one replaces the claims. An examiner compares the *claim's actual required features* with the earlier reference, not just the invention's title or marketing description."
    ],
    "worked": [
      "Suppose Claim 1 says: 'A clamp comprising a base, a spring, and an adjustable stop.' This is an independent claim with three required components.",
      "Claim 2 says: 'The clamp of claim 1, wherein the stop has a threaded adjustment screw.' Claim 2 adds a fourth requirement and is narrower than Claim 1.",
      "A 2018 catalog shows a base and spring but no adjustable stop. That document alone lacks a claimed limitation, so it does not anticipate Claim 1 merely because it shows a similar clamp.",
      "A different earlier manual expressly shows all three Claim 1 features in a qualifying disclosure. That single reference could support a § 102 anticipation rejection. To assess Claim 2, also look for the threaded screw.",
      "The **abstract** might say 'adjustable safety clamp'; the **specification** would explain construction and use; the **claims** determine which exact features matter in the novelty analysis."
    ],
    "before": [
      "Specification = technical description; abstract = concise summary; claims = boundaries.",
      "Limitation = one required claim feature.",
      "Prior art = qualifying earlier information or activity used to evaluate patentability.",
      "§ 102 anticipation ordinarily requires every limitation in a single qualifying reference."
    ]
  },
  "4": {
    "rule": "**35 U.S.C. § 112(a)** addresses written description, enablement, and best mode. Amendments also cannot introduce prohibited new matter into the originally filed disclosure.",
    "explain": [
      "The **specification** is the written technical disclosure. Imagine handing an engineering package to someone with ordinary skill in the relevant field. It should explain the invention, not just promise a result.",
      "**Written description** asks whether the original application reasonably conveys that the inventor had possession of the claimed invention. A sentence claiming 'a device that never fails' without describing a workable design may not show possession of every claimed solution.",
      "**Enablement** asks whether the disclosure teaches a skilled person to make and use the full scope of the claimed invention without undue experimentation. You might describe one particular seal in detail but still fail to enable a much broader claim to all seal materials under extreme temperatures.",
      "**Best mode** is another requirement in § 112(a): the specification must set forth the best mode contemplated by the inventor or joint inventor at the relevant time. The current legal consequences of failing best mode are nuanced, so don't treat it as identical to written description or enablement.",
      "**35 U.S.C. § 112(b)** is different: it concerns whether the claims particularly point out and distinctly claim the invention, often discussed as **definiteness**. Think: (a) is about the sufficiency of disclosure, while (b) is about clear claim boundaries.",
      "**New matter** means technical information added after filing that was not present in the original disclosure. Under the applicable rules, an applicant cannot use an amendment to insert new technical content and pretend it had always been disclosed. Drawings can form part of the disclosure; an **abstract** is only a short technical summary and doesn't substitute for detailed support."
    ],
    "worked": [
      "An inventor files a specification and drawing showing a single rubber seal around a pressure valve.",
      "Six months later they develop a double-seal arrangement and want to add it to the existing application's description. If the second seal wasn't originally disclosed, it raises a new-matter problem.",
      "Suppose instead the inventor already claimed an entire family of advanced high-temperature seals but provided only one example. Ask two separate questions: did the original filing show possession of the full claimed invention (**written description**) and does it teach how to make and use it without undue experimentation (**enablement**)?",
      "If a question asks which statutory provision governs written description and enablement, the answer is **35 U.S.C. § 112(a)**. If it asks whether claim boundaries are unclear, look instead to **§ 112(b)**."
    ],
    "before": [
      "§ 112(a): written description, enablement and best mode.",
      "§ 112(b): clarity/definiteness of claim boundaries.",
      "New matter: technical content absent from the original filing.",
      "A specification supports the invention; it doesn't guarantee every later claim is supported."
    ]
  },
  "5": {
    "rule": "Patent prosecution is the USPTO examination and applicant-response process. Office actions may contain substantive claim rejections or formal objections, and finality affects available responses.",
    "explain": [
      "The applicant files a patent application. The USPTO assigns an examiner, who reviews the technical disclosure, searches qualifying prior art, and checks whether the claims meet the legal standards.",
      "An **Office action** is a written communication from the examiner. A **rejection** challenges patentability—for example, a claim might not be new under § 102 or might be obvious under § 103. An **objection** often addresses form or procedure—such as a defective drawing or formatting issue—rather than substantive claim patentability.",
      "The applicant must provide a proper **reply** under applicable rules. A reply generally addresses the grounds raised and makes a bona fide effort to advance examination; it might include reasoned arguments, permissible claim amendments, or other appropriate materials. A thank-you note does not answer a substantive rejection.",
      "A **nonfinal** action ordinarily gives the applicant broader opportunities to amend in response. A **final** Office action limits some amendment rights but does not mean the patent is issued, all options are gone, or the applicant automatically loses. Depending on the case, after-final responses, an RCE (request for continued examination), or appeal may be options.",
      "If the examiner determines the claims are allowable, a **notice of allowance** can issue. Remaining issuance formalities, commonly including an **issue fee**, still generally must be satisfied before a patent is granted."
    ],
    "worked": [
      "A bracket application claims a special locking tab. The examiner finds an earlier patent showing the same tab and sends an Office action rejecting a claim under § 102.",
      "Separately, the examiner notes that a figure label is wrong. That may be an objection to a formal matter, not the same thing as a prior-art rejection.",
      "The applicant may argue that the earlier drawing lacks a required spring feature or amend the claim if the original disclosure supports the amendment. A response should actually address the examiner's reasoning.",
      "If a later action is marked final, the team must assess the permitted after-final options; the word 'final' does not mean no procedure remains.",
      "A notice of allowance comes later if the pending claims are allowed, but it still is not the issued patent."
    ],
    "before": [
      "Office action = examiner communication.",
      "Rejection = problem with patentability; objection = commonly formal/procedural defect.",
      "A substantive reply needs to address the raised grounds.",
      "Final action is not the end of every possible procedure."
    ]
  },
  "6": {
    "rule": "35 U.S.C. § 101 identifies statutory subject matter, utility, and eligibility analysis; passing § 101 is not the same as passing other patentability tests.",
    "explain": [
      "Congress names four categories: process, machine, manufacture, and composition of matter. A useful improvement may fall within one.",
      "A mathematical equation by itself can raise an abstract-idea issue; merely saying 'use a computer' may not resolve it.",
      "Section 101 concerns eligibility. Section 102 concerns novelty, § 103 obviousness, and § 112 disclosure and claim requirements. A claim can pass one and fail another."
    ],
    "worked": [
      "A pump is a machine, a technique for controlling it can be a process, and a new alloy can be a composition of matter.",
      "The claim still needs to avoid a disqualifying exception under the appropriate legal framework.",
      "Even an eligible pump claim could be anticipated by an earlier manual. Eligibility is not a promise of patentability."
    ],
    "before": [
      "§101 = eligibility; §102 = novelty; §103 = obviousness; §112 = disclosure and claims."
    ]
  },
  "7": {
    "rule": "A claim reciting a judicial exception requires analysis of the claim as a whole, including whether the exception is integrated into a practical application.",
    "explain": [
      "An abstract idea might include certain mathematical concepts. Naturally occurring materials as they exist in nature may raise a natural-phenomenon issue.",
      "Don't decide eligibility based on a single word such as 'computer' or 'formula.' Examine what the claim actually requires and whether the rest of the claim integrates an exception into a practical application.",
      "Eligibility doesn't necessarily determine whether the invention is new or sufficiently disclosed. Those are separate requirements."
    ],
    "worked": [
      "Claim A merely states an equation for estimating heat loss.",
      "Claim B uses temperature sensors, the equation, and a particular physical valve controller to regulate an actual heat exchanger.",
      "Claim B requires consideration of how the calculation is applied in the claimed process; its concrete details matter to the eligibility analysis."
    ],
    "before": [
      "Judicial exceptions include abstract ideas, natural phenomena, and laws of nature.",
      "A practical application requires analyzing the actual claim limitations."
    ]
  },
  "8": {
    "rule": "35 U.S.C. § 102 tests novelty against qualifying prior art, using the effective filing date and statutory exceptions.",
    "explain": [
      "An earlier patent document is one possible form of prior art. Published articles, publicly accessible manuals, public use, sales, and certain earlier-filed U.S. patent documents may matter under the relevant statutory provisions.",
      "An effective filing date is the date legally relevant to the particular claimed invention, not always simply today's application date.",
      "Not every item with an earlier date qualifies automatically. You may need to evaluate availability to the public, the type and date of document, and statutory exceptions."
    ],
    "worked": [
      "A January manual shows the special gasket that you file for in July. If the manual was qualifying public prior art, the July filing can't ignore it.",
      "An earlier-filed U.S. patent application might become relevant when published later; the governing §102 provisions require careful dates.",
      "An inventor's own disclosure may have a specific exception; don't assume every disclosure is fatal."
    ],
    "before": [
      "Prior art can be more than a patent.",
      "Effective filing dates matter, and exceptions can matter too."
    ]
  },
  "9": {
    "rule": "Anticipation under § 102 generally needs every claim limitation expressly or inherently disclosed by one qualifying prior-art reference.",
    "explain": [
      "Write each required feature in the claim as a checklist. Find one prior-art reference and look for each item in that same source.",
      "A feature can be inherent when it necessarily results from what the source teaches. Something that could merely happen is not enough.",
      "Combining a feature from Document A and a different feature from Document B generally raises a §103 obviousness question, not ordinary one-reference anticipation."
    ],
    "worked": [
      "Claim: bracket with a base, hinge, and adjustable spring.",
      "Reference A: base and hinge, no spring. It does not disclose all three limitations.",
      "Reference B: base, hinge, and necessarily present adjustable spring. That one source may anticipate the claim.",
      "Do not add a spring from Reference C to A and call it single-reference anticipation."
    ],
    "before": [
      "Anticipation = all limitations in one qualifying source.",
      "Inherency requires necessity, not mere possibility."
    ]
  },
  "10": {
    "rule": "The AIA § 102 exceptions can protect certain inventor-originated disclosures, but the timing and origin of the information matter.",
    "explain": [
      "An inventor's own qualifying public disclosure in the one year before the effective filing date may fit an exception under §102(b)(1).",
      "The same result is not assured for unrelated third-party disclosures or for every kind of earlier U.S. patent filing.",
      "Identify who disclosed, what they disclosed, the actual disclosure date, and the claim's effective filing date before applying an exception."
    ],
    "worked": [
      "An engineer publicly demonstrates a coupling and files for it eight months later.",
      "That timing may permit an inventor-originated exception; investigate the actual statutory conditions.",
      "If another inventor independently described a different feature earlier, don't assume the same exception covers it."
    ],
    "before": [
      "Grace period ≠ universal exemption.",
      "Check dates and disclosure origin under §102(b)."
    ]
  },
  "11": {
    "rule": "35 U.S.C. § 103 asks whether claimed subject matter would have been obvious to a person of ordinary skill at the relevant time.",
    "explain": [
      "A claim can be novel without being nonobvious. Two familiar elements may be joined for an expected improvement that skilled practitioners would predict.",
      "The Graham inquiries include the scope and content of prior art, the differences between the art and the claim, the ordinary skill level, and relevant objective evidence.",
      "Multiple references can be used, but the examiner must explain supported reasoning; the conclusion cannot rely only on hindsight."
    ],
    "worked": [
      "A thermostat and automatic vent are separately known.",
      "A skilled building-control engineer might have reason to pair them to regulate heat automatically.",
      "Analyze the prior art and expected result; commercial success alone does not automatically decide the question."
    ],
    "before": [
      "§102: one-reference novelty; §103: skilled-person obviousness."
    ]
  },
  "12": {
    "rule": "A properly reasoned § 103 combination requires a factual basis and an articulated explanation for the proposed combination.",
    "explain": [
      "The KSR decision emphasizes a flexible approach rather than only rigid formulas for teaching, suggestion, or motivation.",
      "Ask what technical problem a skilled person was trying to solve, what options were known, and whether the combination was predictable.",
      "Graham factors structure the factual inquiry; reasons to combine must relate to facts, not just what seems obvious once you've seen the inventor's solution."
    ],
    "worked": [
      "Manual A shows a vibration sensor; Manual B shows a shutdown controller.",
      "An examiner could explain that coupling them would foreseeably shut down a machine before damage.",
      "If there is no supported reason to combine or the art discourages it, the analysis must confront those facts."
    ],
    "before": [
      "KSR = flexible and evidence-based approach.",
      "Graham = foundational factual inquiries."
    ]
  },
  "13": {
    "rule": "Prior art that teaches away and evidence of genuinely unexpected results can matter in § 103 analysis.",
    "explain": [
      "Teaching away occurs when a reference discourages a technical approach; merely describing a different preference may not qualify.",
      "Unexpected results can support nonobviousness when they are shown with appropriate evidence and relate to the claimed subject matter.",
      "Nexus means the asserted real-world evidence has a meaningful relationship to the actual claimed invention."
    ],
    "worked": [
      "Older studies warn that combining two coolant systems destabilizes pressure.",
      "Your specific device achieves stable performance through a claimed control structure.",
      "The discouragement may weigh against combining the systems, and technically supported unexpected performance may be relevant."
    ],
    "before": [
      "Teaching away = real discouragement, not mere silence.",
      "Nexus ties evidence to the claims."
    ]
  },
  "14": {
    "rule": "35 U.S.C. § 112(a) includes written description, enablement, and best mode; § 112(b) governs claim definiteness.",
    "explain": [
      "Written description asks whether the application shows possession of the claimed invention.",
      "Enablement asks whether a skilled person can make and use the full claimed scope without undue experimentation.",
      "Definiteness under §112(b) separately asks whether claim boundaries are clear enough. These deficiencies should not be confused."
    ],
    "worked": [
      "An inventor describes one seal material but claims every high-temperature seal composition.",
      "Written-description and enablement questions may arise for the broad genus.",
      "If a claim instead says only 'substantially better' without clear boundaries in context, definiteness may be the focus."
    ],
    "before": [
      "§112(a): description/enablement/best mode.",
      "§112(b): definiteness."
    ]
  },
  "15": {
    "rule": "Provisional benefit under 35 U.S.C. § 119(e) generally requires a timely qualifying nonprovisional and earlier disclosure support.",
    "explain": [
      "A provisional application can establish an earlier date for properly disclosed subject matter; it is not itself examined into a patent.",
      "A qualifying nonprovisional is generally filed within twelve months, subject to limited relief provisions.",
      "An ordinary continuation does not add new matter; a continuation-in-part adds technical disclosure that may receive a later effective filing date."
    ],
    "worked": [
      "A provisional explains a clamp and its mechanical release.",
      "A later nonprovisional also claims a newly developed sensor absent from that first filing.",
      "The sensor feature cannot simply borrow the earlier date if it wasn't adequately supported there."
    ],
    "before": [
      "Provisional = potential earlier support, not patent grant.",
      "CIP new matter doesn't automatically inherit the parent's date."
    ]
  },
  "16": {
    "rule": "Inventorship depends on a person's inventive contribution to the conception of at least one claimed invention, not on job title or ownership.",
    "explain": [
      "Conception means forming a definite idea of the actual inventive subject matter. Building or testing someone else's fully specified design may be important engineering work without making the builder an inventor.",
      "The claims are critical. A person who thought of a feature that isn't part of any claim may not be an inventor of the currently claimed invention.",
      "An employer may obtain ownership through assignment or agreement, but a corporate owner is not itself the human inventor. Evaluate the actual contributions of individuals."
    ],
    "worked": [
      "An engineer conceives a locking-pin mechanism and draws the full design.",
      "A machinist builds that exact design without contributing a new claimed feature.",
      "The machinist's work is valuable but does not automatically establish inventive conception.",
      "If the machinist instead originates a feature that appears in a claim, investigate joint inventorship."
    ],
    "before": [
      "Inventorship follows claimed conception.",
      "Reduction to practice alone need not confer inventorship.",
      "Company ownership and inventor identity are different."
    ]
  },
  "17": {
    "rule": "Joint inventors may contribute differently to claimed inventive subject matter; equal contribution and simultaneous work are not required.",
    "explain": [
      "The relevant question is who contributed a legally meaningful inventive idea to claimed subject matter.",
      "Two people can contribute at different times or places and can be joint inventors without both designing every element.",
      "Routine verification, management or teaching well-known principles is not by itself the same as conceiving an inventive contribution."
    ],
    "worked": [
      "Engineer A conceives a new clamp geometry; Engineer B conceives its novel release mechanism.",
      "A later claim recites the combined inventive system.",
      "Investigate whether both contributed to claimed conception, even if A did most of the work.",
      "The budget manager who signed off on prototypes does not become a joint inventor just by approving funds."
    ],
    "before": [
      "Conception matters more than percentage of effort.",
      "Joint inventors needn't work together simultaneously.",
      "Contributing to every claim isn't required."
    ]
  },
  "18": {
    "rule": "An inventor is a creator; an assignee receives transferred rights; the applicant is the legally authorized party seeking the patent.",
    "explain": [
      "An assignment is a legal transfer of ownership rights. The inventor's actual contribution does not change after a transfer.",
      "The applicant may be an inventor or an entity entitled to pursue the application under applicable rules.",
      "Ask three separate questions in scenarios: Who conceived the claims? Who presently holds ownership? Who is authorized to prosecute the application?"
    ],
    "worked": [
      "A designer conceives a new manufacturing tool.",
      "The designer validly assigns rights to a startup.",
      "The designer remains an inventor; the startup may be owner and may be applicant under proper rules.",
      "Neither the examiner nor the startup becomes a human inventor merely because they handle the paperwork."
    ],
    "before": [
      "Assignment changes rights, not history.",
      "Inventor, owner, applicant are different concepts."
    ]
  },
  "19": {
    "rule": "Executing an assignment and recording that assignment at the USPTO serve different legal and administrative functions.",
    "explain": [
      "An executed assignment is an instrument that transfers specified ownership interests, assuming its legal requirements are met.",
      "Recordation enters the document in USPTO records and may provide public notice and affect priority between certain competing transfers.",
      "Recordation does not amount to a USPTO judgment that all possible disputes over ownership are settled."
    ],
    "worked": [
      "Inventor A signs a valid agreement assigning rights in a sensor to Startup B.",
      "Startup B records the assignment with the USPTO.",
      "The assignment is the transaction; recordation is a record of it.",
      "The inventor remains the named inventor even though ownership is documented for B."
    ],
    "before": [
      "Transfer and recordation are different.",
      "Recordation does not determine who invented the claimed features."
    ]
  },
  "20": {
    "rule": "Representation of others before the USPTO is regulated. A corporation generally needs a registered patent practitioner to prosecute its patent application.",
    "explain": [
      "A patent attorney is a licensed attorney with the relevant patent registration; a patent agent is a registered practitioner without needing to be a licensed attorney for authorized patent matters.",
      "A power of attorney appoints a practitioner to act for the applicant. It does not make the practitioner an inventor or transfer ownership.",
      "An unregistered engineer can support technical drafting but cannot simply act as the corporation's registered patent representative."
    ],
    "worked": [
      "A corporation owns an invention and hires an experienced unregistered engineer.",
      "The engineer prepares CAD figures and a technical description.",
      "For representation in patent prosecution, the company generally uses a registered practitioner.",
      "A power of attorney may formalize the representative's authority under the applicable rules."
    ],
    "before": [
      "Professional registration ≠ technical expertise.",
      "Power of attorney ≠ assignment.",
      "Corporations aren't individual pro se inventors."
    ]
  },
  "21": {
    "rule": "The oath or declaration identifies and attests to required inventor-related matters; a substitute statement may be allowed in specified circumstances.",
    "explain": [
      "An oath/declaration is distinct from technical patent claims, an application data sheet, and a transfer-of-rights assignment.",
      "A substitute statement may be authorized when an inventor has died, lacks capacity, cannot be found after diligent efforts, or refuses to execute in the qualifying circumstances.",
      "There are procedural requirements on who signs a substitute statement and what it must contain—do not assume any available employee can sign."
    ],
    "worked": [
      "Two inventors are properly named on a filing.",
      "One inventor cannot be located after appropriate diligent efforts.",
      "The applicant checks the rule for a substitute statement rather than inserting the examiner's signature.",
      "The inventive contribution of the absent inventor still matters to correct inventorship."
    ],
    "before": [
      "Oath relates to inventorship.",
      "Substitute statement has specific legal conditions.",
      "Assignment relates to ownership."
    ]
  },
  "22": {
    "rule": "An application data sheet (ADS) contains structured application information, including certain properly made benefit or priority claims.",
    "explain": [
      "An ADS can identify inventors, the applicant, correspondence details and relevant filing relationships.",
      "A specification is different: it describes the technical invention and provides support for claims. The ADS cannot fill gaps in the technical disclosure.",
      "Priority and benefit claims sometimes require specific ADS information and timing; the filing team must not assume a verbal note cures a missing formal claim."
    ],
    "worked": [
      "An application lists the inventors and an earlier provisional in its ADS.",
      "The specification describes a mechanical clamp but lacks the new electronic sensor.",
      "The ADS may accurately show relationships without establishing written-description support for the sensor.",
      "Check the technical disclosure and procedural benefit claim independently."
    ],
    "before": [
      "ADS = structured metadata.",
      "Specification = technical description.",
      "Benefit requires both formal compliance and substantive support."
    ]
  },
  "23": {
    "rule": "A nonprovisional patent application combines technical disclosure and administrative formalities; no one document does every job.",
    "explain": [
      "Claims define the scope sought. The specification teaches the invention, including how it is made and used under the statutory standards.",
      "Drawings show parts and relationships when required. The abstract is a concise technical summary and cannot replace the claims.",
      "An inventor oath and ADS provide different required information. A CAD image without an adequate written explanation can leave disclosure deficiencies."
    ],
    "worked": [
      "A patent package for a pressure valve includes drawings of its housing.",
      "The claims require a specific seal assembly.",
      "The specification should adequately describe the assembly and its operation; a sales brochure may not.",
      "The applicant must separately attend to any required declaration, forms and filing fees."
    ],
    "before": [
      "Claims = boundaries.",
      "Specification = technical support.",
      "Abstract = brief overview.",
      "Forms don't replace disclosure."
    ]
  },
  "24": {
    "rule": "A filing date, a filing receipt, and completed application formalities are different milestones.",
    "explain": [
      "A filing receipt normally reports identifiers and dates recorded by the USPTO for the application.",
      "Missing-parts notices can require later action on outstanding administrative matters; the effect on filing date depends on the applicable application type and rules.",
      "A receipt is not a notice of allowance or proof that the claims are patentable."
    ],
    "worked": [
      "An electronic application is accorded a filing date.",
      "The USPTO later identifies a missing declaration or fee.",
      "The applicant responds to the missing-parts notice under the applicable deadline and rules.",
      "Do not assert that every missing item necessarily voids the originally accorded filing date."
    ],
    "before": [
      "Filing date ≠ issue date.",
      "Filing receipt ≠ patent grant.",
      "Formalities still matter."
    ]
  },
  "25": {
    "rule": "USPTO fees have distinct purposes and some legally eligible applicants may qualify for small-entity or micro-entity rates.",
    "explain": [
      "Application filing, search and examination fees occur in different contexts from an issue fee after allowance or maintenance fees after grant.",
      "Small-entity and micro-entity status have regulatory definitions and conditions involving more than simply business age.",
      "Payment ensures compliance with a fee requirement but does not by itself establish novelty, obviousness, or disclosure."
    ],
    "worked": [
      "A young hardware company plans a patent application.",
      "It checks whether it actually satisfies small-entity or micro-entity definitions.",
      "It pays the correct application-related charges and later, if claims are allowed, addresses the issue fee.",
      "None of those payments proves the actuator is novel."
    ],
    "before": [
      "Fee timing and purpose matter.",
      "Entity status is legally defined.",
      "Fee payment isn't substantive examination."
    ]
  },
  "26": {
    "rule": "A later nonprovisional may claim benefit of an earlier provisional within the usual twelve-month window, but only for subject matter sufficiently disclosed earlier.",
    "explain": [
      "A provisional is a potential earlier filing foundation, not an examined application that will mature into a patent on its own.",
      "A later nonprovisional ordinarily must be filed within twelve months to obtain benefit under §119(e), subject to certain exceptions and procedural requirements.",
      "The earlier disclosure must support the later claimed invention. Newly added features aren't automatically entitled to the provisional date."
    ],
    "worked": [
      "A March provisional illustrates a spring-loaded mechanical clamp.",
      "A November nonprovisional includes an electronic sensor invented after March.",
      "Check whether the March provisional actually described each feature of the later claim.",
      "The existence of the March filing does not automatically support the sensor."
    ],
    "before": [
      "Twelve months is the ordinary benefit window.",
      "Actual earlier technical support matters.",
      "Provisional ≠ patent grant."
    ]
  },
  "27": {
    "rule": "A first qualifying foreign application may support priority in a later U.S. application under 35 U.S.C. § 119, subject to timing and procedural requirements.",
    "explain": [
      "The Paris Convention establishes priority concepts; for many utility inventions, the general time limit is twelve months from the first qualifying foreign application.",
      "A priority claim needs the appropriate procedural steps, and an earlier filing supports only subject matter it actually disclosed.",
      "A foreign application does not create an enforceable U.S. patent automatically; U.S. filing and examination remain necessary."
    ],
    "worked": [
      "A German engineer files a first patent application for a gearbox in February.",
      "They pursue a U.S. application the next January with the proper priority claim.",
      "They check the filing interval and whether each claimed gearbox feature appeared in the German document.",
      "A newly added sensor absent from the German filing has no automatic earlier support."
    ],
    "before": [
      "Foreign priority is not a world patent.",
      "Time and documentation matter.",
      "Earlier filing must support the claim."
    ]
  },
  "28": {
    "rule": "A continuation pursues claims supported by an earlier disclosure; a divisional pursues distinct disclosed invention subject matter, often after restriction.",
    "explain": [
      "Continuations generally repeat an earlier specification without adding new technical matter. They may pursue different claims to already disclosed subject matter.",
      "A divisional may follow a restriction between separately claimed inventions in an earlier filing.",
      "Continuation benefit also depends on proper timing, co-pendency and other statutory requirements; simply using a familiar label is insufficient."
    ],
    "worked": [
      "An application describes a housing and a manufacturing fixture.",
      "The examiner requires election between distinct inventions.",
      "The applicant pursues one in the initial application and may file a divisional for the other disclosed invention.",
      "A normal continuation of the parent cannot quietly add an entirely new fixture never disclosed before."
    ],
    "before": [
      "Continuation = no new matter.",
      "Divisional = separately pursued disclosed invention.",
      "Co-pendency can affect benefit."
    ]
  },
  "29": {
    "rule": "A continuation-in-part (CIP) adds disclosure, but later-added subject matter cannot simply borrow the earlier filing date.",
    "explain": [
      "A CIP incorporates earlier material and adds new technical information. New matter is exactly what a regular continuation generally cannot add.",
      "An earlier date may be available to properly supported claims, but subject matter first disclosed later gets that later date for relevant analysis.",
      "Always compare the actual claimed features with the original parent disclosure; priority questions can vary by claim."
    ],
    "worked": [
      "A parent application describes a simple valve in 2025.",
      "A 2026 CIP adds a computerized control loop.",
      "A claim to the originally disclosed valve might qualify for an earlier date under proper rules.",
      "A claim requiring the new control loop cannot assume the 2025 date if the loop wasn't described then."
    ],
    "before": [
      "CIP adds new disclosure.",
      "Claims get dates supported by actual content.",
      "Not every claim automatically receives the oldest date."
    ]
  },
  "30": {
    "rule": "A comprehensive filing analysis separates inventive contribution, transferred ownership, application formalities and technical support for benefit.",
    "explain": [
      "Begin with the actual claims and identify which humans conceived the claimed subject matter.",
      "Check whether rights were transferred and distinguish ownership from inventorship. Confirm the administrative filing records separately.",
      "Evaluate whether the original specification enables and describes each feature, then verify that any earlier-date benefit has both formal and substantive support."
    ],
    "worked": [
      "A company files a provisional about a clamp.",
      "Two engineers later invent a new electronic release system and sign assignments to the company.",
      "Determine which engineers contributed to the claimed release system, who owns rights, and which documents identify each party.",
      "Finally, compare the claim to the earlier provisional to see which features might qualify for that date."
    ],
    "before": [
      "Inventors ≠ owners.",
      "ADS ≠ technical specification.",
      "Earlier filing ≠ automatic support for new matter."
    ]
  }
};
