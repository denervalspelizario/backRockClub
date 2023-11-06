const conexaoComOBanco = require('../conexao/bancoDeDados');

const cadastroUsuario = (dadosDoUsuario) => {
  const { nome, email, senhaCriptografada } = dadosDoUsuario;
  const usuarioCadastrado = conexaoComOBanco.query(
    `
        INSERT INTO
	        usuarios (nome, email, senha)
        VALUES
	        ($1, $2, $3)
        RETURNING *
    `,
    [nome, email, senhaCriptografada],
  );
  return usuarioCadastrado;
};

module.exports = {
  cadastroUsuario,
};
