import React from 'react';

const Input = ({ name,label,value,onChange,error }) => {
    return ( <div className="form-group">
                <lable htmlFor={name}>{label}</lable>
                <input 
                autoFocus 
                name={name} 
                value={value} 
                onChange={onChange} 
                id={name} 
                type="text" 
                className="form-control" 
                type="text" />
                { error && <div className="alert alert-danger">{error}</div>}
              </div> );
}
 
export default Input;