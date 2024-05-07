import Image from 'next/image'
import LogoIcon from './public/logo.svg'
import { useTheme } from "nextra-theme-docs";
import DarkLogo from './public/darklogo.svg'
import { useState,useEffect } from 'react';

const useDark = () => {
  const { resolvedTheme } = useTheme();
  const [isDark, setIsDark] = useState(false);
  useEffect(() => {
    setIsDark(resolvedTheme === "dark");
    return () => {
      false;
    };
  }, [resolvedTheme]);
  return isDark;
};


export default {  
  project: {
    link: 'https://github.com/nikhitkumar00/INVO_V2'
  },

  primaryHue: 1,
  primarySaturation:1,
  staticImage: true,
  
  logo: ()=>{
    const isDark = useDark();
      
      return(
        <>
          <Image src={isDark?DarkLogo:LogoIcon} width="60" height="30" alt="invo" style={{ marginRight: "10px" }} />

        </>
      )
  },
  footer:{
    text:()=>{
      return (<>
      <p>©  {new Date().getFullYear()} Team INVO</p>
      </>)
    }  }
}