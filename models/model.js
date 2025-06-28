const db = require('../config/db');

const Formulaire = {

  create: (data, callback) => {
    const sql = `INSERT INTO formulaire (nom, prenom, email, mobile, message)
                 VALUES (?, ?, ?, ?, ?)`;

    db.query(
      sql,
      [data.nom, data.prenom, data.email, data.mobile, data.message],
      (err, result) => {
        if (err) {
          return callback(err, null);
        }
        callback(null, result);
      }
    );
  },

};

module.exports = Formulaire;
