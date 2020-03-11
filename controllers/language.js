const express = require("express");

const langApi = require("../models/language.js");

const langRouter = express.Router();

langRouter.get("/", (req, res) => {
  langApi
    .getLangs()
    .then(allLangs => {
      res.json(allLangs);
    })
    .catch(error => {
      console.log("Failed to retrieve");
      console.log(error);
      res.send(error);
    });
});
langRouter.get("/:id", (req, res) => {
  langApi
    .getLangById(req.params.id)
    .then(singleLang => {
      res.json(singlePlant);
    })
    .catch(error => {
      console.log("Failed to retrieve plant by Id");
      console.log(error);
      res.send(error);
    });
});
langRouter.post("/", (req, res) => {
  langApi
    .createLang(req.body)
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
    .deleteLang(req.params.id)
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
    .updateLang(req.params.id, req.body)
    .then(updatedLang => {
      res.json(updatedLang);
    })
    .catch(error => {
      console.log("Failed to update plant");
      console.log(error);
      res.send(error);
    });
});

module.exports = {
  langRouter
};