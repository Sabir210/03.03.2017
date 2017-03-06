var a = new Date();
document.write(a + " " + "hal hazırkı vaxt");
document.write("<br>");
var b = new Date(2017, 2, 19, 24,00, 00  );
document.write(b);
document.write("<br>");
var c = a.getDate();
var d = b.getDate();
document.write(d-c+ " "+ "gün");
document.write("<br>");
var e = a.getHours();
var f = b.getHours();
document.write((d-c)*(e-f)+ " " + "saat");
document.write()
document.write("<br>");

var y = a.getMinutes();
var z = b.getMinutes();
document.write((d-c)*(e-f)*(y-z)+ " "+ "dəqiqə");
