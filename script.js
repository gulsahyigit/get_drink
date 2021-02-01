const calcBottles = (total,oneDrink) => {
    let numOfBottles = Math.floor(total/oneDrink)
    return numOfBottles
}

//console.log(calcBottles(127,5))

const calcChange = (total, oneDrink) => {
    let change = total % oneDrink
    if(change === 0){
        return `You don't have any change.`
    }
    else{
        return `Your change is ${change} dollar.`
    }    
}

// console.log(calcChange(127,5))

const getDrink = (total, oneDrink) => {
    let numOfBottles = Math.floor(total/oneDrink)
    let change = total % oneDrink
    return `Leave House. \n Turn left. \n Go to the market. \n Buy 3 bottles of drink. \n Pay $${total} for drink. \n Leave market. \n Come back to the House. \n Hello Master, here is your $${change} change.`
}


console.log(getDrink(130, 5))