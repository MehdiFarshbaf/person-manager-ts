import {FaUserEdit} from "react-icons/fa";
import {Modal} from "react-bootstrap";
import {Dispatch, FC, FormEvent, SetStateAction, useState} from "react";
import {IUser} from "../types/userTypes";

interface IProps {
    user: IUser,
    setUsers: Dispatch<SetStateAction<IUser[]>>,
    users: IUser[]
}

const EditUser: FC<IProps> = ({user, setUsers, users}) => {

    // variables
    const [showModal, setShowModal] = useState<boolean>(false)
    const [fullName, setFullName] = useState<string>(user.fullName)
    const [age, setAge] = useState<number | string>(user.age)
    const [imageUrl, setImageUrl] = useState<string>(user.image_url)
    const [bio, setBio] = useState<string | undefined>(user.bio)

    //functions
    const handleEdit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!fullName) return alert("نام و نام خانودگی الزامی است.")
        if (!age) return alert("سن الزامی است.")
        if (!imageUrl) return alert("تصویر الزامی است.")

        const allUsers: IUser[] = [...users]
        const index: number = allUsers.findIndex(u => u.id == user.id)
        allUsers[index] = {
            age: Number(age), image_url: imageUrl, bio, fullName, id: user.id
        }
        setUsers(allUsers)
        setShowModal(false)
    }
    return (
        <>
            <FaUserEdit size={30} onClick={() => setShowModal(true)} className="text-primary m-1"/>
            <Modal centered size="lg" show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header>
                    <Modal.Title>{user.fullName}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form autoComplete="false" className="mt-3" onSubmit={(e) => handleEdit(e)}>
                        <input type="text" className="form-control mb-2" name="fullName"
                               placeholder="نام و نام خانوادگی"
                               onChange={e => setFullName(e.target.value)}
                               value={fullName}/>
                        <input type="text" className="form-control mb-2" name="age" placeholder="سن"
                               onChange={e => setAge(e.target.value)}
                               value={age}/>
                        <input type="text" className="form-control mb-2" name="image-url" placeholder="آدرس تصویر"
                               onChange={e => setImageUrl(e.target.value)}
                               value={imageUrl}/>
                        <textarea className="form-control mb-2" name="bio" placeholder="بیوگرافی" rows={7} value={bio}
                                  onChange={e => setBio(e.target.value)}
                        />
                        <button type="submit" className="btn btn-success">ویرایش کاربر</button>
                        <button className="btn btn-danger me-2" onClick={() => setShowModal(false)}>انصراف</button>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    )
}
export default EditUser