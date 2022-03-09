
> db.users.insert({"first_name":"tushit"})
WriteResult({ "nInserted" : 1 })

> db.users.insertMany([{"first_name":"biraj","email":"biraj@gmail.com","gender":"male","ip_address":1,"age":20}])
{        "acknowledged" : true,
        "insertedIds" : [
                ObjectId("6228d258c81caace6faa6c8f")
        ]
}> db.users.insertMany([{"first_name":"pan","email":"pan@gmail.com","gender":"male","ip_address":2,"age":23}])
{
        "acknowledged" : true,
        "insertedIds" : [
                ObjectId("6228d297c81caace6faa6c90")
        ]
}
> db.users.insertMany([{"first_name":"viraj","email":"viraj@gmail.com","gender":"male","ip_address":3,"age":25}])
{
        "acknowledged" : true,
        "insertedIds" : [
                ObjectId("6228d2b8c81caace6faa6c91")
        ]
}
> db.user.find({})
> db.user.find()
> db.user.find()
> db.users.find()
{ "_id" : ObjectId("6228d0dec81caace6faa6c8d"), "first_name" : "tushit" }
{ "_id" : ObjectId("6228d258c81caace6faa6c8f"), "first_name" : "biraj", "email" : "biraj@gmail.com", "gender" : "male", "ip_address" : 1, "age" : 20 }
{ "_id" : ObjectId("6228d297c81caace6faa6c90"), "first_name" : "pan", "email" : "pan@gmail.com", "gender" : "male", "ip_address" : 2, "age" : 23 }
{ "_id" : ObjectId("6228d2b8c81caace6faa6c91"), "first_name" : "viraj", "email" : "viraj@gmail.com", "gender" : "male", "ip_address" : 3, "age" : 25 }
> db.users.find().pretty()
{ "_id" : ObjectId("6228d0dec81caace6faa6c8d"), "first_name" : "tushit" }
{
        "_id" : ObjectId("6228d258c81caace6faa6c8f"),
        "first_name" : "biraj",
        "email" : "biraj@gmail.com",
        "gender" : "male",
        "ip_address" : 1,
        "age" : 20
}
{
        "_id" : ObjectId("6228d297c81caace6faa6c90"),
        "first_name" : "pan",
        "email" : "pan@gmail.com",
        "gender" : "male",
        "ip_address" : 2,
        "age" : 23
}
{
        "_id" : ObjectId("6228d2b8c81caace6faa6c91"),
        "first_name" : "viraj",
        "email" : "viraj@gmail.com",
        "gender" : "male",
        "ip_address" : 3,
        "age" : 25
}
> db.users.insertMany([{"first_name":"sema","email":"sema@gmail.com","gender":"female","ip_address":4,"age":26}])  
{
        "acknowledged" : true,
        "insertedIds" : [
                ObjectId("6228d340c81caace6faa6c92")
        ]
}
> db.users.insertMany([{"first_name":"babita","email":"babita@gmail.com","gender":"female","ip_address":5,"age":36}])
{
        "acknowledged" : true,
        "insertedIds" : [
                ObjectId("6228d35ec81caace6faa6c93")
        ]
}
> db.users.insertMany([{"first_name":"rakha","email":"rakha@gmail.com","gender":"female","ip_address":6,"age":32}])  
{
        "acknowledged" : true,
        "insertedIds" : [
                ObjectId("6228d37dc81caace6faa6c94")
        ]
}
> db.users.insertMany([{"first_name":"vina","email":"vina@gmail.com","gender":"female","ip_address":7,"age":30}])  
{
        "acknowledged" : true,
        "insertedIds" : [
                ObjectId("6228d3a1c81caace6faa6c95")
        ]
}

