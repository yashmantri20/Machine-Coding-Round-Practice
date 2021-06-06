import { SimpleGrid } from '@chakra-ui/layout';
import React from 'react';
import Card from '../Card/Card';

const Main = ({ data }) => {
  return (
    <SimpleGrid columns={4} spacingX={16} spacingY={12} mt={20}>
      {data.map((a) => (
        <Card
          key={a.id}
          brand={a.brand}
          name={a.name}
          price={a.price}
          image={a.link}
        />
      ))}
    </SimpleGrid>
  );
};

export default Main;
