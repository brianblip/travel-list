import AccordionItem from "./AccordionItem";

import { useState } from "react";

export default function Accordion({ data }) {
  const [curOpen, setCurOpen] = useState(null);
  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItem
          curOpen={curOpen}
          onOpen={setCurOpen}
          title={el.title}
          text={el.text}
          num={i}
          key={el.title}
        >
          {el.text}
        </AccordionItem>
      ))}

      <AccordionItem
        curOpen={curOpen}
        onOpen={setCurOpen}
        title="Test 2"
        num={21}
        key="test2"
      >
        <p>asdsadasdasd</p>
        <ul>
          <li>asddsadasd</li>
          <li>asddsadasd</li>
          <li>asddsadasd</li>
        </ul>
      </AccordionItem>
    </div>
  );
}
