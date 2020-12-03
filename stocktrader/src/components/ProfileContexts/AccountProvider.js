import React, {createContext,useState, useEffect} from 'react';
import Axios from 'axios';

export const MainpageAccountContext = createContext();


export const MainpageAccountProvider = (props) => {
    const [AccData, setAccData] = useState({});
    
    useEffect(() => {
      FetchData();
    }, []);

    const FetchData = () => {
      console.log("trying to fetch");

      

      Axios.get("http://localhost:8080/user/getuseraccount")
        .then(resp => setAccData(resp.data));

      console.log("finished fetch", AccData);
    } 
    

      return(
            <MainpageAccountContext.Provider value={[AccData, setAccData]} >
                {props.children}
            </MainpageAccountContext.Provider>
        );
  
} 