/**
 * @jest-environment jsdom
 */
import React from 'react'
import { render, screen } from '@testing-library/react'
import { ListItemSecondaryActionExtended, ListItemTextExtended } from './index'
import '@testing-library/jest-dom'

describe('ListItemTextExtended renders', () => {

    test('primary text', () => {
        render(<ListItemTextExtended primary="Primary" />)
        const textElement = screen.getByText('Primary')
        expect(textElement).toBeInTheDocument()
    })
    test('secondary text', () => {
        render(<ListItemTextExtended secondary="Secondary" />)
        const textElement = screen.getByText('Secondary')
        expect(textElement).toBeInTheDocument()
    })
    test('overline text', () => {
        render(<ListItemTextExtended overline="Overline" />)
        const textElement = screen.getByText('Overline')
        expect(textElement).toBeInTheDocument()
    })
})
describe('ListItemSecondaryActionExtended renders', () => {
    test('one element', () => {
        render(<ListItemSecondaryActionExtended><div data-testid='el1'></div></ListItemSecondaryActionExtended>)
        const el1 = screen.getByTestId('el1')
        expect(el1).toBeInTheDocument()
    })
    test('two elements', () => {
        render(<ListItemSecondaryActionExtended><div data-testid='el1'></div><div data-testid='el2'></div></ListItemSecondaryActionExtended>)
        const el1 = screen.getByTestId('el1')
        const el2 = screen.getByTestId('el2') 
        expect(el1).toBeInTheDocument()
        expect(el2).toBeInTheDocument()
    })
})