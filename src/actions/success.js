import { 
    UPDATE_SUCCESS_UNMOUNT,
    UNMOUNT_CAN_BE_POSTED
} from './types';


export const updateSuccessUnmount = () =>({

    type: UPDATE_SUCCESS_UNMOUNT
    
})

export const unmountCanBePosted = () => ({
    type: UNMOUNT_CAN_BE_POSTED
})