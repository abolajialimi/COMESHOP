import React from 'react';
import { Pagination } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
 
//Note how we set default values for our props
const Paginate = ({ pages, page, isAdmin = false, keyword = ''}) => {
  return pages > 1 && (
    <Pagination className="d-flex justify-content-center">
      { [...Array(pages).keys()].map(x => (
        // We use 'x + 1' b/c x starts at 0
        <LinkContainer 
          key={x + 1}
          to={!isAdmin ? keyword === '' ? `/page/${x + 1}` : `/search/${keyword}/page/${x + 1}` : `/admin/productlist/${x+1}`}
        >
          <Pagination.Item active={x + 1 === page}>{x + 1}</Pagination.Item>
        </LinkContainer>
      ))}
    </Pagination>
  )
}
 
export default Paginate;