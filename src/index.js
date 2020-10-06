module.exports = function toReadable (number) {
    let hundred = 'hundred'
    let decimals = ['zero','one','two','three','four','five','six','seven','eight','nine','ten'
    ,'eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen']
    let twentyNinety = ['twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety']

    let decimal = (number) => {
        if (number % 10 === 0) return 
        if (number % 10 === 1) return decimals[1]
        if (number % 10 === 2) return decimals[2]
        if (number % 10 === 3) return decimals[3]
        if (number % 10 === 4) return decimals[4]
        if (number % 10 === 5) return decimals[5]
        if (number % 10 === 6) return decimals[6]
        if (number % 10 === 7) return decimals[7]
        if (number % 10 === 8) return decimals[8]
        if (number % 10 === 9) return decimals[9]
    }

    let tenthTwentynth = (number) => {
        if (number == 11) return decimals[11]
        else if (number == 10) return decimals[10]
        else if (number == 12) return decimals[12]
        else if (number == 13) return decimals[13]
        else if (number == 14) return decimals[14]
        else if (number == 15) return decimals[15]
        else if (number == 16) return decimals[16]
        else if (number == 17) return decimals[17]
        else if (number == 18) return decimals[18]
        else if (number == 19) return decimals[19]

    }

    let twentyNinetynth = (number) => {
        if (Math.floor(number / 10) == 2) return twentyNinety[0]
        else if (Math.floor(number / 10) == 3) return twentyNinety[1]
        else if (Math.floor(number / 10) == 4) return twentyNinety[2]
        else if (Math.floor(number / 10) == 5) return twentyNinety[3]
        else if (Math.floor(number / 10) == 6) return twentyNinety[4]
        else if (Math.floor(number / 10) == 7) return twentyNinety[5]
        else if (Math.floor(number / 10) == 8) return twentyNinety[6]
        else if (Math.floor(number / 10) == 9) return twentyNinety[7]
    }

    let hundreds = (number) => {
        if (number % 100 == 0) return (decimal(Math.floor(number / 100)) + ' ' + hundred)
        else if (number % 10 == 0 && number % 100 != 10) return (hundreds((Math.floor(number / 100) * 100)) + ' ' + twentyNinetynth(number % 100))
        else if (number % 100 >= 10 && number % 100 < 20) return ((hundreds(Math.floor(number / 100) * 100)) + ' ' + tenthTwentynth(number % 100))
        else if (number % 100 < 20) return ((hundreds(Math.floor(number / 100) * 100)) + ' ' + decimal(number % 10))
        else return (hundreds((Math.floor(number / 100) * 100)) + ' ' + twentyNinetynth(number % 100) + ' ' + decimal(number % 10))
    }

    if (number == 0) return decimals[0]
    if (number > 0 && number < 10) return decimal(number)
    else if (number >= 10 && number < 20) return tenthTwentynth(number)
    else if (number == 20 || number == 30 || number == 40 || number == 50 || number == 60 
        || number == 70 || number == 80 || number == 90) return twentyNinetynth(number)
    else if (number >= 20 && number < 100) return (twentyNinetynth(number) + ' ' + decimal(number))
    else if (number >= 100 && number < 1000) return hundreds(number)
}
