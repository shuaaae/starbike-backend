/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = new Collection({
    "createRule": "@request.auth.role = \"technician\" || @request.auth.role = \"admin\"\n",
    "deleteRule": "@request.auth.role = \"technician\" || @request.auth.role = \"admin\"\n",
    "fields": [
      {
        "autogeneratePattern": "[a-z0-9]{15}",
        "hidden": false,
        "id": "text3208210256",
        "max": 15,
        "min": 15,
        "name": "id",
        "pattern": "^[a-z0-9]+$",
        "presentable": false,
        "primaryKey": true,
        "required": true,
        "system": true,
        "type": "text"
      },
      {
        "cascadeDelete": false,
        "collectionId": "pbc_2644302221",
        "hidden": false,
        "id": "relation3758943710",
        "maxSelect": 1,
        "minSelect": 0,
        "name": "booking",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "relation"
      },
      {
        "cascadeDelete": false,
        "collectionId": "_pb_users_auth_",
        "hidden": false,
        "id": "relation1899486841",
        "maxSelect": 1,
        "minSelect": 0,
        "name": "mechanic",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "relation"
      },
      {
        "hidden": false,
        "id": "date1704456905",
        "max": "",
        "min": "",
        "name": "serviceDate",
        "presentable": false,
        "required": true,
        "system": false,
        "type": "date"
      },
      {
        "autogeneratePattern": "",
        "hidden": false,
        "id": "text1843675174",
        "max": 0,
        "min": 0,
        "name": "description",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
      },
      {
        "hidden": false,
        "id": "number405181692",
        "max": null,
        "min": 0,
        "name": "cost",
        "onlyInt": false,
        "presentable": false,
        "required": false,
        "system": false,
        "type": "number"
      },
      {
        "hidden": false,
        "id": "select2063623452",
        "maxSelect": 1,
        "name": "status",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "select",
        "values": [
          "open",
          "closed"
        ]
      },
      {
        "hidden": false,
        "id": "autodate2990389176",
        "name": "created",
        "onCreate": true,
        "onUpdate": false,
        "presentable": false,
        "system": false,
        "type": "autodate"
      },
      {
        "hidden": false,
        "id": "autodate3332085495",
        "name": "updated",
        "onCreate": true,
        "onUpdate": true,
        "presentable": false,
        "system": false,
        "type": "autodate"
      }
    ],
    "id": "pbc_1029039944",
    "indexes": [],
    "listRule": "booking.customer = @request.auth.id || @request.auth.role != \"customer\"\n",
    "name": "service_records",
    "system": false,
    "type": "base",
    "updateRule": "@request.auth.role = \"technician\" || @request.auth.role = \"admin\"\n",
    "viewRule": "booking.customer = @request.auth.id || @request.auth.role != \"customer\"\n"
  });

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1029039944");

  return app.delete(collection);
})
