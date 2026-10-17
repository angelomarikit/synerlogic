import { services } from './services'

export const company = {
  name: 'Synerlogic Global Solutions Corporation',
  shortName: 'Synerlogic Global Solutions',
  tagline: 'Precision. Partnership. Performance.',
  location: 'Makati City, National Capital Region, Philippines',
  locality: 'Makati City',
  region: 'NCR',
  country: 'PH',
} as const

export const nav = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services', children: services },
  { label: 'Solutions', to: '/solutions' },
  { label: 'Our Approach', to: '/approach' },
  { label: 'Industries', to: '/industries' },
] as const

export const seo = {
  home: {
    path: '/',
    title: 'Synerlogic Global Solutions | Gaming Operations & Technology',
    description:
      "Explore Synerlogic Global Solutions' integrated approach to gaming operations, strategic consultancy, technology, equipment and operational support.",
  },
  about: {
    path: '/about',
    title: 'About Us | Synerlogic Global Solutions',
    description:
      'Synerlogic Global Solutions Corporation is a Makati City business focused on strategic thinking, systems, equipment coordination, and operational support.',
  },
  services: {
    path: '/services',
    title: 'Services | Synerlogic Global Solutions',
    description:
      'Strategic consultancy, systems and technology, gaming equipment and supply, and operational support for gaming and entertainment organisations.',
  },
  solutions: {
    path: '/solutions',
    title: 'Solutions | Synerlogic Global Solutions',
    description:
      'Connected workstreams across validate, build, launch, and sustain. Illustrative examples only — not completed client projects.',
  },
  approach: {
    path: '/approach',
    title: 'Our Approach | Synerlogic Global Solutions',
    description:
      'Assess, design, implement, and optimise, with operational phases for pre-launch, framework, people, and ongoing support.',
  },
  industries: {
    path: '/industries',
    title: 'Industries | Synerlogic Global Solutions',
    description:
      'Integrated resorts, standalone gaming venues, online platforms, investors, and hospitality groups, each shaped by the client operating model.',
  },
  contact: {
    path: '/contact',
    title: 'Contact | Synerlogic Global Solutions',
    description:
      'Tell Synerlogic about your business, operational priorities, or proposed project. Based in Makati City, National Capital Region, Philippines.',
  },
  privacy: {
    path: '/privacy',
    title: 'Privacy notice | Synerlogic Global Solutions',
    description:
      'A formal privacy notice, retention owner, and inquiry recipient have not yet been approved for Synerlogic Global Solutions Corporation.',
  },
  notFound: {
    path: '',
    title: 'Page not found | Synerlogic Global Solutions',
    description: 'The address does not match a page on the Synerlogic Global Solutions website.',
  },
} as const

export const home = {
  eyebrow: 'SYNERLOGIC GLOBAL SOLUTIONS CORPORATION',
  headline: company.tagline,
  subheadline:
    'Bridging high-level strategy and on-the-ground execution across gaming and entertainment operations.',
  supporting:
    'We connect strategic advisory, technology, equipment and operational support to turn complex business challenges into practical, measurable action.',
  primaryCta: 'Discuss Your Project',
  secondaryCta: 'Explore Our Services',
  introKicker: 'From strategy to execution',
  introHeadline: 'We do not just advise. We execute, implement and optimise.',
  introBody:
    'The real challenge is not simply developing a strategy - it is making it work in the real world. Synerlogic helps organisations bridge the gap between strategic intent and daily operational reality through integrated, execution-focused solutions.',
  pillarsHeading: 'Four service pillars',
  processHeading: 'Assess. Design. Implement. Optimise.',
  processBody:
    'Every engagement begins with understanding the business, then designing tailored solutions, implementing with discipline, and refining performance over time.',
  industriesHeading: 'Industries',
  industriesBody:
    'Synerlogic adapts its integrated approach to the distinct commercial, technical and operating needs of different types of organisations.',
  closingHeadline: 'Build for operational excellence.',
  closingBody: 'Explore a more connected approach to strategy, technology and execution.',
  closingCta: 'Start a Conversation',
} as const

export const processSteps = [
  { index: '01', title: 'Assess', body: 'Understand the business, operating environment, challenges, dependencies and opportunities.' },
  { index: '02', title: 'Design', body: 'Develop a tailored, data-informed blueprint that aligns stakeholders, systems, assets and operational priorities.' },
  { index: '03', title: 'Implement', body: 'Coordinate delivery and move from planning to action with clear workflows, technical integration and operational discipline.' },
  { index: '04', title: 'Optimise', body: 'Monitor performance, review gaps and continuously improve processes, assets and systems.' },
] as const

