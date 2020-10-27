import React from 'react';
const ListGroup = props => {
    
    const { items, textProperty, valueProperty, selectedItem, onItemSelect } = props;
    ListGroup.defaultProps = {
        textProperty: "name",
        valueProperty: "id"}
    return ( <section className="buttons">
        { items.map(item => <button
            key={item[valueProperty]}
            className= {item === selectedItem? "toggle-btn-active": "toggle-btn"}
            type="button"
            onClick={()=> onItemSelect(item)}

          >
            {item[textProperty]}
        </button>)
        }   
          </section>
    );
    
};
export default ListGroup;

