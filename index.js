console.log("Iniciando");

var Informacion = {"nombre":"Pepe"}
//var DataInfo = JSON.parse(Informacion);
console.log("El nombre es "+ Informacion.nombre);//1ra forma para presentar Informacion
console.log("El nombre es "+Informacion["nombre"]);// 2da forma para presentar Informacion

var fs= require('fs');

var Archivo = fs.readFileSync("data.JSON");
var DataArchivo = JSON.parse(Archivo);

console.log("El correo es "+ DataArchivo.correo);

DataArchivo.edad = 19;//1ra forma para agregar info a la Base de Datos
DataArchivo["Sexo"] = "Aveces";

var GuardarArchivo = JSON.stringify(DataArchivo);
fs.writeFileSync('DATA.json',GuardarArchivo);
