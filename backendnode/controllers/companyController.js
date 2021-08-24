const Company = require("../models/company");

exports.index = async (req, res) => {
    try {
        const pagination = req.query.pagination
        const companies = await Company.find().sort({ createdAt: -1 })
        res.send(companies);
    } catch (err) {
        next(err);
    }
};



exports.show = async (req, res) => {
    try {
        const companies = await Company.findOne({
            id: req.params.id
        })
        res.send(companies);
    }catch(err){
        next(err);
    }
}


exports.store = async(req, res, next) => {
  try {
      let company = new Company();  
      company.id = req.body.id;
      company.price = req.body.price;
      company.rewards = req.body.rewards;
      company = await company.save();
      res.send(company);

  }catch(err){
      next(err);
  }
}

  exports.delete = async(req, res, next) => {
    try {
        let companies = await Company.findOne({ "id":req.params.id });    
        companies = await companies.delete();
        res.send({"message":"successfully removed the company reward"});
  
    }catch(err){
        next(err);
    }
  }