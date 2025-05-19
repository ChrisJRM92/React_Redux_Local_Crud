import { useEffect } from "react"
import { useSelector } from "react-redux"

const CardStudents = ({student}) => {
    const students = useSelector(state => state.students)
    console.log(students)

    return (
        <div style={{borderStyle: 'solid', borderWidth: 1, borderColor: '#acacac' ,borderRadius: 20, margin: 10, padding: 10}}>
            <h2>Name: {student?.firstName}</h2>
            <h2>Last Name: {student?.lastName}</h2>
            <h2>Age: {student?.age}</h2>
            <label htmlFor=""><button>Edit</button> <button>Delete</button></label>
        </div>
    )
}

export default CardStudents