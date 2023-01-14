import { createSlice } from '@reduxjs/toolkit'

export const ehacSlice = createSlice({
    name: 'ehac',
    initialState: {
        form:{
            nik:'',
            fullName:'',
            email:'',
            tglLahir:'',
            phoneNumber:'',
            sarana:{},
            kotaTujuan:{},
            tglKeberangkatan:''
        },
        listdata:[]
    },
    reducers: {
        setSarana: (state, action)  => {
            state.form.sarana = action.payload
        },
        setKotaTujuan: (state, action)  => {
            state.form.kotaTujuan = action.payload
        },
        setTglKeberangkatan:(state, action) =>{
            state.form.tglKeberangkatan =  action.payload
        }
    }
})

export const { 
    setSarana,
    setKotaTujuan,
    setTglKeberangkatan
 } = ehacSlice.actions
export default ehacSlice.reducer