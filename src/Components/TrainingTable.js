export default function TrainingTable({list, handleDelete}) {
    return <div>
        <ul className="table-header">
            <li>
                <span>Дата(дд.мм.гг)</span>
                <span>Пройдено км</span>
                <span>Действия</span>
            </li>
        </ul>
        <ul className="table">
            {list.map((item, index) => {
                return <li key={index}>
                    <span>{item.date}</span>
                    <span>{item.way}</span>
                    <span onClick={(e) => handleDelete(item)}>delete</span>
                </li>
            })}
        </ul>
    </div>
}