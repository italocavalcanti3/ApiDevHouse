/*
//Métodos:
    index: Listagem de sessões
    store: Criar uma nova sessão (fazer login)
    show: Listar única sessão
    update: Atualizar uma sessão
    destroy: Deletar uma sessão
*/

import House from '../models/House';

class HouseController{

    async store(req, res){
        console.log(req.body);
        console.log(req.file);

        return res.json({ message: true });
    }

}

export default new HouseController();