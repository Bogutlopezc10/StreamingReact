import {
  UPDATE_ERROR_UNMOUNT
} from './types';

export const createError = (error) => {
  if (!error.response) {
    return (
      {
        isError: true,
        statusText: "Hubo un error en el servidor",
        data: error.message,
        code: 'Desconocido'
      }
    )
  }
  else if (error.response.statusText !== "Bad Request") {
    return (
      {
        isError: true,
        statusText: error.response.statusText,
        data: error.response.status === 403 ? 'No tienes suficientes permisos' : 'Error. Inténtalo más tarde.',
        code: error.response.status
      }
    )
  }
  else if (error.response) {
    return (
      {
        isError: true,
        statusText: "Request failed with status code 400",
        data: "Bad Request",
        code: 400
      }
    )
  }

  return (
    {
      isError: true,
      statusText: "Request failed with status code 400 servidor caido",
      data: "Bad Request",
      code: 400
    }
  )
}


export const updateErrorUnmount = () => async dispatch => {

  dispatch({ type: UPDATE_ERROR_UNMOUNT });

}

