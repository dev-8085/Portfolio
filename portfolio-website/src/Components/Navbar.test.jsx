import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';

test('renders Navbar component', () => {
    render(<Navbar />);
    const linkElement = screen.getByText(/home/i);
    expect(linkElement).toBeInTheDocument();
});