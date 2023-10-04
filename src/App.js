import React, { useState } from 'react';
import './App.css'
import Card1 from './componets/Card1';
import Card2 from './componets/Card2';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {
  const [allnum, setnum] = useState('')
  const [formattedNumber, setFormattedNumber] = useState('');
  const [allLetter, setletter] = useState('')
  const [errorText, seterrorText] = useState('')
  const [errorText1, seterrorText1] = useState('')
  const [errorText2, seterrorText2] = useState('')
  const [errorText3, seterrorText3] = useState('')
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [submittedData, setSubmittedData] = useState([]);

  const months = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];

  // ================cvc-number===================
  const nm = (e) => {
    let inputvalue = e.target.value;
    let num = /^[0-9]*$/;
    if (inputvalue.match(num)) {
      setnum(inputvalue);
      return true;
    }
  }
  // ============name=============

  const az = (e) => {
    const inputText = e.target.value;
    let letters = /^[a-zA-Z ]+$/;
    if (inputText.match(letters)) {
      setletter(inputText);
      return true;
    }
    else if (inputText === '') {
      setletter(inputText);
      return true;
    }
    else {
      return false;
    }
  }
  // ==============yy=================
  const handlechange = (e) => {

    const YY = e.target.value;
    setSelectedYear(YY);
  }
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 18 }, (_, index) => currentYear + index);

  // ===============card-number================
  const handleInputChange = (e) => {
    let inputNumber = e.target.value.replace(/\D/g, '');
    if (inputNumber.length > 16) {
      inputNumber = inputNumber.slice(0, 16);
    }

    const output = inputNumber.replace(/(\d{4})/g, '$1 ');
    const out = output.trim();
    setFormattedNumber(out);
  };
  // ================validationform==============
  const validationform = () => {
    let isError = false;

    if (formattedNumber.length < 16) {
      seterrorText('Card number required (i.e must be 16 digit)');
      isError = true;
    } else {
      seterrorText('');
    }

    if (allLetter.length === 0) {
      seterrorText1('Cardholder name required');
      isError = true;
    } else {
      seterrorText1('');
    }

    if (allnum.length < 3) {
      seterrorText2('CVC must be numeric');
      isError = true;
    } else {
      seterrorText2('');
    }
    if (selectedMonth === '' || selectedYear === '') {
      seterrorText3('Please select date!!');
      isError = true;
    } else {
      seterrorText3('');
    }

    return isError;
  };



  // =============submit api================
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validationform()) {
      setletter("");
      setFormattedNumber("");
      setSelectedMonth('');
      setSelectedYear('');
      setnum('');
      toast.error('Please Enter The Input!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });
      return;
    }

    toast.success('data submitted!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });


    const obj = {
      name: allLetter,
      cardNumber: formattedNumber,
      mm: selectedMonth,
      yy: selectedYear,
      cvc: allnum
    }
    setSubmittedData(obj);
    setletter("");
    setFormattedNumber("");
    setSelectedMonth('');
    setSelectedYear('');
    setnum('');
  }
  return (
    <>
      <Card1
        formattedNumber={formattedNumber}
        allLetter={allLetter}
        selectedYear={selectedYear}
        selectedMonth={selectedMonth}
        submittedData={submittedData}
        hint="0000 0000 0000 0000"
        hint1="HARSH TYAGI"
        hint2="00" />
      <Card2 submittedData={submittedData} hint="000" />
      <div id="main">

        <div id="s1">

        </div>
        <div id="s2">
          <form id='form'
            onSubmit={handleSubmit}
          >
            <div id='formup'>
              <section  >
                <label>CARDHOLDER NAME</label><br />
                <input name='name' type='Text' placeholder='e.g. Harsh Tyagi' value={allLetter} onChange={az} />
                <p style={{ color: 'red', marginBottom: '17px' }}>{errorText1}</p>
              </section >
              <section >
                <label>CARD NUMBER</label><br />
                <input name='' value={formattedNumber} onChange={handleInputChange} type='text' placeholder='e.g. 1234 5678 9123 0000' />
                <p style={{ color: 'red', marginBottom: '17px' }}>{errorText}</p>
              </section>
            </div>
            <div id='date'>
              <section id='MM'>
                <label>EXP.DATE(MM/YY)</label><br />
                <select name='month' placeholder='MM' value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)} id='mm'>
                  <option value="" disabled>MM</option>
                  {months.map((item) => (
                    <option key={item} value={item}>{item}</option>
                  ))}
                </select>
                <select name="year" placeholder='YY' value={selectedYear} onChange={handlechange} id="yy">
                  <option value="" disabled>YY</option>
                  {years.map((year) => (
                    <option key={year} value={year.toString().slice(-2)}>{year}</option>
                  ))}
                </select>
                <p style={{ color: 'red', marginBottom: '17px' }}>{errorText3}</p>
              </section>

              <section id='month'>
                <label>CVC</label><br />
                <input type='password' maxLength={'3'} value={allnum} onChange={nm} placeholder='CVC' />
                <p style={{ color: 'red', marginBottom: '17px' }}>{errorText2}</p>
              </section>

            </div>

            <section id='btn'>
              <button  >Confirm</button>

            </section>
            <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
            />
          </form>

        </div>
      </div>
    </>
  );
}

export default App;
