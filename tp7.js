/*
  TP7: Mejorar el módulo Diario
•	El módulo Deberá, de forma privada o pública, mostrar/renderizar las noticias en el DOM
•	El título deberá ser un H1, la descripción un P y la imagen un img

*/
'use strict';
var Diario = (function() {

  var noticias = [
    {
      id:1,
      titulo:'Dónde voto: consultá el padrón electoral 2017',
      descripcion:'Ya se pueden chequear los datos para las elecciones legislativas de este año',
      imagen:'images/padron.jpg'
    },
    {
      id:2,
      titulo:'Pronóstico del tiempo: fin de semana lluvioso y se acerca una ola polar',
      descripcion:'La temperatura bajará abruptamente a partir del domingo y la temperatura máxima será de un dígito',
      imagen:'images/clima.jpg'
    },
    {
      id:3,
      titulo:'Un equipo cordobés quedó segundo de su categoría en una competencia internacional de programación',
      descripcion:'En una de las competencias de programación más exigentes del mundo, la ICPC, el equipo argentino de la Universidad Nacional de Córdoba alcanzó el segundo lugar entre las mejores universidades de América Latina',
      imagen:'images/programadores.jpg'
    },
    {
      id:5,
      titulo:'El dólar, según el índice Big Mac',
      descripcion:'Para el indicador de The Economist, el peso no está sobrevaluado',
      imagen:'images/bigmac.jpg'
    }
  ]

  return {
    nombre: 'Las últimas noticias',
    descripcion: 'Mantengase informado',
    getNoticias:function(){
      for (var i = 0; i < noticias.length; i++) {
        console.log('Id: '+noticias[i].id);
        console.log('Titulo: '+noticias[i].titulo);
        console.log('Descripcion: '+noticias[i].descripcion);
      }
    },
    setNoticia:function(id,titulo,descripcion,imagen){
      var yaIngresada=false;
      for (var i = 0; i < noticias.length; i++) {
        if(noticias[i].titulo==titulo){
          console.log('La noticia ya fue ingresada');
          yaIngresada=true;
          break;
        }
      }
        if(yaIngresada==false){
          console.log('Se ingresa la noticia al diario');
          var nuevaNoticia ={
            id:id,
            titulo:titulo,
            descripcion:descripcion,
            imagen:imagen
          }
          noticias.push(nuevaNoticia);
        }
      },
      eliminarNoticia:function(id){
        for (var i = 0; i < noticias.length; i++) {
         if(noticias[i].id==id){
           noticias.splice(i,1);
         }
        }
      },
      ordenarNoticias:function(key){
        return noticias.sort(function(a,b){
          var x=a[key];
          var y=b[key];
          if(x>y){
            return 1;
          }else{
            return -1;
          }
        }
      )

    },
      render:function(){
        var contenedor=document.querySelector('main');

        for (var i = 0; i < noticias.length; i++) {
         var titulo=document.createElement('h2');
         titulo.innerHTML=noticias[i].titulo;

         var descripcion=document.createElement('p');
         descripcion.innerHTML=noticias[i].descripcion;

         var imagen=document.createElement('img');
         imagen.src=noticias[i].imagen;

         contenedor.appendChild(titulo);
         contenedor.appendChild(descripcion);
         contenedor.appendChild(imagen);
        }
      }
    }
  })()

//Diario.getNoticias();
Diario.setNoticia(4,'Rechazan una lista porque tiene sólo candidatas mujeres','La Cámara Electoral dijo que viola la igualdad de "trato político"; debe sumar hombres','images/mujeres.jpg');
Diario.setNoticia(5,'El dólar, según el índice Big Mac','Para el indicador de The Economist, el peso no está sobrevaluado','images/bigmac.jpg');
Diario.getNoticias();
console.log('Eliminando noticia 1');
Diario.eliminarNoticia(1);
Diario.getNoticias();
console.log("Ordenando noticias")
Diario.ordenarNoticias('id');
Diario.getNoticias();
Diario.render();
