import { useDispatch, useSelector } from 'react-redux'
import styles from './CurrentUser.module.css'
import { IRootStoreType, UserType } from '../../types/types'
import { ChangeEvent, useEffect, useState } from 'react'
import { setDataArray, setUserData } from '../../store/slices/appSlice'


export default function CurrentUser(){
    const userData= useSelector((state: IRootStoreType)=>state.appRedux.userData)
    const base = useSelector((state: IRootStoreType)=>state.appRedux.dataArray)

    const [baseDataArr, setBaseDataArr]=useState<Array<UserType>>([])
    const [userNewId, setUserNewId]=useState('')
    const [userName, setUserName]=useState('')
    const [userSurname, setUserSurName]=useState('')
    const [userMail, setUserMail]=useState('')
    
    const dispatch = useDispatch()
    
    useEffect(()=>{
        setBaseDataArr([...base]);
        setUserNewId(userData._id);
        setUserName(userData.name);
        setUserSurName(userData.surname);
        setUserMail(userData.email)},[userData]);

    const handleDataChangeId = (event:ChangeEvent<HTMLInputElement>):void=>{setUserNewId(event.target.value)}
    const handleDataChangeName = (event:ChangeEvent<HTMLInputElement>):void=>{setUserName(event.target.value)}
    const handleDataChangeSurname = (event:ChangeEvent<HTMLInputElement>):void=>{setUserSurName(event.target.value)}
    const handleDataChangeMail = (event:ChangeEvent<HTMLInputElement>):void=>{setUserMail(event.target.value)}    
    
    const saveButtonClick = (userId:string)=>{    
        if(userId){
    const currentUserIndex = baseDataArr.findIndex((el)=>{return el._id===userId})
    const obj ={...baseDataArr[currentUserIndex]}
    Object.assign(obj, {_id:userNewId, name:userName, surname: userSurname, email: userMail })
    baseDataArr[currentUserIndex]=obj
    dispatch(setDataArray(baseDataArr))
    dispatch(setUserData(obj))
        }   
    }
    return(
    <div className={styles.content}>           
        <div className={styles.content__body}>
            <div className={styles.content__header}>
                <div className={styles.header__textbox}>
                    <span className={styles.header__textbox_content}>Пользователь: {userData._id}</span>
                </div>
            </div>
                <div className={styles.content__body_user}>
                    <div className={styles.content__body_avatar} ></div>
                <div className={styles.content__body_data}>
                <div className={styles.body__data_title}>   
                    <div className={styles.data__element_title}>id</div>
                    <div className={styles.data__element_title}>Имя</div>
                    <div className={styles.data__element_title}>Фамилия</div>
                    <div className={styles.data__element_title}>Почта</div>                   
                </div>
                <div className={styles.body__data_content}>
                    <input onChange={(event)=>{handleDataChangeId(event)}} value={userNewId} className={styles.data__element_content}></input>
                    <input onChange={(event)=>{handleDataChangeName(event)}} value={userName} className={styles.data__element_content}></input>
                    <input onChange={(event)=>{handleDataChangeSurname(event)}} value={userSurname} className={styles.data__element_content}></input>
                    <input onChange={(event)=>{handleDataChangeMail(event)}} value ={userMail} className={styles.data__element_content}></input>
                </div>
                </div>
            </div>                
        <button onClick={()=>saveButtonClick(userData._id)}> save </button>  
        </div>             
        </div>
    )
}