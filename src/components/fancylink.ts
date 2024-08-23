import styles from '../styles/FancyLink.module.css';

export function FancyLink ( url: string, text: string ): HTMLAnchorElement
{
    // Create the anchor element.
    const link = document.createElement( 'a' );
    // Apply the CSS module class.
    link.className = styles.fancyLink;
    // Set other properties.
    link.href = url;
    link.textContent = text;

    return link;
}