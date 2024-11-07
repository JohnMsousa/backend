<<<<<<< HEAD
const { User, Address } = require("../models");

const createAddress = async (req, res) => {
  const { userId, street, city, state } = req.body;

  if (!userId || !street || !city || !state) {
    return res.status(400).json({ error: "Campos obrigatórios" });
  }

  try {
    const user = await User.findByPk(userId);
    if (!User) {
      return res.status(404).json({ error: "Usúario não encontrado" });
    }

    const newAddress = await Address.create({ userId, street, city, state });
    res.status(201).json(newAddress);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar endereço" });
  }
};

module.exports = {
  createAddress,
};
=======
const { User, Address } = require('../models')

const createAddress = async (req, res) => {
    const { userId, street, city, state } = req.body;

    if (!userId || !street || !city || !state) {
        return res.status(400).json({ error: "Campos obrigatórios" });
    }

    try {
        const user = await User.findByPk(userId);
        if(!user) {
            return res.status(404).json({ error: "Usuário não encontrado" })
        }

        const newAddress = await Address.create({ userId, street, city, state });
        res.status(201).json(newAddress);
    } catch (error) {
        res.status(500).json({ error: "Erro ao criar endereço" })
    }
}

module.exports = {
    createAddress,
}
>>>>>>> 83fc9f6ac2240bdf660e5491eca99a5cc8202431