export const homeProcess = [
  { index: '01', title: 'Assess' },
  { index: '02', title: 'Design' },
  { index: '03', title: 'Implement' },
  { index: '04', title: 'Optimise' },
] as const

export const about = {
  heading: 'About Us',
  introduction:
    'Synerlogic Global Solutions Corporation is a Makati City-based business focused on practical solutions for the gaming and entertainment industry. Its approach combines strategic thinking, systems and technology, equipment coordination, and hands-on operational support.',
  philosophyHeading: 'Synergy meets logic',
  logicTitle: 'Logic',
  logicBody: 'LOGIC is the blueprint - strategic insight and data-driven design.',
  synergyTitle: 'Synergy',
  synergyBody: 'SYNERGY is the reality - operational support and tangible implementation.',
  philosophyClose: 'Together they help turn ideas into actionable, results-focused solutions.',
  philosophyNote:
    'We combine strategic thinking with practical execution, so every solution is innovative, actionable, and results-driven.',
  missionHeading: 'Mission and vision',
  visionLabel: 'Vision',
  vision:
    'To be a trusted partner in elevating gaming and entertainment operations through intelligent solutions, innovation, and seamless execution.',
  missionLabel: 'Mission',
  mission:
    'To empower clients with strategic insight, reliable systems, and high-quality solutions that enhance efficiency, compliance, and profitability.',
  positioning: 'More than a service provider. A long-term partner in operational excellence.',
  purposeNote:
    'Synerlogic Global Solutions is committed to delivering measurable value, operational excellence, and strategic growth.',
  whyHeading: 'Why Synerlogic',
  why: [
    'A joined-up approach from planning to real-world execution.',
    'Operational awareness across strategy, systems, equipment and people.',
    'Business-focused implementation and ongoing optimisation.',
    'Solutions customised to the client’s operating model and objectives.',
  ],
} as const

export const servicesPage = {
  heading: 'Integrated expertise for complex operations.',
  intro:
    'Four connected pillars help gaming and entertainment organisations move from strategic opportunity to dependable operational performance.',
  capabilitiesLabel: 'Capabilities',
  cta: "Let's discuss the right combination for your operation.",
} as const

export const lifecycle = [
  { index: '01', title: 'Validate', body: 'Examine opportunity, requirements, constraints and operating readiness.' },
  { index: '02', title: 'Build', body: 'Prepare the operational blueprint, procure or align equipment, and integrate supporting systems.' },
  { index: '03', title: 'Launch', body: 'Execute operations, deploy workflows, train staff and align day-to-day systems.' },
  { index: '04', title: 'Sustain', body: 'Monitor results, audit systems, maintain assets and refine the business model.' },
] as const

export const solutionExamples = [
  {
    title: 'New market entry',
    body: 'Strategy, licensing considerations, operating plans and technology requirements.',
  },
  {
    title: 'New venue readiness',
    body: 'Equipment coordination, SOP development, staffing and system integration.',
  },
  {
    title: 'Existing operation improvement',
    body: 'Analytics, player development, technology enhancement and performance reviews.',
  },
] as const

export const solutionsPage = {
  heading: 'Connected solutions across the venue lifecycle.',
  intro:
    'Synerlogic brings the right disciplines together - not as isolated recommendations, but as coordinated workstreams to support preparation, launch and sustainable operational improvement.',
  journeyHeading: 'The four-stage engagement journey',
  journeyNote: 'A unified client journey from strategy to sustained success.',
  examplesHeading: 'Integrated capability examples',
  exampleLabel: 'Illustrative example',
  note: 'These are illustrative solution combinations grounded in the client overview - not claimed completed projects, case studies or guaranteed outcomes.',
} as const

export const operatingPhases = [
  { index: '01', title: 'Pre-launch', body: 'Pre-opening and project management.' },
  { index: '02', title: 'Framework', body: 'SOP and operating design.' },
  { index: '03', title: 'People', body: 'Staff training and development.' },
  { index: '04', title: 'Ongoing', body: 'Monitoring, performance evaluation and audit.' },
] as const

export const approachPage = {
  heading: 'From insight to implementation - and continuous improvement.',
  intro:
    'Precision-led execution helps organisations deliver lasting operational progress through a practical, repeatable process.',
  phasesHeading: 'Operational project phases',
  differentiation:
    'Traditional advisory often ends with recommendations. Synerlogic positions its approach around coordinated implementation - connecting strategy, technology integration, procurement and operational support.',
  visualHeading: 'Precision-led execution drives sustainable compounding growth.',
  visualBody:
    'We turn strategy into measurable results through a disciplined, end-to-end approach, combining expertise, technology, and operational excellence.',
} as const

