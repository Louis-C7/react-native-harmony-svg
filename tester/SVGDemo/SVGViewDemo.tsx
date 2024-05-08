import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import Svg, {
  Path,
  Rect,
  Image,
  Circle,
  Polygon,
  LinearGradient,
  Stop,
  Defs,
  RNSVGSvgIOS,
  Line,
} from 'react-native-svg';

const SVGDemo = () => {
  return (
    <View>
      <Svg width={100} height={100} strokeWidth="10">
        <Rect
          x="50"
          y="50"
          width="180"
          height="170"
          stroke="red"
          
          fill="yellow"
          strokeDashoffset={10}
          strokeLinecap="round"
          strokeLinejoin="bevel"
          rx="20"
          ry="40"
        />
        <Circle
          cx="50"
          cy="50"
          r="45"
          stroke="blue"
          strokeWidth="2.5"
          fill="green"
        />
        <Line
          x1="30"
          y1="40"
          x2="200"
          y2="180"
          stroke="grey"
        //   strokeWidth={10}
          strokeLinecap="round"
          strokeLinejoin="bevel"
        />
        <Line
          x1="30"
          y1="70"
          x2="300"
          y2="70"
          stroke="blue"
          strokeDasharray="20 10"
        />
        <Line
          x1="30"
          y1="110"
          x2="300"
          y2="110"
          stroke="blue"
          strokeDasharray="20 10 30"
        />
      </Svg>
    </View>
  );
};

export default SVGDemo;