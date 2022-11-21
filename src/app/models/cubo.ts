export class Cubo {
    constructor(
        public idCubo : number,
        public nombre: string,
        public modelo: string,
        public marca: string,
        public color: string,
        public imagen: string,
        public precio: number,
        public valoracion: number,
   
    ) {}
}
// creo el modelo cubo para poder utilizalo en todas mis
// peticiones de CRUD