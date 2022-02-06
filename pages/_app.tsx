import { ThemeProvider } from 'next-themes';
import { lightTheme } from '@styles/stitches.config';
import '@styles/globals.css';
// import '@components/Navigation/LinkBox.module.css';

export default function App({ Component, pageProps }) {
    return (
        <ThemeProvider
            attribute='class'
            defaultTheme='system'
            value={{
                light: lightTheme.className,
                dark: "dark",
            }}
        >   
          <Component {...pageProps} />
        </ThemeProvider>
    );
};
