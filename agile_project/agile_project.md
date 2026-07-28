# EcoTrack – Agile Project Overview and Plan

**EcoTrack** is a mobile app that helps individuals measure, understand, and reduce their personal carbon footprint through daily habit tracking, actionable tips, and goal setting. This document provides a complete Agile project overview and release plan for bringing EcoTrack to market.

---

## 1. Project Overview

### Vision Statement
*For environmentally conscious individuals who want to live more sustainably, EcoTrack is a mobile application that makes carbon footprint tracking effortless and motivating. Unlike generic sustainability apps, EcoTrack automatically estimates emissions from daily activities, delivers personalized reduction challenges, and shows tangible impact over time, empowering users to transform eco-anxiety into measurable action.*

### Core Goals (MVP)
- Enable users to log daily activities (transport, diet, energy use) with minimal effort.
- Automatically calculate a real-time personal carbon footprint.
- Provide a library of science-backed, bite-sized reduction tips.
- Allow users to set weekly reduction targets and track progress visually.
- Deliver a simple, clean, and engaging user experience.

### Target Users
- Eco-conscious millennials and Gen Z (primary)
- Families looking to lower household emissions
- Early adopters of sustainability tech

### Success Metrics (MVP Launch)
- 10,000 downloads in the first 3 months
- 40% weekly active user rate
- Average user reduces estimated footprint by 5% within 4 weeks
- App Store rating ≥ 4.5

---

## 2. Agile Framework & Team

**Framework:** Scrum  
**Sprint Length:** 2 weeks  
**Estimated MVP Timeline:** 12 weeks (6 sprints)

### Roles
| Role | Responsibilities |
|------|------------------|
| **Product Owner** | Defines vision, manages Product Backlog, prioritizes user stories, accepts/rejects increments. |
| **Scrum Master** | Facilitates Scrum events, removes impediments, coaches team on Agile practices, fosters continuous improvement. |
| **Development Team** | 5 members: 2 Mobile Devs (React Native), 1 Backend Dev, 1 UX/UI Designer, 1 QA Engineer. Cross-functional, self-organizing. |

---

## 3. Product Backlog (Initial – Prioritized)

User stories are estimated in story points (SP) using a modified Fibonacci scale (1,2,3,5,8,13). Priority is driven by value, dependencies, and risk.

### Epic 1: User Onboarding & Profile (MVP Core)
- US-01: As a new user, I want to sign up with email or social login so I can access the app securely. (5 SP)
- US-02: As a user, I want to complete a short lifestyle questionnaire so the app can baseline my footprint. (8 SP)
- US-03: As a user, I want to edit my profile details (diet, household size, car type) so my footprint stays accurate. (3 SP)

### Epic 2: Daily Activity Logging (MVP Core)
- US-04: As a user, I want to quickly log a transport trip (car, bus, bike, walk) with one tap so logging takes <10 seconds. (8 SP)
- US-05: As a user, I want to log my meals by selecting category (vegan, vegetarian, meat-heavy) so my dietary emissions are captured. (5 SP)
- US-06: As a user, I want to see a daily summary of my logged emissions with a visual gauge so I understand my impact at a glance. (5 SP)

### Epic 3: Footprint Calculation & Insights (MVP Core)
- US-07: As a user, I want to view my weekly/monthly carbon footprint trend charts so I can track my progress. (13 SP)
- US-08: As a user, I want the app to break down my footprint by category (transport, food, home) so I know where I can improve. (5 SP)

### Epic 4: Tips & Challenges (MVP Differentiator)
- US-09: As a user, I want to receive a daily, personalized reduction tip based on my habits so I can learn new ways to cut emissions. (8 SP)
- US-10: As a user, I want to join weekly challenges (e.g., “Meatless Monday”) and see my potential CO₂ savings so I stay motivated. (5 SP)

### Epic 5: Goal Setting & Progress (MVP Delight)
- US-11: As a user, I want to set a monthly reduction target (e.g., -10%) and see a progress ring fill up so I feel accomplished. (5 SP)
- US-12: As a user, I want to receive a congratulatory notification when I hit my goal so I stay engaged. (3 SP)

### Epic 6: Non-Functional & Infrastructure (Throughout MVP)
- US-13: As a user, I want my data synced securely to the cloud so I never lose my history. (8 SP)
- US-14: As a product owner, I want basic analytics events instrumented so we can measure engagement. (5 SP)
- US-15: As a user, I want the app to launch in under 2 seconds and feel responsive. (Technical story, 5 SP)

