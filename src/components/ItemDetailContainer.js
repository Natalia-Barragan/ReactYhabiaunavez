import {useParams} from "react-router-dom"
const ItemDetailContainer = () => {
    const params = useParams();
    return (
        <div>
            <h1>Producto: {params.id}</h1>

        </div>
    )
}

export default ItemDetailContainer;