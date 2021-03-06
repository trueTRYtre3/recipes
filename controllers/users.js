const bcrypt = require('bcrypt')
const userRouter = require('express').Router()
const { userExtractor } = require('../utils/middleware')
const User = require('../models/user')

userRouter.get('/:id', async (request, response) => {
    const user = await User.findById(request.params.id)
    user ? response.json(user) : response.status(404).end()
})

userRouter.post('/', async (request, response) => {
    const body = request.body

    if (body.password.length >= 3) {
        const saltRounds = 10;
        const passwordHash = await bcrypt.hash(body.password, saltRounds)

        const user = new User({
            username: body.username,
            passwordHash
        })

        const savedUser = await user.save()
        response.json(savedUser)
    } else {
        response.status(400).send({ error: 'invalid username or password' })
    }
})

userRouter.post('/:id/recipe', userExtractor, async (request, response) => {
    const savedRecipe = await User.findById(request.params.id)
    savedRecipe.recipes = savedRecipe.recipes.concat(request.body.recipe)
    const save = await savedRecipe.save()
    response.json(save)
})

userRouter.put('/:id/recipe', userExtractor, async (request, response) => {
    const { username, recipes } = request.body

    const newUser = {
        username,
        recipes
    }
    console.log(newUser)
    const updatedUser = await User.findByIdAndUpdate(request.params.id, newUser, { new: true })
    response.json(updatedUser)
})


userRouter.delete('/:id', userExtractor, async (request, response) => {
    await User.findByIdAndRemove(request.params.id)
    response.status(204).end()
})





module.exports = userRouter