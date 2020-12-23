let items = [
    {
      "id": 1,
      "name" : "Itemcic Deluxe",
      "description" : "Much expensive. Only luxury stuff.",
      "price" : 420999
      
    },
    {
      "id": 2,
      "name" : "Itemcic express",
      "description" : "Cheap stuff. Made in PRC",
      "price" : 12
    }
  ];
  
  db.createCollection('items');
  const itemsCollection = db.getCollection('items');
  
  for (let item of items)
    itemsCollection.insert(item);