import { FancyLink } from '@/components/fancylink';
import { Title } from '@/components/title';
import '../styles/style.css';


const { BASE_URL } = ( import.meta as any ).env;
console.log( BASE_URL );

document.addEventListener( 'DOMContentLoaded', () =>
{
    const app = document.querySelector( '#app' );

    if ( app )
    {
        app.innerHTML = Title( '🚧 Under Construction 🚧' );
        app.appendChild( FancyLink( 'https://holeinonestudios.org', 'HoleInOneStudios' ) );
    }
} );