import { Request, Response } from "express";
import { listaTipos, tipos, base, nome, pokemonclass } from "../entities/pokemon";
import { pokemondb } from "../models/modelPokemon";



export const save = (req: Request, res: Response) => {
    pokemondb.save();
    res.redirect('/');
};
export const desfazer = (req: Request, res: Response) => {

    pokemondb.desfazer();
    res.redirect('/');

}
export const deletar = (req: Request, res: Response) => {
    pokemondb.delete(req.params.id);
    res.redirect('/');

}
export const update = (req: Request, res: Response) => {
    var data = req.body;
    var image: string | undefined = req.file?.filename;
    var id = data.id;
    var tipo: tipos[];
    var name: nome = {
        english: data.name,
        japanese: "Sem Registro",
        chinese: "Sem Registro",
        french: "Sem Registro"
    }
    var base: base = {
        HP: data.HP,
        Attack: data.Attack,
        Defense: data.Defense,
        Speed: data.Speed
    }
    if (data.type) {
        if (data.type.length > 0) {
            tipo = data.type
        }
        tipo = [data.type]
    }else{
        tipo = ["Normal"]
    }


    pokemondb.update(id, name, base, tipo, image);
    res.redirect("/")

}

export const create = (req: Request, res: Response) => {
    var data = req.body;
    var image: string | undefined = req.file?.filename;
    var tipo: tipos[];
    var name: nome = {
        english: data.name,
        japanese: "Sem Registro",
        chinese: "Sem Registro",
        french: "Sem Registro"
    }
    var base: base = {
        HP: data.HP,
        Attack: data.Attack,
        Defense: data.Defense,

        Speed: data.Speed
    }
    if (data.type) {
        if (data.type.length > 0) {
            tipo = data.type
        }
        tipo = [data.type]
    }else{
        tipo = ["Normal"]
    }
    var pokemon: pokemonclass = new pokemonclass(null, image, name, tipo, base);
    pokemondb.create(pokemon);
    res.redirect('/');

}

export const searchTipo = (req: Request, res: Response) => {
    var data: tipos = req.query.q as tipos;
    res.render("pages/home", { pokemons: pokemondb.readFromType(data), tipo: listaTipos, searchTipo: data as string, alteracoes: pokemondb.alteracoesMap() })
}