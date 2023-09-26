import * as React from 'react';
import useField from 'payload/dist/admin/components/forms/useField';
import SelectInput from 'payload/dist/admin/components/forms/field-types/Select/Input';
import { useLocale } from 'payload/dist/admin/components/utilities/Locale';


const LokalizeSelectComponent: React.FC<{path: string}> = ({path}) => {
    const {value, setValue} = useField<string>({path});
    const [options, setOptions] = React.useState([]);
    const locale = useLocale();


    React.useEffect(() => {
        const fetchOptions = async () => {
            try {
                const response = await fetch('http://localhost:3000/lokalize');
                const data = await response.json();

                const options = Object.entries(data[locale]).map(([key, value]) => {
                    return {
                        label: key,
                        value
                    }
                });

                setOptions(options);

            } catch (e) {
                console.error('Failed to fetch the lokalize items');
            }
        };

        fetchOptions();
    }, []);

    return (
        <div>
            <label className='field-label'>
            Lokalise Select
    </label>

    <SelectInput name={path} path={path} options={options} value={value} onChange={(e) => setValue(e.value)}></SelectInput>
    </div>
)
};

export default LokalizeSelectComponent
