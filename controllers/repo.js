const models = require('../models');
const IsEmpty = require('../helpers/isEmpty');

const addRepo = async (repoForCreate, t) => {
  const repoInDb = await getRepoById(repoForCreate.id);
  console.log(IsEmpty(repoInDb) == true);
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

module.exports = {
  addRepo,
  getRepoById,
};
