"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pokemonclass = exports.listaTipos = void 0;
const uuid_1 = require("uuid");
exports.listaTipos = ["Normal", "Fire", "Flying", "Poison", "Electric", "Ground", "Fairy", "Grass", "Bug", "Water", "Fighting", "Rock", "Steel", "Ghost", "Psychic", "Ice", "Dragon"];
class pokemonclass {
    constructor(id, image, name = {
        english: "Sem Nome",
        japanese: "Sem Nome",
        chinese: "Sem Nome",
        french: "Sem Nome"
    }, type = ["Normal"], base = {
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
        }
        else {
            this.image = "padrao.jpg";
        }
        if (id) {
            this.id = id;
        }
        else {
            this.id = (0, uuid_1.v4)();
        }
    }
}
exports.pokemonclass = pokemonclass;
