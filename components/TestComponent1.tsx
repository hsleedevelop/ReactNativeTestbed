import React, {useEffect, useRef, useState} from "react";

import {Text, View} from "react-native";

const RenderCounter: React.FC = () => {
  const renderCounter = useRef(0);
  renderCounter.current += 1;
  console.log(`renderCounter:${renderCounter.current}`);

  return (
    <View>
      <Text>rc: {renderCounter.current}</Text>
    </View>
  );
};
const doMydata = (ready2Move = "") => {
  console.log("ready2Move", ready2Move);
};
const TestComponent1: React.FC = () => {
  const [xxx, setXXX] = useState("");

  useEffect(() => {
    setXXX("did effect");
    doMydata(xxx);
  }, [xxx]);

  return (
    <View>
      <RenderCounter />
      <Text>TestComponent1</Text>
    </View>
  );
};

export default TestComponent1;
