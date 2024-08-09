import {useState, FormEvent, FC, Dispatch, SetStateAction} from "react";
import {IUser} from "../types/userTypes";

interface IProps {
    peoples: IUser[],
    setPeoples: Dispatch<SetStateAction<IUser[]>>
}

const AddUser: FC<IProps> = ({peoples, setPeoples}) => {

    // variables
    const [fullName, setFullName] = useState<string>("")
    const [age, setAge] = useState<number | string>()
    const [imageUrl, setImageUrl] = useState<string>("")
    const [bio, setBio] = useState<string>("")

    // functions
    const handleResetState = (): void => {
        setFullName("")
        setAge("")
        setImageUrl("")
        setBio("")
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        if (!fullName) return alert("نام و نام خانودگی الزامی است.")
        if (!age) return alert("سن الزامی است.")
        if (!imageUrl) return alert("تصویر الزامی است.")
        setPeoples([...peoples, {
            id: Math.floor(Math.random() * 1000000),
            age: Number(age),
            bio,
            fullName,
            image_url: imageUrl
        }])
        handleResetState()
    }

    return (
        <div className="col-md-6 col-lg-6 mx-auto">
            <form autoComplete="false" className="mt-3" onSubmit={(e) => handleSubmit(e)}>
                <input type="text" className="form-control mb-2" name="fullName" placeholder="نام و نام خانوادگی"
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
                <button type="submit" className="btn btn-success">افزودن به لیست</button>
            </form>
        </div>
    )
}
export default AddUser