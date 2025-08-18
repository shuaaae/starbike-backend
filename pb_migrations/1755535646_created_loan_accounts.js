/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = new Collection({
    "createRule": "@request.auth.role != \"customer\"\n",
    "deleteRule": "@request.auth.role != \"customer\"\n",
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
        "collectionId": "_pb_users_auth_",
        "hidden": false,
        "id": "relation2168032777",
        "maxSelect": 1,
        "minSelect": 0,
        "name": "customer",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "relation"
      },
      {
        "cascadeDelete": false,
        "collectionId": "pbc_1020517649",
        "hidden": false,
        "id": "relation568557793",
        "maxSelect": 1,
        "minSelect": 0,
        "name": "motorcycle",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "relation"
      },
      {
        "hidden": false,
        "id": "number547392603",
        "max": null,
        "min": 1,
        "name": "principal",
        "onlyInt": false,
        "presentable": false,
        "required": false,
        "system": false,
        "type": "number"
      },
      {
        "hidden": false,
        "id": "number3445575445",
        "max": null,
        "min": 0,
        "name": "interestRate",
        "onlyInt": false,
        "presentable": false,
        "required": false,
        "system": false,
        "type": "number"
      },
      {
        "hidden": false,
        "id": "number1246054924",
        "max": null,
        "min": 1,
        "name": "termMonths",
        "onlyInt": true,
        "presentable": false,
        "required": false,
        "system": false,
        "type": "number"
      },
      {
        "hidden": false,
        "id": "date1269603864",
        "max": "",
        "min": "",
        "name": "startDate",
        "presentable": false,
        "required": true,
        "system": false,
        "type": "date"
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
          "active",
          "closed",
          "delinquent"
        ]
      },
      {
        "hidden": false,
        "id": "number794700391",
        "max": null,
        "min": null,
        "name": "monthlyDue",
        "onlyInt": false,
        "presentable": false,
        "required": false,
        "system": false,
        "type": "number"
      },
      {
        "hidden": false,
        "id": "number53768874",
        "max": null,
        "min": 0,
        "name": "lateFeePerDay",
        "onlyInt": false,
        "presentable": false,
        "required": false,
        "system": false,
        "type": "number"
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
    "id": "pbc_1958369654",
    "indexes": [],
    "listRule": "customer = @request.auth.id || @request.auth.role != \"customer\"\n",
    "name": "loan_accounts",
    "system": false,
    "type": "base",
    "updateRule": "@request.auth.role != \"customer\"\n",
    "viewRule": "customer = @request.auth.id || @request.auth.role != \"customer\"\n"
  });

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_1958369654");

  return app.delete(collection);
})
