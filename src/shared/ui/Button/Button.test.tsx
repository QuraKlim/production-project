import { Button, ThemeButton } from './Button';
import { render, screen } from '@testing-library/react'

describe('Button component test', () => {
  test('Rendering button', () => {
    render(<Button>Test</Button>)
    expect(screen.getByText("Test")).toBeInTheDocument();
  })

  test('Button clear theme', () => {
    render(<Button theme={ThemeButton.CLEAR}>Test</Button>)
    expect(screen.getByText("Test")).toHaveClass('clear')
  })
})
