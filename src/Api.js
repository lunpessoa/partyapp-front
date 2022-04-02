const BASE_API = 'https://rest-partyapp.herokuapp.com';

export default {
  checkToken :  async () => {

  },
  SIGN_IN : (body) => {
    return {
      url: `${BASE_API}/auth/authenticate`,
      options: {
        method: 'POST',
        headers:{
          Accept: 'application/json',
          'Content-Type': 'application/json'
         },
        body: JSON.stringify(body)
      }
    }
  },
  SIGN_UP : (body) => {
    return {
      url: `${BASE_API}/auth/register`,
      options: {
        method: 'POST',
        headers:{
          Accept: 'application/json',
          'Content-Type':'application/json'
        },
        body: JSON.stringify(body)
      }
    }
  },
  GET_USER : (token) => {
    return {
      url: `${BASE_API}/perfil`,
      options: {
        method: 'GET',
        headers:{
          Authorization: `Bearer ${token}`,
         },
      }
    }
  },
  PUT_ADDRESS : (body, token) => {
    return {
      url: `${BASE_API}/perfil/alter/user/endereco`,
      options: {
        method: 'PUT',
        headers:{
          'Content-Type':'application/json',
          Authorization: `Bearer ${token}`,
         },
         body: JSON.stringify(body)
      }
    }
  },
  PUT_PERFIL_INFO : (params, body, token) => {
    return {
      url: `${BASE_API}/perfil/alter/${params}`,
      options: {
        method: 'PUT',
        headers:{
          'Content-Type':'application/json',
          Authorization: `Bearer ${token}`,
         },
         body: JSON.stringify(body)
      }
    }
  },
  GET_OPEN_HOURS : (data, dia) => {
    return {
      url: `${BASE_API}/allHours?data=${data}&diaSemana=${dia}`,
      options: {
        method: 'GET',
        headers:{
          'Content-Type':'application/json',
         }
      }
    }
  },
  POST_APPOINT : (body, token) => {
    return {
      url: `${BASE_API}/agendamentos/agendar`,
      options: {
        method: 'POST',
        headers:{
          'Content-Type':'application/json',
          Authorization: `Bearer ${token}`,
         },
         body: JSON.stringify(body)
      }
    }
  },
  USER_APPOINTMENTS : (token) => {
    return {
      url: `${BASE_API}/perfil/agenda`,
      options: {
        method: 'GET',
        headers:{
          Authorization: `Bearer ${token}`,
         }
      }
    }
  },
  DELETE_APPOINTMENTS : (body, token) => {
    return {
      url: `${BASE_API}/perfil/agenda/delete`,
      options: {
        method: 'DELETE',
        headers:{
          'Content-Type':'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(body)
      }
    }
  },
}