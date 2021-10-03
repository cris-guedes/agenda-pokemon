"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchTipo = exports.create = exports.update = exports.deletar = exports.desfazer = exports.save = exports.search = exports.pokeTipo = exports.pokeCreate = exports.pokeUpdate = exports.pokeHomePage = void 0;
const pokemon_1 = require("../entities/pokemon");
const modelPokemon_1 = require("../models/modelPokemon");
//console.log(pokemondb.readFromType("Fire"));
const pokeHomePage = (req, res) => {
    res.render('pages/home', { pokemons: modelPokemon_1.pokemondb.read(), tipo: pokemon_1.listaTipos, alteracoes: modelPokemon_1.pokemondb.alteracoesMap() });
};
exports.pokeHomePage = pokeHomePage;
const pokeUpdate = (req, res) => {
    console.log(modelPokemon_1.pokemondb.readById(req.params.id));
    res.render('pages/update', { pokemon: modelPokemon_1.pokemondb.readById(req.params.id), tipo: pokemon_1.listaTipos, alteracoes: modelPokemon_1.pokemondb.alteracoesMap() });
};
exports.pokeUpdate = pokeUpdate;
const pokeCreate = (req, res) => {
    res.render('pages/create', { tipo: pokemon_1.listaTipos, alteracoes: modelPokemon_1.pokemondb.alteracoesMap() });
};
exports.pokeCreate = pokeCreate;
const pokeTipo = (req, res) => {
    res.render('pages/home', { tipo: pokemon_1.listaTipos, alteracoes: modelPokemon_1.pokemondb.alteracoesMap() });
};
exports.pokeTipo = pokeTipo;
const search = (req, res) => {
    var data = req.query.q;
    res.render("pages/home", { pokemons: modelPokemon_1.pokemondb.readFromName(data), tipo: pokemon_1.listaTipos, searchName: data, alteracoes: modelPokemon_1.pokemondb.alteracoesMap() });
};
exports.search = search;
const save = (req, res) => {
    modelPokemon_1.pokemondb.save();
    res.redirect('/');
};
exports.save = save;
const desfazer = (req, res) => {
    modelPokemon_1.pokemondb.desfazer();
    res.redirect('/');
};
exports.desfazer = desfazer;
const deletar = (req, res) => {
    modelPokemon_1.pokemondb.delete(req.params.id);
    res.redirect('/');
};
exports.deletar = deletar;
const update = (req, res) => {
    var _a;
    var data = req.body;
    var image = (_a = req.file) === null || _a === void 0 ? void 0 : _a.filename;
    var id = data.id;
    var tipo;
    var name = {
        english: data.name,
        japanese: "Sem Registro",
        chinese: "Sem Registro",
        french: "Sem Registro"
    };
    var base = {
        HP: data.HP,
        Attack: data.Attack,
        Defense: data.Defense,
        Speed: data.Speed
    };
    if (data.type) {
        if (data.type.length > 0) {
            tipo = data.type;
        }
        tipo = [data.type];
    }
    else {
        tipo = ["Normal"];
    }
    modelPokemon_1.pokemondb.update(id, name, base, tipo, image);
    res.redirect("/");
};
exports.update = update;
const create = (req, res) => {
    var _a;
    var data = req.body;
    var image = (_a = req.file) === null || _a === void 0 ? void 0 : _a.filename;
    var tipo;
    var name = {
        english: data.name,
        japanese: "Sem Registro",
        chinese: "Sem Registro",
        french: "Sem Registro"
    };
    var base = {
        HP: data.HP,
        Attack: data.Attack,
        Defense: data.Defense,
        Speed: data.Speed
    };
    if (data.type) {
        if (data.type.length > 0) {
            tipo = data.type;
        }
        tipo = [data.type];
    }
    else {
        tipo = ["Normal"];
    }
    var pokemon = new pokemon_1.pokemonclass(null, image, name, tipo, base);
    modelPokemon_1.pokemondb.create(pokemon);
    res.redirect('/');
};
exports.create = create;
const searchTipo = (req, res) => {
    var data = req.query.q;
    res.render("pages/home", { pokemons: modelPokemon_1.pokemondb.readFromType(data), tipo: pokemon_1.listaTipos, searchTipo: data, alteracoes: modelPokemon_1.pokemondb.alteracoesMap() });
};
exports.searchTipo = searchTipo;
