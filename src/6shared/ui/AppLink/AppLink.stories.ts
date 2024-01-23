import type { Meta, StoryObj } from '@storybook/react'
import { Theme } from '1app/providers/ThemeProvider'
import { ThemeDecorator } from '6shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { AppLink, AppLinkTheme } from './AppLink'

const meta = {
  title: 'shared/AppLink',
  component: AppLink,
  tags: ['autodocs'],
  args: { to: '/', children: 'Text' }

} satisfies Meta<typeof AppLink>

export default meta
type Story = StoryObj<typeof meta>

export const PrimaryLight: Story = {
  args: {
    theme: AppLinkTheme.PRIMARY
  }
}

export const SecondaryLight: Story = {
  args: {
    theme: AppLinkTheme.SECONDARY
  }
}

export const PrimaryDark: Story = {
  args: {
    theme: AppLinkTheme.PRIMARY
  },
  decorators: [ThemeDecorator(Theme.DARK)]
}

export const SecondaryDark: Story = {
  args: {
    theme: AppLinkTheme.SECONDARY
  },
  decorators: [ThemeDecorator(Theme.DARK)]
}
