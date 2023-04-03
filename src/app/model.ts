export type NewsType = {
    id: number,
    title: string,
    body: string,
    photoUrl: string
};

export type PcPartsType = {
    id: number,
    router: string,
    imageUrl: string,
    name: string
};

export type UserSignInType = {
    name: string,
    email: string,
    password: string
}

// Pc Parts Type

export type PcPartType = {
    id: number,
    productName: string,
    imageUrl: string,
    price: number
    quantity: number,
    name?: string,
    manufacturer?: String,
    moboId?: number,
    gpuId?: number,
    cpuId?: number,
    ramId?: number,
    psuId?: number,
    ssdId?: number,
    hddId?: number,
    coolerId?: number,
    caseId?: number,
    keyboardId?: number,
    headsetId?: number,
    type?: string,
    socket?: string,
    efficiency?: string,
    mobo?: string,
    gpu?: string,
    cpu?: string,
    ram?: string,
    power?: number,
    cooling?: string,
    memory?: string,
    switch?: string,
    wireless?: boolean
}
