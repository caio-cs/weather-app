// const APIKey = 'W5WQ7Yuaa3ONGBH6pMq5AKdm4ZIcCkOl'


// const getCityUrl = cityName =>
//   `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${APIKey}&q=${cityName}`

// const getCityData = async cityName => {
//   try {
//     const cityUrl = getCityUrl(cityName)
//     const response = await fetch(cityUrl)

//     if (!response.ok) {
//       throw new Error('Não foi possível obter os dados')
//     }

//     const [cityData] = await response.json()
//     return cityData

//   } catch ({ name, message }) {
//     alert(`${name}: ${message}`)
//   }
// }

// const getCityWeather = async cityName => {
//   try {
//     const { Key } = await getCityData(cityName)
//     const cityWeatherUrl = 
//     `http://dataservice.accuweather.com/currentconditions/v1/${Key}?apikey=${APIKey}`
//     const response = await fetch(cityWeatherUrl)

//     if (!response.ok) {
//       throw new Error('Não foi possível obter os dados')
//     }

//     const [cityWeatherData] = await response.json()
//     // debugger
//     return cityWeatherData
//   } catch ({ name, message }) {
//     alert(`${name}: ${message}`)
//   }
// }

// // getCityWeather('São Paulo')
const APIKey = 'W5WQ7Yuaa3ONGBH6pMq5AKdm4ZIcCkOl'
const baseUrl = 'http://dataservice.accuweather.com/'

const getCityUrl =  cityName => 
  `${baseUrl}locations/v1/cities/search?apikey=${APIKey}&q=${cityName}`

const getWeatherUrl = cityKey =>
  `${baseUrl}currentconditions/v1/${cityKey}?apikey=${APIKey}&language=pt-br`

const fetchData = async url => {
  try {
    const response = await fetch(url)

    if (!response.ok) {
      throw new Error('Não foi possível obter os dados')
    }

    return response.json()
  } catch ({ name, message }) {
    alert(`${name}: ${message}`)
  }
}

const getCityData = cityName => fetchData(getCityUrl(cityName))
const getCityWeather = cityKey => fetchData(getWeatherUrl(cityKey))
