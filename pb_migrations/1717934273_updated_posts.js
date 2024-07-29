/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ozpe0oebfmldefj")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mam8p5pf",
    "name": "motiv",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "urmkrte9",
    "name": "want",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ozpe0oebfmldefj")

  // remove
  collection.schema.removeField("mam8p5pf")

  // remove
  collection.schema.removeField("urmkrte9")

  return dao.saveCollection(collection)
})
