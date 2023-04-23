import {useState} from 'react';
import styles from './styles.js';
import {View} from 'react-native';

export default function HorizontalLinkButton({image, altText, text, url}) {

    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
       setIsHover(true);
    };
    const handleMouseLeave = () => {
       setIsHover(false);
    };

    return (
        <View 
            style={isHover ? {...styles.container, ...styles.containerHover} : styles.container} 
            href={url} 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <img style={styles.icon} src={image} alt={altText}/>
            <text style={isHover ? {...styles.text, ...styles.textHover} : styles.text}>{text}</text>
        </View>
    );
  }
