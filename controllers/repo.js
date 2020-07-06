const models = require('../models');

const IsEmpty = require('../helpers/isEmpty');

const addRepo = async (repoForCreate, t) => {
  const repoInDb = await getRepoById(repoForCreate.id);
  if (!IsEmpty(repoInDb)) return;
  const repo = await models.repo.create(repoForCreate, { transaction: t });
  return repo;
};

const getRepoById = async (repoId) => {
  const repo = await models.repo.findOne({
    where: { id: repoId },
  });

  return repo;
};

const eraseAllRepos = async () => {
  const deleted = await models.repo.destroy({ truncate: true });
  return null;
};

module.exports = {
  addRepo,
  getRepoById,
  eraseAllRepos,
};
