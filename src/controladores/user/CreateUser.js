/* eslint-disable import/no-unresolved */
const MSG = require('../../helpers/Msg');

const criptografarSenha = require('../../utils/criptografarSenha');

const { buscarUsuarioPorEmail } = require('../../banco/select');
const { cadastroUsuario } = require('../../banco/insert');

const cadastrarUsuario = async (req, res) => {
  const { nome, email, senha } = req.body;

  try {
    const emailDuplicado = await buscarUsuarioPorEmail(email);

    if (emailDuplicado.rowCount > 0) {
      return res.status(400).json({ mensagem: MSG.EMAIL_TAKEN });
    }

    const senhaCriptografada = await criptografarSenha(senha);

    const dadosDoUsuario = { nome, email, senhaCriptografada };

    const { rows: usuariosCadastrados } = await cadastroUsuario(dadosDoUsuario);

    const usuarioCadastrado = usuariosCadastrados[0];

    let usuarioFormatado = {};

    if (usuarioCadastrado) {
      usuarioFormatado = {
        uid: usuarioCadastrado.uid,
        nome: usuarioCadastrado.nome,
        email: usuarioCadastrado.email,

      };
    }

    return res.status(201).json(usuarioFormatado);
  } catch (error) {
    return res.status(500).json({ mensagem: 'Erro no servidor.' });
  }
};

module.exports = {
  cadastrarUsuario,
};
