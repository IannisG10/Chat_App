export interface HeaderProps {
    barComponent?: React.ReactNode
    iconList: IconRouteType[]
}

export interface IconRouteType {
    iconComponent: React.ReactElement
    href: string
}