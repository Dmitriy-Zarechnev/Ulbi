import {render, screen} from '@testing-library/react'
import {Button, ThemeButton} from './Button'

describe('Button tests', () => {
    test('check button render', () => {
        render(<Button>TEST</Button>)
        expect(screen.getByText('TEST')).toBeInTheDocument()
    })

    test('check button theme', () => {
        render(<Button theme={ThemeButton.CLEAR}>TEST</Button>)
        expect(screen.getByText('TEST')).toHaveClass('clear')
    })
})