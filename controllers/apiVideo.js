const express = require("express");

const apiApi = require("../models/apiVideo");

const apiRouter = express.Router();

apiRouter.get("/", (req, res) => {
  apiApi
    .getApis()
    .then(allApis => {
      res.json(allApis);
    })
    .catch(error => {
      console.log("Failed to retrieve");
      console.log(error);
      res.send(error);
    });
});
apiRouter.get("/:id", (req, res) => {
  apiApi
    .getApiById(req.params.id)
    .then(singleApi => {
      res.json(singleApi);
    })
    .catch(error => {
      console.log("Failed to retrieve by Id");
      console.log(error);
      res.send(error);
    });
});
apiRouter.post("/", (req, res) => {
  apiApi
    .createApi(req.body)
    .then(apiCreated => {
      res.json(apiCreated);
    })
    .catch(error => {
      console.log("Failed to create");
      console.log(error);
      res.send(error);
    });
});
apiRouter.delete("/:id", (req, res) => {
  apiApi
    .deleteApi(req.params.id)
    .then(() => {
      res.send("Deleted");
    })
    .catch(error => {
      console.log("Failed to delete");
      console.log(error);
      res.send(error);
    });
});
apiRouter.put("/:id", (req, res) => {
  apiApi
    .updateApi(req.params.id, req.body)
    .then(updatedApi => {
      res.json(updatedApi);
    })
    .catch(error => {
      console.log("Failed to update");
      console.log(error);
      res.send(error);
    });
});

module.exports = {
  apiRouter
};