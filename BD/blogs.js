// Crear colecciones
db.createCollection("usuarios");
db.createCollection("posts");
db.createCollection("comentarios");

// Insertar datos de ejemplo
db.usuarios.insertMany([
  { _id: 1, nombre: "Usuario1", email: "usuario1@example.com" },
  { _id: 2, nombre: "Usuario2", email: "usuario2@example.com" },
]);

db.posts.insertMany([
  {
    _id: 1,
    título: "Primer post",
    contenido: "Contenido...",
    autor: 1,
    fecha: new Date(),
  },
  {
    _id: 2,
    título: "Segundo post",
    contenido: "Contenido...",
    autor: 2,
    fecha: new Date(),
  },
]);

db.comentarios.insertMany([
  { post: 1, usuario: 2, texto: "Buen post!", fecha: new Date() },
  { post: 1, usuario: 1, texto: "Gracias!", fecha: new Date() },
]);

// Consultas:
// Posts de un usuario con más de 10 comentarios
db.posts.aggregate([
  {
    $lookup: {
      from: "comentarios",
      localField: "_id",
      foreignField: "post",
      as: "comentarios",
    },
  },
  {
    $match: {
      $expr: { $gt: [{ $size: "$comentarios" }, 10] },
    },
  },
]);

// Usuarios más activos (con más posts)
db.posts.aggregate([
  {
    $group: {
      _id: "$autor",
      totalPosts: { $sum: 1 },
    },
  },
  { $sort: { totalPosts: -1 } },
  {
    $lookup: {
      from: "usuarios",
      localField: "_id",
      foreignField: "_id",
      as: "usuario",
    },
  },
  { $unwind: "$usuario" },
]);

// Comentarios recientes en todos los posts
db.comentarios.find().sort({ fecha: -1 }).limit(10);
