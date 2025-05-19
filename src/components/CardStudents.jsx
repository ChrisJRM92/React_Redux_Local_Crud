import { useDispatch } from "react-redux"
import { deleteStudents } from "../store/slices/students.slice"
import { setStudentSelected } from "../store/slices/studentSelected.slice"

const CardStudents = ({student}) => {

    const dispatch = useDispatch()

    const handleDelete = () => {
        dispatch(deleteStudents(student.id))
    }

    const handleUpdate = () => {
        dispatch(setStudentSelected(student))
    }

    return (
        <div style={{borderStyle: 'solid', borderWidth: 1, borderColor: '#acacac' ,borderRadius: 20, margin: 10, padding: 10}}>
            <h2>Name: {student?.firstName}</h2>
            <h2>Last Name: {student?.lastName}</h2>
            <h2>Age: {student?.age}</h2>
            <label htmlFor=""><button onClick={handleUpdate}>Edit</button> <button onClick={handleDelete}>Delete</button></label>
        </div>
    )
}

export default CardStudents