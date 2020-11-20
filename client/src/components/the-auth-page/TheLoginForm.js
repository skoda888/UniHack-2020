
import './TheLoginForm.scss';
import BaseMultipageCard from '../base/BaseMultipageCard';

const TheLoginForm = () => {
    return (
        <section id='the-login-form'>
          <h2 className='glb-h2'>Welcome back!</h2>  
          <BaseMultipageCard numberOfPages={1}/>
        </section>
    );
}

export default TheLoginForm;