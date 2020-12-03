import React from 'react';
import {MainpageAccountContext} from './AccountProvider';
import {MainpageSymbolsContext} from './SymbolsProvider';
import {MainpageSelectedSymbolContext} from './SelectedSymbolProvider';
import {MainpageSelectedStockDataContext} from './SelectedStockDataProvider';

const FullProvider = (props) => {

    return(
            <div>
                <MainpageAccountContext.Provider>
                    <MainpageSymbolsContext.Provider>
                        <MainpageSelectedSymbolContext.Provider>
                            <MainpageSelectedStockDataContext.Provider>
                                {props.children}
                            </MainpageSelectedStockDataContext.Provider>
                        </MainpageSelectedSymbolContext.Provider>
                    </MainpageSymbolsContext.Provider>
                </MainpageAccountContext.Provider>
            </div>
    )
}

export default FullProvider;