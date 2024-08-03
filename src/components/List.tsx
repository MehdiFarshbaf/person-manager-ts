import {FC} from "react";

interface IProps {
    peoples: {
        id: number,
        fullName: string,
        age: number,
        image_url: string,
        bio?: string
    }[]
}

// const List = ({peoples}: IProps) => {
const List: FC<IProps> = ({peoples}) => {


    return (
        <div>list</div>
    )
}
export default List