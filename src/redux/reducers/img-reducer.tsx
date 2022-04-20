import {InferActionsTypes} from "../store";
import {Images} from "../../services/api-types";

export const actions = {
    setImg: (images: Array<Images>) => ({type: "SET_IMG", images} as const),
    setSelectedId: (id: number) => ({type: "SET_SELECTED_ID", id} as const)
}

export type ImgActionsType = InferActionsTypes<typeof actions>
type Selected = { selectedId: number | null }
type Img = { images: Array<Array<Images>> }
type ImgState = Img & Selected

const initialState: ImgState = {
    images: [],
    selectedId: null
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

        default:
            return state;
    }
}


export default imagesReducer