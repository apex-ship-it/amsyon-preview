# AMSYON SchoolOS — Product and Delivery Plan

## Vision
A premium, mobile-first school information and learning-management system for Indian K–12 schools, combining a school website with four purpose-built authenticated experiences: student, guardian, teacher, and administrator.

## Current GitHub demo
- `index.html`: responsive fictional Northfield Academy school website and interactive portals.
- Client-side prototype data only; no real login, API, database, messaging or payment processing.
- Student: tasks, timetable, sample marks, notices, assignment status.
- Guardian: learner progress, attendance, fees (simulation), school messaging (simulation).
- Teacher: class register, homework assignment creation, results preview, announcements.
- Admin: admissions queue, student directory, finance metrics, faculty and school settings.
- The existing AMSYON client preview password is used for consistency, but it is a **visual client-side gate, not real security**. GitHub Pages and the repository remain public. Do not enter real minors' information.

## Roadmap
### Phase 1 — Discovery and specification
Interview school leadership, admissions, teachers, fee/accounts teams, parents and students. Document school board, class/section model, academic year, grading scheme, multilingual needs, special needs/accessibility, Indian data residency expectations and payment collection processes. Obtain approvals for sensitive workflows.

### Phase 2 — Secure architecture and identity
Use private source repository; real backend and database; MFA for staff and administrators; guardian–student verified linking; server-side roles; least-privilege access; session hardening; encryption in transit and at rest; database backups; monitoring and audit trails. Never ship API keys or student records through GitHub Pages.

### Phase 3 — Core MVP
Student/guardian registry; staff identities; enrollment; class/subject allocation; timetable; teacher attendance entry and school-verified absence workflows; homework creation/submission; announcements; secure parent access. Import validated legacy spreadsheets. Add consent, retention, deletion and export processes.

### Phase 4 — Academic and financial operations
Gradebook, assessments, approval and publication of official report cards; fee structures, invoices, discounts, payment-gateway integration and reconciliation; receipts and exports. Introduce notifications with opt-in settings and delivery tracking.

### Phase 5 — Premium modules
Library, transport, timetable conflict resolution, admissions online, alumni, events, staff workflows, mobile/PWA support, parent–teacher appointment booking and analytics. Only build modules that match the school's real requirements.

### Phase 6 — Rollout and maintenance
Independent security review and penetration test; accessibility checks; backup restore tests; privacy and regulatory review for minors' information; UAT with school staff; phased rollout and support SLA. Monitor uptime, role permission violations and audit logging.

## Security and compliance requirements
Children's and guardians' personal data is sensitive. Before production, verify and implement the legal requirements applicable to the deployment location, including India's Digital Personal Data Protection regime as applicable, parental/guardian consent, breach response, data retention, subprocessor arrangements and access management. Seek qualified legal and security review. No live data should be processed by the public static demo.

## Architecture proposal
Frontend: responsive React/Next.js or equivalent.
API: server-side TypeScript or similar maintained stack.
Database: PostgreSQL with tenant-aware policy design.
Storage: private document storage with signed URLs.
Identity: managed identity with MFA, secure sessions and role enforcement.
Payments: regulated gateway integration with webhooks and ledger reconciliation.
Hosting: managed app + database, not public static GitHub Pages for authenticated school records.
CI/CD: automated tests, dependency scanning, secrets detection, branch protection, separated staging/production.

## Acceptance tests
- A guardian can only see linked children.
- A student cannot inspect another learner's grades or fees.
- Teachers can only modify authorized classes/subjects.
- Administrators have separately assigned and audited privileges.
- Results publication requires approval.
- Duplicate enrollment and timetable conflicts are detected.
- Failed payment does not mark an invoice paid.
- All key mutations produce immutable audit records.
- Backup restoration is tested and documented.
- Privacy workflows work for consent, export and retention.

## Branding and licensing
The current Northfield Academy identity, metrics, names, grades and financial statements are fictional; all pricing is illustrative. Customize for each approved school's brand and curriculum. Developed as a concept by AMSYON Technologies.
