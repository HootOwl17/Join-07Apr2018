console.log("Iniciando");

var Informacion = {"nombre":"Pepe"}
//var DataInfo = JSON.parse(Informacion);
console.log("El nombre es "+ Informacion.nombre);//1ra forma para presentar Informacion
console.log("El nombre es "+Informacion["nombre"]);// 2da forma para presentar Informacion

var fs= require('fs');

var Archivo = fs.readFileSync("data.JSON");// lee lo que el archivo data.json tiene
var DataArchivo = JSON.parse(Archivo);// Escribe la nueva Informacion para la variable Archivo

console.log("El correo es "+ DataArchivo.correo);

DataArchivo.edad = 19;//1ra forma para agregar info a la Base de Datos
DataArchivo["Sexo"] = "Aveces";//2da Forma para agregar info a la Base de Datos

var GuardarArchivo = JSON.stringify(DataArchivo);
fs.writeFileSync('DATA.json',GuardarArchivo);//Guarda la info en DATA.Json
