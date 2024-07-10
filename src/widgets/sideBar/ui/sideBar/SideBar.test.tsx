import {render, screen} from '@testing-library/react'
import {SideBar} from 'widgets/sideBar'
import {withTranslation} from 'react-i18next'

describe('SideBar tests', () => {
    test('check sidebar render', () => {
        const SideBarWithTranslation = withTranslation()(SideBar)
        render(<SideBarWithTranslation/>)
        expect(screen.getByTestId('sideBar')).toBeInTheDocument()
    })

})