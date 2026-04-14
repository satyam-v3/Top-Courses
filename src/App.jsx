import Cards from './components/Cards'
import Filter from './components/Filter'
import Navbar from './components/Navbar'
import Spinner from './components/Spinner'
import { apiUrl, filterData } from './data'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import './App.css'


const App = () => {

  const [courses, setCourses] = useState(null)
  const [loading, setLoading] = useState(true)
  const [category, setCategory] = useState(filterData[0].title)

  const fetchData = async () => {
    setLoading(true)

    try {
      const response = await fetch(apiUrl)
      const data = await response.json()
      setCourses(data.data)
    } catch (error) {
      toast.error("Somthing went wrong!")
    }

    setLoading(false)
  }

  useEffect(() => {
    fetchData()

  }, [])

  return (
    <div className='min-h-screen flex flex-col overflow-x-hidden overflow-y-auto'>

      <div>
        <Navbar />
      </div>

      <div className='bg-bgDark2/50 flex-1'>
        <div>
          <Filter
            filterData={filterData}
            category={category}
            setCategory={setCategory}
          />
        </div>

        <div className='w-11/12 max-w-300 mx-auto flex flex-wrap justify-center items-center min-h-[50vh]'>
          {
            loading ? (<Spinner />) : (<Cards courses={courses} category={category} />)
          }
        </div>
      </div>

    </div>
  )
}

export default App