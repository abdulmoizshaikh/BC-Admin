import { actionCreator } from "../common";
import axios from 'axios';
// const serverURL = 'http://192.168.0.120:8003';
const serverURL = 'http://34.67.219.49:8003';


const optionsCretor = (props) => {
    return {
        method: props.method,
        url: `${serverURL}${props.endPoint}`,
        data: props.body || {},
        // params: { foo: 'bar' },
        // headers: {}
    }
}


export const apiCreator = async (props, type, dispatch) => {
    return new Promise((resolve, reject) => {
        axios(optionsCretor(props))
            .then(response => {
                const { result } = response.data;
                dispatch(actionCreator(type, result))
                resolve(result)
            })
            .catch(error => reject(error))
    })
}