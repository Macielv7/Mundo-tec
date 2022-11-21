import axios from "axios"

const api = axios.create({
    baseURL:'http://localhost:5000'
})


export async function loginadmmm(email, senha){
    const a = await api.post('/adm/loginnn',{
        email: email,
        senha: senha
    });
    return a.data;
}