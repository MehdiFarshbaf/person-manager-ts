import {useState} from "react";
import {IState, IUser} from "./types/userTypes";
import List from "./components/List";

const App = () => {

    // variables
    const [peoples, setPeoples] = useState<IUser[]>([{
        id: 0, fullName: "مهدی فرشباف", age: 85, image_url: "", bio: "asdfadsf"
    }])

    return (

        <div className="container">
            <h4 className="alert alert-info">مدیریت اشخاص</h4>
            <List peoples={peoples}/>
        </div>
    );
}

export default App;
