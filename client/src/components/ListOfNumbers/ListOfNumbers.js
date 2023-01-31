import React, {useState} from 'react'
const arr = [1,2,3,4,5,6,7,8,9,10]

const ListOfNumbers = () => {
    const [ListOfNumbers, setListOfNumbers] = useState(arr)

    const filterBiggerThanThree = () => {
        const tempArr = arr.filter((number) => number > 3)
        setListOfNumbers(tempArr)
        //option 2
        // setListOfNumbers(arr.filter((number) => number > 3))
    }

    const popAnumber = () => {
        const tempArr = [...ListOfNumbers]
        tempArr.pop()
        console.log(tempArr)
        setListOfNumbers(tempArr)




    }

  return (
    <div>
   <ul>
    {ListOfNumbers.map((number, index) => <li key={index}>{number}</li>)}
   </ul>
    <button onClick={filterBiggerThanThree}>Only bigger than 3</button>
    <button onClick={() => setListOfNumbers(arr)}>ALL NUMBERS</button>
    <button onClick={popAnumber}>Pop number from end</button>

    </div>
  )
}

export default ListOfNumbers