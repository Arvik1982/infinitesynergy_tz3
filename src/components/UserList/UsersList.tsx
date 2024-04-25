import { useEffect} from 'react'
import styles from './UsersList.module.css'
import data from '../../data/base.json'
import { IRootStoreType, UserType } from '../../types/types'
import { useDispatch, useSelector } from 'react-redux'
import { setDataArray, setUserData } from '../../store/slices/appSlice'

export default function UserList(){

    const users = useSelector((state: IRootStoreType)=>state.appRedux.dataArray)
    const dispatch = useDispatch()
    const userClickHandler=(user:UserType):void=>{dispatch(setUserData(user))}

    
    useEffect(()=>{data?dispatch(setDataArray(data)):''},[data])

    return(
        <>
        <div className={styles.content} >
            {users!==undefined?users.map((user)=>{return(
            <div style={{cursor:'pointer'}} onClick={()=>{userClickHandler(user)}} key={user._id}>{user.name}</div>
            )}):''}
        </div>
        </>
        )    
}