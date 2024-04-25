import { useEffect } from 'react'
import styles from './App.module.css'
import CurrentUser from './components/CurrentUser/CurrentUser'
import UserList from './components/UserList/UsersList'
import { setDataArray } from './store/slices/appSlice'
import { useDispatch} from 'react-redux'
import data from '../src/data/base.json'


function App() {
  const dispatch=useDispatch()

  useEffect(()=>{dispatch(setDataArray(data))},[])
  return (
    <>
      <div className={styles.content} >
        <UserList/>
        <CurrentUser/>       
      </div>      
    </>
  )
}
export default App
