const express = require ('express');
const companyController = require ("../controllers/companyController");
const router = express.Router();

router.get('/', companyController.index);

router.get("/:id", companyController.show);

router.post('/', companyController.store);

router.delete("/:id", companyController.delete);

module.exports = router;