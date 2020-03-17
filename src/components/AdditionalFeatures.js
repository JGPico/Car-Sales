import React from 'react';
import AdditionalFeature from './AdditionalFeature';

const AdditionalFeatures = props => {

  // console.log("Additional features plural props ", props);

  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeatures.length ? (
        <ol type="1">
          {props.additionalFeatures.map(item => (
            <AdditionalFeature 
            key={item.id} 
            feature={item}
            addItem={props.addItem}
            addFeature={props.addFeature} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

export default AdditionalFeatures;
