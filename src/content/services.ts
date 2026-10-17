export type Capability = {
  name: string
  detail: string
}

export type SupportPhase = {
  title: string
  note: string
  points: readonly string[]
}

export type Service = {
  id: string
  number: string
  title: string
  summary: string
  intro: string
  lead: string
  capabilities: readonly Capability[]
  phases?: readonly SupportPhase[]
}

export const services: readonly Service[] = [
  {
    id: 'strategic-consultancy',
    number: '01',
    title: 'Strategic Consultancy & Direction',
    summary:
      'Market entry, gaming operations optimisation, marketing and player development, regulatory guidance, and business turnaround planning.',
    intro: 'Plan with purpose and respond to evolving operating environments.',
    lead: 'Turning complex challenges into clear opportunities through strategic insight and industry expertise.',
    capabilities: [
      {
        name: 'Market entry and expansion strategies',
        detail: 'Identifying opportunities and developing sustainable growth plans.',
      },
      {
        name: 'Gaming operations optimisation',
        detail: 'Improving efficiency, profitability, and operational performance.',
      },
      {
        name: 'Marketing and player development advisory',
        detail: 'Data-driven strategies to attract, engage, and retain players.',
      },
      {
        name: 'Regulatory and compliance guidance',
        detail: 'Navigating complex regulatory landscapes with the operating context in view.',
      },
      {
        name: 'Business restructuring and performance turnaround',
        detail: 'Stabilising operations and unlocking long-term value.',
      },
    ],
  },
  {
    id: 'systems-technology',
    number: '02',
    title: 'Systems & Technology Solutions',
    summary:
      'Digital transformation advisory, analytics and reporting, player tracking and CRM, systems audits, and casino management system integration.',
    intro: 'Connect technology decisions with business outcomes.',
    lead: 'Leveraging technology to create unified, efficient, and scalable operations across the gaming and entertainment ecosystem.',
    capabilities: [
      {
        name: 'Digital transformation advisory',
        detail: 'Modernising operations through technology, data, and innovation.',
      },
      {
        name: 'Data analytics and reporting frameworks',
        detail: 'Transforming tracking into executive insight.',
      },
      {
        name: 'Player tracking and customer relationship management solutions',
        detail: 'Connecting the floor to the customer.',
      },
      {
        name: 'Systems audit and enhancement',
        detail: 'Optimising systems for reliability and growth.',
      },
      {
        name: 'Casino management systems integration',
        detail: 'Supporting the core operational heartbeat of the venue.',
      },
    ],
  },
  {
    id: 'gaming-equipment',
    number: '03',
    title: 'Gaming Equipment & Supply',
    summary:
      'Vendor coordination, procurement support, gaming machines and equipment sourcing, table game setup and optimisation, and maintenance planning.',
    intro: 'Support the selection, provision, coordination, and life cycle of key gaming assets.',
    lead: 'End-to-end support in sourcing, supplying, and maintaining gaming equipment for operations.',
    capabilities: [
      {
        name: 'Vendor coordination and procurement management',
        detail: 'Sourcing the right assets from suppliers aligned to the operation.',
      },
      {
        name: 'Sourcing and provision of gaming machines and equipment',
        detail: 'Delivery and placement based on operational needs.',
      },
      {
        name: 'Table games setup and optimisation',
        detail: 'Floor configuration designed for performance and player experience.',
      },
      {
        name: 'Preventive maintenance and lifecycle support',
        detail: 'Protecting the investment and supporting uptime.',
      },
    ],
  },
  {
    id: 'operational-support',
    number: '04',
    title: 'Operational Support Services',
    summary:
      'Pre-opening readiness, standard operating procedures, staff development, performance monitoring and audit.',
    intro: 'Translate plans into consistent daily operation.',
    lead: 'From preparation to performance, operational support keeps the business running smoothly, efficiently, and sustainably.',
    capabilities: [
      {
        name: 'Pre-opening and project management',
        detail: 'Laying the groundwork before doors open.',
      },
      {
        name: 'Standard operating procedures (SOP) design',
        detail: 'Engineering the rules of engagement.',
      },
      {
        name: 'Staff training and development',
        detail: 'Equipping the workforce for the operating model.',
      },
      {
        name: 'Ongoing performance monitoring and audit',
        detail: 'Checking that daily reality stays aligned with the blueprint.',
      },
    ],
    phases: [
      {
        title: 'Pre-launch',
        note: 'Build the foundation.',
        points: [
          'Project planning and timeline',
          'Site readiness and coordination',
          'Resource and vendor management',
          'Risk assessment and mitigation',
        ],
      },
      {
        title: 'Framework',
        note: 'Establish the framework.',
        points: [
          'SOP creation and documentation',
          'Operational workflow design',
          'Process standardisation',
          'Compliance and quality controls',
        ],
      },
      {
        title: 'People',
        note: 'Empower the people.',
        points: [
          'Role-based training programs',
          'Operational system training',
          'Performance coaching',
          'Change management support',
        ],
      },
      {
        title: 'Ongoing',
        note: 'Sustain and improve.',
        points: [
          'Operations performance tracking',
          'System and process audit',
          'Continuous improvement support',
          'Reporting and insights',
        ],
      },
    ],
  },
]
