const mongoose = require("./connection")

const langSchema = new.mongoose.Schema ({
    name: String,
    id: String,
    description: String,
});

const langCollection = mongoose.model ("Lang", langSchema);

const getLang = () => {
    return langCollection.find({});
  };
  
  const getLangById = id => {
    return langCollection.findById(id);
  };
  
  const createLang = langObject => {
    return langCollection.create(langObject);
  };
  
  const deleteLang = id => {
    return langCollection.deleteOne({ _id: id });
  };
  
  const updateLang = (id, updatedLangObject) => {
    return langCollection.updateOne({ _id: id }, updatedLangObject);
  };
  module.exports = {
    getLang,
    getLangById,
    createLang,
    deleteLang,
    updateLang
  };