export const friction = {
  heading: 'The friction in gaming operations lies between advisory and implementation.',
  intentLabel: 'Strategic Intent',
  intent: 'Growth goals, compliance targets, and market entry plans.',
  realityLabel: 'Operational Reality',
  reality: 'Daily floor management, vendor coordination, and staff execution.',
  points: [
    {
      title: 'Margin Erosion',
      body: 'Disjointed systems and inefficient standard operating procedures (SOPs).',
    },
    {
      title: 'Compliance Risk',
      body: 'Theoretical regulatory frameworks that fail in practical application.',
    },
    {
      title: 'Stalled Timelines',
      body: 'Disconnects between procurement, technical integration, and staff readiness.',
    },
  ],
} as const

export const comparison = {
  heading: 'The Synerlogic advantage: advisory versus integrated solutions',
  traditional: 'Traditional Consultancy',
  synerlogic: 'The Synerlogic Approach',
  rows: [
    {
      category: 'Industry Expertise',
      traditional: 'Theoretical knowledge',
      synerlogic: 'Experience applied across gaming operations, marketing, and compliance guidance.',
    },
    {
      category: 'Solution Delivery',
      traditional: 'Leaves a PDF report',
      synerlogic: 'End-to-end operational execution',
    },
    {
      category: 'Technology Integration',
      traditional: 'Recommends software',
      synerlogic: 'Casino management systems integration and systems audit',
    },
    {
      category: 'Procurement',
      traditional: 'Hands-off',
      synerlogic: 'Vendor coordination, equipment sourcing, and lifecycle support',
    },
    {
      category: 'Regulatory Alignment',
      traditional: 'High-level guidance',
      synerlogic: 'Operational compliance frameworks connected to daily execution',
    },
  ],
} as const

export const industries = [
  { id: 'integrated-resorts', title: 'Integrated resort and casino operators' },
  { id: 'standalone-venues', title: 'Standalone gaming venues' },
  { id: 'online-platforms', title: 'Online gaming platforms' },
  { id: 'investors', title: 'Gaming investors and stakeholders' },
  { id: 'hospitality', title: 'Hospitality and entertainment groups' },
  { id: 'hardware-dealers', title: 'Gaming hardware and system dealers' },
] as const

export const industriesPage = {
  heading: 'Tailored to the gaming and entertainment landscape.',
  intro:
    'Synerlogic adapts its integrated approach to the distinct commercial, technical and operating needs of different types of organisations. From integrated resorts to standalone venues, each solution is tailored to the client’s business goals.',
  cardBody:
    'Each engagement is shaped by the client’s business model, goals and operational requirements.',
} as const

export const inquiryTypes = [
  'Strategic Consultancy',
  'Systems & Technology',
  'Gaming Equipment & Supply',
  'Operational Support',
  'General Inquiry',
] as const

export const contactPage = {
  heading: "Let's turn your next challenge into a plan.",
  supporting:
    'Tell us about your business, operational priorities or proposed project. Our team can explore how strategy, technology and execution may work together for your organisation.',
  labels: {
    name: 'Full Name',
    email: 'Business Email',
    company: 'Company / Organisation',
    inquiryType: 'Inquiry Type',
    message: 'Message',
    consent: 'Consent',
    submit: 'Send Inquiry',
  },
  consentText:
    'I consent to Synerlogic Global Solutions Corporation reviewing this inquiry so the team can respond to my request. A formal privacy notice has not yet been approved.',
  inquiryPlaceholder: 'Select an inquiry type',
  success: 'Thank you for your inquiry. Your message has been received.',
  unconfigured:
    'Inquiry delivery is not configured yet. This form will send messages only after a verified recipient endpoint is connected.',
  failed: 'The inquiry could not be delivered. No message was confirmed as received.',
  sending: 'Sending inquiry',
  another: 'Write another inquiry',
} as const

export const privacyPage = {
  heading: 'Privacy notice',
  status:
    'A formal privacy notice, retention owner, and inquiry recipient have not yet been approved for Synerlogic Global Solutions Corporation. This page records that status. It is not a legal policy.',
  points: [
    'The contact form does not deliver messages unless a verified endpoint is configured and confirms receipt.',
    'This website does not publish a phone number, email address, or street address.',
    'Do not submit sensitive personal information through the form.',
  ],
} as const

export const notFoundPage = {
  heading: 'This page is not available.',
  body: 'The address does not match a page on this site.',
  cta: 'Back to home',
} as const

export const closingCta = {
  heading: contactPage.heading,
  cta: home.primaryCta,
} as const
