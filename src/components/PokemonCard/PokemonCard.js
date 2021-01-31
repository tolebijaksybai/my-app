import pokemonCard from './PokemonCard.module.css'
import cardBacked from '../../assets/img/card-back-side.jpg'

const PokemonCard = ({ ...props }) => {
	// console.log(props);
	return (
		<div className={pokemonCard.root}>
			<div className={pokemonCard.pokemonCard}>
				<div className={pokemonCard.cardFront}>
					<div className={pokemonCard.wrap, pokemonCard.front}>
						<div className={pokemonCard.pokemon, props.type}>
							<div className={pokemonCard.values}>
								<div className={pokemonCard.count, pokemonCard.top}>{props.values.top}</div>
								<div className={pokemonCard.count, pokemonCard.right}>{props.values.right}</div>
								<div className={pokemonCard.count, pokemonCard.bottom}>{props.values.bottom}</div>
								<div className={pokemonCard.count, pokemonCard.left}>{props.values.left}</div>
							</div>
							<div className={pokemonCard.imgContainer}>
								<img src={props.img} alt={props.name} />
							</div>
							<div className={pokemonCard.info}>
								<span className={pokemonCard.number}>{props.id}</span>
								<h3 className={pokemonCard.name}>{props.name}</h3>
								<small className={pokemonCard.type}>Type: <span>{props.type}</span></small>
							</div>
						</div>
					</div >
				</div >

				<div className={pokemonCard.cardBack}>
					<div className={pokemonCard.wrap, pokemonCard.back}>
						<img src={cardBacked} alt="Сard Backed" />
					</div>
				</div>

			</div >
		</div >
	)
}

export default PokemonCard;