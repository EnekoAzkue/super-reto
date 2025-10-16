interface InhabitantsInterface {
    roles: roles[]
}

interface equipment {
    weapon?: string,
    armor?: string,
    shield?: string
    staff?: string,
    robe?: string,
    amulet?: string,
}

interface professions {
    type: string,
    count: number,
}

interface roles {
    role: string,
    count?: number,
    equipment?: equipment,
    professions?: professions[],
}

export default InhabitantsInterface