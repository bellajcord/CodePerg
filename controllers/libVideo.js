const express = require("express");

const libApi = require("../models/libVideo");

const libRouter = express.Router();

libRouter.get("/", (req, res) => {
  libApi
    .getLibs()
    .then(allLibs => {
      res.json(allLibs);
    })
    .catch(error => {
      console.log("Failed to retrieve");
      console.log(error);
      res.send(error);
    });
});
libRouter.get("/:id", (req, res) => {
  libApi
    .getLibsById(req.params.id)
    .then(singleLib => {
      res.json(singleLib);
    })
    .catch(error => {
      console.log("Failed to retrieve by Id");
      console.log(error);
      res.send(error);
    });
});
libRouter.post("/", (req, res) => {
  libApi
    .createLibs(req.body)
    .then(libCreated => {
      res.json(libCreated);
    })
    .catch(error => {
      console.log("Failed to create");
      console.log(error);
      res.send(error);
    });
});
libRouter.delete("/:id", (req, res) => {
  libApi
    .deleteLib(req.params.id)
    .then(() => {
      res.send("Deleted");
    })
    .catch(error => {
      console.log("Failed to delete");
      console.log(error);
      res.send(error);
    });
});
libRouter.put("/:id", (req, res) => {
  libApi
    .updateLib(req.params.id, req.body)
    .then(updatedLib => {
      res.json(updatedLib);
    })
    .catch(error => {
      console.log("Failed to update");
      console.log(error);
      res.send(error);
    });
});

module.exports = {
  libRouter
};