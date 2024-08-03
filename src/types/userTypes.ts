export interface IUser {
    id: number,
    fullName: string,
    age: number,
    image_url: string,
    bio?: string
}

export interface IState {
    user: {
        id: number,
        fullName: string,
        age: number,
        image_url: string,
        bio?: string
    }[]
}