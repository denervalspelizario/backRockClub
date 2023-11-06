const MSG = {
  INTERNAL: 'Erro Interno do Servidor.',

  USER_NOT_FOUND: 'Usuário não encontrado.',
  USER_NOT_CREATED: 'Não foi possível criar a conta de usuário.',
  USER_CREATED: 'Conta de usuário criada com sucesso.',
  USER_NOT_UPDATED: 'Não foi possível atualizar o usuário.',
  USER_UPDATED: 'Usuário atualizado com sucesso.',

  PRODUCT_NOT_FOUND: 'Produto não encontrado.',
  PRODUCT_NOT_CREATED: 'Não foi possível cadastrar o produto.',
  PRODUCT_CREATED: 'Produto cadastrado com sucesso.',
  PRODUCT_NOT_UPDATED: 'Não foi possível atualizar o produto.',
  PRODUCT_UPDATED: 'Produto atualizado com sucesso.',
  PRODUCT_DELETED: 'Produto excluído com sucesso.',
  PRODUCT_IN_TRANSACTION: 'Não é possível excluir um produto presente em um pedido.',

  CLIENT_NOT_FOUND: 'Cliente não encontrado.',
  CLIENT_NOT_CREATED: 'Não foi possível criar a conta de cliente.',
  CLIENT_CREATED: 'Conta de cliente criada com sucesso.',
  CLIENT_NOT_UPDATED: 'Não foi possível atualizar o cliente.',
  CLIENT_UPDATED: 'Cliente atualizado com sucesso.',

  TRANSACTION_NOT_FOUND: 'Transação não encontrada.',
  TRANSACTION_NOT_CREATED: 'Não foi possível cadastrar a transação.',
  TRANSACTION_CREATED: 'Transação cadastrada com sucesso.',
  TRANSACTION_NOT_UPDATED: 'Não foi possível atualizar a transação.',
  TRANSACTION_UPDATED: 'Transaçãe atualizada com sucesso.',

  CPF_TAKEN: 'Já existe usuário cadastrado com o CPF informado.',
  EMAIL_TAKEN: 'Já existe usuário cadastrado com o e-mail informado.',

  INVALID_ID: 'ID não informado ou não cadastrado.',
  INVALID_CPF: 'CPF inválido.',
  INVALID_EMAIL: 'Email inválido.',
  INVALID_PASSWORD: 'Senha inválido.',
  CATEGORY_NOT_FOUND: 'Categoria não existe.',
  INVALID_TYPE: 'Tipo de Transação inválida. O tipo deve ser entrada ou saida.',
  INVALID_TRANSACTION_ID: 'ID da Transação é um campo numérico. Corrija antes de enviar novamente.',

  UNAUTHORISED: 'Não Autorizado!',
  INVALID_TOKEN: 'Para acessar este recurso, um token de autenticação válido deve ser enviado.',
  VALID_TOKEN_NO_USER: 'Usuário não mais existe. Contactar o banco pelo número 4002 8922.',
  INVALID_QUANT: 'Quantidade do produto insuficiente',
};

module.exports = MSG;
