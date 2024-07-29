/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ozpe0oebfmldefj")

  collection.name = "information"

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wklnrnmz",
    "name": "numberAndName",
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

  collection.name = "posts"

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "wklnrnmz",
    "name": "title",
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
})
