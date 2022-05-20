import './styles.css';


//props = propriedades, é algo que já vem da própria biblioteca e tem ligação com as pseudo classes que eu crio em formato html (ver index.jsx dentro de Home)
export function Card(props) {
    //também podemos trocar props por ex:({name, time}) e ao invés de {props.name} e {props.time} seria: {name} e {time}
    return (
        <div className='cardContainer'>
            <strong>{props.name}</strong>
            <small>{props.time}</small>
        </div>
    )
    
}