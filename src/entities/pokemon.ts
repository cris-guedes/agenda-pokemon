import { v4 as uuidv4 } from 'uuid';

export const listaTipos = ["Normal", "Fire", "Flying", "Poison", "Electric", "Ground", "Fairy", "Grass", "Bug", "Water", "Fighting", "Rock", "Steel", "Ghost", "Psychic", "Ice", "Dragon"]
export type tipos = "Normal" | "Fire" | "Flying" | "Poison" | "Electric" | "Ground" | "Fairy" | "Grass" | "Bug" | "Water" | "Fighting" | "Rock" | "Steel" | "Ghost" | "Psychic" | "Ice" | "Dragon"

export type base = {
    HP: number | null,
    Attack: number | null,
    Defense: number | null,
    Speed: number | null
}
export type nome = {
    english: string,
    japanese: string | null,
    chinese: string | null,
    french: string | null
}

export type pokemon = {
    id: string | null,
    name: nome,
    type: Array<tipos>,
    base: base
}
export class pokemonclass {
    id?: string | null | Number;
    name: nome;
    type: tipos[];
    base: base;
    image?: string | null | undefined;
    constructor(id: string | null | number, image: string | null | undefined,
        name: nome = {
            english: "Sem Nome",
            japanese: "Sem Nome",
            chinese: "Sem Nome",
            french: "Sem Nome"
        },
        type: tipos[] = ["Normal"],
        base: base = {
            HP: 0,
            Attack: 0,
            Defense: 0,
            Speed: 0
        }) {
        this.name = name;
        this.base = base;
        this.type = type;
        if (image) {
            this.image = image;
        } else {
            this.image = "padrao.jpg"
        }
        if (id) {
            this.id = id;
        } else {
            this.id = uuidv4();
        }
    }




}
