import {InferActionsTypes} from "../store";
import {Images} from "../../services/api-types";

export const actions = {
    setImg: (images: Array<Images>) => ({type: "SET_IMG", images} as const),
    setLoading: (loadingStatus: boolean) => ({type: "SET_LOADING", loadingStatus} as const),
}

export type ImgActionsType = InferActionsTypes<typeof actions>
type IsLoading = {
    isLoading: boolean
}

type Img = { images: Array<Array<Images>> }
type ImgState = Img & IsLoading

const initialState: ImgState = {
    images: [],
    isLoading: false
}

const imagesReducer = (state = initialState, action: ImgActionsType) => {
    switch (action.type) {
        case "SET_IMG": {
            let copyState = {...state}
            let copyImages = [...copyState.images]
            copyImages = action.images.reduce((acc:Array<Array<Images>>, curr) => {
                if(acc.length===0 || acc[acc.length-1].length===6){
                    acc.push([])
                }
                acc[acc.length-1].push(curr)
                return acc
            }, [])
            copyState.images = copyImages
            return copyState
        }
        case "SET_LOADING": {
            let copyState = {...state}
            copyState.isLoading = action.loadingStatus;
            return copyState
        }
      
        default:
            return state;
    }
}


export default imagesReducer