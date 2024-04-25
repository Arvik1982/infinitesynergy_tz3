
import store from'../store/indexStore'
export type UserType ={
    _id: string,
    name: string,
    surname: string,
    age: number,
    email: string,
    department: string,
    company: string,
    jobTitle: string
}

export type IRootStoreType = ReturnType<typeof store.getState>;