**Initial Backlog Size:** ~90 story points (MVP scope). Beyond-MVP stories (community features, barcode scanning for products, integration with smart meters) are kept in the backlog for future releases.

---

## 4. Release Plan

**MVP (V1.0) – “Track & Reduce”** – 6 Sprints (12 weeks)  
Goal: Deliver a fully functional personal carbon tracker with logging, insights, tips, and goals. Launch on iOS and Android.

| Sprint | Focus Area | Key Stories | Expected Velocity |
|--------|------------|-------------|-------------------|
| 1 | Foundation & Onboarding | US-01, US-02, US-13 (partial), app scaffolding | 20 SP |
| 2 | Core Logging (Transport & Diet) | US-04, US-05, US-03 | 18 SP |
| 3 | Daily Impact Visualization | US-06, US-07 (chart framework), US-08 | 20 SP |
| 4 | Tips & Motivation Engine | US-09, US-10, US-12 | 16 SP |
| 5 | Goal System & Polish | US-11, US-14, US-15, UI refinement | 18 SP |
| 6 | Hardening, Testing, Store Submission | Bug fixing, performance, final QA, App Store/Play Store prep | Remaining capacity |

**Post-MVP (V1.1+):** Social sharing, advanced analytics, partner integrations, carbon offset marketplace.

---

## 5. Sprint Plan Example – Sprint 1

**Sprint Goal:** *Establish the app skeleton, authentication, and onboarding flow so a user can create an account and receive a baseline footprint estimate.*  
**Capacity:** 20 story points (team velocity estimate based on historical data)  
**Selected Backlog Items:**

- US-01: Email & social sign-up (5 SP)
- US-02: Lifestyle questionnaire with footprint baseline calculation (8 SP)
- Set up CI/CD pipeline and cloud database schema (part of US-13, 3 SP)
- Technical spike: Evaluate third-party emission factor APIs (timeboxed to 2 SP)
- Create reusable UI component library (design/development collaboration, 2 SP) – *Infrastructure story*

**Sprint Ceremonies Timings (2-Week Sprint):**
- Sprint Planning: 4 hours (first half: what, second half: how)
- Daily Scrum: 15 minutes, every day at 9:30 AM
- Sprint Review: 1 hour, last day of sprint
- Sprint Retrospective: 1.5 hours, after review

---

## 6. Key Agile Ceremonies & Artifacts

| Artifact/Ceremony | Purpose | Frequency |
|-------------------|---------|-----------|
| **Product Backlog** | Single source of truth for all desired work, continuously refined by PO. | Ongoing (Backlog Refinement weekly, 1 hour) |
| **Sprint Backlog** | Real-time plan of stories, tasks, and the Sprint Goal. Owned by Developers. | Created during Sprint Planning |
| **Increment** | A potentially shippable product version that meets the Definition of Done. | Every Sprint |
| **Sprint Review** | Stakeholders inspect the Increment, provide feedback, PO adapts the backlog. | End of each Sprint |
| **Sprint Retrospective** | Team inspects how they worked and creates improvement actions. | End of each Sprint |
| **Burndown Chart** | Visual representation of work remaining vs. time. Updated daily. | Throughout Sprint |

---

## 7. Definition of Done (DoD)

A Product Backlog Item is “Done” when:
- Code is peer-reviewed and merged into the main branch.
- Unit and integration tests pass (coverage ≥ 80% for new code).
- Feature passes QA on both iOS and Android physical devices (or simulators for MVP).
- Acceptance criteria met and verified by Product Owner.
- UI matches the approved design and is responsive.
- No critical or high-severity bugs are open.
- Analytics events and error logging are implemented.
- User documentation (in-app tooltips/FAQs) updated if needed.

---

## 8. Risk & Mitigation

| Risk | Impact | Probability | Mitigation |
|------|--------|-------------|------------|
| Inaccurate emission factors damage credibility | High | Medium | Source data from reputable APIs (e.g., CarbonInterface) and display “± estimate” labels. Validate with environmental scientists during Sprint 0. |
| Low user retention after initial curiosity | High | Medium | Build engaging challenges early (Sprint 4), A/B test notification frequency, track DAU/MAU from day one. |
| API dependency delays or cost overruns | Medium | Low | Abstract emission calculation behind an interface; create a static fallback dataset for MVP if needed. |
| Team velocity overestimated (new team) | Medium | High | Use conservative initial velocity (20 SP). Include a buffer and limit WIP. Re-estimate after 2 sprints. |

---

*This Agile plan ensures that EcoTrack delivers real value every two weeks, adapts to user feedback, and reaches the market with a focused, high-quality MVP that solves a genuine environmental problem.*
