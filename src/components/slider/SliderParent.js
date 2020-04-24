import React from "react";
import Slider from "./Slider";
import "./slider.css";
import { useTranslation } from "react-i18next";
function SliderParent (){
    const { t, i18n } = useTranslation();
    // console.log(' slider',i18n.language  )
    console.log('data',(t('data',{ returnObjects: true })))
        let data = [
                  'Apple',
                  'Ball',
                  'Cat',
                  'Dog',
                  'Elephant',
                  'Fruits',
                  'Gorilla',
                  'Horse',
                  'Ink',
                  'Jug',
                  'Kite',
                  'Lemon',
                  'Orange',
                  'Paddy',
                  'Queen',
                  'Rose',
                  'Street',
                  'Tuesday',
                  'Umbrella',
                  'Vanilla',
                  'Wax',
                  'Xerox',
                  'Yarn',
                  'Zebra'
              ];
              return (
                  <div className={`parent ${i18n.language}`}  >
                      <Slider lang={i18n.language}>
                          {(t('data',{ returnObjects: true })).map(value => {
                              return (
                                  <div key={value} className='child'  >
                                      {value}
                                  </div>
                              );
                          })}
                      </Slider>

                      {/* <h1>ddddd {t('data',{ returnObjects: true })}</h1> */}
                  </div>
              );
          
}


export default (SliderParent);
