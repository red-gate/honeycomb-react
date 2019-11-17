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
 * Children prop is required; as such it can be used for even simple
 * use-cases - e.g. where only a text label is specified by a consumer.
 *
 * TODO: properly flesh-out this component, ATM it is just a demo
 * component for test/build setup.
 */
export const Button: FunctionComponent<ButtonProps> = ({ children, className, onClick }): ReactElement => (

    <button className={classnames('button', className)}
            onClick={onClick}>

        {children}
    </button>
);
