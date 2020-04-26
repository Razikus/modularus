export class UserContext {
    privileges: Array<String>
    name: String
    additionalInformations: Map<String, any>
    
    constructor(name) {
        this.name = name
        this.privileges = new Array<String>()
        this.additionalInformations = new Map<String, any>()
    }
    addPrivilege(privilege: String) {
        this.privileges.push(privilege)
    }

    putInformation(key: String, value: any) {
        this.additionalInformations.set(key, value)
    }
    hasPrivilege(privilege: String) {
        return this.privileges.includes(privilege)
    }

}