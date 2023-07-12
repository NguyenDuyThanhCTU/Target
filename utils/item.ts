 
import {TfiFacebook} from 'react-icons/tfi'
import {FcGoogle} from 'react-icons/fc'
import { IconType } from 'react-icons';



export const iconMapping: { [key: string]: IconType } = {
    TfiFacebook: TfiFacebook,
    FcGoogle: FcGoogle,
  };

// <-- Login -->
export const LoginButtonItems = [
    {
        name: "Với Facebook",
        icon: "TfiFacebook"
    },
    {
        name: "Với Google",
        icon: "FcGoogle"
    },
]