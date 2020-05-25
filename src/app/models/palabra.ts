export class Palabra {
    id: number;
    palabraIngles: string;
    palabraEspanol: string;
    urlImagen: string;

    constructor (id?: number, palabraIngles?: string, palabraEspanol?: string, urlImagen?: string){
        this.id = id;
        this.palabraIngles = palabraIngles;
        this.palabraEspanol = palabraEspanol;
        this.urlImagen = urlImagen;   
    }

}