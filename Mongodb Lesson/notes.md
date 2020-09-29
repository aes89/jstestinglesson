NoSQL Databases

    Flexible data structure storage, can be as structured as you want it

    Very easy to change the schema

    Maps neatly to objects

    Low administrative overhead to scaling up 

    Performance differences can be huge by keeping related data nearby

    https://formulusblack.com/blog/compute-performance-distance-of-data-as-a-measure-of-latency/

MongoDB

    Structure

    https://docs.mongodb.com/manual/core/databases-and-collections/

    Has many databases

    To show databases show dbs

    To select a database use myDBName

    If the DB does not yet exist, mongoDB will create it for you

    A database has many collections

    db.myCollection.insertOne({fieldOne: "someval"})

    If the collection does not yet exist, mongoDB will create it for you

    A collection has many documents

    CRUD

    https://docs.mongodb.com/manual/crud/

    Create

    db.collection.insertOne

    db.collection.insertMany

    Read

    db.collection.find

    db.collection.findOne

    Update

    db.collection.updateOne

    db.collection.updateMany

    db.collection.replaceOne

    Delete

    db.collection.deleteOne

    db.collection.deleteMany

    Operators

    https://docs.mongodb.com/manual/reference/operator/

    "subDocument.someField":

    "arrayField.0": 

    $in

    $exists

    $set

    $unset

    $size

    and many more!