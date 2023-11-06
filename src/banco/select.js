const conexaoComOBanco = require('../conexao/bancoDeDados');

const listaTodosEventos = () => {
  const dadosEventos = conexaoComOBanco.query('SELECT * FROM eventos');
  return dadosEventos;
};

const buscarUsuarioPorEmail = (email) => {
  const emailEncontrado = conexaoComOBanco.query(
    `
      SELECT
        uid, nome, email, senha
      FROM 
        usuarios
      WHERE
      email = $1;
    `,
    [email],
  );
  return emailEncontrado;
};

module.exports = {
  buscarUsuarioPorEmail,
  listaTodosEventos,
};
