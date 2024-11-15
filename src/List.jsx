import React from 'react'
import propTypes from 'prop-types'
const List = (props) => {
const category = props.category;
   const itemsLIst = props.items;

        //faangs.sort((a,b) => a.name.localeCompare(b.name))  this is alphabetical
        //faangs.sort((a,b) => b.name.localeCompare(a.name)) //reverse alphabetical
        //faangs.sort((a,b) => a.lang - b.lang) numeric
       // faangs.sort((a,b) => b.lang - a.lang) //reverse numeric

       
    const listItems = itemsLIst.map(item => <li key={item.id}>
                                           {item.name} : &nbsp; <b>{item.lang}</b></li>)
  return (
    <>
      <h3 className='list-category'>{category}</h3><ol className='list-items'>{listItems}</ol>
    </>

  )
}

List.propTypes = {
  category : propTypes.string,
  items : propTypes.arrayOf(propTypes.shape({id:propTypes.number,
                                              name: propTypes.string,
                                              lang : propTypes.string
  }))
}

List.defaultProps = {
  category : 'category',
  items : []
}

export default List