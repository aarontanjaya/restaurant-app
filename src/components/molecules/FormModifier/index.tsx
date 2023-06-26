import React from "react";
import { Button, Radio } from "@/components/atoms";
import { FormModifierProps } from "../interface";
import { Form, Space } from "antd";
import { Label } from "./Label";
import styles from "./styles.module.scss";

const FormModifier: React.FC<FormModifierProps> = ({ modifiers }) => {
  return (
    <div>
      {modifiers.map((item, idx) => (
        <div key={`${item.ID}-${item.name}`}>
          <h4>{item.name}</h4>
          {item.modifiers ? (
            <Form.Item
              key={`${item.ID}-${item.name}`}
              name={["modifiers", idx]}
              rules={[
                {
                  required:
                    item.selectionRangeMin && item.selectionRangeMin >= 1
                      ? true
                      : false,
                  message: "Please choose 1",
                },
              ]}
            >
              <Radio.Group
                key={`${item.ID}-${item.name}`}
                name={item.name}
                className={styles.radio__group}
              >
                {item.modifiers.map((modItem) => (
                  <div className={styles.radio__item}>
                    <Radio
                      className={styles.btn__radio}
                      key={`${modItem.ID}-${modItem.name}`}
                      value={modItem}
                    >
                      {modItem.name}
                    </Radio>
                    {modItem.priceV2 ? (
                      <p className={styles.price}>
                        {modItem.priceV2.amountDisplay}
                      </p>
                    ) : null}
                  </div>
                ))}
              </Radio.Group>
            </Form.Item>
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default FormModifier;
