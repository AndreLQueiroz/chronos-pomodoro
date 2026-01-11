 import { TimerIcon } from 'lucide-react';
import { Heading } from './components/Heading';
 
 import './styles/global.css';
 import './styles/theme.css';

 export function App() {
    
    return( 
    <>
    <Heading>
         Olá Mundo!
         
    <button>
        <TimerIcon/>
    </button>
         
    </Heading>

    <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit dignissimos id ipsam repellendus dolore veritatis recusandae, quibusdam obcaecati? Dolorem cum vel harum dolor voluptate omnis, autem est non animi delectus!
    </p>
    </>
    );
}

