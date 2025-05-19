import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { addStudents, updateStudent } from "../store/slices/students.slice"
import { useEffect } from "react"
import { setStudentSelected } from "../store/slices/studentSelected.slice"

const Form = () => {

    const { register, handleSubmit, reset } = useForm()
    const dispatch = useDispatch()
    const studentSelected = useSelector(state => state.studentSelected) //index.js store

    useEffect(() => {
        reset(studentSelected)
    }, [studentSelected])


    const submit = (data) => {
        if (studentSelected) {
            dispatch(updateStudent(data))
            setStudentSelected(null)
        } else {
            const id = (new Date()).getTime()
            //console.log(id)
            dispatch(addStudents({ ...data, id }))
        }
        reset({
            firstName: '',
            lastName: '',
            age: '',
        })

    }

    return (
        <div>
            <form action="" onSubmit={handleSubmit(submit)}>
                <input type="text" {...register("firstName")} placeholder="Name" />
                <input type="text" {...register("lastName")} placeholder="Last Name" />
                <input type="text" {...register("age")} placeholder="Age" />
                <button onSubmit={submit}>Submit</button>
            </form>
        </div>
    )
}

export default Form