import { useSelector } from 'react-redux'
import './App.css'
import Form from './components/FormStudents'
import CardStudents from './components/CardStudents'

function App() {
  const students = useSelector(state => state.students)
  console.log(students)

  return (
    <>
      <h1>Redux students CRUD</h1>
      <Form />
      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
        {
          students[0] ? students?.map(student => (<CardStudents key={student.id} student={student} />)) : <h2>No data found</h2>
        }
      </div>

    </>
  )
}

export default App
