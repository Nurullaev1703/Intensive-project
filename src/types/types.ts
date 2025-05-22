import WindowsIcon from "../icons/windows.svg"
import MacIcon from "../icons/macos.svg"
import AndroidIcon from "../icons/anroid.svg"
import IOSIcon from "../icons/apple.svg"

export interface ProductCardType{
    image: string,
    title: string,
    description: string,
    salePrice: number,
    price: number,
    advantages: string[],
    platforms: PlatformsType[]
}
export type PlatformsType = "windows" | "mac" | "android" | "ios"
export const PLATFORMS_ICONS  = {
    windows: WindowsIcon,
    mac: MacIcon,
    android: AndroidIcon,
    ios: IOSIcon
}