import { IconType } from 'react-icons'

export interface NavItem {
    title: string;
    link?: string;
    disabled?: boolean;
    
    external?: boolean;
    
    icon: IconType;
    iconColor?: string;
    
    label?: string;
    description?: string;
}

export interface NavGroupWithChildren extends NavItem {
    items: NavGroupWithChildren[];
}

export interface NavGroupWithOptionalChildren extends NavItem {
    items?: NavGroupWithChildren[];
}

export type MainNavbar = NavGroupWithOptionalChildren;
export type Sidebar = NavGroupWithChildren;

export interface ILeftChart {
    name: string;
    total: number;
}

export interface ProductProps {
    img: string;
    name: string;
    category: string;
    description: string;
    price: number;
    quantity: number;
}