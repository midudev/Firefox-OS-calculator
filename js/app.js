// para comprobar si el último valor introducido en la calculadora es número o símbolo
var ultimoEsSimbolo = false;
// cuando un usuario pulsa un botón, empieza la magia
$$( "#numeros li" ).tap( function(e) {
  // pillamos los elementos de la vista
  var $resultado = $$( '#resultado' );
  // quitamos el evento por defecto
  e.preventDefault();
  // tomamos el valor del botón pulsado
  var $valor = $$( this ).html();
  // si el resultado en estos momentos es cero lo vaciamos
  if( $resultado.text() == 0 ) { $resultado.empty(); }
  // si el valor del botón es el igual, entonces hacemos el cálculo
  if( $valor === "=" )
  {
    // primero evaluamos la operación que hay en la caja
    var resultado_operacion = eval( $resultado.text() );
    // vaciamos el resultado y metemos el resultado de la operacion
    $resultado.html( resultado_operacion );
    // al pulsar = lo que hacemos es dejar un número como resultado, así que asignar correctamente la variable de simbolos
    ultimoEsSimbolo = false;    
  } else if( $valor === "c" ) {
  // si el valor del botón es el de limpiar la operación, limpiamos la pantalla
    // hacemos un html(0) para mostrar el 0 en la pantalla
    $resultado.html(0);
    // lo dejamos a cero, por lo tanto, el ultimo ya no es un simbolo
    ultimoEsSimbolo = false;
  } else {
    // guardamos en una variable la comprobación si el valor es un operando
    var valorEsOperando = ( $valor === "*" || $valor === "/" || $valor === "." || $valor === "+" || $valor === "-" );
    // comprobamos que el ultimo valor no es un simbolo (para no poner dos seguidos)
    if ( !ultimoEsSimbolo && valorEsOperando ) {
        $resultado.append( $valor );
        ultimoEsSimbolo = true;
    } else if ( !valorEsOperando )  {
        $resultado.append( $valor );
        ultimoEsSimbolo = false;
    }
  }
});