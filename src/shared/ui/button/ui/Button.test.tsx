import {render, screen} from '@testing-library/react'
import {Button, ButtonTheme} from './Button'

describe('Button tests', () => {
    test('check button render', () => {
        render(<Button>TEST</Button>)
        expect(screen.getByText('TEST')).toBeInTheDocument()
    })

    test('check button theme', () => {
        render(<Button theme={ButtonTheme.CLEAR}>TEST</Button>)
        expect(screen.getByText('TEST')).toHaveClass('clear')
    })
})