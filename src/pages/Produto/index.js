
import { useParams } from 'react-router-dom';
function Produto() {

    const { id } = useParams();
    return (
        <div>
            <h2>Pagina detalhes do produto</h2>
            <span>Meu produto eh {id}</span>
        </div>
    )
}

export default Produto;