import '../src/css/theme.min.css'
import Testimonio from './componentes/Testimonio'

export default function App() {
  return (

    <div className='py-6'>
      <div className='container'>
        <div className='row mb-6'>
          <div className='col-md-12'>
            <div className='tab-content'>
              <div className='tab-pane fade show active'>
                <div className='row'>

                  <Testimonio
                    imgPokemon={'bulbasaur'}
                    nombrePokemon={'Bulbasaur'}
                    descripcionPokemon={'Este Pokémon nace con una semilla en el lomo, que brota con el paso del tiempo.'}
                    categoria={'Semilla'}
                    habilidad={'Espesura'} />

                  <Testimonio
                    imgPokemon={'Nidorina'}
                    nombrePokemon={'Nidorina'}
                    descripcionPokemon={'Se cree que el cuerno de la frente se le ha atrofiado para evitar herir a sus crías.'}
                    categoria={'Pin Veneno'}
                    habilidad={'Punto Tóxico'} />

                    <Testimonio
                    
                    imgPokemon={'Cubone'}
                    nombrePokemon={'Cubone'}
                    descripcionPokemon={'La planta florece cuando absorbe energía solar, lo cual le obliga a buscar siempre la luz.'}
                    categoria={'Solitario'}
                    habilidad='Cabeza Roca' />

                    <Testimonio 
                    imgPokemon={'Rhydon'}
                    nombrePokemon={'Rhydon'}
                    descripcionPokemon={'Cuando evoluciona, comienza a andar con las patas traseras. Es capaz de horadar rocas.'}
                    categoria={'Taladro'}
                    habilidad={'Pararrayos'}/>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>

  )
}

