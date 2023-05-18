import {Cliente} from "../models/models.js"
//Recuperar todos los Clientes de la db
export const getClientes = async(req,res) =>{
    const Clientes = await Cliente.findAll()
    res.json(Clientes)
}

//Crear nuevo Cliente
export const postClientes = async(req,res) =>{
    const {cedula,nombre,apellido} = req.body
    const cliente = await Cliente.create({cedula,nombre,apellido})
    res.json(cliente)
}

//Editar Cliente, es lo que faltó en el código original
export const putClientes = async(req,res) =>{
    const {cedula,nombre,apellido} = req.body
    const {id} = req.params
    const cliente = await Cliente.update({cedula,nombre,apellido}, {where: {id}})
    res.json(cliente)
}


//delete clientes, es lo que faltó en el código original
export const deleteClientes = async(req,res) =>{
    const {id} = req.params
    const cliente = await Cliente.destroy({where: {id}})
    res.json(cliente)
}
