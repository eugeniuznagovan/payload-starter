import { Field } from 'payload/types';
import LokalizeSelectComponent from '../components/LokalizeSelectComponent';

const LokalizeSelectField: Field = {
    name: 'lokalizeSelectField',
    type: 'text',
    admin: {
        components: {
            Field: LokalizeSelectComponent
        }
    }
}

export default LokalizeSelectField;
