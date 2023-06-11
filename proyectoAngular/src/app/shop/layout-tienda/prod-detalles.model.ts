export interface productos{
    // main info
    name: string,
    id:string,
    default_price: string,
    description: string,
    images: string,
    //metadata
    stock: string,
    categoria: string,
}

export interface precios{
    id: string,
    unit_amount: number,
}
