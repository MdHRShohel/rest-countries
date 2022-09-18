// api link: https://restcountries.com/v2/all

const loadCountries = () => {
    fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}

loadCountries();