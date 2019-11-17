import { fireEvent, render } from '@testing-library/react';
import React from 'react';

import Button from '../';


test('Renders button', () => {
    const { getByRole } = render(<Button>submit</Button>);

    expect(getByRole('button')).toBeInTheDocument();
});

test('Allows the passing of custom class names', () => {
    const { container } = render(<Button className="my-custom-class">submit</Button>);

    expect(container.firstChild).toHaveClass('my-custom-class');
});

test('Renders child text', () => {
    const { getByText } = render(<Button>my button text</Button>);

    expect(getByText('my button text')).toBeInTheDocument();
});

test('Invokes the provided click handler when clicked', () => {
    const mockOnClickHandler = jest.fn();
    const { getByText } = render(
        <Button onClick={() => mockOnClickHandler('some-value')}>submit</Button>);

    fireEvent.click(getByText('submit'));

    expect(mockOnClickHandler).toHaveBeenCalledTimes(1);
    expect(mockOnClickHandler).toBeCalledWith('some-value');
});