> db.users.insertMany([{"first_name":"babita","email":"babita@gmail.com","gender":"female","ip_address":8,"age":31}])
{
        "acknowledged" : true,
        "insertedIds" : [
                ObjectId("6228d3efc81caace6faa6c97")
        ]
}
> db.users.insertMany([{"first_name":"rohit","email":"rohit@gmail.com","gender":"male","ip_address":9,"age":37}])    
{
        "acknowledged" : true,
        "insertedIds" : [
                ObjectId("6228d40cc81caace6faa6c98")
        ]
}
> db.users.insertMany([{"first_name":"saurabh","email":"saurabh@gmail.com","gender":"male","ip_address":10,"age":37}])
{
        "acknowledged" : true,
        "insertedIds" : [
                ObjectId("6228d42fc81caace6faa6c99")
        ]
}
> db.users.find({"first_name":"tushit"}){ "_id" : ObjectId("6228d0dec81caace6faa6c8d"), "first_name" : "tushit" }
> db.users.find().pretty()
Error: error doing query: failed: network error while attempting to run command 'find' on host '127.0.0.1:27017'
> db.users.find().pretty()
{ "_id" : ObjectId("6228d0dec81caace6faa6c8d"), "first_name" : "tushit" }
{
        "_id" : ObjectId("6228d258c81caace6faa6c8f"),
        "first_name" : "biraj",
        "email" : "biraj@gmail.com",
        "gender" : "male",
        "ip_address" : 1,
        "age" : 20
}
{
        "_id" : ObjectId("6228d297c81caace6faa6c90"),
        "first_name" : "pan",
        "email" : "pan@gmail.com",
        "gender" : "male",
        "ip_address" : 2,
        "age" : 23
}
{
        "_id" : ObjectId("6228d2b8c81caace6faa6c91"),
        "first_name" : "viraj",
        "email" : "viraj@gmail.com",
        "gender" : "male",
        "ip_address" : 3,
        "age" : 25
}
{
        "_id" : ObjectId("6228d340c81caace6faa6c92"),
        "first_name" : "sema",
        "email" : "sema@gmail.com",
        "gender" : "female",
        "ip_address" : 4,
        "age" : 26
}
{
        "_id" : ObjectId("6228d35ec81caace6faa6c93"),
        "first_name" : "babita",
        "email" : "babita@gmail.com",
        "gender" : "female",
        "ip_address" : 5,
        "age" : 36
}
{
        "_id" : ObjectId("6228d37dc81caace6faa6c94"),
        "first_name" : "rakha",
        "email" : "rakha@gmail.com",
        "gender" : "female",
        "ip_address" : 6,
        "age" : 32
}
{
        "_id" : ObjectId("6228d3a1c81caace6faa6c95"),
        "first_name" : "vina",
        "email" : "vina@gmail.com",
        "gender" : "female",
        "ip_address" : 7,
        "age" : 30
}
{
        "_id" : ObjectId("6228d3efc81caace6faa6c97"),
        "first_name" : "babita",
        "email" : "babita@gmail.com",
        "gender" : "female",
        "ip_address" : 8,
        "age" : 31
}
{
        "_id" : ObjectId("6228d40cc81caace6faa6c98"),
        "first_name" : "rohit",
        "email" : "rohit@gmail.com",
        "gender" : "male",
        "ip_address" : 9,
        "age" : 37
}
{
        "_id" : ObjectId("6228d42fc81caace6faa6c99"),
        "first_name" : "saurabh",
        "email" : "saurabh@gmail.com",
        "gender" : "male",
        "ip_address" : 10,
        "age" : 37
}
> db.users.update({"_id":ObjectId("6228d340c81caace6faa6c92")},{$set:{"last_name":"saxena"}})
WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 1 })
> db.users.find().pretty()
{ "_id" : ObjectId("6228d0dec81caace6faa6c8d"), "first_name" : "tushit" }
{
        "_id" : ObjectId("6228d258c81caace6faa6c8f"),
        "first_name" : "biraj",
        "email" : "biraj@gmail.com",
        "gender" : "male",
        "ip_address" : 1,
        "age" : 20
}
{
        "_id" : ObjectId("6228d297c81caace6faa6c90"),
        "first_name" : "pan",
        "email" : "pan@gmail.com",
        "gender" : "male",
        "ip_address" : 2,
        "age" : 23
}
{
        "_id" : ObjectId("6228d2b8c81caace6faa6c91"),
        "first_name" : "viraj",
        "email" : "viraj@gmail.com",
        "gender" : "male",
        "ip_address" : 3,
        "age" : 25
}
{
        "_id" : ObjectId("6228d340c81caace6faa6c92"),
        "first_name" : "sema",
        "email" : "sema@gmail.com",
        "gender" : "female",
        "ip_address" : 4,
        "age" : 26,
        "last_name" : "saxena"
}
{
        "_id" : ObjectId("6228d35ec81caace6faa6c93"),
        "first_name" : "babita",
        "email" : "babita@gmail.com",
        "gender" : "female",
        "ip_address" : 5,
        "age" : 36
}
{
        "_id" : ObjectId("6228d37dc81caace6faa6c94"),
        "first_name" : "rakha",
        "email" : "rakha@gmail.com",
        "gender" : "female",
        "ip_address" : 6,
        "age" : 32
}
{
        "_id" : ObjectId("6228d3a1c81caace6faa6c95"),
        "first_name" : "vina",
        "email" : "vina@gmail.com",
        "gender" : "female",
        "ip_address" : 7,
        "age" : 30
}
{
        "_id" : ObjectId("6228d3efc81caace6faa6c97"),
        "first_name" : "babita",
        "email" : "babita@gmail.com",
        "gender" : "female",
        "ip_address" : 8,
        "age" : 31
}
{
        "_id" : ObjectId("6228d40cc81caace6faa6c98"),
        "first_name" : "rohit",
        "email" : "rohit@gmail.com",
        "gender" : "male",
        "ip_address" : 9,
        "age" : 37
}
{
        "_id" : ObjectId("6228d42fc81caace6faa6c99"),
        "first_name" : "saurabh",
        "email" : "saurabh@gmail.com",
        "gender" : "male",
        "ip_address" : 10,
        "age" : 37
}
> db.users.findOne({"_id" : ObjectId("6228d340c81caace6faa6c92")})
{
        "_id" : ObjectId("6228d340c81caace6faa6c92"),
        "first_name" : "sema",
        "email" : "sema@gmail.com",
        "gender" : "female",
        "ip_address" : 4,
        "age" : 26,
        "last_name" : "saxena"
}

> db.user.remove({"last_name":"saxena"})
WriteResult({ "nRemoved" : 0 })
> db.users.remove({"last_name":"saxena"})
WriteResult({ "nRemoved" : 1 })
> db.dropDatabase()
{ "ok" : 1 }
> show dbs
admin   0.000GB
config  0.000GB
local   0.000GB
mydb    0.000GB

