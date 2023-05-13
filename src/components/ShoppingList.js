

import { plantList } from '../datas/plantList'
import '../styles/ShoppingList.css'
import Soldes from './Soldes'

function ShoppingList() {
    
    // Version Foreach faite par moi
    //     const categories = [];
    //plantList.forEach(plant => {
    //  categories.includes(plant.category) ? categories :   categories.push(plant.category);
    //});
	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)


		

	return (
		<div>
			<ul>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
			<ul className='lmj-plant-list'>
			<Soldes />
			</ul>
		</div>
	)
}

export default ShoppingList