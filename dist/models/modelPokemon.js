"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pokemondb = exports.modelPokemon = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
class modelPokemon {
    constructor(endereco) {
        this.imageDeletefila = [];
        this.imagecreatefila = [];
        this.countAlteracoes = 0;
        this.data = JSON.parse(fs_1.default.readFileSync(endereco, "utf-8"));
        this.endereco = endereco;
        /*for (let i = 0; i < this.data.length; i++) {
             this.data[i].image=("000" + this.data[i].id).slice(-3)+".png"
           
        }
        this.save();*/
    }
    read() {
        return this.data;
    }
    readFromType(tipo) {
        var arrayPokemons = [];
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
    readFromName(nome) {
        var arrayPokemonsName = [];
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i].name.english.toLowerCase().includes(nome.toLowerCase())) {
                arrayPokemonsName.push(this.data[i]);
            }
        }
        if (arrayPokemonsName.length > 0) {
            return arrayPokemonsName;
        }
    }
    readById(id) {
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i].id == id) {
                return this.data[i];
            }
        }
    }
    delete(id) {
        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i].id == id) {
                this.imageDeletefila.push(this.data[i].image);
                this.countAlteracoes++;
                this.data.splice(i, 1);
                return this.data;
            }
        }
    }
    create(pokemon) {
        this.data.push(pokemon);
        if (pokemon.image != "padrao.jpg") {
            this.imagecreatefila.push(pokemon.image);
        }
        this.countAlteracoes++;
    }
    update(id, name, base, tipo, image) {
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
        fs_1.default.writeFileSync(this.endereco, JSON.stringify(this.data, null, 2));
        this.deleteimage(this.imageDeletefila);
        this.imageDeletefila = [];
        this.imagecreatefila = [];
        this.countAlteracoes = 0;
    }
    desfazer() {
        this.data = JSON.parse(fs_1.default.readFileSync(this.endereco, "utf-8"));
        this.imageDeletefila = [];
        this.deleteimage(this.imagecreatefila);
        this.imagecreatefila = [];
        this.countAlteracoes = 0;
    }
    deleteimage(bufferImage) {
        if (bufferImage.length > 0) {
            bufferImage.forEach(imagem => {
                fs_1.default.unlink(path_1.default.join(__dirname, `../../public/images/${imagem}`), (err) => { });
            });
        }
    }
    alteracoesMap() {
        return this.countAlteracoes;
    }
}
exports.modelPokemon = modelPokemon;
exports.pokemondb = new modelPokemon(path_1.default.join(__dirname, "../provider/db/data.json"));
