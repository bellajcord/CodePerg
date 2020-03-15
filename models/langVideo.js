const mongoose = require("./connection")

const langVideoSchema = new mongoose.Schema ({
    title: String,
    link: String,
    description: String,
    topic: String,
});

const langVideoCollection = mongoose.model ("lang", langVideoSchema);

const getlangs = () => {
    return langVideoCollection.find({});
  };
  
  const getlangById = id => {
    return langVideoCollection.findById(id);
  };
  
  const createlang = langObject => {
    return langVideoCollection.create(langObject);
  };
  
  const deletelang = id => {
    return langVideoCollection.deleteOne({ _id: id });
  };
  
  const updatelang = (id, updatedlangObject) => {
    return langVideoCollection.updateOne({ _id: id }, updatedlangObject);
  };
  module.exports = {
    getlangs,
    getlangById,
    createlang,
    deletelang,
    updatelang
  };