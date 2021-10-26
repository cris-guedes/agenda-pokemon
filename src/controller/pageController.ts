import { Request, Response } from "express";
import { listaTipos } from "../entities/pokemon";
import { pokemondb } from "../models/modelPokemon";


export const pokeHomePage = (req: Request, res: Response) => {
    res.render('pages/home', { pokemons: pokemondb.read(), tipo: listaTipos, alteracoes: pokemondb.alteracoesMap() });
}

export const pokeUpdate = (req: Request, res: Response) => {
    res.render('pages/update', { pokemon: pokemondb.readById(req.params.id), tipo: listaTipos, alteracoes: pokemondb.alteracoesMap() });
}

export const pokeCreate = (req: Request, res: Response) => {
    res.render('pages/create', { tipo: listaTipos, alteracoes: pokemondb.alteracoesMap() });
}

export const pokeTipo = (req: Request, res: Response) => {
    res.render('pages/home', { tipo: listaTipos, alteracoes: pokemondb.alteracoesMap() });
}

export const search = (req: Request, res: Response) => {
    var data: string = req.query.q as string;
    res.render("pages/home", { pokemons: pokemondb.readFromName(data), tipo: listaTipos, searchName: data as string, alteracoes: pokemondb.alteracoesMap() })
}

