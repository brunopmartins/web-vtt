import { Typography } from "antd";
import React from "react";

const { Title, Paragraph } = Typography;

function SpellItem({ item }) {
  return (
    <>
      <Paragraph>
        <strong>Duration:</strong> {item.duration}
      </Paragraph>
    </>
  );
}

const CategoryComponents = {
  spells: SpellItem,
};

export function CompendiumItem({ category, item }) {
  if (!item || !category) return null;

  const CategoryComponent = CategoryComponents[category] ?? React.Fragment;
  return (
    <div>
      <Title>{item.name}</Title>
      <Paragraph>{item.desc}</Paragraph>

      <CategoryComponent item={item} />
    </div>
  );
}
