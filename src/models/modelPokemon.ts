import fs from "fs";
import path from "path";

import { base, nome, pokemonclass, tipos } from "../entities/pokemon";

export class modelPokemon {
    private data: pokemonclass[];
    private endereco: string;
    private imageDeletefila: string[] = [];
    private imagecreatefila: string[] = [];
    private countAlteracoes: number = 0;

    constructor(endereco: string) {
        this.data = JSON.parse(fs.readFileSync(endereco, "utf-8"));
        this.endereco = endereco;


    }

    read() {
        return this.data;
    }

    readFromType(tipo: tipos) {
        var arrayPokemons: pokemonclass[] = [];
        for (let i = 0; i < this.data.length; i++) {
            for (let j = 0; j < this.data[i].type.length; j++) {
                if (this.data[i].type[j] == tipo) {
                    arrayPokemons.push(this.data[i]);
                    break;
                }
            }
        }
        if (arrayPokemons.length > 0) {
            return arrayPokemons;
        }

    }

    readFromName(nome: string) {
        var arrayPokemonsName: pokemonclass[] = [];
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i].name.english.toLowerCase().includes(nome.toLowerCase())) {

                arrayPokemonsName.push(this.data[i])
            }
        }
        if (arrayPokemonsName.length > 0) {
            return arrayPokemonsName
        }

    }
    readById(id: string) {
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i].id == id) {
                return this.data[i];
            }
        }
    }

    delete(id: string) {
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i].id == id) {
                this.imageDeletefila.push(this.data[i].image as string)
                this.countAlteracoes++;
                this.data.splice(i, 1);
                return this.data
            }
        }

    }
    create(pokemon: pokemonclass) {
        this.data.push(pokemon);
        if (pokemon.image != "padrao.jpg") {
            this.imagecreatefila.push(pokemon.image as string);
        }
        this.countAlteracoes++;
    }
    update(id: string, name: nome, base: base, tipo: tipos[], image: string | null | undefined) {
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i].id == id) {
                this.data[i].name = name;
                this.data[i].base = base;
                this.data[i].type = tipo;
                if (image) {
                    this.data[i].image = image;
                    this.imagecreatefila.push(image);
                }
                this.countAlteracoes++;
            }
        }

    }
    save() {
        fs.writeFileSync(this.endereco, JSON.stringify(this.data, null, 2));
        this.deleteimage(this.imageDeletefila);
        this.imageDeletefila = [];
        this.imagecreatefila = [];
        this.countAlteracoes = 0;

    }
    desfazer() {
        this.data = JSON.parse(fs.readFileSync(this.endereco, "utf-8"));
        this.imageDeletefila = [];
        this.deleteimage(this.imagecreatefila);
        this.imagecreatefila = [];
        this.countAlteracoes = 0;
    }
    deleteimage(bufferImage: string[]) {
        if (bufferImage.length > 0) {
            bufferImage.forEach(imagem => {
                fs.unlink(path.join(__dirname, `../../public/images/${imagem}`), (err) => { });
            });
        }
    }
    alteracoesMap() {
        return this.countAlteracoes;
    }
}
export const pokemondb = new modelPokemon(path.join(__dirname, "../provider/db/data.json"));


