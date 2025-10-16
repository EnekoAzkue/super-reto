interface DefensesInterface {
    walls: walls,
    towers: towers[],
}

interface walls {
    material: string,
    height: number,
    enchantments: enchantments[]
}

interface enchantments {
    name: string,
    level: number,
}

interface towers {
    name: string,
    height: number,
    armament: armament
}

interface armament {
    weaponType: string,
    ammunitionType: string,
    ammunitionCount: number,
}

export default DefensesInterface