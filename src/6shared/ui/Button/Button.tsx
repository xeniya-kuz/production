import { classNames } from '6shared/lib/classNames/classNames'
import styles from './Button.module.scss'
import { type ButtonHTMLAttributes, type FC } from 'react'

export enum ThemeButton {
  CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  theme: ThemeButton
}

export const Button: FC<ButtonProps> = (props) => {
  const { className, children, theme, ...otherProps } = props
  return (
      <button
      className={classNames(styles.button, [className, styles[theme]])}
      {...otherProps}
    >
          {children}
      </button>
  )
}
