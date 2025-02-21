import { type ReactNode } from 'react'

export interface DrawerProps {
  className?: string
  children: ReactNode
  isOpen: boolean
  onClose: () => void
}
