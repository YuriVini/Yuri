
import { render, screen, fireEvent } from '@testing-library/react'

import TabButton from '@/app/components/TabButton'

const selectTabMock = jest.fn()

describe('TabButton', () => {
    it('render Texts and press button', () => {
      render(<TabButton active selectTab={selectTabMock}>TabButton</TabButton>)
        
      const buttonTitle = screen.getByText('TabButton')

      fireEvent.click(buttonTitle)
        
      expect(selectTabMock).toHaveBeenCalled()
    })

  })