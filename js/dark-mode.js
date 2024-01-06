function darkmode() { 
    const body = document.body
    const wasDarkMode = localStorage.getItem('darkmode') === 'true'

    localStorage.setItem('darkmode', !wasDarkMode)
    body.classList.toggle('dark-mode', !wasDarkMode)
}

document.querySelector('.darkMode').addEventListener('click', darkmode)

const btn = document.querySelector('.darkMode')
