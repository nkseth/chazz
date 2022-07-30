import { createContext, useState } from "react";
import {ethers} from 'ethers';
export const Wallet=createContext()

const WalletProvider=({children})=>{
    const [defaultAccount,setDefaultAccount]=useState(null)
    const [userBalance,setUserBalance]=useState(null)
    const [btnText,setBtnText]=useState('Connect Wallet')
    const ConnectWallet=()=>{
        if(window.ethereum){
        
            window.ethereum.request({method:'eth_requestAccounts'})
            .then((result)=>{
                accountchangeHandler(result[0])
            })
        }
        else {
            alert("download wallet")
        }
    }

    const accountchangeHandler=(newAccount)=>{
        setDefaultAccount(newAccount)
        setBtnText(newAccount)
        getUserBalance(newAccount.toString())
    }

    const getUserBalance=(address)=>{
            window.ethereum.request({method:'eth_getBalance',params:[address,'latest']})
            .then((balance)=>{
                setUserBalance(ethers.utils.formatEther(balance))
            })
    }

    window.ethereum.on('accountsChanged',accountchangeHandler)
    window.ethereum.on('chainChanged',()=>{window.location.reload()})
    return <Wallet.Provider value={{defaultAccount,userBalance,btnText,ConnectWallet}}>
{children}
    </Wallet.Provider>
}
export default WalletProvider