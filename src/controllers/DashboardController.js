import House from '../models/House';
import User from '../models/User';

class DashboardController{

    async show(req, res){
        const { user_id } = req.headers;
        const user = await User.findById(user_id);

        const houses = await House.find({ user: user_id });

        if (!user){
            return res.status(401).json({ error: 'Não autorizado.' })
        }

        return res.json(houses);
    }

}

export default new DashboardController();