function createOne(model) {
    return async function (req, res) {
        try {
            const result = await model.create(req.body)
            res.status(201).json(result)
        } catch (err) {
            res.status(400).json({ error: err.message })
        }
    }
}

function getAll(model) {
    return async function (req, res) {
        try {
            const result = await model.find()
            res.status(200).json(result)
        } catch (err) {
            res.status(400).json({ error: err.message })
        }
    }
}

function updateOneById(model) {
    return async function (req, res) {
        try {
            const result = await model.findByIdAndUpdate(
                req.query.id,
                req.body,
                {
                    new: true,
                }
            )
            res.status(200).json(result)
        } catch (err) {
            res.status(400).json({ error: err.message })
        }
    }
}

function deleteOneById(model) {
    return async function (req, res) {
        try {
            await model.findByIdAndDelete(req.query.id)
            res.status(204).json()
        } catch (err) {
            res.status(400).json({ error: err.message })
        }
    }
}

export { createOne, getAll, updateOneById, deleteOneById }
