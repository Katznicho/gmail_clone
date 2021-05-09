import {createSlice} from "@reduxjs/toolkit"

const mailSlice  = createSlice({
    name:"mail",
    initialState:{
        mail:0,
        sendMessageIsOpen:false,
        selectedMail:null
    },
    reducers:{
        openSendMessage:state=>{
             state.sendMessageIsOpen = true
        },
        closeSendMessage:state=>{
            state.sendMessageIsOpen = false
        },
        selectMail:(state, {payload})=>{
            console.log(`The payload is here ${JSON.stringify(payload)}`)
            
            state.selectedMail = payload
        }

    }
})
export const {openSendMessage, closeSendMessage, selectMail} = mailSlice.actions
//selectors
export const selectOpenMail = (state)=>state.mail.selectedMail;
export const selectSendMessageIsOpen = (state)=>state.mail.sendMessageIsOpen;
export default mailSlice.reducer;