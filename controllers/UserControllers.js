import User from "../models/User.js"

class UserController {
    async registration(req,res){
        try {
            const {name,lastname,age} = req.body
            const newUser = await User.create({name,lastname,age})
            res.json(newUser, "Ваши данные")
            newUser.save()
        } catch (error) {
            res.status(500).send("Ошибка при регистрации: " + error)
            console.log("Ошибка при регистрации: " + error);
            
        }
    }
}

export default new UserController();