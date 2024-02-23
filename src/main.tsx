import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import { ThemeContextProvider } from './Theme/ThemeContext.tsx';
import App from './App.tsx'
import './index.scss'
import SoundManager from './Components/Sounds/SoundManager.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <ThemeContextProvider>
            <SoundManager>
                <App />
            </SoundManager>
        </ThemeContextProvider>
    </BrowserRouter>
)
