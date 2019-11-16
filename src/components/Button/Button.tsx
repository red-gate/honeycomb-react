import classnames from 'classnames';
import React, { FunctionComponent, MouseEvent, ReactElement, ReactNode } from 'react';

export interface ButtonProps {
    readonly className?: string;
    readonly children: ReactNode;
    readonly onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

/**
 * @description
 * General purpose Honeycomb button.
 *
 * Children prop is required as such it can be used for even simplle use cases where
 * only a text label is specified by a consumer.
 */
export const Button: FunctionComponent<ButtonProps> = ({ children, className, onClick }): ReactElement => (

    <button className={classnames('button', className)}
            onClick={onClick}>

        {children}
    </button>
);
