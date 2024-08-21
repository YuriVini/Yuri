
import { render, screen, fireEvent } from '@testing-library/react'

import ProjectTag from '@/app/components/ProjectTag'

const onClickMock = jest.fn()

describe('ProjectTag', () => {
    it('render Texts and press button', () => {
      render(<ProjectTag isSelected name='Test' onClick={onClickMock} />)
        
      const buttonTitle = screen.getByText('Test')

      fireEvent.click(buttonTitle)
        
      expect(onClickMock).toHaveBeenCalled()
    })

    it('render Texts but no selected', () => {
      render(<ProjectTag isSelected={false} name='Test' onClick={onClickMock}/>)
        
      const buttonTitle = screen.getByText('Test')

      fireEvent.click(buttonTitle)
        
      expect(onClickMock).toHaveBeenCalled()
    })
  })