const mongoose = require("./connection")

const libVideoSchema = new mongoose.Schema ({
    title: String,
    link: String,
    description: String,
    library: String,
});

const libVideoCollection = mongoose.model ("lib", libVideoSchema);

const getLibs = () => {
    return libVideoCollection.find({});
  };
  
  const getLibsById = id => {
    return libVideoCollection.findById(id);
  };
  
  const createLibs = libObject => {
    return libVideoCollection.create(libObject);
  };
  
  const deleteLib = id => {
    return libVideoCollection.deleteOne({ _id: id });
  };
  
  const updateLib = (id, updatedLibObject) => {
    return libVideoCollection.updateOne({ _id: id }, updatedLibObject);
  };
  module.exports = {
    getLibs,
    getLibsById,
    createLibs,
    deleteLib,
    updateLib
  };