

const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

const connect = () => {
    mongoose.connect("mongodb://127.0.0.1:27017/books")
}

const sectionSchema = new mongoose.Schema(
    {
        sectionName: {
            type: String,
            require: true ,
        }
    },
    {
        versionKey: false,
        timestamps: true  
    }
);

const Section = mongoose.model("section", sectionSchema)   

app.get("/sections", async (req, res) => {
    try {
        const sections = await Section.find({}).lean().exec()
        return res.status(200).send({ Sections: sections });
    } catch (error) {
        console.log(error);
        return res.status(500).send("problem with network");
    }

});

//   Post

app.post("/sections", async (req, res) => {
    try {
        const section = await Section.create(req.body);
        return res.status(201).send(section);
    } catch (error) {
        console.log(error);
        return res.status(500).send({ error: error });
    }

});

//   Books 

const bookSchema = new mongoose.Schema(
    {
        bookName: { type: String, require: true },
        bookBody: { type: String, require: true },
        section_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "section",
            required: true
        },
        author_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "author",
            required: true
        },
    },
    {
        versionKey: false,
        timestamps: true,
    }
);


const Book = mongoose.model("book", bookSchema)

app.get("/books", async (req, res) => {
    try {
        const books = await Book.find({}).lean().exec()
        return res.status(200).send({ Books: books });
    } catch (error) {
        console.log(error);
        return res.status(500).send("problem with network");
    }

});

//  Post  part

app.post("/books", async (req, res) => {
    try {
        const book = await Book.create(req.body);
        return res.status(201).send(book);
    } catch (error) {
        console.log(error);
        return res.status(500).send({ error: error });
    }

});


const authorSchema = new mongoose.Schema(
    {
        first_name: {
            type: String,
            require: true
        },
        last_name: {
            type: String,
            require: true
        }
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

const Author = mongoose.model("author", authorSchema)

app.get("/author", async (req, res) => {
    try {
        const authors = await Author.find({}).lean().exec()
        return res.status(200).send({ Authors: authors });
    } catch (error) {
        console.log(err);
        return res.status(500).send("problem with network");
    }

});

// post data 

app.post("/author", async (req, res) => {
    try {
        const author = await Author.create(req.body);
        return res.status(201).send(author);
    } catch (error) {
        console.log(error);
        return res.status(500).send({ error: error });
    }

});

//  books by auther 

app.get("/:authorId/books", async (req, res) => {
    try {
        const books = await Book.find({ author_id: req.params.authorId }).lean().exec();
        return res.status(200).send(books);
    } catch (error) {
        return res.status(500).send({ error: error })
    }
})


app.get("/books/:sectionId", async (req, res) => {
    try {
        const books = await Book.find({ section_id: req.params.sectionId }).lean().exec();
        return res.status(200).send(books);
    } catch (error) {
        return res.status(500).send({ error: error })
    }
})


app.get("/books/:authorId/:sectionId", async (req, res) => {
    try {
        const books = await Book.find({ author_id: req.params.authorId, section_Id: req.params.sectionId }).lean().exec();
        return res.status(200).send(books);
    } catch (error) {
        return res.status(500).send({ error: error })
    }
})

app.listen(5040, async () => {
    try {
        await connect()
        console.log("Listening to port 5040");
    } catch (error) {
        console.log("some thing is wrong");
    }

})
