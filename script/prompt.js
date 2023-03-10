// alert('hey! show me the alert')
const showAlert = () => {
    alert('show me the alert')
}

const lendMoney = () =>{
    const result = confirm('will you lend me 500 taka?')
    console.log(result)
    if(result === true){
        console.log('Acceptable')
    }
    else{
        console.log('Not Acceptable')
    }
}

const getInfo = () =>{
    const name = prompt('Tell me your name')
    if(name === null){
        alert('Please write your name')
    }
    else{
        console.log(name, 'Welcome to this world!')
    }
}