import React from 'react';
import Lists from './Lists';
import { Link } from 'react-router-dom';

const AllLists = (props) => {
  // console.log(props);
  const { lists } = props;

  return (
    <div>
      {lists &&
        lists.map((list) => {
          // console.log(list);
          return (
            <Link to={`list/${list.id}`} key={list.id}>
              <Lists list={list} />
            </Link>
          );
        })}
    </div>
  );
};

export default AllLists;
