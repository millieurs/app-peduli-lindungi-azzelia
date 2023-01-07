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
            sarana:'',
            kotaTujuan:'',
            tglKeberangkatan:''
        },
        listdata:[]
    }
})