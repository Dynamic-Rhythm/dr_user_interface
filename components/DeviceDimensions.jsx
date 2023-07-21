import { useWindowDimensions } from 'react-native';

export const DeviceHeight = () => {
    const {height} = useWindowDimensions();
    return height;
}

export const DeviceWidth = () => {
    const {width} = useWindowDimensions();
    return width;
}
