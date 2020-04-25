import { SView } from "./SView"

export class SPage {
    icon: string
    neededPrivileges: Array<String>
    translationKey: string
    priority: number
    routeKey: string
    childrens: Array<SView>
    
    constructor(icon: string, translationKey: string, routeKey: string, priority: number, privileges: Array<String>) {
        this.icon = icon
        this.translationKey = translationKey
        this.priority = priority
        this.neededPrivileges  = privileges
        this.childrens = new Array<SView>()
        this.routeKey = routeKey
    }

    addChildren(children: SView) {
        this.childrens.push(children)
    }


}