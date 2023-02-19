import './features.css'
import feature1 from '../assets/images/feature-1.png'
import feature2 from '../assets/images/feature-2.png'
import feature3 from '../assets/images/feature-3.png'
import feature4 from '../assets/images/feature-4.png'
const Features = () => {
  return (
    <div className='feature'>
        <div className="featurewrapper">
            <div className="text-col text-white">
                <h2>Enjoy on your TV</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quaerat ducimus est quae ab officia laudantium.
                  </p>
              </div>
              <div className="imgcol">
                  <img src={feature1} alt="" />
              </div>
      </div>
      <div className="featurewrapper">
         <div className="imgcol">
                  <img src={feature2} alt="" />
              </div>
            <div className="text-col text-white">
                <h2>Enjoy on your TV</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quaerat ducimus est quae ab officia laudantium.
                  </p>
              </div>
             
      </div>
       <div className="featurewrapper">
            <div className="text-col text-white">
                <h2>Enjoy on your TV</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quaerat ducimus est quae ab officia laudantium.
                  </p>
              </div>
              <div className="imgcol">
                  <img src={feature3} alt="" />
              </div>
      </div>
      <div className="featurewrapper">
         <div className="imgcol">
                  <img src={feature4} alt="" />
              </div>
            <div className="text-col text-white">
                <h2>Enjoy on your TV</h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quaerat ducimus est quae ab officia laudantium.
                  </p>
              </div>
             
      </div>
    </div>
  )
}

export default Features