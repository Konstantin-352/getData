export interface IComment {
    postId: number
    id: number
    name: string
    email: string
    body: string
}

export type TGetData = (url: string) => Promise<IComment[]>