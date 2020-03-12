const express = require("express");

const langApi = require("../models/langVideo");

const langRouter = express.Router();

langRouter.get("/", (req, res) => {
  langApi
    .getlangs()
    .then(alllangs => {
      res.json(alllangs);
    })
    .catch(error => {
      console.log("Failed to retrieve");
      console.log(error);
      res.send(error);
    });
});
langRouter.get("/:id", (req, res) => {
  langApi
    .getlangById(req.params.id)
    .then(singlelang => {
      res.json(singlelang);
    })
    .catch(error => {
      console.log("Failed to retrieve by Id");
      console.log(error);
      res.send(error);
    });
});
langRouter.post("/", (req, res) => {
  langApi
    .createlang(req.body)
    .then(langCreated => {
      res.json(langCreated);
    })
    .catch(error => {
      console.log("Failed to create");
      console.log(error);
      res.send(error);
    });
});
langRouter.delete("/:id", (req, res) => {
  langApi
    .deletelang(req.params.id)
    .then(() => {
      res.send("Deleted");
    })
    .catch(error => {
      console.log("Failed to delete");
      console.log(error);
      res.send(error);
    });
});
langRouter.put("/:id", (req, res) => {
  langApi
    .updatelang(req.params.id, req.body)
    .then(updatedlang => {
      res.json(updatedlang);
    })
    .catch(error => {
      console.log("Failed to update");
      console.log(error);
      res.send(error);
    });
});

module.exports = {
  langRouter
};