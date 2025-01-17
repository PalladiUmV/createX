import { useParams } from 'react-router-dom'

export const BlogCardDetails = () => {
    const { cardId } = useParams()

    // Здесь вы можете получить данные о карточке по id из API или локального состояния
    const card = { id: parseInt(cardId), name: `Пост ${cardId}` }

    if (!cardId) {
        return <div>Карточка не найдена</div>
    }
    return (
        <div>
            <h1>Детали карточки</h1>
            <p>ID: {card.id}</p>
            <p>Название: {card.name}</p>
        </div>
    )
}
