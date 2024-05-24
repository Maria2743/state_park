const getSkaters = async (req, res) => {
    return res.json({ ok: true })
}

const getSkatersById = async (req, res) => {
    return res.status.json({ ok: true })
}

const createSkaters = async (req, res) => {
    return res.status(201).json({ ok: true })
}

const updateSkaters = async (req, res) => {
    return res.status.json({ ok: true })
}

const removeSkaters = async (req, res) => {
    return res.status.json({ ok: true })
}

export const skatersController = {
    getSkaters,
    createSkaters,
    getSkatersById,
    updateSkaters,
    removeSkaters
}