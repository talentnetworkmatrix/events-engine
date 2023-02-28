export const getTokenAndInfoUserFromAPI = async (infoData) => {
  try {
    const response = await FAKEgetTokenAndInfoUserFromAPI(infoData);
    // if (!response.ok) throw new Error('Failed to fetch user');
    const data = await response.json; // response.json()
    const token = response.token; //response.headers.get('Authorization').split(' ')[1];

    return {
      userInfo: data,
      token
    }
  } catch (error) {
    throw new Error('Failed to fetch user');
  }
}

export const getInfoUserFromAPI = async (token) => {
  try {
    const response = await FAKEgetInfoUserFromAPI(token);
    // if (!response.ok) throw new Error('Failed to fetch user');
    return response.json; // response.json()
  } catch (error) {
    throw new Error('Failed to fetch user');
  }
}








const userExample = {
  username: 'johndoe',
  name: 'John Doe',
  isAdmin: true,
  isSpeaker: true,
  roleAdmin: 1, // 1: superadmin, 2: org, 3: eventadmin, 4: eventadminpartner
}

function FAKEgetTokenAndInfoUserFromAPI(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const respuestaSimulada = {
        token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c',
        mensaje: 'Llamada exitosa',
        json: {...userExample, email: data?.email}
      };
      resolve(respuestaSimulada);
    }, 2000); // La llamada se simula después de 2 segundos
  });
}
function FAKEgetInfoUserFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const respuestaSimulada = {
        json: {...userExample}
      };
      resolve(respuestaSimulada);
    }, 2000); // La llamada se simula después de 2 segundos
  });
}