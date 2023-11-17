import { fireEvent, render, screen } from '@testing-library/react'
import { Sidebar } from './Sidebar';
import { withTranslation } from 'react-i18next';
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTraslation';

describe('Sidebar component test', () => {
  test('Rendering button', () => {
    renderWithTranslation(<Sidebar />)
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  })

  test('Toggle sidebar', () => {
    renderWithTranslation(<Sidebar />)
    const toggleButton = screen.getByTestId("sidebar-toggle")
    expect(screen.getByTestId("sidebar-toggle")).toBeInTheDocument()
    fireEvent.click(toggleButton)
    expect(screen.getByTestId("sidebar")).toHaveClass('collapsed')
  })
})