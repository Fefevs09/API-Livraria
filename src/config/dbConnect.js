import mongoose from "mongoose";

mongoose.connect("mongodb+srv://Vieira09:59vNYrRGR5orDLthDx728wU8bEkXZoMDbN9AmRtCP4MzRyKTks57NrneLmp6T7uJohbPKPtXckdoqmM5bPv88Ru9zScLQb7wyshcRVpKER2eHm4VxswsBXHrcZoHvu8c@livrarianodejs.kdp43qo.mongodb.net/Livraria-NodeJs");

let db = mongoose.connection;

export default db;

