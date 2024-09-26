export const CAP_NHAT_EMAIL = "CAP_NHAT_EMAIL"
export const CAP_NHAT_ID = "CAP_NHAT_ID"


const intial ={
    email: "NguyenHoangTuan",
    score: 0,
    adresss: "TPHCM",
    id: "",

}


export default function actionForReducer(state = intial, payload)
{
    switch(payload.type){
        case "CAP_NHAT_EMAIL":
            return{
                ...state,
                email: payload.email
            }
        case "CAP_NHAT_ID":
            return{
                ...state,
                id: payload.id
            } 
        default:
            return state
    }
} 