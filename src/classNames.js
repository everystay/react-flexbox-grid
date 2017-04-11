import styles from '../flexboxgrid.css';

export default function getClass(className) {
  return (styles && styles[className]) ? styles[className] : className;
}
