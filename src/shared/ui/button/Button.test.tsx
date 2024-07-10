import {render, screen} from '@testing-library/react'
import {Button} from './Button'

describe('Button', () => {
    test('check test', () => {
        render(<Button>TEST</Button>)
        expect(screen.getByText('TEST')).toBeInTheDocument()
    })
})