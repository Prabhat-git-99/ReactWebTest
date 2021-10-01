import { CardType } from "../Type/index";

import Electrical from '../images/sectors/electrical.svg';
import ElectricalDesign from '../images/sectors/electricaldesign.svg';
import Energy from '../images/sectors/energy.svg';
import Light from '../images/sectors/light.svg';
import Solar from '../images/sectors/solar.svg';

export const data: CardType[ ] = [

    {
        'id': 1,
        'name': 'Electrical Installation Design',
        'image': Electrical,
        'cardType': 'enggCard'
    },
    {
        'id': 2,
        'name': 'Electrical Inspection & Testing',
        'image': ElectricalDesign,
        'cardType': 'enggCard'    
    },
    {
        'id': 3,
        'name': 'Energy Performance Certificates',
        'image': Energy,
        'cardType': 'enggCard'
    },
    {
        'id': 4,
        'name': 'Lighting Design',
        'image': Light,
        'cardType': 'enggCard'
    },
    {
        'id': 5,
        'name': 'Photovoltaic Design & Installation',
        'image': Solar,
        'cardType': 'enggCard'
    }

];
