import React,{useState} from 'react';

export default function Converter(props) {
    let units = [
        {
            name: "₴ UAH (Ukraine Hryvnia)",
            buy: 1,
            sale: 1,
        },
        {
            name: "$ USD (US Dollar)",
            buy: props.info.usdBuy,
            sale: props.info.usdSale,
        },
        {
            name: "€ EUR (Euro)",
            buy: props.info.eurBuy,
            sale: props.info.eurSale,
        },
        {
            name: "BTC (Bitcoin)",
            buy: props.info.btcBuy,
            sale: props.info.btcSale,
        }
    ]
    let [firstNumber, setFirstNumber] = useState(' ');
    let [secondNumber, setSecondNumber] = useState(' ');
    let [firstUnit, setFirstUnit] = useState(units[0].buy);
    let [secondUnit, setSecondUnit] = useState(units[1].sale);
     
    function changeFirstUnit(event) {
        event.preventDefault();
        setFirstNumber('');
        setFirstUnit(event.target.value );
    } 
    function changeSecondUnit(event) {
        event.preventDefault();
        setSecondNumber('');
        setSecondUnit(event.target.value);
    }
                // change numbers and calculating
    function SubmitFirst(event) {
        event.preventDefault();
        calculatingSecondNumber();
    }

    function enterFirstNumber(event) {
        setSecondNumber('');
        setFirstNumber(event.target.value);
        SubmitFirst();   
    }
    // function calculatingSecondNumber() {
    //     if (secondUnit === units[0].sale && firstUnit === units[0].buy) {
    //         return setSecondNumber(firstNumber);
    //     } else {
    //         return setSecondNumber(firstNumber * firstUnit / secondUnit);
    //     }
    // }
    
    function calculatingSecondNumber() {
        setSecondNumber (secondUnit === units[0].sale && firstUnit === units[0].buy ? firstNumber : firstNumber * firstUnit / secondUnit);
    } 
    function SubmitSecond(event) {
        event.preventDefault();
        calculatingFirstNumber();
    }
    function enterSecondNumber(event) {          
        setFirstNumber('');
        setSecondNumber(event.target.value);
        SubmitSecond();
    }
    function calculatingFirstNumber() {
        setFirstNumber (firstUnit === units[0].buy && secondUnit === units[0].sale ? secondNumber : secondNumber * secondUnit / firstUnit);
    }
    // function calculatingFirstNumber() {
    //     if (firstUnit === units[0].buy && secondUnit === units[0].sale) {
    //         return setFirstNumber (secondNumber)  
    //     } else {
    //         return setFirstNumber(secondNumber * secondUnit / firstUnit);
    //     }
    // }
    return (
        <main>
            <div className='container Converter'>
                <h2>Currency Converter</h2>
                <div className="row mt-5 ms-0 ms-xl-5">
                    <p className='d-block d-xl-none'> I have</p>
                    <div className='col-12 col-xl-5'>
                        <form onSubmit={SubmitFirst}>
                            <div className='mb-3'>
                                <select name="first unit" value={firstUnit} onChange={changeFirstUnit}>
                                    {units.map(function (unitFirst, indexFirst) {
                                        return <option key={indexFirst} value={unitFirst.buy}> {unitFirst.name}</option>
                                    })}
                                </select>
                            </div>
                            <div>
                                <input type="text" name="firstValue" onChange={enterFirstNumber} value={firstNumber} />
                            </div>
                        </form >
                    </div>
                    <div className='col-1 d-none d-xl-block'>
                        <p>Buy</p>
                        <button className='d-inline-block'><i className="fa-solid fa-arrow-right-arrow-left"></i></button>
                        <p>Sale</p>
                    </div>
                    <div className='col-12 col-xl-5 mt-5 mt-xl-0'>
                        <p className='d-block d-xl-none'>I will get</p>
                        <form onSubmit={SubmitSecond}>
                            <div className='mb-3'>
                                <select name="second select" value={secondUnit} onChange={changeSecondUnit}>
                                    {units.map(function (unitSecond, indexSecond) {
                                        return <option key={indexSecond} value={unitSecond.sale}> {unitSecond.name}</option>
                                    })}
                                </select>
                            </div>
                            <div>
                                <input type="text" name="secondValue" onChange={enterSecondNumber} value={secondNumber} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}