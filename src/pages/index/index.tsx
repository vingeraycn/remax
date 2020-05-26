import * as React from 'react';
import { View, Text, Image } from 'remax/one';
import './index.styl';

export default () => {
  return (
    <View className="app">
      <View className="header">
        <Image
          src="https://gw.alipayobjects.com/mdn/rms_b5fcc5/afts/img/A*OGyZSI087zkAAAAAAAAAAABkARQnAQ"
          className="styles.logo"
          alt="logo"
        />
        <View className="text">
          编辑 <Text className="path">src/pages/index/index.js</Text> 开始
        </View>
      </View>
    </View>
  );
};
