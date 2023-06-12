export interface productos{
    // main info
    name: string,
    id:string,
    default_price: string,
    description: string,
    images: string,
    //metadata
    metadata: medatadata
}

export interface medatadata{
    categoria: string,
    stock: number,
    peso: string,
    dimension : string
}

export interface precios{
    id: string,
    unit_amount_decimal: string,
}

