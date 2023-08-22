import { useState } from "react";
import TrainingAccountingForm from "./TrainingAccountingForm";
import TrainingTable from "./TrainingTable";

export default function TrainingAccounting() {
    
    const initialState = [];
    const [trainigList, setTrainingList] = useState(initialState);

    const handleSubmit = values => {
        console.log(values);
        let index = findInArray(values.date, trainigList);
        let updateData = [...trainigList];
        if (index >= 0) {
            updateData[index].way = parseFloat(updateData[index].way) + parseFloat(values.way);
        } else {
            updateData = [...trainigList, values];
        }

        setTrainingList(updateData);
    }

    const handleDelete = elem => {
        let index = findInArray(elem.date, trainigList);
        let updateData = [...trainigList];
        updateData.splice(index, 1);
        setTrainingList(updateData);
    }


    return <div className="view">
        <div className="form-block">
            <TrainingAccountingForm 
                formSubmit = {handleSubmit}
            />
            <TrainingTable 
                list ={trainigList}
                handleDelete = {handleDelete}
            />
        </div>
    </div>
}

function findInArray(search, array) {
    let result = -1;
    array.forEach((item, index) => {
        if (item.date == search) {
            result = index;
            return;
        }
    });

    return result;
}
