import {Dispatch, FC, SetStateAction} from "react";
import {IUser} from "../types/userTypes";
import {AiOutlineUserDelete} from "react-icons/ai";
import EditUser from "./EditUser";

interface IProps {
    peoples: IUser[],
    setPeoples: Dispatch<SetStateAction<IUser[]>>
}

// const List = ({peoples}: IProps) => {
const List: FC<IProps> = ({peoples, setPeoples}) => {

    const handleDeleteUser = (id: number): void => {
        const persons: IUser[] = [...peoples]
        const filteredUsers: IUser[] = persons.filter(person => person.id !== id)
        setPeoples(filteredUsers)
    }

    const renderList: JSX.Element[] = peoples.map(user => (
        <div key={user.id} className="col-12 col-lg-6 mb-2">
            <div className="card">
                <div className="card-body d-flex align-items-center">
                    <img src={user.image_url} alt={user.fullName} width={100} height={100}
                         className="img-fluid rounded img-thumbnail"/>
                    <div className="me-3">
                        <p><span className="h2">{user.fullName}</span><span
                            className="badge bg-primary me-3">{user.age} سال</span></p>
                        <p className="text-muted">{user.bio}</p>
                    </div>
                </div>
                <div className="operation_btns">
                    <EditUser user={user} setUsers={setPeoples} users={peoples}/>
                    <AiOutlineUserDelete onClick={() => handleDeleteUser(user.id)} className="text-danger m-1"
                                         size={30}/>
                </div>
            </div>
        </div>
    ))

    return (
        <div className="row">
            {renderList}
        </div>
    )
}
export default List