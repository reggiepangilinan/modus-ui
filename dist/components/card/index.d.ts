import React, { PropsWithChildren, ReactNode } from 'react';
declare type Props = {
    active?: boolean;
    withShadow?: boolean;
    onClick?: () => void;
} & PropsWithChildren<ReactNode>;
export declare const Card: (props: Props) => React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
export {};
