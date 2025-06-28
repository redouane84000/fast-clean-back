const Formulaire = require('../models/model');

const createFormulaire = (req, res) => {
  const { nom, prenom, email, mobile, message } = req.body;

  Formulaire.create(
    { nom, prenom, email, mobile, message },
    (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: 'Erreur serveur lors de l\'insertion' });
      }
      res.status(201).json({
        message: 'Formulaire enregistré avec succès',
        id: result.insertId,
      });
    }
  );
};

module.exports = {
  createFormulaire
};
