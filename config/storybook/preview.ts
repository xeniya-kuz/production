import { Theme } from '../../src/1app/providers/ThemeProvider/lib/ThemeContext'
import { ThemeDecorator } from '../../src/6shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { StyleDecorator } from '../../src/6shared/config/storybook/StyleDecorator/StyleDecorator'
import { type Preview } from '@storybook/react'
import { RouterDecorator } from '6shared/config/storybook/RouterDecorator/RouterDecorator'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    layout: 'fullscreen',
    tags: ['autodocs']
  },
  decorators: [ThemeDecorator(Theme.LIGHT), StyleDecorator, RouterDecorator]
}

export default preview
