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

// Pc Parts Types

export interface MobosType {
    id: number,
    moboId: number,
    manufacturer: String,
    imageUrl: string,
    name: string,
    socket: string,
    quantity: number,
    price: number
}

export interface GpusType {
    id: number,
    gpuId: number,
    manufacturer: String,
    imageUrl: string,
    name: string,
    quantity: number,
    price: number
}

export interface CpusType {
    id: number,
    cpuId: number,
    manufacturer: string,
    imageUrl: string,
    name: string,
    quantity: number,
    price: number
}

export interface RamsType {
    id: number,
    ramId: number,
    manufacturer: string,
    imageUrl: string,
    name: string,
    memory: string,
    quantity: number,
    price: number
}

export interface SsdsType {
    id: number,
    ssdId: number,
    manufacturer: string,
    type: string,
    imageUrl: string,
    name: string,
    memory: string,
    quantity: number,
    price: number
}

export interface HddsType {
    id: number,
    hddId: number,
    manufacturer: string,
    imageUrl: string,
    name: string,
    memory: string,
    quantity: number
    price: number
}

export interface PsusType {
    id: number,
    psuId: number,
    manufacturer: string,
    imageUrl: string,
    name: string,
    power: number,
    efficiency: string,
    quantity: number,
    price: number
}

export interface CasesType {
    id: number,
    caseId: number,
    manufacturer: string,
    imageUrl: string,
    name: string,
    quantity: number,
    price: number
};
export interface CoolersType {
    id: number,
    coolerId: number,
    manufacturer: string,
    imageUrl: string,
    name: string,
    type: string,
    quantity: number,
    price: number
}

export interface PcsType {
    id: number,
    type: string,
    imageUrl: string,
    mobo: string,
    gpu: string,
    cpu: string,
    ram: string,
    memory: string,
    cooling: string,
    price: number
}

export interface KeyboardsType {
    id: number,
    keyboardId: number,
    manufacturer: string,
    imageUrl: string,
    name: string,
    switch: string,
    quantity: number,
    price: number
}

export interface HeadsetsType {
    id: number,
    headsetId: number,
    manufacturer: string,
    imageUrl: string,
    name: string,
    wireless: boolean,
    quantity: number,
    price: number
}

export type CartItemsType = MobosType | GpusType | CpusType | RamsType | SsdsType | HddsType | PsusType | CoolersType | CasesType | KeyboardsType | HeadsetsType;