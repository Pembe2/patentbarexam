/* Beginner-friendly patent law vocabulary and practical engineering analogies. */
window.PATENT_PLAIN_LESSONS={
  "topic": {
    "roadmap": {
      "term": "Prosecution",
      "meaning": "The back-and-forth process between an applicant and the patent office while an application is examined.",
      "example": "Think of a design review: you submit a technical package, receive review comments, make corrections and respond until it is accepted or rejected.",
      "tip": "Pay attention to whether the question involves an application still under examination or a patent that has already issued."
    },
    "subject": {
      "term": "Patent eligibility",
      "meaning": "Whether the kind of invention being claimed is even the sort of subject matter patent law can protect.",
      "example": "A manufacturing machine is a concrete invention. A mathematical relationship written on a whiteboard, without more, presents a different eligibility problem.",
      "tip": "Don't confuse whether an idea is eligible for a patent with whether it is new or inventive enough to obtain one."
    },
    "novelty": {
      "term": "Prior art and anticipation",
      "meaning": "Earlier information or activity can prevent a patent claim from being considered new. Anticipation generally needs every claimed feature disclosed by one qualifying source.",
      "example": "Imagine a drawing calling for a bracket with a hole, hinge and locking pin. If one older manual describes all three arranged as claimed, the claim may lack novelty.",
      "tip": "Look for a single reference disclosing each claim limitation, then check relevant dates and exceptions."
    },
    "obvious": {
      "term": "Obviousness",
      "meaning": "Even if nobody described the precise design before, it may still be unpatentable if a skilled engineer would have found it obvious from earlier work.",
      "example": "A known sensor and known controller may each be old. The question is whether combining them in the claimed way would have been obvious, considering the evidence.",
      "tip": "Distinguish 'already disclosed in one reference' (§102) from 'would have been an obvious development' (§103)."
    },
    "disclosure": {
      "term": "Adequate disclosure",
      "meaning": "The application must explain what the inventor actually invented and, where required, teach skilled people how to make and use it.",
      "example": "A design package that claims every alloy composition but only gives a working recipe for one narrow alloy may be insufficiently enabling.",
      "tip": "Written description, enablement and definiteness are separate tests, even when the question makes them sound similar."
    },
    "filing": {
      "term": "Priority and filing dates",
      "meaning": "Some related applications can benefit from an earlier filing date, but only for subject matter that was properly disclosed and where legal requirements are met.",
      "example": "If your original engineering specification described a steel pin, adding a ceramic coating one year later doesn't automatically make the coating an invention from the earlier date.",
      "tip": "Check which filing supports the exact feature in the claim and whether the required deadline was met."
    },
    "responses": {
      "term": "Office action",
      "meaning": "A written communication from the patent examiner identifying issues with an application and what needs a response.",
      "example": "It's like getting design-review comments: you must address the technical objections rather than simply resubmit without answering them.",
      "tip": "Determine whether the rejection is final or nonfinal; that changes what the applicant can do next."
    },
    "appeal": {
      "term": "Appeal",
      "meaning": "A formal request for review of certain examiner rejections by the Patent Trial and Appeal Board.",
      "example": "Think of escalating a technical disagreement to a higher review panel, rather than merely asking the examiner to look again.",
      "tip": "Don't mix up an appeal about the merits of a rejection and a petition about certain procedural matters."
    },
    "pct": {
      "term": "PCT and national stage",
      "meaning": "The Patent Cooperation Treaty provides a coordinated way to begin international patent filing, but individual countries or regional offices still decide whether patents issue.",
      "example": "One shared engineering package can start several approval workflows, but passing the initial submission does not equal approval in each jurisdiction.",
      "tip": "International filing and publication are not the same as an enforceable worldwide patent."
    },
    "postgrant": {
      "term": "Post-grant",
      "meaning": "What happens after a patent has been issued, such as corrections, challenges, and fees to keep qualifying patents in force.",
      "example": "After a machine passes acceptance, later procedures might correct documentation or challenge its validity; those are not the same process as initial approval.",
      "tip": "Match the procedure to the specific problem: error correction, validity challenge, or maintaining the patent."
    }
  },
  "byId": {
    "PB-0039": {
      "term": "Teaching away",
      "meaning": "When earlier technical information discourages a skilled person from following a particular solution, rather than suggesting it.",
      "example": "Imagine two published engineering studies warning that combining cooling method A with method B produces unstable operation. You find a workable combination that overcomes that problem. Those warnings can weigh against the argument that the combination was obvious.",
      "tip": "A reference merely preferring a different solution is not necessarily teaching away. Ask whether it actually criticizes, discredits, or discourages the claimed approach.",
      "ref": "MPEP 2145"
    },
    "PB-0038": {
      "term": "Reason to combine references",
      "meaning": "The examiner needs a supported explanation for why a skilled person would have combined earlier teachings to arrive at the claimed invention.",
      "example": "One manual describes a pressure sensor; another describes an automatic shutdown controller. A proper obviousness explanation connects why an engineer would combine them as claimed.",
      "tip": "Simply pointing to two old documents is not, by itself, a complete reasoned obviousness analysis.",
      "ref": "MPEP 2143"
    },
    "PB-0036": {
      "term": "KSR and obviousness",
      "meaning": "KSR is a Supreme Court case explaining that the obviousness analysis should be flexible and attentive to ordinary engineering common sense.",
      "example": "If engineers routinely add a known temperature alarm to equipment to solve a predictable overheating problem, a rigid requirement for an explicit instruction to combine would be too narrow.",
      "tip": "Flexible doesn't mean unsupported: there must still be an articulated reason with factual support.",
      "ref": "MPEP 2141"
    },
    "PB-0037": {
      "term": "Graham factors",
      "meaning": "Graham lays out factual questions used to evaluate whether an invention would have been obvious.",
      "example": "Compare your new fixture against prior designs, identify the differences, assess what an ordinary engineer would know, and consider objective evidence such as unexpected results.",
      "tip": "The inquiry concerns the technical prior art and claims, not incidental factors such as which attorney filed the application.",
      "ref": "MPEP 2141"
    },
    "PB-0040": {
      "term": "Unexpected results",
      "meaning": "A new combination may perform in a way a skilled person would not reasonably have predicted; properly supported results can weigh against obviousness.",
      "example": "If a coating change normally gives a 2% improvement but a particular claimed combination unexpectedly improves fatigue life by 60%, that evidence may matter.",
      "tip": "The results must be adequately proved and connected to what is claimed; merely saying 'surprising' isn't enough.",
      "ref": "MPEP 716.02"
    },
    "PB-0031": {
      "term": "Inherent disclosure",
      "meaning": "A prior reference can disclose a claim feature without naming it if the feature necessarily follows from what is taught.",
      "example": "An old process specification may never mention steam, but if its conditions necessarily produce steam, that result may be inherently disclosed.",
      "tip": "Likely or possible is not the same as necessary.",
      "ref": "MPEP 2112"
    },
    "PB-0035": {
      "term": "Inherency versus possibility",
      "meaning": "Inherency means a feature must necessarily exist in the earlier disclosed technology, not just be able to occur.",
      "example": "A known pump design that sometimes cavitates doesn't inherently disclose cavitation as an unavoidable result unless it necessarily happens under the described conditions.",
      "tip": "The key word is necessarily.",
      "ref": "MPEP 2112"
    },
    "PB-0033": {
      "term": "Inventor disclosure grace period",
      "meaning": "Some qualifying disclosures originating from an inventor can be excluded as prior art when made no more than one year before the effective filing date.",
      "example": "An engineer publicly presents the invention and files an adequately supported patent application eight months later. The relevant exception may apply if its conditions are met.",
      "tip": "It isn't a blanket permission for every disclosure; source, dates and statutory conditions matter.",
      "ref": "MPEP 2153"
    },
    "PB-0034": {
      "term": "Earlier-filed patent documents",
      "meaning": "Certain U.S. patent publications or patents can count as prior art based on their effectively filed date, not merely when the public first saw them.",
      "example": "Another engineer files a patent application in January, and it publishes the following year. For the applicable prior-art analysis, that earlier effective filing date can matter.",
      "tip": "Don't assume publication date is always the controlling date for §102(a)(2).",
      "ref": "MPEP 2154"
    },
    "PB-0042": {
      "term": "Enablement",
      "meaning": "The patent application must teach a skilled person how to make and use the full claimed invention without undue experimentation.",
      "example": "A specification that says 'build a system that safely withstands any reactor temperature' but gives no way to achieve the broad range may not enable it.",
      "tip": "The test is technical teaching, not whether the invention would be commercially profitable.",
      "ref": "MPEP 2164"
    },
    "PB-0045": {
      "term": "Written description",
      "meaning": "The original application must show that the inventor possessed the specific invention later claimed.",
      "example": "An original drawing shows a single-valve arrangement, but later claims demand a five-valve architecture not present in the filed disclosure. Written-description support becomes a concern.",
      "tip": "Clear claim wording alone doesn't establish that the original disclosure supported the claim.",
      "ref": "MPEP 2163"
    },
    "PB-0041": {
      "term": "New matter",
      "meaning": "An amendment can't add technical subject matter that wasn't disclosed in the application as originally filed.",
      "example": "You can't quietly add a new cooling-loop design to a submitted technical specification and pretend it was part of the original package.",
      "tip": "Clarifying text may be permissible; new technical disclosure is the problem.",
      "ref": "MPEP 608.04"
    },
    "PB-0043": {
      "term": "Means-plus-function claiming",
      "meaning": "Some claims define a component by what it does; §112(f) may tie that language to corresponding structures described in the specification and equivalents.",
      "example": "If a claim calls for 'means for securing the lid,' the described latch or hinge mechanism may become important to the limitation's scope.",
      "tip": "It does not cover any imaginable mechanism without regard to the actual disclosure.",
      "ref": "MPEP 2181"
    },
    "PB-0048": {
      "term": "Continuation-in-part",
      "meaning": "A CIP is a related application that repeats some earlier disclosure and introduces new subject matter.",
      "example": "Your first filing describes a clamp. A CIP adds an electronic release. The release may have a later effective filing date because it wasn't disclosed before.",
      "tip": "Priority must be checked claim by claim; don't assume all CIP claims inherit the parent's date.",
      "ref": "MPEP 201.08"
    },
    "PB-0046": {
      "term": "Provisional benefit period",
      "meaning": "A nonprovisional typically must be filed within 12 months to claim benefit of a U.S. provisional, with limited legal relief mechanisms.",
      "example": "File a technical description on March 1, 2025; filing a proper nonprovisional by March 1, 2026 may allow benefit for sufficiently supported claimed subject matter.",
      "tip": "A date alone isn't enough; the earlier disclosure must actually support the later claim.",
      "ref": "MPEP 201.04"
    },
    "PB-0054": {
      "term": "After-final amendment",
      "meaning": "After a final examiner rejection, filing an amendment doesn't mean the examiner must enter it.",
      "example": "It's like a late design change after a formal review cutoff: you may submit it, but different admission rules apply.",
      "tip": "A final action isn't necessarily the end of prosecution; distinguish amendment entry from RCE or appeal.",
      "ref": "MPEP 714.12"
    },
    "PB-0056": {
      "term": "Twice rejected",
      "meaning": "Patent applicants generally may appeal a claim to the PTAB after it has been twice rejected, subject to applicable requirements.",
      "example": "After two formal review decisions against a proposed design, the applicant may seek higher review rather than continuing only with the original reviewer.",
      "tip": "This is about an application under examination, not a patent that must first expire.",
      "ref": "MPEP 1204"
    },
    "PB-0062": {
      "term": "National-stage deadline",
      "meaning": "For the U.S. national stage of a PCT filing, the general time period is 30 months from the priority date, subject to applicable rules.",
      "example": "A single international application starts the process, but entry into the U.S. national stage is a separate required milestone.",
      "tip": "The international search report does not itself enter an application into national prosecution.",
      "ref": "MPEP 1893"
    },
    "PB-0066": {
      "term": "Maintenance fee schedule",
      "meaning": "Qualifying issued utility patents require periodic fees at specific anniversaries to remain in force.",
      "example": "Think of scheduled renewals after a license or approval is granted; these occur after issue, not while seeking initial approval.",
      "tip": "The usual intervals are 3.5, 7.5 and 11.5 years from grant; different patent types have different rules.",
      "ref": "MPEP 2504"
    },
    "PB-0067": {
      "term": "Inter partes review (IPR)",
      "meaning": "IPR is a PTAB proceeding that challenges qualifying claims of an issued patent based on specified patent/printed-publication prior art under §§102 or 103.",
      "example": "After an issued patent is challenged, a party may point to older published technical manuals and argue its claims weren't new or were obvious.",
      "tip": "IPR isn't a replacement for initial filing or ordinary examination, and not every challenge ground fits.",
      "ref": "MPEP 2600"
    }
  }
};
