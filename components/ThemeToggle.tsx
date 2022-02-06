import { useEffect, useState } from "react";
import { useTheme } from 'next-themes';
import { FaSun } from 'react-icons/fa';
import { RiMoonFill } from 'react-icons/ri';
import { StyledButton } from '@components/SharedStyles';


export const ThemeToggle: React.FC<{ type: any }> = ({ type }) => {
    const [mounted, setMounted] = useState(false);
    const { setTheme, resolvedTheme } = useTheme();
  
    useEffect(() => setMounted(true), []);
  
    if (!mounted) return null;
  
    const toggleTheme = () => {
      const targetTheme = resolvedTheme === "light" ? "dark" : "light";
  
      setTheme(targetTheme);
    };

    return (
      <StyledButton variant={type} onClick={toggleTheme}>
        { resolvedTheme === 'light'? <RiMoonFill size={25}/> : <FaSun size={25}/> }
      </StyledButton>
    );
}