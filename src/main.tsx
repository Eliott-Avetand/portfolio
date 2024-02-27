import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { ThemeContextProvider } from './Contexts/Theme.context.tsx';
import App from './App.tsx'
import SoundManager from './Contexts/Sound.context.tsx';
import LanguageProvider from './Contexts/Language.context.tsx';
import FooterProvider from './Contexts/Footer.context.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <ThemeContextProvider>
            <SoundManager>
                <LanguageProvider>
                    <FooterProvider>
                        <App />
                    </FooterProvider>
                </LanguageProvider>
            </SoundManager>
        </ThemeContextProvider>
    </BrowserRouter>
)
