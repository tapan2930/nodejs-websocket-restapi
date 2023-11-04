// dummy data
let resources = [
  { id: 0, name: "Item 1", des: "Description for Item 1" },
  { id: 1, name: "Item 2", des: "Description for Item 2" },
  { id: 2, name: "Item 3", des: "Description for Item 3" },
  { id: 3, name: "Item 4", des: "Description for Item 4" },
  { id: 4, name: "Item 5", des: "Description for Item 5" },
  { id: 5, name: "Item 6", des: "Description for Item 6" },
  { id: 6, name: "Item 7", des: "Description for Item 7" },
  { id: 7, name: "Item 8", des: "Description for Item 8" },
  { id: 8, name: "Item 9", des: "Description for Item 9" },
  { id: 9, name: "Item 10", des: "Description for Item 10" },
];

// dummy getting data from database
exports.findById = (id) => {
  return resources.filter((resource) => resource.id === Number(id));
};

exports.getAll = () => {
  return resources;
};

// dummy inserting data to database
exports.create = (resource) => {
  let entry = { ...resource, id: resources?.length };
  resources.push(entry);
  return entry;
};

// dummy deleting data from database
exports.deletebyId = (id) => {
  resources = resources.filter((resource) => resource.id !== id);
  return id;
};
