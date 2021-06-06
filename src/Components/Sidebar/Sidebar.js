import { Box } from '@chakra-ui/layout';
import React, { useState } from 'react';
import Main from '../Main/Main';
import './Sidebar.css';
import { product } from '../../Database/product';
import { Button } from '@chakra-ui/button';
import { Checkbox } from '@chakra-ui/checkbox';

const Sidebar = () => {
  const [data, setData] = useState(product);
  const [selectedSize, setSelectedSize] = useState([]);

  const sortHighToLow = () => {
    setData([...data].sort((a, b) => b.price - a.price));
  };

  const sortLowtoHigh = () => {
    setData([...data].sort((a, b) => a.price - b.price));
  };

  const sizeFilter = (e) => {
    setSelectedSize([...selectedSize, e.target.value]);

    if (e.target.checked) {
      setData([...data].filter((a) => a.size.includes(e.target.value)));
    } else {
      let index = selectedSize?.indexOf(e.target?.value);
      if (index !== -1) {
        selectedSize.splice(index, 1);
        setSelectedSize(selectedSize);
      }
      const [filteredProducts] = selectedSize.map((size) =>
        product.filter((a) => a.size.includes(size))
      );
      setData(filteredProducts?.length ? filteredProducts : product);
    }
  };

  const clearFilter = () => {
    setData(product);
  };
  return (
    <div className='container'>
      <div className='left-half'>
        <Box display='flex' flexDirection='column' mt={20}>
          <Button mb={4} color='black' onClick={sortHighToLow}>
            High to Low
          </Button>
          <Button mb={4} color='black' onClick={sortLowtoHigh}>
            Low to High
          </Button>
        </Box>
        <Box display='flex' flexDirection='column' my={6} color='black'>
          <Checkbox value='S' onChange={(e) => sizeFilter(e)}>
            Small
          </Checkbox>
          <Checkbox value='M' onChange={(e) => sizeFilter(e)}>
            Medium
          </Checkbox>
          <Checkbox value='L' onChange={(e) => sizeFilter(e)}>
            Large
          </Checkbox>
          <Checkbox value='XL' onChange={(e) => sizeFilter(e)}>
            Xtra Large
          </Checkbox>
        </Box>

        <Button mb={4} color='black' onClick={clearFilter}>
          Clear Filter
        </Button>
      </div>
      <div className='right-half'>
        <Main data={data} />
      </div>
    </div>
  );
};

export default Sidebar;
