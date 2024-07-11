import {fireEvent, screen} from '@testing-library/react'
import {SideBar} from 'widgets/sideBar'
import {renderWithTranslation} from 'shared/lib'

describe('SideBar tests', () => {
    test('check sidebar render', () => {
        renderWithTranslation(<SideBar/>)
        expect(screen.getByTestId('sideBar')).toBeInTheDocument()
    })

    test('toggle sidebar', () => {
        renderWithTranslation(<SideBar/>)
        const toggleBtn = screen.getByTestId('sideBar-toggle')

        fireEvent.click(toggleBtn)
        expect(screen.getByTestId('sideBar')).toHaveClass('collapsed')
    })
})