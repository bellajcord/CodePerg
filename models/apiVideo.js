const mongoose = require("./connection")

const apiVideoSchema = new mongoose.Schema ({
    title: String,
    link: String,
    description: String,
    topic: String,
});

const apiVideoCollection = mongoose.model ("api", apiVideoSchema);

const getApis = () => {
    return apiVideoCollection.find({});
  };
  
  const getApiById = id => {
    return apiVideoCollection.findById(id);
  };
  
  const createApi = apiObject => {
    return apiVideoCollection.create(apiObject);
  };
  
  const deleteApi = id => {
    return apiVideoCollection.deleteOne({ _id: id });
  };
  
  const updateApi = (id, updatedApiObject) => {
    return apiVideoCollection.updateOne({ _id: id }, updatedApiObject);
  };
  module.exports = {
    getApis,
    getApiById,
    createApi,
    deleteApi,
    updateApi
  };