export interface productos{
    // main info
    name: string,
    id:string,
    default_price: string,
    description: string,
    images: Array<string>,
    //metadata
    metadata: medatadata,
    visibilidad: boolean
}

export interface medatadata{
    categoria: string,
    stock: number,
    peso: string,
    dimensiones : string,
    precio: number,
}

export interface precios{
    id: string,
    unit_amount_decimal: string,
}

export interface selecCarrito{
    name: string,
    images: Array<string>,
    cantidad: number,
    precioTotal: number
}

