import model1 from './model1.jpg'
import model2 from './model2.jpg'
import model3 from './model3.jpg'
import model4 from './model4.jpg'
import model5 from './model5.jpg'
import model6 from './model6.jpg'
import model7 from './model7.jpg'
import model8 from './model8.jpg'
import model9 from './model9.jpg'



function Models() {
    return (
        <div className='conteinerPhoto'>
            
            <div className='conteinerPhotoOne'>
                <img src={model1} alt="photo1" className='photo' />
                <img src={model2} alt="photo2" className='photo' />
                <img src={model3} alt="photo3" className='photo' />
            </div>

            <div className='conteinerPhotoOne'> 
                <img src={model4} alt="photo4" className='photo' />
                <img src={model5} alt="photo5" className='photo' />
                <img src={model6} alt="photo6" className='photo' />
            </div>

            <div className='conteinerPhotoOne'>
                <img src={model7} alt="photo7" className='photo' />
                <img src={model8} alt="photo8" className='photo' />
                <img src={model9} alt="photo9" className='photo' />

            </div>
        </div>
    )
}

export default Models;