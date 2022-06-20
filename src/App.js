import '../src/css/theme.min.css'
import Testimonio from './componentes/Testimonio'

export default function App() {

  const testimonios = [
    {
      imgPokemon: 'bulbasaur',
      nombrePokemon: 'Bulbasaur',
      descripcionPokemon: 'Este Pokémon nace con una semilla en el lomo, que brota con el paso del tiempo.',
      categoria: 'Semilla',
      habilidad: 'Espesura'

    },
    {
      imgPokemon: 'Cubone',
      nombrePokemon: 'Cubone',
      descripcionPokemon: 'Este Pokémon nace con una semilla en el lomo, que brota con el paso del tiempo.',
      categoria: 'Semilla',
      habilidad: 'Espesura',
    },
    {
      imgPokemon: 'Nidorina',
      nombrePokemon: 'Nidorina',
      descripcionPokemon: 'Este Pokémon nace con una semilla en el lomo, que brota con el paso del tiempo.',
      categoria: 'Semilla',
      habilidad: 'Espesura',
    },
    {
      imgPokemon: 'Rhydon',
      nombrePokemon: 'Rhydon',
      descripcionPokemon: 'Este Pokémon nace con una semilla en el lomo, que brota con el paso del tiempo.',
      categoria: 'Semilla',
      habilidad: 'Espesura',
    }
  ]
  return (

    <div className='py-6'>
      <div className='container'>
        <div className='row mb-6'>
          <div className='col-md-12'>
            <div className='tab-content'>
              <div className='tab-pane fade show active'>
                <div className='row'>

                  {
                    testimonios.map((item, i) => (
                      <Testimonio
                        key={i}
                        imgPokemon={item.imgPokemon}
                        descripcionPokemon={item.descripcionPokemon}
                        nombrePokemon={item.nombrePokemon}
                        categoria={item.categoria}
                        habilidad={item.habilidad}

                      />
                    ))
                  }

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  )
}

