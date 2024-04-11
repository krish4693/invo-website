import Image from 'next/image'
import LogoIcon from './public/logo.svg'
import { useTheme } from "nextra-theme-docs";

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
    link: 'https://github.com/shuding/nextra'
  },

  primaryHue: 1,
  primarySaturation:1,
  staticImage: true,
  
  logo: ()=>{

      return(
        <>
          <Image src={LogoIcon} width="60" height="30" alt="invo" style={{ marginRight: "10px" }} />

        </>
      )
  }
}