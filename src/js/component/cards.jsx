import React from "react";
import PropTypes from "prop-types";

export const Card = (props) => {
    return (
            <div className="card mx-2 my-3" style={{width: '18rem'}}>
                <img src={props.imageURL} className="card-img-top img-thumbnail" alt="..." style={{width: '500px', height: '250px'}} />
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <p className="card-text">{props.description}</p>
                        <a href="#" className="btn btn-primary">{props.textButtom}</a>
                    </div>
            </div>
    );
};

Card.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    textButtom: PropTypes.string,
    imageURL: PropTypes.string,
    imageAlt: PropTypes.string
  }
  
   Card.defaultProps = {
    title: 'titulo defecto',
    description: 'descripcion defecto',
    textButtom: 'button defecto',
    imageURL: 'image url',
    imageAlt: 'image alt',
  } 
