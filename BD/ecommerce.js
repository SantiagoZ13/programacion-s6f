// Crear colección productos
db.createCollection("productos");
db.productos.insertMany([
  { nombre: "Laptop", precio: 1200, categoría: "Electrónica", stock: 15 },
  { nombre: "Smartphone", precio: 800, categoría: "Electrónica", stock: 0 },
  { nombre: "Libro", precio: 20, categoría: "Libros", stock: 50 },
  { nombre: "Camisa", precio: 35, categoría: "Ropa", stock: 30 },
]);

// Crear colección pedidos
db.createCollection("pedidos");
db.pedidos.insertMany([
  {
    usuario: "cliente1",
    productos: ["Laptop", "Libro"],
    total: 1220,
    fecha: new Date(),
  },
  {
    usuario: "cliente2",
    productos: ["Smartphone"],
    total: 800,
    fecha: new Date(),
  },
]);

// Consultas:
// Productos agotados
db.productos.find({ stock: 0 });

// Productos en una categoría con precio entre X e Y
db.productos.find({
  categoría: "Electrónica",
  precio: { $gte: 500, $lte: 1500 },
});

// Total de ventas por categoría
db.pedidos.aggregate([
  { $unwind: "$productos" },
  {
    $lookup: {
      from: "productos",
      localField: "productos",
      foreignField: "nombre",
      as: "productoInfo",
    },
  },
  { $unwind: "$productoInfo" },
  {
    $group: {
      _id: "$productoInfo.categoría",
      totalVentas: { $sum: "$productoInfo.precio" },
    },
  },
]);

// Productos más vendidos
db.pedidos.aggregate([
  { $unwind: "$productos" },
  {
    $group: {
      _id: "$productos",
      totalVendido: { $sum: 1 },
    },
  },
  { $sort: { totalVendido: -1 } },
]);
