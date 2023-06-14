export interface Cultivo{
    id: number;
    nombre: string;
    imagen: string;
    tipo: string;
    crecimiento_set: Crecimiento[]
}

export interface Crecimiento {
    id_crecimiento: number;
    germina: number;
    cosecha: number;
    temporada: string;
    temperaturaMax: number;
    temperaturaMin: number;
    riego: string;
    luz: string;
    profundidadSembrado: number;
    espacioPlantas: number;
    countdown: number;
    countdownActive:boolean;
}