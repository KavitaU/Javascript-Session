/**
 * Created by root on 1/11/17.
 */
/*Q1.Why is typeof null is not null??*/
/*This is a long-standing bug in JS, but one that is likely never going to be fixed. Too much code on the Web relies on the bug and thus fixing it would cause a lot more bugs!/!**!/*/

/*Q2.Custom typeof function which return typeof passed arguments.?*/

    function myType(args){
        return(typeof args);
    }



/*Q3.Write a function that takes color in hex as a string - ‘#ffffff’ and return equivalent color in hex code ‘rgb(255, 255, 255)’?*/

    function colorInHexCode(toRGB) {
        var rgbColor = "rgb(";
        rgbColor += parseInt("0x"+toRGB[1]+toRGB[2]) + ", ";
        rgbColor += parseInt("0x"+toRGB[3]+toRGB[4]) + ", ";
        rgbColor += parseInt("0x"+toRGB[5]+toRGB[6]) + ")";
        return rgbColor;
    }

/*Q4.Write a function that takes color in rgb as a rgb - ‘rgb(255, 255, 255)’ and return equivalent color in hex code ‘#ffffff’?*/

function toRGB(colorInHexCode) {
        return
    }

