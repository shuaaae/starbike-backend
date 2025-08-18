/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_1020517649")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE UNIQUE INDEX idx_motorcycles_plate ON motorcycles (plateNumber);\n"
    ]
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1020517649")

  // update collection data
  unmarshal({
    "indexes": []
  }, collection)

  return app.save(collection)
})
