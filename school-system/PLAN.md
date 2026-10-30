# AMSYON EduCore — Master Product Blueprint
Version: 1.0 · 30 October 2026
Status: Product concept and interactive static demonstration. Not production-ready.

## Product vision
AMSYON EduCore is a configurable multi-school School Information System (SIS) and Learning Management System (LMS) for Indian schools. One authoritative student record connects four access-controlled workspaces: Administration, Teacher, Student, Parent. A public school website supports admissions and communication. The goal is simple daily workflows, not disconnected dashboards.

## Experience principles
- Elegant navy, warm white and restrained gold. Clear typography, strong hierarchy, mobile-first layouts.
- Role-oriented navigation rather than an enormous menu. Overview pages highlight pending work, exceptions and next actions.
- Every operation has a clear origin, owner, status and outcome.
- One student record, one current enrolment status, one authorised class assignment. No duplicate records across portals.
- Former students exit active registers, but their history is retained or deleted based on an approved retention policy.
- No real minors' information in public static demonstrations.

## Administration workspace
Navigation: Overview, Admissions, Students, Leavers & Alumni, Classes & Timetables, Staff, Academics, Attendance & Leave, Finance, Communications, Reports, Settings & Audit.
- Dashboard: pending admission reviews, fees due, unmarked class registers, unapproved examination results, exceptions.
- Student record: unique ID, admission details, class/section, verified guardian links, attendance, assessments, fees, supporting documents, historical events, exit history.
- Admissions: applicant -> review -> document verification -> decision -> student profile -> class assignment -> family account activation.
- Lifecycle: admitted -> active -> transferred/withdrawn/graduated. Mandatory reason, effective date and approver. Keep an audit trail.
- Admin controls: user invitations, delegated privileges, approvals, academic year configuration, fee schedules and financial reconciliation.
- Multi-school and multi-campus scope must enforce tenant isolation server-side.

## Teacher workspace
Navigation: Today, My Classes, Attendance, Lessons, Homework, Submissions, Gradebook, Communications.
- First view: next class, attendance to take, homework to review, assessments to mark.
- Teachers can see only assigned classes and permitted subjects.
- Attendance writes once and becomes visible to authorised guardians.
- Homework creation publishes to enrolled students, with due date, resources, secure submission, marking and feedback.
- Marks require validation and approval before publication.

## Student workspace
Navigation: My Day, Courses, Timetable, Homework, My Submissions, Results, School Notices.
- Today shows lessons and next deadlines.
- Assignment upload and feedback securely stored with history.
- Results only published after institutional approval.

## Parent workspace
Navigation: My Children, Attendance, Learning, Results, Fees & Receipts, Leave Requests, Messages.
- Guardian sees only verified linked children.
- Parent alerts use the same attendance event the teacher recorded.
- Fee status derives from verified payment reconciliation; do not assume successful payment from a client-side event.
- Support multiple children in one account and accessible mobile experience.

## Connected workflows
1. Admission approved -> unique student ID -> active enrolment -> class register -> guardian invitation -> assigned fee schedule.
2. Student transferred -> authorisation and reason -> no longer in class register -> retained historical reports with policy controls.
3. Teacher publishes homework -> enrolled students get a task -> guardians see deadline -> submission -> teacher feedback.
4. Teacher records attendance -> authorised guardian sees status and optional alert.
5. Approved grades -> published report cards -> student and guardian visibility.
6. Payment gateway webhook verified -> ledger updated -> receipt issued -> parent and finance portals reflect reconciled status.

## Delivery roadmap
Phase 1: Stakeholder interviews, workflow maps, schema, school-specific requirements.
Phase 2: Auth/MFA, roles, data isolation, PostgreSQL, encrypted documents, audit log and backup/restore.
Phase 3: Student lifecycle, classes, guardian linking and daily attendance.
Phase 4: Lessons, homework, submissions, grades and reports.
Phase 5: Fees, invoices, gateway integration, reconciliation and receipts.
Phase 6: Admissions portal, communications, notifications, library, transport, analytics and mobile experience.
Phase 7: Accessibility, security testing, privacy and legal review, UAT, rollout, SLAs and maintenance.

## Reference architecture
Frontend: modern accessible responsive web application.
Backend: maintained authenticated API with server-side authorisation and idempotent workflows.
Database: PostgreSQL with clearly modelled school tenancy, academic year, enrolment, guardian relationship, attendance, assignments, submissions, grade approval and ledger events.
Assets: encrypted private object storage, signed downloads, malware scanning.
Observability: metrics, structured audit logs, backups, restore tests, error alerts.
Delivery: private source repository, CI testing, staged environment, approvals and rollback.
Review legal and privacy requirements applicable to each deployment, including children's data and relevant Indian data protection obligations, with appropriate experts.

## Data model
School, Campus, AcademicYear, ClassSection, Subject, Staff, Role, User, Guardian, Student, GuardianStudentLink, AdmissionApplication, Enrollment, EnrollmentEvent, AttendanceSession, AttendanceRecord, Assignment, Submission, Assessment, Grade, GradePublicationApproval, Invoice, Payment, PaymentEvent, Message, Notice, AuditEvent.

## Acceptance criteria
- New admissions never create duplicate live enrolments.
- A transferred learner vanishes from current classroom lists but retains properly governed history.
- A teacher cannot inspect another class.
- A guardian cannot view unrelated learners.
- Real payments cannot be forged through browser state.
- Every status change has an accountable actor, time, before/after and reason.
- Full backup and restore is demonstrated.
- Results are invisible until approved.
- No production personal data is exposed through public GitHub Pages.

## GitHub prototype scope
The HTML file in this directory is a sales concept with fictional, ephemeral, in-browser state. The access password screen is not secure authentication and does not protect public HTML. A secure, production-grade implementation remains separate work. Do not deploy with real student, guardian, teacher or financial data.

## Product ownership
Concept developed for AMSYON Technologies. Branding, pricing, operational details, curriculum and legal policy to be configured per actual school engagement.
