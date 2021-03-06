import { HashLoader } from 'react-spinners';

export const OpacityLoader = ({ color = "#23263B" }) => {
    return (
        <div className='withOpacity'>
            <HashLoader color={color} loading={true} size={70} />
        </div>
    )
}