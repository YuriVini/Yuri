import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import ConditionalRender from '@/app/components/ConditionalRender'

describe('ConditionalRender', () => {
    it('render Texts', () => {
      render(<ConditionalRender condition><p>Hey</p></ConditionalRender>)
   
      const renderChildren = screen.getAllByText('Hey')
   
      expect(renderChildren).toBeTruthy()
    })

  })