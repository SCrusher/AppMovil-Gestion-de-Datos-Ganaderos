import { View, Text, FlatList } from 'react-native';
import AreteItem from './AreteItem';
import React, { useEffect, useState } from 'react';

const AreteList = ({ AllAretes, deleteDiio, updateDiio}) => {

  const renderItem = ({ item }) => {
    return <AreteItem diio={item} deleteDiio={deleteDiio} updateDiio={updateDiio} />;
  };

  return (
    <FlatList
      data={AllAretes}
      renderItem={renderItem}
      keyExtractor={(item) => item}
    />
  );
};

export default AreteList;
