import React, { useState, useCallback, useEffect } from 'react';
import Personal from './Personal';
import ContactInformation from './ContactInformation';
import Education from './Education';
import Experience from './Experience';

const enumObj = {
  0: <Personal />,
  1: <ContactInformation />,
  2: <Education />,
  3: <Experience />,
};

const Form = () => {
  const [counter, setCounter] = useState(0);

  const EnumState = () => {
    return enumObj[counter]
  } 

  //React Hooks Solution 2022
  const pageNav = useCallback(
    (count) => () => {
      //best practice use function version for setState
      setCounter((currentCount)=>{
        return currentCount + count
      })
    },
    [],
  )

  const saveData = () =>{
    // localStorage.setItem('items', JSON.stringify(items))
  }

  return (
    // <form>
    <div className='Form'>
      <EnumState ></EnumState>

      <div className='form-nav'>
        {counter !== 0 &&
          <button onClick={pageNav(-1)} >back</button>
        }
        {counter !==3  &&
          <button onClick={pageNav(1)} >Next</button>
        }
        {counter > 2  &&
          <button onClick={saveData} >Save</button>
        }
      </div>
    </div>
    // </form>
  );
};

export default Form;
