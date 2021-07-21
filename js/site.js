// Get the value from the interface.
// Start or Controller function or Entry point.
const getValues = () => {
    // get value from page.
    let fizzValue =  document.getElementById('fizz-value').value
    let buzzValue = document.getElementById('buzz-value').value

    // parse the numbers
    fizzValue = parseInt(fizzValue)
    buzzValue = parseInt(buzzValue)

    // check that the numbers are integer values
    if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue)) {
        // we call fizzBuzz function
        // let fizzBuzzArr = fizzBuzz(fizzValue, buzzValue)
        let fizzBuzzArr = fizzBuzzC(fizzValue, buzzValue)
        // we call displayData and write the value to the screen
        displayData(fizzBuzzArr)
    } else {
        alert("Please Enter A Valid Number")
    }

}

// Generate numbers from the start value to the end value.
// Our logic function(s)
const fizzBuzz = (fizzVal, buzzVal) => {
	// initialize the return array
    let fizzBuzzArray = []

    // loop from 0 to 100
    for (let i = 1; i <= 100; i++) {        
        // check if the value is divisible by both (3 & 5)
        // if so push FizzBuzz into an array not the number itself
        // check if the value is divisible by (3)
        // if so push Fizz into an array not the number itself
        // check if the value is divisible by (5)
        // if so push Buzz into an array not the number itself
        // if none then push the number to the array
        if ((i % fizzVal === 0) && (i % buzzVal === 0)) {
            fizzBuzzArray.push('FizzBuzz')
        } else if (i % fizzVal === 0) {
			fizzBuzzArray.push('Fizz')
		} else if (i % buzzVal === 0) {
			fizzBuzzArray.push('Buzz')
		} else {
            fizzBuzzArray.push(i)        
        }
    }
    return fizzBuzzArray
}

const fizzBuzzB = (fizzVal, buzzVal) => {
    let fizzBuzzArray = []
    let Fizz = false
    let Buzz = false

    for (let i = 1; i <= 100; i++) {
        Fizz = i % fizzVal === 0
        Buzz = i % buzzVal === 0

        switch(true) {
            case Fizz && Buzz: {
                fizzBuzzArray.push('FizzBuzz')
                break
            }
            case Fizz: {
                fizzBuzzArray.push('Fizz')
                break
            }
            case Buzz: {
                fizzBuzzArray.push('Buzz')
                break
            }
            default: {
                fizzBuzzArray.push(i)
                break
            }
        }
    }

    return fizzBuzzArray
}

// turnary aperator
const fizzBuzzC = (fizzVal, buzzVal) => {
    let fizzBuzzArray = []

    for (let i = 1; i < + 100; i++) {
        let value = ((i % fizzVal === 0 ? 'Fizz' : '') + (i % buzzVal === 0 ? 'Buzz' : '') || i)
        fizzBuzzArray.push(value)
    }

    return fizzBuzzArray
}

// Display the even numbers in bold.
// Display or view functions
// loop over the array and create a tablerow for each element
const displayData = (fbArray) => {
    // get the tbody element from the page
    let tableBody = document.getElementById('results')
    
    // get the template tag we have created
    let tableTemplate = document.getElementById('fbTemplate')

    // clear the table first
    tableBody.innerHTML = ''

    for (let index = 0; index < fbArray.length; index+=5) {
        let tRow = document.importNode(tableTemplate.content, true)

        // grab just the td's and put them into the array
        let rowCols = tRow.querySelectorAll('td')
        rowCols[0].classList.add(fbArray[index])
        rowCols[0].textContent = fbArray[index]

        rowCols[1].classList.add(fbArray[index + 1])
        rowCols[1].textContent = fbArray[index + 1]
        
        rowCols[2].classList.add(fbArray[index + 2])
        rowCols[2].textContent = fbArray[index + 2]
        
        rowCols[3].classList.add(fbArray[index + 3])
        rowCols[3].textContent = fbArray[index + 3]
        
        rowCols[4].classList.add(fbArray[index + 4])
        rowCols[4].textContent = fbArray[index + 4]

        // add all the row to the table
        tableBody.appendChild(tRow)        
    }
}