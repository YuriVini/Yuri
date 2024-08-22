import { render, screen } from '@testing-library/react'

import MenuOverlay from '@/app/components/MenuOverlay'

const navLinks = [
    {
      title: 'About',
      path: '#about',
    },
]

describe('MenuOverlay', () => {
    it('render Texts', () => {
        render(<MenuOverlay links={navLinks} />)

        const menuOverlayTitle = screen.getAllByText('About')

        expect(menuOverlayTitle).toBeTruthy()
    })
})