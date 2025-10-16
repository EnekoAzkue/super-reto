interface Resources {
    storage: storage,
    armory: armory
}

interface storage {
    food: food,
    water: water
}

interface food {
    type: string,
    quantity: number,
    unit: string
}

interface water {
    source: string,
    capacity: number,
    unit: string
}

interface armory {
    weapons: equipment[],
    shields: equipment[]
}

interface equipment {
    type: string,
    quantity: number,
}

export default Resources   