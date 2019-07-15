import { FunctionComponent, ReactNode } from 'react';
import { LinkWrapperType } from './ListItem';
export interface Link {
    id: string;
    title?: ReactNode;
    active?: boolean;
    href?: string | object;
    onClick?: () => void;
    isGatsby?: boolean;
}
export interface TooltipLinkListProps {
    links: Link[];
    LinkWrapper?: LinkWrapperType;
}
export declare const TooltipLinkList: FunctionComponent<TooltipLinkListProps>;
