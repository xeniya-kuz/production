import { Theme } from '@/6shared/const/themes'
import { ThemeDecorator } from '@/6shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { articleMock } from '../../../../model/const/mocks'
import type { Meta, StoryObj } from '@storybook/react'
import { ListView } from './ListView'

const meta = {
  title: 'entities/Article/ListView',
  component: ListView,

  parameters: {
    layout: 'fullscreen'
  },
  tags: ['autodocs'],
  args: {
    article: articleMock,
    // types: <Text text={`${ArticleType.IT}, ${ArticleType.ECONOMICS}`} />,
    // views: <Text text={'1042'}/>,
    index: 0
  }

} satisfies Meta<typeof ListView>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {}

export const DarkList: Story = {
  decorators: [ThemeDecorator(Theme.DARK)]
}
