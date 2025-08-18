/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2644302221")

  // update collection data
  unmarshal({
    "indexes": [
      "CREATE INDEX idx_bookings_date_status ON service_bookings (preferredDate, status);\n"
    ]
  }, collection)

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2644302221")

  // update collection data
  unmarshal({
    "indexes": []
  }, collection)

  return app.save(collection)
})
