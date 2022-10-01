// Ejercicio 1
// 1) Formulario con campos: Nombre, apellido y edad
// 2) Boton de enviar formulario: eventos Submit
// 3)Mostrar datos por pantalla

const form = 
    document.getElementById(`form`).addEventListener(`submit`, function (x) {
    const Nombre= document.getElementById(`nombre`).value;
    const apellido = document.getElementById(`apellido`).value
    const edad = document.getElementById(`edad`).value
    const producto= document.getElementById(`producto`).value
    const precio= document.getElementById(`precio`).value
    const entrega= document.getElementById(`entrega`).value
    x.preventDefault()

    const duc= document.querySelector(`.muestra`)
    const p = document.createElement(`p`)
    p.innerHTML = `Nombre:${Nombre}, Apellido:${apellido}, Edad:${edad} `
    duc.appendChild(p)

//Al formulario anterior agregarle un input para ingresar un producto, precio y fecha de entrega
// Luego mostrar por pantalla un mensaje coherente en el que figure toda la información ingresada.
    const duc2 = document.querySelector(`.muestra2`)
    const a = document.createElement(`p`)
    a.innerHTML=`Producto:${producto}, Precio:${precio}, Entrega:${entrega}`
    duc2.appendChild(a)

});

const form2=
    document.getElementById('form2').addEventListener(`submit`, function(e){
        const pesos= Number(document.getElementById('monto').value);
        const peso= (pesos*300);
        e.preventDefault()
        const cuenta= document.querySelector('.calculo')
        const cal = document.createElement(`p`)
        cal.innerHTML=`El cambio es ${peso}`
        cuenta.appendChild(cal)

    })
    
  
    

  const form3=
    document.getElementById('form3').addEventListener('submit', function(e){
        const cantPersonas= Number(document.getElementById('cantPersonas').value)
        const costoEstadia= Number(document.getElementById('costoEstadia').value)
        const cantDia= Number(document.getElementById('cantDias').value)
        const totalPersona= cantPersonas*costoEstadia*cantDia
        const cantRecorrer= Number(document.getElementById('cantRecorrer').value)
        const consAuto= Number(document.getElementById('consAuto').value)
        const precioNafta= Number(document.getElementById('precioNafta').value)
        const totalConsumo= (precioNafta/consAuto)*cantRecorrer
        e.preventDefault()
        const viaje= document.querySelector(`.viaje`)
        const viaje2= document.createElement(`p`)
        viaje2.innerHTML=`El consumo por persona es de $${totalPersona} y el consumo del viaje es de $${totalConsumo}`
        viaje.appendChild(viaje2)

    })  
// Ejercicio 4
// Crear un formulario para ingresar datos de un viaje (Destino, cantidad de personas, cantidad de km, precio de la nafta, consumo del auto en km/l, costo de la noche de estadia por persona , cantidad de dias que desea viajar)
// Por pantalla mostrar los resultados del viaje seleccionado. Utilizar funciones para cada cálculo por separado (si desean, pueden imrimir cada resultado individualmente)




