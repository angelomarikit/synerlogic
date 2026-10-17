import approach from '../assets/visuals/approach.jpg'
import comparison from '../assets/visuals/comparison.jpg'
import consultancy from '../assets/visuals/consultancy.jpg'
import equipment from '../assets/visuals/equipment.jpg'
import friction from '../assets/visuals/friction.jpg'
import industries from '../assets/visuals/industries.jpg'
import lifecycle from '../assets/visuals/lifecycle.jpg'
import operations from '../assets/visuals/operations.jpg'
import philosophy from '../assets/visuals/philosophy.jpg'
import purpose from '../assets/visuals/purpose.jpg'
import systems from '../assets/visuals/systems.jpg'

export const visuals = {
  approach,
  comparison,
  consultancy,
  equipment,
  friction,
  industries,
  lifecycle,
  operations,
  philosophy,
  purpose,
  systems,
} as const

export const serviceVisuals = {
  'strategic-consultancy': consultancy,
  'systems-technology': systems,
  'gaming-equipment': equipment,
  'operational-support': operations,
} as const
