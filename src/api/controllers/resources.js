const resources = require("../models/resources");

// for handling of creating resources
exports.createResource = (req, res) => {
  if (req?.query["name"] && req?.query["des"]) {
    let entry = resources.create(req?.query);
    return res.status(201).json({ status: true, ...entry });
  } else {
    return res.status(400).json({ status: false, message: "Req body invalid" });
  }
};

// logic for handling resource get request for all or single resource
exports.getResources = (req, res) => {
  if (req?.params?.id) {
    const resource = resources.findById(req?.params.id);
    return res.status(200).json({ status: true, resource: resource });
  }
  const resourceList = resources.getAll();
  return res.status(200).json({ status: true, resources: resourceList });
};
// logic for deleting the resource
exports.deleteResources = (req, res) => {
  let id = resources.deletebyId(req?.params.id);
  if (id || id === 0) {
    return res.status(204).send();
  }
};
