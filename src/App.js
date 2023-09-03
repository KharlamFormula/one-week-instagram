import './App.css';
import Ava from './Ava.js';
import Circle from './Circle';
import Description from './Description';
import Models from './Models';
import Reders from './Reders';

function App() {

  function ButtonClick () {
    alert ('Clicked!')
  }

  function ButtonFollow () {
    alert('Follower!')
  }
  
  return (
<div>

    <div className='beginning'>
        <div className='contAva'>
            <Ava />
        </div>
       <div className='last'>
            <div className='buttonTwo'>
                <h2>modelschool_ua</h2>
                <button onClick={ButtonClick}>СЛЕДИТЬ</button>
                <button onClick={ButtonFollow}>ПОДПИСАТЬСЯ</button>
            </div>
           <Reders />
           <Description />
       </div>
    </div>
        <Circle />
        <Models />
</div>
    
  );
}

export default App;
