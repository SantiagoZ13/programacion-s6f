db.createCollection("libros");
db.libros.insertMany([
  {
    título: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    año: 1967,
    páginas: 432,
    género: "Realismo mágico",
  },
  {
    título: "1984",
    autor: "George Orwell",
    año: 1949,
    páginas: 328,
    género: "Ciencia ficción",
  },
  {
    título: "El Principito",
    autor: "Antoine de Saint-Exupéry",
    año: 1943,
    páginas: 96,
    género: "Fábula",
  },
  {
    título: "Don Quijote de la Mancha",
    autor: "Miguel de Cervantes",
    año: 1605,
    páginas: 863,
    género: "Novela",
  },
  {
    título: "El señor de los anillos",
    autor: "J.R.R. Tolkien",
    año: 1954,
    páginas: 1178,
    género: "Fantasía",
  },
]);

db.libros.find({ autor: "Gabriel García Márquez" });

db.libros.find({ año: { $gt: 1950 } });

db.libros.find({ páginas: { $gt: 300 } });

db.libros.find({ páginas: { $gte: 200, $lte: 400 } });

db.libros.find({ género: { $ne: "Fantasía" } });

db.libros.updateOne({ título: "1984" }, { $set: { año: 1948 } });

db.libros.updateMany({ género: "Fantasía" }, { $inc: { páginas: 10 } });

db.libros.find({
  $or: [{ autor: "J.R.R. Tolkien" }, { género: "Realismo mágico" }],
});

db.libros.find({
  $and: [{ autor: "Miguel de Cervantes" }, { páginas: { $gt: 300 } }],
});

db.libros.deleteMany({ año: { $lt: 1950 } });

db.libros.deleteOne({ título: "El Principito" });

db.libros.aggregate([
  {
    $group: {
      _id: "$género",
      promedioPáginas: { $avg: "$páginas" },
    },
  },
]);

db.libros.aggregate([
  {
    $group: {
      _id: "$autor",
      totalLibros: { $sum: 1 },
    },
  },
]);

db.libros.aggregate([
  { $sort: { páginas: -1 } },
  {
    $group: {
      _id: "$género",
      título: { $first: "$título" },
      páginas: { $first: "$páginas" },
    },
  },
]);

db.libros.createIndex({ autor: 1 });

db.libros.createIndex({ género: 1, año: 1 });

db.libros.find({ título: /^El/ });

db.libros.find({ autor: /ez/ });

// Añade un campo "reseñas" que sea un array de objetos
db.libros.updateMany(
  {},
  {
    $set: {
      reseñas: [
        { usuario: "lector1", puntuación: 5 },
        { usuario: "lector2", puntuación: 4 },
      ],
    },
  }
);

db.libros.find({ "reseñas.puntuación": 5 });

db.libros.aggregate([
  { $unwind: "$reseñas" },
  {
    $group: {
      _id: "$título",
      promedioPuntuación: { $avg: "$reseñas.puntuación" },
    },
  },
]);
