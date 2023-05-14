import {IComment, TGetData} from './types';
import fetch from "node-fetch";

const COMMENTS_URL = 'https://jsonplaceholder.typicode.com/comments';

const getData: TGetData = (url) => {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText)
            }
            return response.json() as Promise<IComment[]>
        })
}


getData(COMMENTS_URL).then(res => {
    res.forEach(item => {
        console.log('ID: ', item.id, 'Email: ', item.email);
    })
})