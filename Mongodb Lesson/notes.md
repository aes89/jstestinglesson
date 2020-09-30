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

    http://computationalculture.net/no-sql-the-shifting-materialities-of-database-technology/https://github.com/aes89/notes_and_examples.git


    table is similar to collection. Table will have different rows for different data types, documents will have a document with details of each thing (e.g. a doc for student details, vs a table with name/dob/etc).

> show dbs 
 shows databases
 won't show empty db

> db
shows current db

> use coder_academy
make a new db with a name

new student data
db.students.insert({ name: "Jerry Rice", age: 50 })
db.students.insertOne({ name: "Poop", age: 50 })
returns acknowledged and insertedId/ObjectId
will create if they don't exist already

db.collection.find -> returns student info, but info can be different i.e. schema not the same
db.students.find ({}) returns all

retrieve students from Sydney ("location" : "Sydney")
db.students.find({location: "sydney"})
db.students.find({location: "melbourne", age: 32})
returns all the docs with that value

from 2 cohorts
db.students.find( { location: { $in: [ "melbourne", "sydney" ] } } )

update with nickname field:
find student, then update $set

db.students.updateOne( { name: “mynamejeff” }, { $set: { nickname: “bigdawgydawg” } } )
update() is depreciated, should be using updateOne and updateMany but update is 1 by default.

update all students in Syd to have a teacher
db.students.updateMany( { location: "sydney" }, { $set: { teacher: "Nands" } } )
returns acknowledged true and modified count

remove nickname field:
db.students.updateOne( { name: “mynamejeff” }, { $unset: { nickname: “bigdawgydawg” } } )
db.students.updateOne( { name: “mynamejeff” }, { $unset: { nickname: “” } } )
Keefer says db.students.updateMany({nicknames:{$exists: true}}, {$unset:{nicknames:""}})

retrieve only students with nickname field
db.students.find({nickname: {$exists: true}})

fine index [1] = yeet. [1] does not work in dot notation
db.students.find({"nickname.1": "yeet"})
any index:
db.students.find({nickname: "gamer"})


return students with nicknames array of certain length
db.students.find( { nickname: { $size: 2 } } )

update melbourne to melb
db.students.updateMany( { location: { $in: [ "melbourne", "Melbourne" ] }, { $set: { location: "melb" } } )

update one record to live at different addresses (street, number and postcode). address needs to be a subdocument
db.students.updateOne( { name: “zeb” }, { $set: { address: { street: “doc lane”, number: “666”, postcode: “2345” } }
correct
vs 
db.students.updateOne({name: "Zeb"}, {$set: {street: "Fake Street", number: "123", postcode: 3213}})
not subdoc

find student by known postcode 2345
db.students.find({"address.postcode":"2345"})


student questions:
db.students.find() - create collection students if one doesn't exist? nope, returns nothing

can we get like a list of keys a field has? 
var allKeys = {};
db.students.find().forEach(function(doc){
Object.keys(doc).forEach(function(key){
allKeys[key]=1})});
allKeys;

n MongoDB Atlas Credits, plus access to MongoDB Compass and MongoDB University including free certification. Get access by connecting your GitHub account on MongoDB

db - whole thing
collection - like a table 
document - contained fields (can contain arrays and objects/subdocuments)


db.students.insertMany([{ name: "Bobby Jones" }, {name: "Zeb"}]) - insertMany returns an array so need square brackets

delete Zeb
db.students.deleteMany({name: "Zeb"}) (or deleteOne)