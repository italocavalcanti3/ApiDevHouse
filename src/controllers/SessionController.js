//Métodos: index, show, update, store, destroy
/*
INDEX: Listagem de sessões
SHOW: Listar única sessão
UPDATE: Atualizar sessão
STORE: Criar nova sessão
DESTROY: Deletar sessão
*/

import User from '../models/User';

class SessionControler{
    async store(req, res) {
        const { email } = req.body;

        let user = User.findOne({ email });

        if (!user) {
            user = await User.create({ email });
        }

        return res.json(user);
    }


}

export default new SessionControler();