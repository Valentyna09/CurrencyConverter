import React,{useState} from 'react';

export default function Converter(props) {
    let uah = 1;
    let usdBuy = props.info.usdBuy;
    let usdSale = props.info.usdSale;
    let eurBuy = props.info.eurBuy;
    let eurSale = props.info.eurSale;
    let btcBuy = props.info.btcBuy;
    let btcSale = props.info.btcSale;
    let [firstNumber, setFirstNumber] = useState(' ');
    let [secondNumber, setSecondNumber] = useState(' ');
    let [firstUnit, setFirstUnit] = useState(uah);
    let [secondUnit, setSecondUnit] = useState(usdSale);

                // change Units
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
    function calculatingSecondNumber() {
        if (secondUnit === uah && firstUnit === uah) {
            return setSecondNumber(firstNumber);
        } else if (firstUnit === uah) {
            return setSecondNumber(firstNumber / secondUnit); 
        } else {
            return setSecondNumber(firstNumber * firstUnit / secondUnit);
        } 
    } 
    function SubmitFirst(event) {
        event.preventDefault();
        calculatingSecondNumber();
    }  
    function enterFirstNumber(event) {
        setSecondNumber('');
        setFirstNumber(event.target.value);
        SubmitFirst();   
    }
    function calculatingFirstNumber() {
        if (firstUnit === uah && secondUnit === uah) {
            return setFirstNumber (secondNumber)  
        } else if (secondUnit === uah) {
            return setFirstNumber(secondNumber / firstUnit);
        } else {
            return setFirstNumber(secondNumber * firstUnit / secondUnit);
        }
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
                                    <option value={uah}>₴ UAH (Ukraine Hryvnia)</option>
                                    <option value={usdBuy}>$ USD (US Dollar)</option>
                                    <option value={eurBuy}>€ EUR (Euro)</option>
                                    <option value={btcBuy}>BTC (Bitcoin)</option>
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
                                    <option value={uah}>₴ UAH (Ukraine Hryvnia)</option>
                                    <option value={usdSale}>$ USD (US Dollar)</option>
                                    <option value={eurSale}>€ EUR (Euro)</option>
                                    <option value={btcSale}>BTC (Bitcoin)</option>
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