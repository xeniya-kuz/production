import { ThemeProvider } from '@/1app/providers/ThemeProvider'
import { type Theme } from '@/6shared/const/themes'
import { type StoryFn } from '@storybook/react'

export const ThemeDecorator = (theme: Theme) =>
  function ThemeDecorator (StoryComponent: StoryFn) {
    return (
    // initialTheme для тестирования
        <ThemeProvider initialTheme={theme}>
            <div className={`app ${theme}`}>
                <StoryComponent/>
            </div>
        </ThemeProvider>
    )
  }
