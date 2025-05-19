import { useSelector } from 'react-redux'
import './App.css'
import Form from './components/FormStudents'
import CardStudents from './components/CardStudents'

function App() {
  const students = useSelector(state => state.students)
  console.log(students)

  return (
    <>
      <h1>Práctica Redux</h1>
      <Form/>
      {
        students?.map(student => (<CardStudents key={student.id} student={student}/>))
      }

    </>
  )
}

export default App
