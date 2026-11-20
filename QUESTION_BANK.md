# Patent Bar Study Hub — Question Bank

**Current count: 70 original practice questions** (20 starter questions in `index.html` and 50 added questions in `questions-extra.js`).

## Permanent IDs and avoiding repeats

- Starter questions use the existing numeric IDs `0` through `19`. These are preserved to keep previously saved browser progress compatible.
- Added questions use `PB-0021` through `PB-0070`. Future questions must use new IDs beginning at `PB-0071`; never reuse or renumber an existing ID.
- Each question has a topic, prompt, four answers, one answer index, an explanation, and an MPEP/statute reference.
- `questions-extra.js` includes a runtime check for **identical IDs and normalized prompt text**. It skips duplicates and writes a console error.
- Before adding future questions, compare not only exact prompt text but also **substantively equivalent scenarios and legal tests**, which automatic text matching cannot reliably detect. Verify the answer and exceptions in the USPTO source materials and preserve the relevant citation.
- Maintain one concept angle per question where practical. Multiple questions can cover the same chapter if they assess different rules or applications.

## Practice history

The app stores answer attempts in browser `localStorage` under `patentbar.study.v1`, including each question ID and whether the answer was correct. New quizzes prioritize **questions never answered on that browser**. Once all eligible questions have been seen, they can appear again for review. Exporting and importing the study backup transfers this attempt history between devices.

**Important:** Browser history is not a cross-device cloud sync. The runtime duplicate checker covers exact/normalized prompt duplicates, not semantic duplicates. Questions are original study examples, not official past USPTO exam questions.

## Reference

Study against the [official USPTO registration exam source-materials list](https://www.uspto.gov/sites/default/files/documents/registrationexamsourcematerial.pdf) and [MPEP](https://www.uspto.gov/web/offices/pac/mpep/index.html), currently identifying the Ninth Edition, Revision 01.2024. Recheck source versions when the exam changes.
