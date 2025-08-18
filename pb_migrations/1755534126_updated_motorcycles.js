/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1020517649")

  // update collection data
  unmarshal({
    "createRule": "owner = @request.auth.id || @request.auth.role != \"customer\"",
    "deleteRule": "owner = @request.auth.id || @request.auth.role != \"customer\"",
    "listRule": "owner = @request.auth.id || @request.auth.role != \"customer\"",
    "updateRule": "owner = @request.auth.id || @request.auth.role != \"customer\"",
    "viewRule": "owner = @request.auth.id || @request.auth.role != \"customer\""
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1020517649")

  // update collection data
  unmarshal({
    "createRule": null,
    "deleteRule": null,
    "listRule": null,
    "updateRule": null,
    "viewRule": null
  }, collection)

  return app.save(collection)
})
