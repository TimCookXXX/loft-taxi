export const serverLogIn = async (email, password) => {
  return fetch(
      `https://loft-taxi.glitch.me/auth`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email, password })
      }
  )
  .then(response => response.json())
}

export const serverRegistration = async (email, password, name, surname) => {
  return fetch(
    `https://loft-taxi.glitch.me/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password, name, surname })
    }
  )
  .then(response => response.json())
}

export const serverGetCard = async (token) => {
  return fetch(
      `https://loft-taxi.glitch.me/card?token=${token}`
  )
  .then(response => response.json())
}

export const serverSaveCard = async (cardNumber, cardName, expiryDate, cvc, token) => {
  return fetch(
      `https://loft-taxi.glitch.me/card`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ cardNumber, cardName, expiryDate, cvc, token })
      }
  )
  .then(response => console.log(response.json()))
}

export const serverGetRoute = async (address1, address2) => {
  return fetch(
    `https://loft-taxi.glitch.me/route?address1=${address1}&address2=${address2}`
  )
  .then(response => response.json())
  .then((data) => data)
}

export const serverAddressList = async() => {
  return fetch(
    `https://loft-taxi.glitch.me/addressList`
  )
  .then(response => response.json())
  .then((data) => data)
}