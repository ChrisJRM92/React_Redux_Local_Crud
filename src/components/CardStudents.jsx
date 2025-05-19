import { useEffect } from "react"
import { useSelector } from "react-redux"

const CardStudents = ({student}) => {
    const students = useSelector(state => state.students)
    console.log(students)

    return (
        <div>
            <h2>Nombre: {student?.firstName}</h2>
            <h2>Apellido: {student?.lastName}</h2>
            <h2>Edad: {student?.age}</h2>
            <label htmlFor=""><button>Edit</button> <button>Delete</button></label>
        </div>
    )
}

export default CardStudents