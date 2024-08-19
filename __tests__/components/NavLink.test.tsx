import { render, screen } from '@testing-library/react'

import NavLink from '@/app/components/NavLink'

describe('NavLink', () => {
    it('render Texts', () => {
      render(<NavLink href='#about' title='About'/>)
   
      const navLinkTitle = screen.getAllByText('About')
   
      expect(navLinkTitle).toBeTruthy()
    })
  })