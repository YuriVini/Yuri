import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import Footer from '@/app/components/Footer'

describe('Footer', () => {
    it('render Texts', () => {
      render(<Footer />)
   
      const footerTitle = screen.getAllByText('Yuri.io')
      const footerCopyrights = screen.getAllByText('All rights reserved.')
   
      expect(footerTitle).toBeTruthy()
      expect(footerCopyrights).toBeTruthy()
    })
  })