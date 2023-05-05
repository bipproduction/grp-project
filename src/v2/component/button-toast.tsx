import toast from "react-simple-toasts";

export function buttonSimpan(){
    toast('Data Tersimpan', {
        time: 3000
    })
}

export function buttonReset(){
    toast("Data Reset", {
        time: 3000

    })
}