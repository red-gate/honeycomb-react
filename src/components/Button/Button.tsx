import * as classnames from 'classnames';
import * as React from 'react';

export interface ButtonProps {
    readonly className?: string;
    readonly text: string;
}

/**
 * @description
 * General purpose Honeycomb button.
 *
 * As it stands there is currently no use case in the design system to require
 * the need to pass in children, e.g. having a spinny inside the button.
 */
export const Button: React.FunctionComponent<ButtonProps> = ({ className, text }) => (

    <button className={classnames('button', className)}>
        {text}
    </button>
);
