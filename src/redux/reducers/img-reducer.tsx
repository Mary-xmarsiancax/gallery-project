import {InferActionsTypes} from "../store";
import {Images} from "../../services/api-types";

export const actions = {
    setImg: (images: Array<Images>) => ({type: "SET_IMG", images} as const),
    setSelectedId: (id: number) => ({type: "SET_SELECTED_ID", id} as const)
}

type ImgActionsType = InferActionsTypes<typeof actions>
type Selected = { selectedId: number | null }
type Img = { images: Array<Array<Images>> }
type ImgState = Img & Selected

const initialState: ImgState = {
    images: [[], [], [], []],
    selectedId: null
}

const imagesReducer = (state = initialState, action: ImgActionsType) => {
    switch (action.type) {
        case "SET_IMG": {
            let copyState = {...state}
            let copyImages = [...copyState.images]
            copyImages = action.images.reduce((acc, curr, index) => {
                if (index < 6) {
                    acc[0].push(curr)
                } else if (index < 12) {
                    acc[1].push(curr)
                } else if (index < 18) {
                    acc[2].push(curr)
                } else {
                    acc[3].push(curr)
                }
                return acc
            }, [[], [], [], []] as any)
            copyState.images = copyImages
            console.log("copyState",copyState);
            return copyState
        }

        default:
            return state;
    }
}


export default imagesReducer