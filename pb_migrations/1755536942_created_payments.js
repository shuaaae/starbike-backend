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
        "collectionId": "pbc_1958369654",
        "hidden": false,
        "id": "relation3318942979",
        "maxSelect": 1,
        "minSelect": 0,
        "name": "loan",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "relation"
      },
      {
        "cascadeDelete": false,
        "collectionId": "_pb_users_auth_",
        "hidden": false,
        "id": "relation4241804789",
        "maxSelect": 1,
        "minSelect": 0,
        "name": "paidBy",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "relation"
      },
      {
        "hidden": false,
        "id": "date1889812618",
        "max": "",
        "min": "",
        "name": "paymentDate",
        "presentable": false,
        "required": true,
        "system": false,
        "type": "date"
      },
      {
        "hidden": false,
        "id": "number2392944706",
        "max": null,
        "min": 1,
        "name": "amount",
        "onlyInt": false,
        "presentable": false,
        "required": false,
        "system": false,
        "type": "number"
      },
      {
        "hidden": false,
        "id": "select1582905952",
        "maxSelect": 1,
        "name": "method",
        "presentable": false,
        "required": false,
        "system": false,
        "type": "select",
        "values": [
          "cash",
          "gcash",
          "bank",
          "card"
        ]
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
          "posted",
          "reversed"
        ]
      },
      {
        "autogeneratePattern": "",
        "hidden": false,
        "id": "text488387443",
        "max": 0,
        "min": 0,
        "name": "gatewayRef",
        "pattern": "",
        "presentable": false,
        "primaryKey": false,
        "required": false,
        "system": false,
        "type": "text"
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
    "id": "pbc_631030571",
    "indexes": [
      "CREATE INDEX `idx_payments_loan_date` ON `payments` (\n  `loan`,\n  `paymentDate` DESC\n)"
    ],
    "listRule": "loan.customer = @request.auth.id || @request.auth.role != \"customer\"\n",
    "name": "payments",
    "system": false,
    "type": "base",
    "updateRule": "@request.auth.role != \"customer\"\n",
    "viewRule": "loan.customer = @request.auth.id || @request.auth.role != \"customer\"\n"
  });

  return app.save(collection);
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_631030571");

  return app.delete(collection);
})
