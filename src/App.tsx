import {useState} from "react";
import {IUser} from "./types/userTypes";
import List from "./components/List";
import AddUser from "./components/AddUser";

const App = () => {

    // variables
    const [peoples, setPeoples] = useState<IUser[]>([
        {
            id: 0,
            fullName: "مهدی فرشباف",
            age: 85,
            image_url: "https://toplearn.com/img/user/teachers/25033_1593aba2-5cb5-6add-a31f-39e35253dd2a_%DB%8C%D9%88%D9%86%D8%B3_%D9%82%D8%B1%D8%A8%D8%A7%D9%86%DB%8C.jpg",
            bio: "طراح و توسعه دهنده ی وب"
        }, {
            id: 1,
            fullName: "مسعود فرشباف",
            age: 85,
            image_url: "https://toplearn.com/img/user/teachers/5330_8314f4b2-34a0-8873-aaf8-39e35e71fa6b_%D9%85%D8%AD%D9%85%D8%AF_%D8%A7%D8%B1%D8%AF%D9%88%D8%AE%D8%A7%D9%86%DB%8C.png",
            bio: "طراح و توسعه دهنده ی موبایل"
        }])

    return (

        <div className="container">
            <h4 className="alert alert-info">مدیریت اشخاص</h4>
            <List peoples={peoples} setPeoples={setPeoples}/>
            <AddUser peoples={peoples} setPeoples={setPeoples}/>
        </div>
    );
}

export default App;
