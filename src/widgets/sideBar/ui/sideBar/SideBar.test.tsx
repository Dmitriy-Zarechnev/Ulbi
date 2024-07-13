import {fireEvent, screen} from '@testing-library/react'
import {SideBar} from 'widgets/sideBar'
import {componentRender} from 'shared/config/tests/componentRender/ComponentRender'


describe('SideBar tests', () => {
    test('check sidebar render', () => {
        componentRender(<SideBar/>)
        expect(screen.getByTestId('sideBar')).toBeInTheDocument()
    })

    test('toggle sidebar', () => {
        componentRender(<SideBar/>)
        const toggleBtn = screen.getByTestId('sideBar-toggle')

        fireEvent.click(toggleBtn)
        expect(screen.getByTestId('sideBar')).toHaveClass('collapsed')
    })
})