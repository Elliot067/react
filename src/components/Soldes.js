
import { plantList } from '../datas/plantList'

function Soldes (){


return plantList.map((plant) => (
		<li key={plant.id} className='lmj-plant-item'>
			{plant.name}
			{plant.isSpecialOffer ? (<div className='lmj-sales'>Soldes</div>) : null}
		</li>
	))
		

    


}

export default Soldes