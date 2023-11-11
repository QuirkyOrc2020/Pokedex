import { FastAverageColor } from "fast-average-color";

export const getColorFromUrl = async (url: string) => {
    
    try {
        const fac = new FastAverageColor();
        const color = await fac.getColorAsync(url);
        if(color.error) return null;
        return color.hex;
    }
    catch(error) {
        console.log(error);
        return null;
    }
}