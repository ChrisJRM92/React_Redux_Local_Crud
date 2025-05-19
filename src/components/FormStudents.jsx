import { useForm } from "react-hook-form"
import { useDispatch } from "react-redux"
import { addStudents } from "../store/slices/students.slice"

const Form = () => {

    const { register, handleSubmit, reset } = useForm()

    const dispatch = useDispatch()
    const submit = (data) => {
        const id = (new Date()).getTime()
        console.log(id)
        dispatch(addStudents({...data, id}))
        reset()
    }

    return (
        <div>
            <form action="" onSubmit={handleSubmit(submit)}>
                <input type="text" {...register("firstName")} placeholder="Nombre" />
                <input type="text" {...register("lastName")} placeholder="Apellido" />
                <input type="text" {...register("age")} placeholder="Edad"/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Form